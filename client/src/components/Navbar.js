import React,{ useState } from 'react';
import '../css/navbar.css';
import { connect } from 'react-redux';
import Kout from '../css/Kout.png';
import { Link } from 'react-router-dom';
import { logOut } from '../actions/auth';

function Navbar({ user,isAuthenticated,logOut }) {
const [onHoverMan,setOnHoverMan] = useState(false);
const [onHoverWoman,setOnHoverWoman] = useState(false);
const [isSidebar, setSidebar] = useState(false);

    return (
        <div style={{ width: '110vw', height: '32vh' }} onMouseLeave={() => {
            setOnHoverWoman(false)
            setOnHoverMan(false)
        }}>
            <div className="sidebar-check" style={{ 
                zIndex: isSidebar ? '20' : '-1',
             }}>
                 <div className="sidebar" style={{ 
                    width: isSidebar ? '100vw' : '0vw',
                    transition: 'width .5s ease-in-out',
                    zIndex: '30' 
                }}>
                     <ul style={{ display: isSidebar ? 'flex' : 'none' }}>
                        <li><Link to="/">Main Page</Link></li>
                        <li><Link to="/woman/">Woman Page</Link></li>
                        <li><Link to="/man/">Man Page</Link></li>
                        <li style={{
                            display: !isAuthenticated ? 'block' : 'none'
                        }}><Link to="/login">Login</Link></li>
                        <li 
                        style={{
                            display: !isAuthenticated ? 'block' : 'none'
                        }}><Link to="/sign-in">Sign Up</Link></li>
                        <li 
                        style={{
                            display: isAuthenticated ? 'block' : 'none'
                        }}>
                            <Link to="/account">Account</Link>
                        </li>
                        <li style={{ display: isAuthenticated ? "block" : "none" }}>
                            <Link to="/">Log Out</Link>
                        </li>
                     </ul>
                     <i className="fas fa-times" 
                     style={{ display: isSidebar ? 'flex' : 'none' }}
                     onClick={() => setSidebar(!isSidebar)}>
                     </i>
                 </div>
            </div>
            <nav className="navbar" style={{ display: isSidebar ? 'none' : 'flex' }}>
                <div className="logo-wrapper" >
                    <Link to="/"><img src={Kout} className="kout-img" alt=""/></Link>
                </div>
                <div 
                className="nav-links" 
                id="nav-links-id"
                style={{ 
                    color: '#191919',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Link to="/man" onMouseEnter={() => {
                        if(onHoverWoman){
                            setOnHoverWoman(false)
                            setOnHoverMan(true)
                        }
                        setOnHoverMan(true)
                    }}>Man</Link>
                    <Link to="/woman" onMouseEnter={() => setOnHoverWoman(true)}>Woman</Link>
                </div>

                <div className="sign-wrapper">
                    <span
                    style={{
                        display: isAuthenticated && user !== null ? 'block' : 'none'
                    }}>
                        <Link to="/account"><i className="fas fa-user"></i> Account</Link>
                    </span>

                     <span
                     style={{
                         display: !isAuthenticated ? 'block' : 'none'
                     }}>
                         <Link to="/login"><i className="fas fa-user"></i>Login</Link>
                    </span>

                    <span style={{ display: isAuthenticated && user === null ? 'block' : 'none' }}>
                        Loading user...
                    </span>

                    <span style={{
                        display: !isAuthenticated ? 'block' : 'none'
                    }}><Link to="/sign-in">Sign Up</Link></span> 

                    <i 
                    onClick={() => logOut()}
                     className="fas fa-sign-out-alt"
                    style={{ display: isAuthenticated && user === null ? 'block' : 'none' }}>
                    </i>

                    <span 
                    className="shopping-cart-desktop"
                    style={{
                        display: isAuthenticated && user !== null ? "block" : "none"
                    }}>

                        <Link to="/shop-page">
                            <i className="fas fa-shopping-cart"></i>
                        </Link>

                        <Link to="/heart-page">
                            <i className="far fa-heart"
                            style={{ marginLeft: '10px' }}></i>
                        </Link>

                        <Link to="/login">

                         <i 
                         onClick={() => logOut()}
                         style={{ display: isAuthenticated  && user === null && 'none', marginLeft: '10px' }}
                          className="fas fa-sign-out-alt">    
                          </i>

                        </Link>

                    </span>
                </div>
                <div className="mobile-version">
                    <Link to="/shop-page">
                        <i className="fas fa-shopping-cart"></i>
                    </Link>
                    <Link to="/heart-page">
                        <i className="far fa-heart"></i>
                    </Link>      
                    <i className="fas fa-bars" onClick={() => setSidebar(!isSidebar)}></i>
                </div>
            </nav>

            <nav className="hover-nav">
                <section style={{ 
                    display: 'flex',
                    width: '100vw',
                    height: onHoverMan ? '20vh' : '0vh',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                    position: 'fixed',
                    top: '17.5%',
                    left: '0%',
                    zIndex: '10',
                    background: '#f6f6f6f6',
                    borderBottom: '1px solid #191919',
                    transition: 'height .5s ease-in-out'
                    }} >
                    
                    <div className="navbar-items">
                        <h1 style={{ display: onHoverMan ? 'block' : 'none',
                        zIndex: onHoverMan ? '12' : '-1' }}>Sport</h1>
                        <ul>
                            <li style={{ display: onHoverMan ? 'block' : 'none' }}><Link to="/man/soccer-man/">Soccer</Link></li>
                            <li style={{ display: onHoverMan ? 'block' : 'none' }}><Link to="/man/basketball-man/">Basketball</Link></li>
                            <li style={{ display: onHoverMan ? 'block' : 'none' }}><Link to="/man/man-gym/">Gym</Link></li>
                        </ul>
                    </div>

                    <div className="navbar-items">
                        <h1 style={{ display: onHoverMan ? 'block' : 'none',
                     zIndex: onHoverMan ? '12' : '-1'
                      }}>Bags</h1>
                        <ul>
                            <li style={{ display: onHoverMan ? 'block' : 'none' }}><Link to="/man/backpack-man/">Backpacks</Link></li>
                        </ul>
                    </div>

                    <div className="navbar-items">
                        <h1 style={{ display: onHoverMan ? 'block' : 'none' }}>Clothes</h1>
                        <ul>
                            <li style={{ display: onHoverMan ? 'block' : 'none' }}><Link to="/man/jacket-man/">Jackets</Link></li>
                            <li style={{ display: onHoverMan ? 'block' : 'none' }}><Link to="/man/hoodie-man/">Hoodies</Link></li>
                            <li style={{ display: onHoverMan ? 'block' : 'none' }}><Link to="/man/t-shirt-man/">T-shirts</Link></li>
                        </ul>
                    </div>
                </section>



                <section style={{ 
                    display: 'flex',
                    width: '100vw',
                    height: onHoverWoman ? '20vh' : '0vh',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                    position: 'fixed',
                    top: '17.5%',
                    left: '0%',
                    zIndex: '10',
                    background: '#f6f6f6f6',
                    borderBottom: '1px solid #191919',
                    transition: 'height .5s ease-in-out'
                    }} >
                    
                    <div className="navbar-items"> 
                        <h1 style={{ display: onHoverWoman ? 'block' : 'none',
                     zIndex: onHoverMan ? '12' : '1'
                      }}>Sport</h1>
                        <ul>
                            <li style={{ display: onHoverWoman ? 'block' : 'none' }}><Link to="/woman/gym-women/">Gym</Link></li>
                            <li style={{ display: onHoverWoman ? 'block' : 'none' }}><Link to="/woman/running-women/">Running</Link></li>
                            <li style={{ display: onHoverWoman ? 'block' : 'none' }}><Link to="/woman/leggins-women/">Leggins</Link></li>
                        </ul>
                    </div>

                    <div className="navbar-items">
                        <h1 style={{ display: onHoverWoman ? 'block' : 'none',
                     zIndex: onHoverMan ? '12' : '1'
                      }}>Bags</h1>
                        <ul>
                            <li style={{ display: onHoverWoman ? 'block' : 'none' }}><Link to="/woman/backpack-women/">Backpacks</Link></li>
                        </ul>
                    </div>


                    <div className="navbar-items">
                        <h1 style={{ display: onHoverWoman ? 'block' : 'none' }}>Clothes</h1>
                        <ul>
                            <li style={{ display: onHoverWoman ? 'block' : 'none' }}><Link to="/woman/t-shirt-women">T-Shirts</Link></li>
                            <li style={{ display: onHoverWoman ? 'block' : 'none' }}><Link to="/woman/woman-hoodie">Hoodies</Link></li>
                            <li style={{ display: onHoverWoman ? 'block' : 'none' }}><Link to="/woman/skirts-women">Skirts</Link></li>
                        </ul>
                    </div>
                </section>
            </nav>
       </div>
    )
}

const mapStateToProps = state => ({
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logOut })(Navbar);