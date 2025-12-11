import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaCloud, FaCode, FaShieldAlt, FaChartLine, FaMobileAlt } from 'react-icons/fa';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1>Transforming Ideas into <span className="highlight">Digital Reality</span></h1>
                        <p>
                            We are Siva Tech Services. A team of expert architects and developers dedicated to building scalable web apps, optimizing cloud infrastructure, and securing your digital assets.
                        </p>
                        <div className="hero-btns">
                            <Link to="/contact" className="btn btn-primary">Get Started</Link>
                            <Link to="/services" className="btn btn-secondary">Our Services</Link>
                        </div>
                    </div>
                    <div className="hero-image">
                        {/* Abstract Tech Visual using CSS/SVG or Icon */}
                        <div className="tech-visual">
                            <FaCloud className="floating-icon icon-1" />
                            <FaCode className="floating-icon icon-2" />
                            <FaRocket className="floating-icon icon-3" />
                        </div>
                    </div>
                </div>
            </section>

            {/* About Brief */}
            <section className="section-padding about-brief">
                <div className="container">
                    <h2 className="section-title">Who We Are</h2>
                    <p className="section-desc">
                        Founded by a Senior DevOps Engineer/Cloud Architect and a Full Stack Expert, we combine infrastructure mastery with frontend finesse. We don't just build apps; we engineer complete digital ecosystems.
                    </p>
                </div>
            </section>

            {/* Services Highlights */}
            <section className="section-padding services-highlight">
                <div className="container">
                    <h2 className="section-title">Our Expertise</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <FaCode className="service-icon" />
                            <h3>Web & Mobile Dev</h3>
                            <p>Custom web applications and cross-platform mobile solutions built with React, Node, and modern frameworks.</p>
                        </div>
                        <div className="service-card">
                            <FaCloud className="service-icon" />
                            <h3>Cloud & DevOps</h3>
                            <p>AWS Cloud Architecture, Migration strategies, and CI/CD pipelines to streamline your operations.</p>
                        </div>
                        <div className="service-card">
                            <FaShieldAlt className="service-icon" />
                            <h3>Security & Optimization</h3>
                            <p>Comprehensive security reviews and cost optimization strategies for your existing cloud workloads.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding why-us">
                <div className="container">
                    <h2 className="section-title">Why Choose Siva Tech?</h2>
                    <div className="features-grid">
                        <div className="feature-item">
                            <FaChartLine className="feature-icon" />
                            <h4>Cost Effective</h4>
                            <p>Optimized solutions that save you money on cloud bills.</p>
                        </div>
                        <div className="feature-item">
                            <FaMobileAlt className="feature-icon" />
                            <h4>Future Ready</h4>
                            <p>Scalable architectures designed to grow with your business.</p>
                        </div>
                        <div className="feature-item">
                            <FaRocket className="feature-icon" />
                            <h4>Fast Delivery</h4>
                            <p>Agile development methodologies for rapid turnaround.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
