import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-col branding">
                        <span className="logo-text">Vite<span className="logo-highlight">Project</span></span>
                        <p className="footer-desc">
                            Une plateforme moderne construite avec Vite et React pour des performances exceptionnelles.
                        </p>
                    </div>
                    <div className="footer-col">
                        <h4>Produit</h4>
                        <ul>
                            <li><a href="#features">Fonctionnalités</a></li>
                            <li><a href="#integrations">Intégrations</a></li>
                            <li><a href="#pricing">Tarifs</a></li>
                            <li><a href="#changelog">Notes de version</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Ressources</h4>
                        <ul>
                            <li><a href="#docs">Documentation</a></li>
                            <li><a href="#guides">Guides</a></li>
                            <li><a href="#api">Référence API</a></li>
                            <li><a href="#community">Communauté</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Société</h4>
                        <ul>
                            <li><a href="#about">À propos</a></li>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#careers">Carrières</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="copyright">&copy; {new Date().getFullYear()} ViteProject. Tous droits réservés.</p>
                    <div className="social-links">
                        <a href="#" aria-label="Twitter">Twitter</a>
                        <a href="#" aria-label="GitHub">GitHub</a>
                        <a href="#" aria-label="LinkedIn">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
