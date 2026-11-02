<?php
defined('ABSPATH') || exit;

add_action('after_setup_theme', function () {
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('responsive-embeds');
});

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('ecodom-global', get_theme_file_uri('assets/css/global.css'), [], wp_get_theme()->get('Version'));
});

add_action('after_setup_theme', function () {
    add_editor_style('assets/css/global.css');
});

// Блоки в .html-шаблонах не знают URL темы — подставляем его в плейсхолдер.
add_filter('render_block', function ($content) {
    return str_replace('{{theme_uri}}', untrailingslashit(get_theme_file_uri()), $content);
});
