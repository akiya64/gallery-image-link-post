function replaceGalleryImageHref( element, block, attributes ) {

	if( block.name === 'core/gallery'
		&& attributes.linkTo === 'attachment' ){

		// iterate type li className blocks-gallery-item
		for( item of element.props.children[0].props.children ){
			var dataLink = item.props.children.props.children[0].props.children.props['data-link'];
			var postUrl =dataLink.split('attachment')[0];

			item.props.children.props.children[0].props['href'] = postUrl;

		}
	}

	return element;
}

wp.hooks.addFilter(
    'blocks.getSaveElement',
    'gallery-image-link-post/gilp',
	replaceGalleryImageHref
);
