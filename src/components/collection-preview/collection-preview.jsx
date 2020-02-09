import React from 'react'

import CollectionItem from '../collection-item/collection-item.component'

import './collection-preview.styles.scss'

const CollectionPreview= ({ title, items, history }) => (
    <div className="collection-preview">
        <h1>{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter( ( item, idx ) => idx < 4).map(({ id, ...otherItmeProps }) => (
                    <CollectionItem key={id} {...otherItmeProps}/>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview