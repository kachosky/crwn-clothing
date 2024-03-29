import  React from 'react'
import { connect } from 'react-redux'
import { addItem } from "../../redux/cart/cardActions";

import CustomButton from '../custom-button/CustomButton'

import './collectionItem.scss'

const CollectionItem = ({ item, addItem  }) => {
    const { name, price, imageUrl } = item;
    return(
        <div className='collection-item'>
            <div className='image'
                 style={{
                     backgroundImage: `url(${imageUrl})`
                 }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{`$ ${price}`}</span>
            </div>
            <CustomButton onClick ={() => addItem(item)} inverted > ADD TO CART </CustomButton>
        </div>
    )
}

const mapDispatchProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})


export default connect(null, mapDispatchProps)(CollectionItem)