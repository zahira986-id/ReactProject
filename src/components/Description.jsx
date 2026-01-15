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
        {
            title: 'Style Moderne',
            description: 'Utilisation de CSS moderne pour un rendu visuel premium et élégant.',
            icon: '🎨'
        }
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
                <div className="description-content">
                    <div className="text-content">
                        <h3>Une expérience utilisateur fluide</h3>
                        <p>
                            Notre plateforme est conçue avec une attention méticuleuse aux détails. Chaque transition, chaque interaction est pensée pour être la plus naturelle possible. En utilisant le rendu côté client et des stratégies de mise en cache intelligentes, nous garantissons une navigation sans accroc.
                        </p>
                        <p>
                            Que vous soyez un développeur cherchant une base solide ou un utilisateur final, ViteProject répond à vos besoins avec élégance.
                        </p>
                    </div>
                    <div className="visual-content">
                        <div className="abstract-shape"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Description;
