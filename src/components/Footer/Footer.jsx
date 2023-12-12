
import React from 'react';
import "./Footer.css"



function Footer({ data }) {


    const handleLinkedInClick = () => {
        window.open("https://www.linkedin.com/in/carlos-calleja-saez-8177792a0/", '_blank');
    };

    return (
        <footer>
            <p> {data.copyright}</p>
            <button onClick={handleLinkedInClick}>Connect on LinkedIn</button>
        </footer>
    );
}

export default Footer;
