import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import '../css/SignInPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { registerUser } from '../actions/auth';

function SignInPage({ registerUser,auth: { isAuthenticated } }) {
    if(isAuthenticated){
        return <Redirect to="/shop-page"/>
    }
    const [nameInput,setNameInput] = useState('');
    const [lastNameInput,setLastNameInput] = useState('');
    const [userName,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [userNameValue,setUserNameValue] = useState('');
    const [isRegistered,setIsRegistered] = useState(false);

    const clearInputs = () => {
            setNameInput('');
            setLastNameInput('');
            setUserName('');
            setEmail('');
            setPassword('');
    }
    return (
        <div className="sign-in-page-all-wrapper">
                <Navbar isRegistered={isRegistered}/>
                <section 
                className="register-showUp"
                style={{
                    display: isRegistered ? 'flex' : 'none'
                }}>
                    <h1>Good Job {name} ({userNameValue})</h1>
                    <span>You are Registered</span>
                </section>
                    <section 
                    className="main-section-sign-in"
                    style={{
                        display: !isRegistered ? 'flex' : 'none'
                    }}>
                            <div className="info">
                                <span>Sign In</span>
                            </div>
                            <section className="inputs-wrapper">
                                    <input type="text" 
                                    value={nameInput}
                                    placeholder="Name" 
                                    onChange={ e => {
                                        setNameInput(e.target.value)
                                    }}
                                    />
                                    <input type="text" 
                                    value={lastNameInput}
                                    placeholder="Last Name"
                                    onChange={(e) =>  {
                                        setLastNameInput(e.target.value)
                                    }}
                                    />
                                    <input type="text" 
                                    value={userName}
                                    placeholder="Username"
                                    onChange={(e) => {
                                        setUserName(e.target.value)
                                    }}
                                    />
                                    <input type="email" 
                                    value={email}
                                    placeholder="E-mail"
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                    />
                                    <input type="password" 
                                    value={password}
                                    placeholder="Password"
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                    />
                                    <div className="button-wrapper" 
                                    onClick={() => {
                                        if(
                                        nameInput === '' || 
                                        lastNameInput === '' || 
                                        userName === '' ||
                                        email === '' ||
                                        password === '' 
                                    ){
                                       clearInputs();
                                        alert("Field is Empty") 
                                        return;
                                    }else{
                                        setIsRegistered(!isRegistered)
                                        setUserNameValue(userName)
                                        setName(nameInput)
                                        registerUser( nameInput,lastNameInput,userName,email,password ) 
                                        clearInputs();
                                        return;
                                    }
                                    }}>
                                        <div>
                                            <span>Sign Up</span>
                                        </div>
                                    </div>
                            </section>
                    </section>
                <Footer/>
            </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps,{ registerUser })(SignInPage);