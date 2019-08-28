import React from 'react';
import ShopItem from './ShopItem';
import { connect } from 'react-redux';

const ShopItemsWrapper = ({ shopItems,isAuthenticated }) => 
    shopItems.length > 0 &&
    shopItems.length !== null &&
    isAuthenticated &&
    shopItems.map(shopItem => (
        <ShopItem shopItem={shopItem} key={shopItem._id}/>
    ));

const mapStateToProps = state => ({
    shopItems: state.auth.user.items,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(ShopItemsWrapper);
