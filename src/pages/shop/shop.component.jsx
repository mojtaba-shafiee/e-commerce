import React from 'react'
import { withRouter } from 'react-router-dom'

import shopData from './shop.data'

import CollectionPreview from '../../components/collection-preview/collection-preview'

class ShopPage extends React.Component {
    constructor() {
        super()

        this.state= {
            collections: shopData
        }
    }

    render() {
        return (
            <div className="shop-page">
                {
                    this.state.collections.map( ({ id, ...othersCollectionPreviews }) => (
                        <CollectionPreview key={id} { ...othersCollectionPreviews } />
                    ) )
                }
            </div>
        )
    }
}

export default withRouter(ShopPage)