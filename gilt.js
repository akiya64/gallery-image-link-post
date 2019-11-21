function replaceGalleryImageHref( element, block, attributes ) {

	if( block.name === 'core/gallery' && attributes.linkTo === 'attachment' ){

        element.props.children[0].props.children[0].props.children.props.children[0].props['href'] = 'http://wocker.test';
	}

	return element;
}

wp.hooks.addFilter(
    'blocks.getSaveElement',
    'gallery-image-link-post/gilt',
	replaceGalleryImageHref
);
