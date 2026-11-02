<?php
/**
 * Блок ecodom/houses — вкладки «Дома / Гаражи / Бани».
 *
 * @var array $attributes
 */
$tabs = is_array($attributes['tabs']) ? array_values($attributes['tabs']) : [];
$icons = ['house', 'garage', 'sauna'];
$uid = 'houses-' . wp_unique_id();
?>
<section <?= get_block_wrapper_attributes(['class' => 'eco-light houses', 'id' => 'houses']) ?>>
    <div class="eco-light__stage houses__stage">
        <div class="houses__tabs" role="tablist" aria-label="<?= esc_attr__('Что мы строим', 'ecodom') ?>">
            <?php foreach ($tabs as $i => $tab) :
                $active = 0 === $i;
                $icon = in_array($tab['icon'] ?? '', $icons, true) ? $tab['icon'] : 'house';
                ?>
                <button type="button" role="tab" class="houses__tab<?= $active ? ' is-active' : '' ?>"
                    id="<?= esc_attr("$uid-tab-$i") ?>" aria-controls="<?= esc_attr("$uid-panel-$i") ?>"
                    aria-selected="<?= $active ? 'true' : 'false' ?>" tabindex="<?= $active ? '0' : '-1' ?>">
                    <span class="houses__tab-icon">
                        <img src="<?= esc_url(get_theme_file_uri("assets/img/icons/tab-$icon.svg")) ?>" alt="" width="24" height="24">
                    </span>
                    <span class="houses__tab-label"><?= esc_html($tab['label'] ?? '') ?></span>
                </button>
            <?php endforeach; ?>
        </div>

        <?php foreach ($tabs as $i => $tab) :
            $active = 0 === $i;
            $image = ecodom_media_url($tab, get_theme_file_uri('assets/img/houses.webp'));
            $video = $tab['videoUrl'] ?? '';
            ?>
            <div class="houses__panel" role="tabpanel" id="<?= esc_attr("$uid-panel-$i") ?>"
                aria-labelledby="<?= esc_attr("$uid-tab-$i") ?>"<?= $active ? '' : ' hidden' ?>>
                <h2 class="houses__heading"><?= esc_html($tab['heading'] ?? '') ?></h2>
                <p class="houses__subheading"><?= esc_html($tab['subheading'] ?? '') ?></p>
                <p class="houses__text houses__text--1"><?= esc_html($tab['text1'] ?? '') ?></p>
                <p class="houses__text houses__text--2"><?= esc_html($tab['text2'] ?? '') ?></p>

                <?php if ($video) : ?>
                    <button type="button" class="houses__video" data-video="<?= esc_url($video) ?>" aria-label="<?= esc_attr__('Смотреть видео', 'ecodom') ?>">
                <?php else : ?>
                    <span class="houses__video">
                <?php endif; ?>
                    <img class="houses__video-img" src="<?= esc_url($image) ?>" alt="" loading="lazy">
                    <img class="houses__video-play" src="<?= esc_url(get_theme_file_uri('assets/img/play.svg')) ?>" alt="" width="83" height="91">
                <?php echo $video ? '</button>' : '</span>'; ?>
            </div>
        <?php endforeach; ?>
    </div>
</section>
