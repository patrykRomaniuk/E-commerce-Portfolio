import React from 'react';
import { removeShopItem } from '../actions/auth';
import { connect } from 'react-redux';

const ShopItem = ({ shopItem,removeShopItem }) => {
    return (
        <div className="shop-item" >
        <div className="item-name">
            <p>{ shopItem.name }</p>
        </div>

        <div className="item-price">
            <p>{ shopItem.price }$</p>
        </div>

        <div className="item-size">
            <p>Item Size: </p>
            <p>{ shopItem.size }</p>
        </div>

        <div>
           <img src={shopItem.image} alt="" className="item-img"/>
        </div>

        <div className="delete-heart" onClick={() => {
            removeShopItem(shopItem._id);
        }}>
            <i className="fas fa-times"></i>
        </div>
    </div>
    )
}

export default connect(null, { removeShopItem })(ShopItem);
