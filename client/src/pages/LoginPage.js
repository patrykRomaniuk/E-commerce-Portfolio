import React,{useState} from 'react';
import '../css/LoginPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { loginUser } from '../actions/auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

function LoginPage({ loginUser,auth: { isAuthenticated } }) {
    if(isAuthenticated){
        return <Redirect to="/man"/>
    }
    const [passwordValue,setPasswordValue] = useState('');
    const [textValue,setTextValue] = useState('');
    const onSubmit = e => {
        e.preventDefault();
        setPasswordValue('');
        setTextValue('');
        loginUser(textValue,passwordValue);
    }
    return (
        <div className="login-page-wrapper">
            <Navbar/>
            <main className="login-section">
                <header className="login-info">
                    <h1>Login</h1>
                </header>
                <form className="login-inputs-wrapper" onSubmit={e => onSubmit(e)}>
                    <div>
                        <label>Email:</label>
                        <input value={textValue}
                        onChange={(e)=>{
                            setTextValue(e.target.value)
                        }} type="text"/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input value={passwordValue} 
                        onChange={(e)=>{
                            setPasswordValue(e.target.value);
                        }} type="password"/>
                    </div>
                    <button className="login-btn"
                    onSubmit={e => onSubmit(e)}>
                        <span>Login</span>
                    </button>
                </form>
            </main>
            <Footer/>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { loginUser })(LoginPage);