function replaceGalleryImageHref( element, block, attributes ) {
	if( block.name === 'core/gallery'
		&& attributes.linkTo === 'attachment'){

		// iterate type li className blocks-gallery-item
		for( item of element.props.children[0].props.children ){

			var imageId =item.props.children.props.children[0].props.children.props['data-id'];
			var postUrl;
			wp.apiFetch( { path: '/wp/v2/media/' + imageId } )
				.then( function ( media ){
					wp.apiFetch( { path: '/wp/v2/posts/' + media['post'] } )
						.then( function ( post ){
							postUrl = post.link;
							console.log( postUrl );
						})
					});

			item.props.children.props.children[0].props['href'] = postUrl;
		}

		return element;

	} else {

		return element;

	}

}

wp.hooks.addFilter(
    'blocks.getSaveElement',
    'gallery-image-link-post/gilp',
	replaceGalleryImageHref
);
