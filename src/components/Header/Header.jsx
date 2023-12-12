import React from 'react';
import "./Header.css"

function Header({ data }) {
    const handleEmailClick = () => {
        alert(`Sending email to ${data.email}`);
    };

    return (
        <header>
            <h1>{data.name}</h1>
            <p>{data.address}</p>
            <button onClick={handleEmailClick}>Contact via Email</button>
        </header>
    );
}

export default Header;