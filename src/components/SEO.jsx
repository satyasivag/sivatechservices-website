import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = 'Siva Tech Services | Custom Software & Mobile App Development',
    description = 'Transforming ideas into digital reality. We specialize in Mobile App Development, Custom Software Solutions, and Cloud Architecture for Australian businesses.',
    keywords = [],
    author = 'Siva Tech Services Pty Ltd',
    image = '/logo.png', // Ensure this exists or use a default
    url,
    type = 'website'
}) => {
    const siteTitle = 'Siva Tech Services';
    const fullTitle = title === siteTitle ? siteTitle : `${title} | ${siteTitle}`;

    // Dynamic canonical: Use provided URL or current window location
    const canonicalUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://sivatechservices.com.au');

    const allKeywords = [
        'Mobile App Development',
        'Custom Software',
        'IT Consulting',
        'Web Development',
        'Cloud Solutions',
        'React Native Developers',
        'Siva Tech Services',
        ...keywords
    ].join(', ');

    return (
        <Helmet>
            {/* Basic Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={allKeywords} />
            <meta name="author" content={author} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={author} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            <link rel="canonical" href={canonicalUrl} />
        </Helmet>
    );
};

export default SEO;
