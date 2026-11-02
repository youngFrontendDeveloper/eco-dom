<?php
/**
 * Тип записи «Проекты домов» и его поля (метабокс вместо ACF).
 */

defined('ABSPATH') || exit;

const ECODOM_PROJECT_FIELDS = [
    'area'   => ['label' => 'Площадь, м²', 'type' => 'number'],
    'floors' => ['label' => 'Этажей', 'type' => 'number'],
    'rooms'  => ['label' => 'Комнат', 'type' => 'number'],
    'size'   => ['label' => 'Размер (например, 12x12)', 'type' => 'text'],
    'price'  => ['label' => 'Стоимость работ, руб', 'type' => 'number'],
];

add_action('init', function () {
    register_post_type('project', [
        'labels' => [
            'name'          => 'Проекты домов',
            'singular_name' => 'Проект дома',
            'add_new_item'  => 'Добавить проект',
            'edit_item'     => 'Редактировать проект',
            'all_items'     => 'Все проекты',
            'menu_name'     => 'Проекты домов',
        ],
        'public'       => true,
        'has_archive'  => 'projects',
        'rewrite'      => ['slug' => 'projects'],
        'show_in_rest' => true,
        'menu_icon'    => 'dashicons-admin-home',
        'menu_position' => 5,
        'supports'     => ['title', 'editor', 'thumbnail', 'excerpt'],
    ]);

    foreach (ECODOM_PROJECT_FIELDS as $key => $field) {
        register_post_meta('project', "_project_$key", [
            'type'          => 'number' === $field['type'] ? 'number' : 'string',
            'single'        => true,
            'show_in_rest'  => true,
            'auth_callback' => fn() => current_user_can('edit_posts'),
        ]);
    }
});

add_action('add_meta_boxes', function () {
    add_meta_box('ecodom-project-fields', 'Характеристики проекта', 'ecodom_project_metabox', 'project', 'normal', 'high');
});

function ecodom_project_metabox(WP_Post $post): void
{
    wp_nonce_field('ecodom_project_fields', 'ecodom_project_nonce');
    echo '<table class="form-table" role="presentation">';
    foreach (ECODOM_PROJECT_FIELDS as $key => $field) {
        $value = get_post_meta($post->ID, "_project_$key", true);
        printf(
            '<tr><th><label for="project_%1$s">%2$s</label></th><td><input type="%3$s" id="project_%1$s" name="project_%1$s" value="%4$s" class="regular-text"%5$s></td></tr>',
            esc_attr($key),
            esc_html($field['label']),
            esc_attr($field['type']),
            esc_attr($value),
            'number' === $field['type'] ? ' min="0" step="any"' : ''
        );
    }
    echo '</table><p class="description">Фото проекта — «Изображение записи» справа. Оно показывается в карточке на главной.</p>';
}

add_action('save_post_project', function (int $post_id) {
    if (
        !isset($_POST['ecodom_project_nonce'])
        || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['ecodom_project_nonce'])), 'ecodom_project_fields')
        || (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
        || !current_user_can('edit_post', $post_id)
    ) {
        return;
    }

    foreach (ECODOM_PROJECT_FIELDS as $key => $field) {
        $raw = isset($_POST["project_$key"]) ? sanitize_text_field(wp_unslash($_POST["project_$key"])) : '';
        if ('' === $raw) {
            delete_post_meta($post_id, "_project_$key");
        } else {
            update_post_meta($post_id, "_project_$key", 'number' === $field['type'] ? (float) $raw : $raw);
        }
    }
});

// Один раз пересобираем правила ссылок, чтобы заработал /projects/ (повторить: поднять версию).
add_action('init', function () {
    if (get_option('ecodom_rewrite_version') !== '1') {
        flush_rewrite_rules(false);
        update_option('ecodom_rewrite_version', '1');
    }
}, 99);
