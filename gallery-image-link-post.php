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

function gilt_test( $content, $block ){
	if( $block['blockName'] === 'core/gallery' ){
		var_dump( $block );
		return $block;
	}
	return $block;
}
add_filter( 'render_block', 'gilt_test', 10, 2 );

