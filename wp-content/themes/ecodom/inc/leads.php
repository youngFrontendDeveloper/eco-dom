<?php
/**
 * Заявки из калькулятора: тип записей «Заявки» + AJAX-обработчик формы.
 * Каждая заявка сохраняется в админке и отправляется на почту (admin_email,
 * фильтр ecodom_lead_recipient позволяет сменить адрес).
 */

defined('ABSPATH') || exit;

add_action('init', function () {
    register_post_type('lead', [
        'labels' => [
            'name'          => 'Заявки',
            'singular_name' => 'Заявка',
            'menu_name'     => 'Заявки',
            'all_items'     => 'Все заявки',
            'edit_item'     => 'Заявка',
            'not_found'     => 'Заявок пока нет',
        ],
        'public'          => false,
        'show_ui'         => true,
        'show_in_menu'    => true,
        'menu_icon'       => 'dashicons-email-alt',
        'menu_position'   => 6,
        'supports'        => ['title', 'editor'],
        'capability_type' => 'post',
        'capabilities'    => ['create_posts' => 'do_not_allow'], // создаются только формой
        'map_meta_cap'    => true,
    ]);
});

add_action('wp_ajax_nopriv_ecodom_lead', 'ecodom_handle_lead');
add_action('wp_ajax_ecodom_lead', 'ecodom_handle_lead');

function ecodom_handle_lead(): void
{
    if (!isset($_POST['nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['nonce'])), 'ecodom_lead')) {
        wp_send_json_error(['message' => 'Сессия устарела. Обновите страницу и попробуйте ещё раз.'], 403);
    }

    // honeypot: боты заполняют скрытое поле
    if (!empty($_POST['website'])) {
        wp_send_json_success(['message' => 'ok']);
    }

    $name = sanitize_text_field(wp_unslash($_POST['name'] ?? ''));
    $phone = sanitize_text_field(wp_unslash($_POST['phone'] ?? ''));
    $email = sanitize_email(wp_unslash($_POST['email'] ?? ''));
    $messenger = sanitize_text_field(wp_unslash($_POST['messenger'] ?? ''));
    $consent = isset($_POST['consent']) && is_string($_POST['consent'])
        ? sanitize_text_field(wp_unslash($_POST['consent']))
        : '';

    if ('' === $name || strlen(preg_replace('/\D/', '', $phone)) < 10) {
        wp_send_json_error(['message' => 'Укажите имя и телефон.'], 422);
    }
    if ('1' !== $consent) {
        wp_send_json_error(['message' => 'Подтвердите согласие на обработку персональных данных.'], 422);
    }

    // ответы калькулятора: answers[шаг][] = вариант, questions[шаг] = текст вопроса
    $lines = [];
    $answers = isset($_POST['answers']) && is_array($_POST['answers']) ? wp_unslash($_POST['answers']) : [];
    $questions = isset($_POST['questions']) && is_array($_POST['questions']) ? wp_unslash($_POST['questions']) : [];
    foreach ($answers as $step => $values) {
        $values = array_filter(array_map('sanitize_text_field', (array) $values), 'strlen');
        if ($values) {
            $question = sanitize_text_field($questions[$step] ?? '') ?: 'Шаг ' . ((int) $step + 1);
            $lines[] = $question . ': ' . implode(', ', $values);
        }
    }

    $contacts = array_filter([
        'Имя: ' . $name,
        'Телефон: ' . $phone,
        'Согласие на обработку персональных данных: да',
        $email ? 'E-mail: ' . $email : '',
        $messenger ? 'Куда выслать расчёт: ' . $messenger : '',
    ]);
    $body = implode("\n", [...$contacts, '', '— Ответы калькулятора —', ...$lines]);

    $post_id = wp_insert_post([
        'post_type'    => 'lead',
        'post_status'  => 'publish',
        'post_title'   => sprintf('%s, %s', $name, $phone),
        'post_content' => $body,
    ]);

    $to = apply_filters('ecodom_lead_recipient', get_option('admin_email'));
    wp_mail(
        $to,
        'Новая заявка с калькулятора: ' . $name,
        $body . "\n\n" . ($post_id && !is_wp_error($post_id) ? admin_url("post.php?post=$post_id&action=edit") : ''),
        $email ? ['Reply-To: ' . $email] : []
    );

    wp_send_json_success(['message' => 'Спасибо! Мы получили заявку и свяжемся с вами в ближайшее время.']);
}
