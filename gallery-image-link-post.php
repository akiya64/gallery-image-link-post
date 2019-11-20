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

function gilt_guten_enqueue(){
	wp_enqueue_script(
		'gallery-image-link-post',
		plugins_url( 'gilt.js', __FILE__ ),
		array( 'wp-rich-text', 'wp-element', 'wp-editor', 'wp-compose', 'wp-data' ),
		filemtime( plugin_dir_path( __FILE__ ) . '/gilt.js' )
	);
}
add_action( 'enqueue_block_editor_assets', 'gilt_guten_enqueue' );
