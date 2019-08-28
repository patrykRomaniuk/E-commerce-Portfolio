import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import '../css/ShopPage.css';
import { connect } from 'react-redux';
import ShopItemsWrapper from '../components/ShopItemsWrapper';
import { getSumPrices } from '../actions/allPrices';
import Spinner from '../Spinner';

function ShopPage({ getSumPrices,prices: { allPricesValue },auth: { isAuthenticated,user,loading } }){
    if(isAuthenticated && user === null){
        return <Redirect to="/man"/>
    } else if (!isAuthenticated && user === null){
        return <Redirect to="/man"/>
    }
    useEffect(() => {
        getSumPrices();
    },[]);
    return loading ? (<Spinner/>) : (
        <div className="Shop-wrapper">
            <Navbar/>
            <section className="main-section-shopPage">
                <div className="shop-items"
                style={{ 
                    display: 'flex'
                 }}>
                     <ShopItemsWrapper/>
                </div>
                <div className="price-calculator">
                    <div className="summary">
                        <p>Summary</p>
                    </div>
                    <div className="sum">
                       <p>Sum: </p>
                       <p>{ allPricesValue }$</p>
                    </div>
                    <div className="buttons-basket">
                        <div className="buy-btn" onClick={() => {
                            if(allPricesValue > 0){
                                alert("You've bought a product");
                            } else {
                                alert("You didn't choose anything");
                            }
                        }}>
                            <p>Buy Now <i className="fas fa-shopping-cart"></i></p>
                        </div>
                    </div>
                </div>
            </section>      
            <Footer/>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth,
    prices: state.prices
});

export default connect(mapStateToProps,{ getSumPrices })(ShopPage);