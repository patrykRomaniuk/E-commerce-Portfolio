import React from 'react';
import { removeHeart } from '../actions/auth';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const HeartItem = ({ removeHeart,heart }) => {
    return (
        <div className="single-heart">
                <div className="heart-name-price">
                    <h2 className="heart-name">{ heart.name }</h2>
                    <h3 className="heart-price">{ heart.price }$</h3>
                </div>
               <img src={ heart.image } alt=""/>
                    <div className="buy-now">
                       <p> 
                            <Link to={`/${heart.genderName}/${heart.url}/${heart.itemUrl}`}>
                                Check item
                            </Link>
                        </p>
                    </div>
               
                    <div className="delete-heart" onClick={()=>{
                        removeHeart(heart._id)
                    }}>
                        <i className="fas fa-times"></i>
                    </div>
            </div>
    )
}

export default connect(null, { removeHeart })(HeartItem);
