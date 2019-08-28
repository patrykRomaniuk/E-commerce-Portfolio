import React from 'react'
import '../css/Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="main-footer">
        <div className="footer-container">

        <div className="footer-divs">
        <div className="bold">
          <ul className="bold-ul">
            <li className="bolded list">Gift Cards</li>
            <li className="bolded list">Our Shops</li>
            <li className="bolded list">E-mail subscription</li>
            <li className="bolded list"><Link to="/sign-in" style={{
              textDecoration: 'none',
              color: '#f4f4f4'
            }}>Register</Link></li>
            <li className="bolded list">Reviews</li>
          </ul>
        </div>
        <div className="get-help">
          <ul className="get-help-ul">
            <li className="bolded list">Status of the order</li>
            <li className="about list">Shipping and delivery</li>
            <li className="about list" >Returns</li>
            <li className="about list">Payment options</li>
            <li className="about list">Contact Us</li>

          </ul>
        </div>
        <div className="about-company">
          <ul className="about-ul">
            <li className="bolded list">Tidings</li>
            <li className="about list">Jobs</li>
            <li className="about list">Sponsors</li>
          </ul>
        </div>

        <div className="social-media">
          <a href="https://twitter.com/?lang=en" target="_blank" className="social-href"><i className="fab fa-twitter social"></i></a>
        <a href="https://www.facebook.com/" target="_blank" className="social-href"><i className="fab fa-facebook-f social"></i></a> 
        <a href="https://www.youtube.com/" target="_blank" className="social-href"><i className="fab fa-youtube social"></i></a> 
         <a href="https://www.instagram.com/?hl=en" target="_blank" className="social-href"><i className="fab fa-instagram social"></i></a> 
        </div> 
      </div>


      </div>
      <div className="footer-container">
        <div className="under-footer">
          <p className="about rights">&copy; All rights reserved</p>
        </div>
      </div>
    </footer>
    )
}
