<?php
/**
 * Plugin Name:     Gallery Image Link Post
 * Plugin URI:      PLUGIN SITE HERE
 * Description:     ギャラリーのリンクに投稿へのリンクを追加します
 * Author:          Akiya Kasumi
 * Author URI:      YOUR SITE HERE
 * Text Domain:     gallery-image-link-post
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Gallery_Image_Link_Post
 */

function sample_admin_bar( $wp_admin_bar ){
	$wp_admin_bar->add_menu( array(
			'id' =>"sample-menu",
			'title' => "お試し"
		)
	);
}

add_action('admin_bar_menu', 'sample_admin_bar', 9999);
