import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoDark from "/src/assets/logo/logo-dark.svg";
import LottieAnimation from './LottieAnimation';
import animationData from '../assets/animations/logo-load.json';

function Header() {
    const [animationPlaying, setAnimationPlaying] = useState(true);  // Track if animation is playing

    const handleAnimationComplete = () => {
        setAnimationPlaying(false);  // Hide animation and show static logo
    };

    return (
        <header className="header">
            <div className="logo">
                <NavLink to="/">
                    <div className="animation-container" style={{ display: animationPlaying ? 'block' : 'none' }}>
                        <LottieAnimation 
                            animationData={animationData} 
                            loop={false}
                            onComplete={handleAnimationComplete}
                            speed={2} 
                            scale={3.5}
                        />
                    </div>
                    <img 
    src={logoDark} 
    alt="Home Button" 
    style={{ 
        display: animationPlaying ? 'none' : 'block', 
        width: '128px',  
        height: '128px', 
    }}
    className="static-logo"
/>

                </NavLink>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/works" className={({ isActive }) => isActive ? 'active' : ''}>
                            WORKS | 作品集
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                            ABOUT | 关于
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
