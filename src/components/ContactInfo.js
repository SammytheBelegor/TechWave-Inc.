// src/components/ContactInfo.js
import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
    return (
        <div className="contact-info">
            <h2>Contact Information</h2>
            <p>If you have any questions or need further information, please feel free to contact us using the details below.</p>
            <h3>Company Information</h3>
            <p>Company: TechWave Inc.</p>
            <p>Email: contact@techwave.com</p>
            <p>Phone: +1 (800) 123-4567</p>
            <p>Address: 1234 TechWave Street, Tech City, TX 78901</p>
            <h3>Operating Hours</h3>
            <p>Monday to Friday: 8 AM - 6 PM</p>
            <p>Saturday: 10 AM - 4 PM</p>
            <p>Sunday: Closed</p>
        </div>
    );
};

export default ContactInfo;
