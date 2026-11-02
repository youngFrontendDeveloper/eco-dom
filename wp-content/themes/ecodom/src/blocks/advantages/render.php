<?php
/**
 * Блок ecodom/advantages.
 *
 * @var array $attributes
 */
$image = ecodom_media_url($attributes, get_theme_file_uri('assets/img/house-hand.webp'));
$items = is_array($attributes['items']) ? $attributes['items'] : [];
$icons = ['project', 'price', 'house', 'program', 'guarantee'];
?>
<section <?= get_block_wrapper_attributes(['class' => 'eco-light advantages', 'id' => 'why']) ?>>
    <div class="eco-light__stage advantages__stage">
        <span class="eco-light__line"></span>
        <span class="eco-light__line"></span>
        <span class="eco-light__line"></span>
        <span class="eco-light__line"></span>
        <h2 class="advantages__heading"><?= esc_html($attributes['heading']) ?></h2>
        <ul class="advantages__list">
            <?php foreach ($items as $item) :
                $icon = in_array($item['icon'] ?? '', $icons, true) ? $item['icon'] : 'guarantee';
                ?>
                <li class="advantages__item">
                    <span class="advantages__icon">
                        <img src="<?= esc_url(get_theme_file_uri("assets/img/icons/$icon.svg")) ?>" alt="">
                    </span>
                    <span class="advantages__text"><?= esc_html($item['text'] ?? '') ?></span>
                </li>
            <?php endforeach; ?>
        </ul>
        <img class="advantages__image" src="<?= esc_url($image) ?>" alt="" loading="lazy">
    </div>
</section>
