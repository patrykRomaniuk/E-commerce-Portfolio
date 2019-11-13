import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addHeart } from '../actions/auth';
import Navbar from './Navbar';
import Footer from './Footer';
import '../css/Items.css'

function Items({ addHeart,minPrice,maxPrice,items,url,genderName,auth }) {
    const [heartArray,setHeartArray] = useState([])
    let [changePrice,setChangePrice] = useState(maxPrice);
    let [actualFilter,setActutalFilter] = useState([...items]);

    const onRangeInputChange = e => {
        let actualFilterValue = e.target.value; 
        setChangePrice(actualFilterValue);
        let filteringPrice = items.filter(item => actualFilterValue >= item.priceNum);
        setActutalFilter(filteringPrice);
    }

    const loopThroughItemsProps = actualFilter.map((item,index) => {
        return(
            <div className="item-wrapper" key={index}>
                <div className="item" style={{
                        backgroundImage: `url('${item.img}')`,
                        minWidth: '20vw',
                        height: '25vh'
                }}>

                </div>
                <div className="info-wrapper">
                    <div className="info">
                        <span className="item-name">{item.name}</span>
                        <span className="item-price">{item.price}</span>
                    </div>
                    <div className="nutrition-icons">
                        <i className={ item.isHeart ? "fas fa-heart heart-icon heart-added" : "far fa-heart heart-icon"}
                        style={{ color: item.isHeart ? "red" : '' }}
                         onClick={() => {
                             if(auth.isAuthenticated){
                                item.isHeart = !item.isHeart;
                                setHeartArray({heart: item.isHeart})
                                addHeart(
                                    item.img,
                                    item.priceNum,
                                    item.priceNum,
                                    item.name,
                                    genderName,
                                    url,
                                    item.itemUrl
                               );
                             } else {
                                 alert("You are not registered")
                             }          
                         }}></i>
                            <Link to={`/${genderName}/${url}/${item.itemUrl}`}>
                                <i className="fas fa-shopping-cart shopping-cart"></i>
                            </Link>

                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="main-wrapper"> 
            <Navbar/>
            <div className="filter-items-wrapper">
                <div className="filter-wrapper">
                        <div className="filter-price">
                            <div className="range">
                                 <input type="range" 
                                 value={changePrice}
                                 onChange={(e) => onRangeInputChange(e)} 
                                 min={minPrice} 
                                 max={maxPrice}/>
                            </div>
                            <div className="range-info">
                                <div>
                                    <h3>Min Price:</h3>
                                    <p className="min-price">{minPrice}{' '}$</p>
                                </div>
                                <div>
                                    <h3>Actual Price:</h3>
                                    <p className="range-output">{changePrice}{' '}$</p>
                                </div>
                                <div>
                                    <h3>Max Price:</h3>
                                    <p className="max-price">{maxPrice}{' '}$</p>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="items-wrapper">
                    {loopThroughItemsProps}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { addHeart })(Items);