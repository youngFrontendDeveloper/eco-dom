<?php
/**
 * Тема «ЭкоДом»: подключение модулей.
 */

defined('ABSPATH') || exit;

foreach (['setup', 'post-types', 'leads', 'blocks'] as $module) {
    require_once get_theme_file_path("inc/{$module}.php");
}
