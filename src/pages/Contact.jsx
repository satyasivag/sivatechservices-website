import React from 'react';

const Contact = () => {
    return (
        <div className="section-padding">
            <div className="container">
                <h2 className="section-title">Contact Us</h2>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <p style={{ textAlign: 'center', marginBottom: '30px', fontSize: '1.1rem', color: '#555' }}>
                        Have a project in mind or want to learn more about our services?<br />
                        Fill out the form below and we'll get back to you shortly.
                    </p>


                    {/* Contact Form */}
                    <form
                        action="https://formspree.io/f/mldqpzyj"
                        method="POST"
                        style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ddd' }}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ddd' }}
                        />
                        <select
                            name="service"
                            style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ddd' }}
                        >
                            <option value="">Select Service</option>
                            <option value="StaffLoop Inquiry">StaffLoop Inquiry</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Cloud Migration">Cloud Migration</option>
                            <option value="DevOps">DevOps</option>
                            <option value="Other">Other</option>
                        </select>
                        <textarea
                            name="message"
                            placeholder="Message"
                            required
                            rows="5"
                            style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ddd' }}
                        ></textarea>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Contact;
