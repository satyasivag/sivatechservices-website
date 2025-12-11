import React from 'react';
import proxishiftLogo from '../assets/proxishift-logo.png';

const Products = () => {
    return (
        <div className="section-padding">
            <div className="container">
                <h2 className="section-title">Our Products</h2>
                <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px' }}>
                    We are currently developing a suite of innovative web and mobile applications.
                </p>

                <div style={{ display: 'grid', gap: '30px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>

                    {/* ProxiShift Product Card */}
                    <div style={{
                        background: '#fff',
                        padding: '40px',
                        borderRadius: '12px',
                        textAlign: 'center',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                        border: '1px solid #eee',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <div style={{ marginBottom: '20px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={proxishiftLogo} alt="ProxiShift" style={{ maxHeight: '100%', maxWidth: '100%' }} />
                        </div>
                        <h3 style={{ marginBottom: '10px', fontSize: '1.5rem', color: '#333' }}>ProxiShift</h3>
                        <p style={{ color: '#666', marginBottom: '20px', fontSize: '0.95rem' }}>
                            Workforce Management Simplified. The ultimate solution for NDIS, Security, and Cleaning industries.
                        </p>
                        <div style={{ marginTop: 'auto' }}>
                            <a
                                href="https://proxishift.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{ display: 'inline-block', marginBottom: '15px' }}
                            >
                                Visit Website
                            </a>
                            <div style={{
                                display: 'inline-block',
                                background: '#e3f2fd',
                                color: '#1976d2',
                                padding: '5px 12px',
                                borderRadius: '20px',
                                fontSize: '0.8rem',
                                fontWeight: '600',
                                marginLeft: '10px'
                            }}>
                                Launching Soon
                            </div>
                        </div>
                    </div>

                    {/* Placeholder for future products */}
                    <div style={{
                        background: '#f9f9f9',
                        padding: '40px',
                        borderRadius: '12px',
                        textAlign: 'center',
                        border: '2px dashed #ccc',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        opacity: 0.7
                    }}>
                        <h3 style={{ color: '#888' }}>Coming Soon</h3>
                        <p>More innovative solutions in the pipeline.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Products;
