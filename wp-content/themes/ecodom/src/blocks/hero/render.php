<?php
/**
 * Блок ecodom/hero.
 *
 * @var array $attributes
 */
$bg = ecodom_media_url($attributes, get_theme_file_uri('assets/img/hero-bg.webp'));
?>
<section <?= get_block_wrapper_attributes(['class' => 'hero', 'style' => 'background-image:url(' . esc_url($bg) . ')']) ?>>
    <span class="hero__line"></span><span class="hero__line"></span><span class="hero__line"></span><span class="hero__line"></span>
    <div class="hero__inner">
        <?php if (!empty($attributes['eyebrow'])) : ?>
            <p class="hero__eyebrow"><?= esc_html($attributes['eyebrow']) ?></p>
        <?php endif; ?>
        <h1 class="hero__title"><?= wp_kses($attributes['title'], ['br' => []]) ?></h1>
        <p class="hero__subtitle"><?= esc_html($attributes['subtitle']) ?></p>
        <a class="btn btn--dark" href="<?= esc_url($attributes['btnUrl']) ?>">
            <img src="<?= esc_url(get_theme_file_uri('assets/img/arrow-right.svg')) ?>" alt="" width="21" height="21">
            <span><?= esc_html($attributes['btnText']) ?></span>
        </a>
    </div>
    <a class="scroll-badge" href="<?= esc_url($attributes['scrollUrl']) ?>" aria-label="<?= esc_attr__('Прокрутить вниз', 'ecodom') ?>">
        <svg class="scroll-badge__ring" viewBox="0 0 227 227" width="227" height="227" aria-hidden="true">
            <defs>
                <path id="scroll-badge-circle" d="M113.5 113.5m-100 0a100 100 0 1 1 200 0a100 100 0 1 1 -200 0" />
            </defs>
            <text><textPath href="#scroll-badge-circle" startOffset="0" textLength="626" lengthAdjust="spacing">«Эко Дом» Строительство каркасных домов • </textPath></text>
        </svg>
        <img class="scroll-badge__arrow" src="<?= esc_url(get_theme_file_uri('assets/img/scroll-arrow.svg')) ?>" alt="" width="7" height="78">
    </a>
</section>
