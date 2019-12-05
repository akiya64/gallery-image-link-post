function replaceGalleryImageHref( element, block, attributes ) {

	if( block.name === 'core/gallery'
		&& attributes.linkTo === 'attachment'
	    && element.props.children.length > 0 ){

		// iterate type li className blocks-gallery-item
		for( item of element.props.children[0].props.children ){
			var dataLink = item.props.children.props.children[0].props.children.props['data-link'];
			var re = /(http.+?\/\/.+?\/[0-9]+?\/[0-9]+?\/.+?\/).*/i;
			var postUrl =dataLink.replace(re, '$1');

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
