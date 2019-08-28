import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
    return (
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh'
        }}>
            <h1>Error: Page Not Found</h1>
            <Link to="/">Go back<i className="fas fa-house"></i></Link>
        </div>
    )
}
