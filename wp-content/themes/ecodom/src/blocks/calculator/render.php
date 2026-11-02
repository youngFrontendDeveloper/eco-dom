<?php
/**
 * Блок ecodom/calculator — квиз из шагов + форма заявки.
 * Переключением шагов и отправкой управляет view.js.
 *
 * @var array $attributes
 */
$steps = is_array($attributes['steps']) ? array_values($attributes['steps']) : [];
$total = count($steps);
$uid = 'calc-' . wp_unique_id();
$pad = static fn(int $n): string => str_pad((string) $n, 2, '0', STR_PAD_LEFT);

$check = '<svg class="calc__check-icon" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M7 12.5l3.2 3.2L17 8.8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

// Фото первого шага по умолчанию (по порядку вариантов).
$default_image = static function (int $step, int $option): string {
    return 0 === $step && $option < 6
        ? get_theme_file_uri('assets/img/calculator/house-' . ($option + 1) . '.webp')
        : '';
};

$messengers = [
    'Telegram' => '<path d="M21 4L3 11.2l5.4 2 2 6.3 3.1-3.9 4.9 3.6L21 4z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
    'Viber'    => '<path d="M6 5h12a2 2 0 012 2v7a2 2 0 01-2 2h-5l-4 3v-3H6a2 2 0 01-2-2V7a2 2 0 012-2z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M9.5 9.5c.5 2 2 3.5 4 4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    'What’s App' => '<path d="M12 4a8 8 0 00-6.9 12L4 20l4.1-1.1A8 8 0 1012 4z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M9.2 9.2c.3 2.2 2.3 4.3 4.6 4.6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
];
?>
<section <?= get_block_wrapper_attributes(['class' => 'eco-light calc', 'id' => 'calculator']) ?>>
    <div class="eco-light__stage calc__stage">
        <span class="eco-light__line"></span>
        <span class="eco-light__line"></span>
        <span class="eco-light__line"></span>
        <span class="eco-light__line"></span>

        <p class="calc__eyebrow"><?= esc_html($attributes['eyebrow']) ?></p>
        <h2 class="calc__heading"><?= esc_html($attributes['heading']) ?></h2>

        <form class="calc__panel" novalidate
            data-total="<?= (int) $total ?>"
            data-ajax="<?= esc_url(admin_url('admin-ajax.php')) ?>"
            data-nonce="<?= esc_attr(wp_create_nonce('ecodom_lead')) ?>">

            <?php foreach ($steps as $si => $step) :
                $layout = $step['layout'] ?? 'tiles';
                $multiple = !empty($step['multiple']);
                $type = $multiple ? 'checkbox' : 'radio';
                ?>
                <fieldset class="calc__step calc__step--<?= esc_attr($layout) ?>" data-step="<?= (int) $si ?>"<?= 0 === $si ? '' : ' hidden' ?>>
                    <legend class="calc__question"><?= esc_html($step['question'] ?? '') ?></legend>
                    <input type="hidden" name="questions[<?= (int) $si ?>]" value="<?= esc_attr($step['question'] ?? '') ?>">
                    <div class="calc__options">
                        <?php foreach ((array) ($step['options'] ?? []) as $oi => $option) :
                            $label = $option['label'] ?? '';
                            $img = ecodom_media_url($option, $default_image((int) $si, (int) $oi));
                            ?>
                            <label class="calc__option">
                                <input class="calc__input" type="<?= esc_attr($type) ?>" name="answers[<?= (int) $si ?>][]" value="<?= esc_attr($label) ?>">
                                <?php if ('tiles' === $layout) : ?>
                                    <span class="calc__tile">
                                        <span class="calc__check"><?= $check // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
                                        <span class="calc__label"><?= esc_html($label) ?></span>
                                    </span>
                                <?php else : ?>
                                    <span class="calc__card">
                                        <span class="calc__img"<?= $img ? ' style="background-image:url(' . esc_url($img) . ')"' : '' ?>></span>
                                        <span class="calc__check"><?= $check // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
                                        <span class="calc__label"><?= esc_html($label) ?></span>
                                    </span>
                                <?php endif; ?>
                            </label>
                        <?php endforeach; ?>
                    </div>
                </fieldset>
            <?php endforeach; ?>

            <!-- финальный экран: форма заявки -->
            <div class="calc__step calc__step--final" data-step="final" hidden>
                <h3 class="calc__question"><?= esc_html($attributes['finalTitle']) ?></h3>
                <p class="calc__hint"><?= esc_html($attributes['finalHint']) ?></p>

                <div class="calc__messengers" role="radiogroup" aria-label="<?= esc_attr($attributes['finalHint']) ?>">
                    <?php foreach ($messengers as $name => $path) : ?>
                        <label class="calc__messenger">
                            <input class="calc__input" type="radio" name="messenger" value="<?= esc_attr($name) ?>">
                            <span class="calc__messenger-icon"><svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><?= $path // phpcs:ignore WordPress.Security.EscapeOutput ?></svg></span>
                            <span class="calc__messenger-name"><?= esc_html($name) ?></span>
                        </label>
                    <?php endforeach; ?>
                </div>

                <div class="calc__fields">
                    <label class="calc__field"><span>Ваше имя</span><input type="text" name="name" autocomplete="name" required></label>
                    <label class="calc__field"><span>Телефон</span><input type="tel" name="phone" autocomplete="tel" inputmode="tel" required></label>
                    <label class="calc__field"><span>Электронная почта (не обязательно)</span><input type="email" name="email" autocomplete="email"></label>
                    <input class="calc__trap" type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">
                </div>

                <button type="submit" class="calc__submit">
                    <img src="<?= esc_url(get_theme_file_uri('assets/img/arrow-right-dark.svg')) ?>" alt="" width="21" height="21">
                    <span><?= esc_html($attributes['submitText']) ?></span>
                </button>
                <p class="calc__consent"><?= esc_html($attributes['consent']) ?></p>
                <p class="calc__error" role="alert" hidden></p>
            </div>

            <!-- экран «спасибо» -->
            <div class="calc__step calc__step--done" data-step="done" hidden>
                <h3 class="calc__question"><?= esc_html__('Спасибо за заявку!', 'ecodom') ?></h3>
                <p class="calc__hint calc__done-text" aria-live="polite"></p>
            </div>

            <div class="calc__bar">
                <span class="calc__progress"><span class="calc__progress-fill" style="width:<?= $total ? round(100 / ($total ?: 1), 2) : 0 ?>%"></span></span>
                <span class="calc__counter"><b class="calc__current">01</b><i>/</i><span class="calc__total"><?= esc_html($pad($total)) ?></span></span>
                <button type="button" class="calc__back" hidden><?= esc_html__('Назад', 'ecodom') ?></button>
                <button type="button" class="calc__next" disabled>
                    <span><?= esc_html($attributes['nextText']) ?></span>
                    <img src="<?= esc_url(get_theme_file_uri('assets/img/arrow-right-dark.svg')) ?>" alt="" width="21" height="21">
                </button>
            </div>
        </form>
    </div>
</section>
