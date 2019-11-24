function replaceGalleryImageHref( element, block, attributes ) {
	if( block.name === 'core/gallery'
		&& attributes.linkTo === 'attachment'){

		return replaceList( element )

	} else {

		return element;

	}
}

// iterate type li className blocks-gallery-item
async function replaceList( element ){

	for( item of element.props.children[0].props.children ){

		var imageId =item.props.children.props.children[0].props.children.props['data-id'];
		item.props.children.props.children[0].props['href'] = fetchPostUrl( imageId );

	}

	return element;

}

function fetchPostUrl( imageId ){
	wp.apiFetch( { path: '/wp/v2/media/' + imageId } )
		.then( function ( media ){
			wp.apiFetch( { path: '/wp/v2/posts/' + media['post'] } )
				.then( function ( post ){
					console.log( post.link );
					return post.link;
				})
			});
}

wp.hooks.addFilter(
    'blocks.getSaveElement',
    'gallery-image-link-post/gilp',
	replaceGalleryImageHref
);
