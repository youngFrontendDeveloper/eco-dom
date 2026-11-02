<?php
defined('ABSPATH') || exit;

/**
 * Регистрирует все блоки, собранные в build/blocks/*.
 */
add_action('init', function () {
    $dir = get_theme_file_path('build/blocks');
    foreach (glob($dir . '/*/block.json') ?: [] as $block_json) {
        register_block_type(dirname($block_json));
    }
});

add_filter('block_categories_all', function ($categories) {
    array_unshift($categories, ['slug' => 'ecodom', 'title' => 'ЭкоДом']);
    return $categories;
});

/**
 * URL изображения из атрибутов блока: сначала по ID вложения (не зависит от домена),
 * затем сохранённый imageUrl, затем запасной вариант.
 */
function ecodom_media_url(array $item, string $fallback = ''): string
{
    $id = (int) ($item['imageId'] ?? 0);
    $url = $id ? wp_get_attachment_image_url($id, 'full') : '';
    if (!$url) {
        $url = $item['imageUrl'] ?? '';
    }
    return $url ?: $fallback;
}
