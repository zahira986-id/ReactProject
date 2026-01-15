import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo-section">
                    <span className="logo-text">Vite<span className="logo-highlight">Project</span></span>
                </div>
                <nav className="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-item"><a href="#home">Accueil</a></li>
                        <li className="nav-item"><a href="#features">Fonctionnalités</a></li>
                        <li className="nav-item"><a href="#docs">Docs</a></li>
                        <li className="nav-item"><a href="#about">À propos</a></li>
                    </ul>
                </nav>
                <div className="header-actions">
                    <button className="btn-primary">Commencer</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
