function replaceGalleryImageHref( element, block, attributes ) {

	return replaceUl( element, block, attributes ).then( result => {
		return result;
	} );

}

async function replaceUl( element, block, attributes ){
	console.log( attributes );
	if( block.name !== 'core/gallery'
		|| attributes.linkTo !== 'attachment' ){
			return element;
	}

	const imageId = element.props.children[0].props.children[0]['key'];
	const url = await fetchParentUrl( imageId );

	element.props.children[0].props.children[0].props.children.props.children[0].props['href'] = url + '/';

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
