import React from 'react';
import './Description.css';

const Description = () => {
    const features = [
        {
            title: 'Performance Éclair',
            description: 'Développé avec Vite pour un rechargement à chaud ultra-rapide et des builds optimisés.',
            icon: '⚡'
        },
        {
            title: 'Composants React',
            description: 'Une architecture modulaire utilisant les dernières fonctionnalités de React.',
            icon: '⚛️'
        },
        {
            title: 'Design Responsif',
            description: 'Une interface qui s\'adapte parfaitement à tous les types d\'écrans.',
            icon: '📱'
        },

    ];

    return (
        <section className="description-section">
            <div className="description-container">
                <div className="description-header">
                    <h2 className="section-title">Pourquoi choisir <span className="text-gradient">ViteProject</span> ?</h2>
                    <p className="section-subtitle">
                        Nous combinons les meilleures technologies pour vous offrir une expérience de développement et d'utilisation inégalée.
                    </p>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Description;
