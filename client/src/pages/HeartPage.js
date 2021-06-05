import React from 'react';
import { Redirect } from 'react-router-dom';
import '../css/HeartPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeartsWrapper from '../components/HeartsWrapper';
import { connect } from 'react-redux';

function HeartPage({ auth: { isAuthenticated,user } }) {
    if(isAuthenticated && user === null){
        alert('User is not loaded');
        return <Redirect to="/man"/>
    } else if (!isAuthenticated && user === null){
        alert('You are not registered');
        return <Redirect to="/man"/>
    }
    return (
        <section>
            <Navbar/>
            <header className="heart-info">
                <h1>Wish List</h1>
            </header>
            <section className="second-heart-section">
               
                <div className="hearts-wrapper">

                 <div>
                    <HeartsWrapper />
                 </div>

                </div>
                <div className="social-media">
                    <div>
                        <p>Checkout Our Social Medias</p>
                    </div>
                    <div>
                        <a href="https://twitter.com/?lang=en" target="_blank" className="social-href"><i className="fab fa-twitter social"></i></a>
                        <a href="https://www.facebook.com/" target="_blank" className="social-href"><i className="fab fa-facebook-f social"></i></a> 
                        <a href="https://www.youtube.com/" target="_blank" className="social-href"><i className="fab fa-youtube social"></i></a> 
                        <a href="https://www.instagram.com/?hl=en" target="_blank" className="social-href"><i className="fab fa-instagram social"></i></a> 
                    </div>
                </div>
            </section>
            <Footer/>
        </section>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(HeartPage);