function replaceGalleryImageHref( element, block, attributes ) {

	return replaceUl( element, block, attributes );

}

function replaceUl( element, block, attributes ){

	if( block.name === 'core/gallery'
		&& attributes.linkTo === 'attachment' ){

		for( item of element.props.children[0].props.children ){

			const imageId = item.props.children.props.children[0].props.children.props['data-id'];
			fetchParentUrl( imageId ).then( url => {
				item.props.children.props.children[0].props['href'] = url;
			} );

		}
	}

	return element;

}

async function fetchParentUrl( imageId ){
	const imageJson = await wp.apiFetch( { path: '/wp/v2/media/' + imageId } );
	const postJson = await wp.apiFetch( { path: '/wp/v2/posts/' + imageJson['post'] } );

	return postJson['link'];
}


wp.hooks.addFilter(
    'blocks.getSaveElement',
    'gallery-image-link-post/gilp',
	replaceGalleryImageHref
);
