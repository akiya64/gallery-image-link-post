function addListBlockClassName( settings, name ) {
    if ( name !== 'core/list' ) {
        return settings;
    }

    return lodash.assign( {}, settings, {
        supports: lodash.assign( {}, settings.supports, {
            className: true
        } ),
    } );
}

wp.hooks.addFilter(
    'blocks.getSaveElement',
    'gallery-image-link-post/gilt',
    addListBlockClassName
);
