<?php

// MAMP включает zlib.output_compression; вместе с буфером WordPress это даёт notice ob_end_flush() в конце страницы.
@ini_set('zlib.output_compression', 'Off');
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'eco_dom' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'eP-KbMTL?Nd)m6(iEXD{I&o!f2y8dW07 ^qTamC%1e)Vb/%^d6aU^v)5!Dh>/]]w' );
define( 'SECURE_AUTH_KEY',  '.7nmt|d+KNj8DdSA/&;ya(_BWnAY,tw_~v!-[Q]7JJ+~^=V#}C02)1nUWRD+pX?%' );
define( 'LOGGED_IN_KEY',    'y@A!Ys~rv:Dcu}pq,838:EROZXtLnN4zkez9b#3G1U>_ y&V/g:_w*O+,~_~*=`{' );
define( 'NONCE_KEY',        'SX<I1d_z)kd+*K{Mb7JF5Gjj]}:q? O%$M@HA(XjnKy E,&5[LiuuST-yn+Q1W{&' );
define( 'AUTH_SALT',        'WM)EB#YNiKe;B<b1qd~Wj&[,z<?H*U1^e12E`Ag: dY*t?7&$tM}y]+GLy9||!*x' );
define( 'SECURE_AUTH_SALT', '74b>Y]<?T@$U]S~E&~?yBE (w7G>6Kd8j W$sj4^dT0q^E%.o9V_7|o_i_!0fm&1' );
define( 'LOGGED_IN_SALT',   '9/!<6*vV`O];|J1B=*lR%A/&o|9UY<qEkJ0DE g9|l2 *.l+hCs$jhU(joE]WUfh' );
define( 'NONCE_SALT',       'k7Qa*N$,ZhKL|RO`EXDzlryCfQuAuuaC1E[Ep+JWtvdaag~[mej4Ux6x6wN.P4uE' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', true );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
