import React from 'react';

const Services = () => {
    const services = [
        {
            title: "Web App Development",
            description: "Full-cycle web application development using React, Node.js, and modern frameworks. We build scalable, responsive, and high-performance applications tailored to your business needs."
        },
        {
            title: "Cloud Migration (AWS)",
            description: "Expert guidance on migrating your on-premise infrastructure to the AWS Cloud. We ensure a smooth transition with minimal downtime and maximum security."
        },
        {
            title: "DevOps Setup",
            description: "Streamline your development process with CI/CD pipelines, infrastructure as code (Terraform/CloudFormation), and automated testing."
        },
        {
            title: "Cost Optimization",
            description: "Analyze your existing cloud usage and implement strategies to reduce costs without compromising performance."
        },
        {
            title: "Security Review",
            description: "Comprehensive security audits of your applications and infrastructure to identify vulnerabilities and implement best practices."
        }
    ];

    return (
        <div className="section-padding">
            <div className="container">
                <h2 className="section-title">Our Services</h2>
                <div style={{ display: 'grid', gap: '30px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    {services.map((service, index) => (
                        <div key={index} style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
