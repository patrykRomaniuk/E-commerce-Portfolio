import React from 'react';
import '../css/AccountPage.css';
import Spinner from '../Spinner';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import { Redirect } from 'react-router-dom';

function AccountPage({ 
    auth: { 
    isAuthenticated,
    loading,
    user
    }
}) {
    if(isAuthenticated && user === null){
        alert('User is not loaded');
        return <Redirect to="/man"/>
    } else if (!isAuthenticated && user === null){
        alert('You are not registered');
        return <Redirect to="/man"/>
    }
    return loading && user !== null ? (<Spinner/>) : (
        <div>
            <Navbar/>
            <div className="account-items-wrapper">
            <div className="account-item">
                <header>
                    <div>
                        <h1>Name: </h1>
                        <p>{user.name}</p>
                    </div>
                    <div>
                        <h1>Last Name: </h1>
                        <p>{user.last_name}</p>
                    </div>
                </header>
                <section>
                    <div className="account-img-wrapper">
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="account-section-wrapper">
                        <h1>Username: </h1>
                        <p>{user.username}</p>
                        <h1>Email: </h1>
                        <p>{user.email}</p>
                    </div>
                </section>
                <footer>
                    <h3>Change Email</h3>
                    <h3>Change Password</h3>
                </footer>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(AccountPage);