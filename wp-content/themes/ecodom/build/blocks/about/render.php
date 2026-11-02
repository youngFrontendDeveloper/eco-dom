<?php
/**
 * Блок ecodom/about (вкладки с разными раскладками).
 *
 * @var array $attributes
 */
$tabs = is_array($attributes['tabs']) ? array_values($attributes['tabs']) : [];
$allowed_link = ['a' => ['href' => [], 'target' => [], 'rel' => []], 'br' => [], 'strong' => [], 'em' => []];
$allowed_list = $allowed_link + ['li' => [], 'ul' => []];
$uid = 'about-' . wp_unique_id();

// Картинка по умолчанию зависит от раскладки.
$default_images = [
    'intro'  => 'about-video.webp',
    'person' => 'about-manager.webp',
    'list'   => 'about-why.webp',
];
?>
<section <?= get_block_wrapper_attributes(['class' => 'about', 'id' => 'about']) ?>>
    <div class="about__stage">
        <span class="about__line about__line--1"></span>
        <span class="about__line about__line--2"></span>
        <span class="about__line about__line--3"></span>
        <span class="about__stub about__stub--1"></span>
        <span class="about__stub about__stub--2"></span>
        <span class="about__stub about__stub--3"></span>
        <?php if (!empty($attributes['sideLabel'])) : ?>
            <span class="about__side-label"><?= esc_html($attributes['sideLabel']) ?></span>
        <?php endif; ?>

        <ul class="about__nav" role="tablist" aria-orientation="vertical">
            <?php foreach ($tabs as $i => $tab) : $active = 0 === $i; ?>
                <li class="about__nav-item<?= $active ? ' is-active' : '' ?>" role="presentation">
                    <button type="button" role="tab" id="<?= esc_attr("$uid-tab-$i") ?>"
                        aria-controls="<?= esc_attr("$uid-panel-$i") ?>"
                        aria-selected="<?= $active ? 'true' : 'false' ?>"
                        tabindex="<?= $active ? '0' : '-1' ?>"><?= esc_html($tab['label'] ?? '') ?></button>
                </li>
            <?php endforeach; ?>
        </ul>

        <?php foreach ($tabs as $i => $tab) :
            $active = 0 === $i;
            $layout = $tab['layout'] ?? 'intro';
            $image = ecodom_media_url($tab, get_theme_file_uri('assets/img/' . ($default_images[$layout] ?? $default_images['intro'])));
            $video = $tab['videoUrl'] ?? '';
            ?>
            <div class="about__panel about__panel--<?= esc_attr($layout) ?>" role="tabpanel" id="<?= esc_attr("$uid-panel-$i") ?>"
                aria-labelledby="<?= esc_attr("$uid-tab-$i") ?>"<?= $active ? '' : ' hidden' ?>>

                <?php if ('person' === $layout) : ?>
                    <img class="about__photo" src="<?= esc_url($image) ?>" alt="<?= esc_attr(wp_strip_all_tags($tab['heading'] ?? '')) ?>" loading="lazy">
                    <h2 class="about__heading"><?= esc_html($tab['heading'] ?? '') ?></h2>
                    <p class="about__text"><?= wp_kses($tab['text1'] ?? '', $allowed_link) ?></p>

                <?php elseif ('list' === $layout) : ?>
                    <img class="about__photo" src="<?= esc_url($image) ?>" alt="" loading="lazy">
                    <ul class="about__list"><?= wp_kses($tab['list'] ?? '', $allowed_list) ?></ul>

                <?php else : ?>
                    <h2 class="about__heading"><?= esc_html($tab['heading'] ?? '') ?></h2>
                    <p class="about__text about__text--1"><?= wp_kses($tab['text1'] ?? '', $allowed_link) ?></p>
                    <p class="about__text about__text--2"><?= wp_kses($tab['text2'] ?? '', $allowed_link) ?></p>

                    <?php if ($video) : ?>
                        <button type="button" class="about__video" data-video="<?= esc_url($video) ?>" aria-label="<?= esc_attr__('Смотреть видео', 'ecodom') ?>">
                    <?php else : ?>
                        <span class="about__video">
                    <?php endif; ?>
                        <img class="about__video-img" src="<?= esc_url($image) ?>" alt="" loading="lazy">
                        <img class="about__video-play" src="<?= esc_url(get_theme_file_uri('assets/img/play.svg')) ?>" alt="" width="83" height="91">
                    <?php echo $video ? '</button>' : '</span>'; ?>
                <?php endif; ?>
            </div>
        <?php endforeach; ?>
    </div>
</section>
