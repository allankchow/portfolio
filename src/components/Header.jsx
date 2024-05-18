import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoDark from "/src/assets/logo/logo-dark.svg";
import logoLight from "/src/assets/logo/logo-light.svg";

function Header() {
    const [logo, setLogo] = useState(logoDark);


    const handleMouseEnter = () => setLogo(logoLight);
    const handleMouseLeave = () => setLogo(logoDark);

    return (
        <header className="header">
            <div className="logo">
                <NavLink to="/">
                    <img 
                        src={logo} 
                        alt="Home Button" 
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
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
