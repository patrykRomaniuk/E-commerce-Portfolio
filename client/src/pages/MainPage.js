import React from 'react'
import '../css/mainPage.css'
import { Link } from 'react-router-dom'

export default function MainPage() {
    return (
        <div className="image-wrapper">
            <div className="header-links-wrapper">
                <div className="header">
                    <span className="info-header">Test Our Clothes</span>
                </div>
                <div className="links">
                    <Link to="/woman">Shop Woman</Link>
                    <Link to="/man">Shop Man</Link>
                </div>
            </div>
        </div>
    )
}
