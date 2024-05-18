import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear(); // Dynamically get the current year
    return (
        <footer>
            <p>© {year} ALLAN CHOW</p>
        </footer>
    );
};

export default Footer;
