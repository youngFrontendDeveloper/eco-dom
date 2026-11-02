<?php
/**
 * Блок ecodom/projects — слайдер карточек проектов.
 *
 * @var array $attributes
 */
$count = max(3, min(20, (int) ($attributes['count'] ?? 9)));

$query = new WP_Query([
    'post_type'      => 'project',
    'posts_per_page' => $count,
    'no_found_rows'  => true,
]);

$cards = [];
foreach ($query->posts as $post) {
    $meta = fn(string $key) => get_post_meta($post->ID, "_project_$key", true);
    $cards[] = [
        'title'  => get_the_title($post),
        'url'    => get_permalink($post),
        'image'  => get_the_post_thumbnail_url($post, 'large') ?: '',
        'area'   => $meta('area'),
        'floors' => $meta('floors'),
        'rooms'  => $meta('rooms'),
        'size'   => $meta('size'),
        'price'  => $meta('price'),
    ];
}
wp_reset_postdata();

// Пока в админке нет проектов — показываем демо-карточки из макета.
if (!$cards) {
    $img = fn(string $name) => get_theme_file_uri("assets/img/projects/$name.webp");
    $cards = [
        ['title' => 'Дом «Эверест»', 'url' => '', 'image' => $img('everest'), 'area' => 180, 'floors' => 2, 'rooms' => 6, 'size' => '12x12', 'price' => 5000000],
        ['title' => '«Дом Уют»', 'url' => '', 'image' => $img('uyut'), 'area' => 114, 'floors' => 1, 'rooms' => 6, 'size' => '12x12', 'price' => 3146400],
        ['title' => 'Дом "Мечта"', 'url' => '', 'image' => $img('mechta'), 'area' => 180, 'floors' => 2, 'rooms' => 6, 'size' => '12x12', 'price' => 5000000],
        ['title' => 'Дом «Эверест»', 'url' => '', 'image' => $img('everest'), 'area' => 180, 'floors' => 2, 'rooms' => 6, 'size' => '12x12', 'price' => 5000000],
        ['title' => '«Дом Уют»', 'url' => '', 'image' => $img('uyut'), 'area' => 114, 'floors' => 1, 'rooms' => 6, 'size' => '12x12', 'price' => 3146400],
    ];
}

$btn_url = $attributes['btnUrl'] ?: (get_post_type_archive_link('project') ?: '#');
$icon = esc_url(get_theme_file_uri('assets/img/icons/meta.svg'));
$arrow_dark = esc_url(get_theme_file_uri('assets/img/arrow-right-dark.svg'));
$arrow_white = esc_url(get_theme_file_uri('assets/img/arrow-right.svg'));

/** Строка характеристики: иконка + подпись. */
$meta_row = static function (string $html) use ($icon): string {
    return '<li class="project-card__meta-item"><img src="' . $icon . '" alt="" width="16" height="16"><span>' . $html . '</span></li>';
};
?>
<section <?= get_block_wrapper_attributes(['class' => 'eco-light projects', 'id' => 'projects']) ?>>
    <div class="eco-light__stage projects__stage">
        <span class="eco-light__line"></span>
        <span class="eco-light__line"></span>
        <span class="eco-light__line"></span>
        <span class="eco-light__line"></span>

        <h2 class="projects__heading"><?= esc_html($attributes['heading']) ?></h2>

        <div class="projects__track" tabindex="0" role="region" aria-label="<?= esc_attr($attributes['heading']) ?>">
            <?php foreach ($cards as $card) : ?>
                <article class="project-card">
                    <div class="project-card__photo">
                        <?php if ($card['image']) : ?>
                            <img src="<?= esc_url($card['image']) ?>" alt="<?= esc_attr(wp_strip_all_tags($card['title'])) ?>" loading="lazy">
                        <?php endif; ?>
                    </div>
                    <div class="project-card__body">
                        <h3 class="project-card__title"><?= esc_html($card['title']) ?></h3>
                        <ul class="project-card__meta">
                            <?php
                            if ('' !== (string) $card['area']) {
                                echo $meta_row('Площадь: ' . esc_html(rtrim(rtrim(number_format((float) $card['area'], 1, '.', ''), '0'), '.')) . ' м<sup>2</sup>'); // phpcs:ignore WordPress.Security.EscapeOutput
                            }
                            if ('' !== (string) $card['floors']) {
                                echo $meta_row('Этажей: ' . (int) $card['floors']); // phpcs:ignore WordPress.Security.EscapeOutput
                            }
                            if ('' !== (string) $card['rooms']) {
                                echo $meta_row('Комнат: ' . (int) $card['rooms']); // phpcs:ignore WordPress.Security.EscapeOutput
                            }
                            if ('' !== (string) $card['size']) {
                                echo $meta_row('Размер: ' . esc_html($card['size'])); // phpcs:ignore WordPress.Security.EscapeOutput
                            }
                            ?>
                        </ul>
                        <div class="project-card__footer">
                            <div class="project-card__price">
                                <span class="project-card__price-label">Стоимость работ</span>
                                <?php if ('' !== (string) $card['price']) : ?>
                                    <span class="project-card__price-value"><?= esc_html(number_format((float) $card['price'], 0, '', ' ')) ?> руб</span>
                                <?php endif; ?>
                            </div>
                            <a class="project-card__link" href="<?= esc_url($card['url'] ?: '#') ?>" aria-label="<?= esc_attr(sprintf(__('Подробнее: %s', 'ecodom'), wp_strip_all_tags($card['title']))) ?>">
                                <img src="<?= $arrow_dark ?>" alt="" width="21" height="21">
                            </a>
                        </div>
                    </div>
                </article>
            <?php endforeach; ?>
        </div>

        <span class="projects__fade projects__fade--left" aria-hidden="true"></span>
        <span class="projects__fade projects__fade--right" aria-hidden="true"></span>

        <button type="button" class="projects__nav projects__nav--prev" aria-label="<?= esc_attr__('Назад', 'ecodom') ?>">
            <img src="<?= $arrow_white ?>" alt="" width="21" height="21">
        </button>
        <button type="button" class="projects__nav projects__nav--next" aria-label="<?= esc_attr__('Вперёд', 'ecodom') ?>">
            <img src="<?= $arrow_white ?>" alt="" width="21" height="21">
        </button>

        <a class="btn btn--dark projects__all" href="<?= esc_url($btn_url) ?>">
            <img src="<?= $arrow_white ?>" alt="" width="21" height="21">
            <span><?= esc_html($attributes['btnText']) ?></span>
        </a>
    </div>
</section>
