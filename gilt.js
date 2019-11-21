function replaceGalleryImageHref( element ) {

	if( element.props['className'].indexOf('wp-block-gallery') != -1
		&& element.props.children.length !=0 ){
		var ul = element.props.children[0].props;
		ul.children[0].props.children.props.children[0].props['href'] = 'http://wocker.test';

		console.dir( ul );
	}

	return element;
}

wp.hooks.addFilter(
    'blocks.getSaveElement',
    'gallery-image-link-post/gilt',
	replaceGalleryImageHref
);
