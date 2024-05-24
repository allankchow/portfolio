import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const isWorkPage = location.pathname.startsWith('portfolio-01/works/');

    const year = new Date().getFullYear(); // Dynamically get the current year
    return (
        <footer>
            <p>© {year} ALLAN CHOW</p>
        </footer>
    );
};

export default Footer;
