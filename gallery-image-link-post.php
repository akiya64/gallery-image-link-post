<?php
/**
 * Plugin Name:     Gallery Image Link Post
 * Plugin URI:      https://github.com/akiya64/gallery-image-link-post
 * Description:     ギャラリーのリンクに投稿へのリンクを追加します
 * Author:          Akiya Kasumi
 * Author URI:      https://github.com/akiya64/gallery-image-link-post
 * Text Domain:     gallery-image-link-post
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Gallery_Image_Link_Post
 */

function gilp_guten_enqueue(){
	wp_enqueue_script(
		'gallery-image-link-post',
		plugins_url( 'gilp.js', __FILE__ ),
		array( 'wp-element', 'wp-editor', 'wp-compose', 'wp-data', 'wp-api-fetch' ),
		filemtime( plugin_dir_path( __FILE__ ) . '/gilp.js' )
	);
}
add_action( 'enqueue_block_editor_assets', 'gilp_guten_enqueue' );
