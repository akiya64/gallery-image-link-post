function replaceGalleryImageHref( element, block, attributes ) {

    if( block.name === 'core/gallery'
        && attributes.linkTo === 'attachment'
        && element.props.children.length > 0 ){
			return replaceHref( element, block, attributes ).then( element => {
				console.log( element );
				return element;
			} );
	}

	return element;

}

async function replaceHref( element, block, attributes ){

	const liElement = element.props.children[0].props.children[0];
	const aProps = liElement.props.children.props.children[0].props;

	const imageId = liElement.key;

	const url = await fetchParentUrl( imageId );

	element.props.children[0].props.children[0].props.children.props.children[0].props['href'] = url;
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
