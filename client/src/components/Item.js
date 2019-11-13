import React,{ useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../css/Item.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { addShopItem,addHeart } from '../actions/auth';

function Item({ genderName,url,itemUrl,name,price,img,priceNum,addShopItem,addHeart,auth }) {
    const [size,setSize] = useState(null);
    return (
        <div className="main-wrapper">
            <Navbar/>
            <div className="item-section-wrapper">
                <div className="main-img" style={{
                    backgroundImage: `url('${img}')`,
                    width: '50%',
                    height: '90vh',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                </div>
                <div className="item-info-wrapper">
                    <div className="info-section">
                        <span className="item-name">{ name }</span>
                        <span className="item-price">{ price }</span>
                    </div>
                    <div className="size-section">
                            <div onClick={() => setSize(38.5)}
                             style={{border: size === 38.5 ? '1px solid #191919' : ' 1px solid rgb(224, 214, 214)'}}>
                                <span>EU 38.5</span>
                            </div>
                            <div onClick={() => setSize(39)}
                             style={{border: size === 39 ? '1px solid #191919' : ' 1px solid rgb(224, 214, 214)'}}>
                                <span>EU 39</span>
                            </div>
                            <div onClick={() => setSize(39.5)}
                             style={{border: size === 39.5 ? '1px solid #191919' : ' 1px solid rgb(224, 214, 214)'}}>
                                <span>EU 39.5</span>
                            </div>
                            <div onClick={() => setSize(40)}
                             style={{border: size === 40 ? '1px solid #191919' : ' 1px solid rgb(224, 214, 214)'}}>
                                <span>EU 40</span>
                            </div>
                            <div onClick={() => setSize(40.5)}
                             style={{border: size === 40.5 ? '1px solid #191919' : ' 1px solid rgb(224, 214, 214)'}}>
                                <span>EU 40.5</span>
                            </div>
                            <div onClick={() => setSize(41.5)}
                             style={{border: size === 41.5 ? '1px solid #191919' : ' 1px solid rgb(224, 214, 214)'}}>
                                <span>EU 41.5</span>
                            </div>
                            <div 
                            onClick={() => setSize(42)}
                            style={{border: size === 42 ? '1px solid #191919' : ' 1px solid rgb(224, 214, 214)'}}>
                                <span>EU 42</span>
                            </div>

                            <div onClick={() => setSize(43.5)}
                             style={{border: size === 43.5 ? '1px solid #191919' : ' 1px solid rgb(224, 214, 214)'}}
                             >
                                 <span>EU 43.5</span>
                            </div>

                            <div 
                            onClick={() => setSize(44)} 
                            style={{border: size === 44 ? '1px solid #191919' : ' 1px solid rgb(224, 214, 214)'}}>
                                <span>EU 44</span>
                            </div>
                    </div>
                    <div className="buttons-section">
                        <div className="basket-item-btn" onClick={() => {
                            if(size !== null){
                                if(auth.isAuthenticated){
                                    addShopItem(name,priceNum,priceNum,img,size);
                                } else {
                                    return alert("You are not registered");
                                }
                            }else{
                                return alert("Please Choose Size");
                            }
                        }}>
                            <Link to="/shop-page">
                                Buy Now
                            </Link>
                        </div>
                        <div className="favourite-item-btn"
                                 onClick={()=>{
                                    if(auth.isAuthenticated){
                                        addHeart(
                                            img,
                                            priceNum,
                                            priceNum,
                                            name,
                                            genderName,
                                            url,
                                            itemUrl
                                       );
                                    } else {
                                        alert("You are not registered");
                                    }                      
                                }}>
                            <Link to="/heart-page">
                                Add To Favourite <i className="far fa-heart"></i>
                            </Link>
                            </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { addShopItem,addHeart })(Item);