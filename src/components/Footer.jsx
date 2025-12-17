import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-section">
                    <h3>Siva Tech Services</h3>
                    <p>Empowering businesses with modern tech solutions.</p>
                    <p style={{ marginTop: '15px' }}>
                        <a href="tel:+61468469320" style={{ color: 'inherit', textDecoration: 'none', display: 'block', marginBottom: '10px' }}>
                            +61 468 469 320
                        </a>
                        <a href="https://linkedin.com/company/siva-tech-services/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', fontSize: '1.5rem' }}>
                            <FaLinkedin />
                        </a>
                    </p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Company Details</h4>
                    <p>Siva Tech Services Pty Ltd</p>
                    <p>ABN: 61 680 000 640</p>
                    <p>ACN: 680 000 640</p>
                    <p>Registered: 16 Aug 2024</p>
                    <p>Address: Melbourne, Australia</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Siva Tech Services Pty Ltd. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
