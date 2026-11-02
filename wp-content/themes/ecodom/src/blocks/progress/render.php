<?php
/**
 * Блок ecodom/progress — вкладки этапов строительства.
 * Десктоп: вертикальные вкладки слева; мобильные: горизонтальные (см. style.scss).
 *
 * @var array $attributes
 */
$tabs = is_array($attributes['tabs']) ? array_values($attributes['tabs']) : [];
$uid = 'progress-' . wp_unique_id();

// Фото по умолчанию — по позиции вкладки.
$defaults = ['foundation', 'assembly', 'engineering', 'finishing', 'review'];
$image_of = static function (int $i) use ($tabs, $defaults): string {
    return ecodom_media_url((array) ($tabs[$i] ?? []), get_theme_file_uri('assets/img/progress/' . ($defaults[$i] ?? $defaults[0]) . '.webp'));
};

$arrows = [
    'M 40 -6 C 40 -40 70 -64 120 -78',
    'M 50 -6 C 50 -40 20 -64 -30 -78',
    'M 100 36 C 100 66 130 88 175 100',
    'M 40 36 C 40 66 10 88 -35 100',
];
$count = count($tabs);
?>
<section <?= get_block_wrapper_attributes(['class' => 'eco-light progress', 'id' => 'works']) ?>>
    <div class="eco-light__stage progress__stage">
        <span class="eco-light__line"></span>
        <span class="eco-light__line"></span>
        <span class="eco-light__line"></span>
        <span class="eco-light__line"></span>
        <svg class="steps-defs" width="0" height="0" aria-hidden="true">
            <defs>
                <marker id="step-arrowhead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M 1 1 L 9 5 L 1 9" fill="none" stroke="#1f252d" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </marker>
            </defs>
        </svg>

        <h2 class="progress__heading"><?= esc_html($attributes['heading']) ?></h2>

        <div class="progress__tabs" role="tablist" aria-label="<?= esc_attr($attributes['heading']) ?>">
            <?php foreach ($tabs as $i => $tab) : $active = 0 === $i; ?>
                <button type="button" role="tab" class="progress__tab<?= $active ? ' is-active' : '' ?>"
                    id="<?= esc_attr("$uid-tab-$i") ?>" aria-controls="<?= esc_attr("$uid-panel-$i") ?>"
                    aria-selected="<?= $active ? 'true' : 'false' ?>" tabindex="<?= $active ? '0' : '-1' ?>"><?= esc_html($tab['label'] ?? '') ?></button>
            <?php endforeach; ?>
        </div>

        <?php foreach ($tabs as $i => $tab) :
            $active = 0 === $i;
            $video = $tab['videoUrl'] ?? '';
            $steps = array_slice(array_filter((array) ($tab['steps'] ?? []), 'strlen'), 0, 4);
            ?>
            <div class="progress__panel" role="tabpanel" id="<?= esc_attr("$uid-panel-$i") ?>"
                aria-labelledby="<?= esc_attr("$uid-tab-$i") ?>"<?= $active ? '' : ' hidden' ?>>
                <div class="progress__card">
                    <?php if ($count > 1) : ?>
                        <img class="progress__next" src="<?= esc_url($image_of(($i + 1) % $count)) ?>" alt="" loading="lazy">
                    <?php endif; ?>

                    <?php if ($video) : ?>
                        <button type="button" class="progress__media" data-video="<?= esc_url($video) ?>" aria-label="<?= esc_attr__('Смотреть видео', 'ecodom') ?>">
                    <?php else : ?>
                        <span class="progress__media">
                    <?php endif; ?>
                        <img class="progress__photo" src="<?= esc_url($image_of($i)) ?>" alt="<?= esc_attr($tab['label'] ?? '') ?>" loading="lazy">
                        <?php if ($video) : ?>
                            <img class="progress__play" src="<?= esc_url(get_theme_file_uri('assets/img/play.svg')) ?>" alt="" width="83" height="91">
                        <?php endif; ?>
                    <?php echo $video ? '</button>' : '</span>'; ?>
                </div>

                <?php foreach (array_values($steps) as $n => $label) : ?>
                    <span class="step step--<?= (int) $n + 1 ?>">
                        <span class="step__n">Этап <?= (int) $n + 1 ?></span>
                        <span class="step__label"><?= esc_html($label) ?></span>
                        <svg class="step__arrow" width="1" height="1" overflow="visible" aria-hidden="true">
                            <path d="<?= esc_attr($arrows[$n]) ?>" fill="none" stroke="#1f252d" stroke-width="1" stroke-linecap="round" marker-end="url(#step-arrowhead)"/>
                        </svg>
                    </span>
                <?php endforeach; ?>
            </div>
        <?php endforeach; ?>
    </div>
</section>
