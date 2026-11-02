<?php
/**
 * Блок ecodom/estimate — слайдер из четырёх слайдов.
 *
 * @var array $attributes
 */
$slides = is_array($attributes['slides']) ? array_values($attributes['slides']) : [];
$allowed = ['a' => ['href' => [], 'target' => [], 'rel' => []], 'br' => [], 'strong' => [], 'em' => []];

$default_images = [
    'estimate' => 'estimate.webp',
    'project'  => 'project-house.webp',
    'report'   => 'phone-screen.webp',
];
$type_labels = [
    'estimate' => __('Смета', 'ecodom'),
    'project'  => __('Проект дома', 'ecodom'),
    'schedule' => __('График работ', 'ecodom'),
    'report'   => __('Отчётность', 'ecodom'),
];

// Календарь со слайда «График работ» — числа из макета.
$weekdays = ['П', 'В', 'С', 'Ч', 'П', 'С', 'В'];
$days = [
    [27, 'muted'], [28, 'muted'], [29, 'muted'], [30, 'muted'], [1, ''], [2, ''], [3, ''],
    [4, ''], [5, ''], [6, ''], [7, ''], [8, ''], [9, 'sel'], [10, ''],
    [11, ''], [12, ''], [13, ''], [14, ''], [15, ''], [16, ''], [17, ''],
    [18, ''], [19, ''], [20, ''], [21, 'sel'], [22, ''], [23, ''], [24, ''],
    [25, ''], [26, ''], [27, ''], [28, ''], [29, 'sel'], [30, ''], [31, ''],
    [1, 'muted'], [2, 'muted'], [3, 'muted'], [4, 'muted'], [5, 'muted'], [6, 'muted'], [7, 'muted'],
];

$uid = 'estimate-' . wp_unique_id();
?>
<section <?= get_block_wrapper_attributes([
    'class'         => 'eco-light estimate',
    'id'            => 'estimate',
    'data-autoplay' => !empty($attributes['autoplay']) ? '1' : '0',
]) ?>>
    <div class="eco-light__stage estimate__stage">
        <span class="eco-light__line"></span>
        <span class="eco-light__line"></span>
        <span class="eco-light__line"></span>
        <span class="eco-light__line"></span>

        <?php foreach ($slides as $i => $slide) :
            $type = $slide['type'] ?? 'estimate';
            $active = 0 === $i;
            $image = ecodom_media_url($slide, (isset($default_images[$type]) ? get_theme_file_uri('assets/img/' . $default_images[$type]) : ''));
            ?>
            <div class="estimate__slide estimate__slide--<?= esc_attr($type) ?>" role="group"
                aria-roledescription="slide" aria-label="<?= esc_attr(($i + 1) . ' / ' . count($slides)) ?>"
                id="<?= esc_attr("$uid-$i") ?>"<?= $active ? '' : ' hidden' ?>>

                <?php if ('project' === $type) : ?>
                    <span class="estimate__panel"></span>
                <?php endif; ?>

                <div class="estimate__text">
                    <h2 class="estimate__heading"><?= esc_html($slide['heading'] ?? '') ?></h2>
                    <p class="estimate__paragraph"><?= wp_kses($slide['text'] ?? '', $allowed) ?></p>
                </div>

                <?php if ('estimate' === $type || 'project' === $type) : ?>
                    <img class="estimate__image" src="<?= esc_url($image) ?>" alt="" loading="lazy">

                <?php elseif ('schedule' === $type) : ?>
                    <div class="calendar" aria-hidden="true">
                        <div class="calendar__head">
                            <span class="calendar__month"><?= esc_html($slide['month'] ?? '') ?></span>
                            <span class="calendar__arrows">
                                <svg viewBox="0 0 24 24" width="24" height="24"><path d="M15 5l-7 7 7 7" fill="none" stroke="#5f5f5f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                <svg viewBox="0 0 24 24" width="24" height="24"><path d="M9 5l7 7-7 7" fill="none" stroke="#5f5f5f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </span>
                        </div>
                        <div class="calendar__grid">
                            <?php foreach ($weekdays as $d) : ?>
                                <span class="calendar__cell calendar__cell--weekday"><?= esc_html($d) ?></span>
                            <?php endforeach; ?>
                            <?php foreach ($days as [$day, $mod]) : ?>
                                <span class="calendar__cell<?= $mod ? ' calendar__cell--' . esc_attr($mod) : '' ?>"><?= (int) $day ?></span>
                            <?php endforeach; ?>
                        </div>
                        <?php foreach (array_slice((array) ($slide['chips'] ?? []), 0, 3) as $n => $chip) : ?>
                            <span class="calendar__chip calendar__chip--<?= (int) $n + 1 ?>"><?= esc_html($chip) ?></span>
                        <?php endforeach; ?>
                    </div>

                <?php elseif ('report' === $type) : ?>
                    <div class="phone">
                        <img class="phone__screen" src="<?= esc_url($image) ?>" alt="" loading="lazy">
                        <img class="phone__frame" src="<?= esc_url(get_theme_file_uri('assets/img/phone-frame.webp')) ?>" alt="" loading="lazy">
                    </div>
                <?php endif; ?>
            </div>
        <?php endforeach; ?>

        <div class="estimate__dots" role="group" aria-label="<?= esc_attr__('Слайды', 'ecodom') ?>">
            <?php foreach ($slides as $i => $slide) : $active = 0 === $i; ?>
                <button type="button" class="estimate__dot<?= $active ? ' is-active' : '' ?>"
                    aria-label="<?= esc_attr($type_labels[$slide['type'] ?? ''] ?? ($i + 1)) ?>"
                    aria-controls="<?= esc_attr("$uid-$i") ?>"
                    aria-current="<?= $active ? 'true' : 'false' ?>"></button>
            <?php endforeach; ?>
        </div>
    </div>
</section>
