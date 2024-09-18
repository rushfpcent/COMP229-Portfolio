import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../src/css/contact.css';
// https://github.com/ksentak/react-contact-form/blob/main/src/ContactForm.jsx
// Used as reference (in addition to some websites covering React forms)

export default function Contact() {
    //To be able to redirect to homepage after form submission
    const navigate = useNavigate();
    
    // State to capture form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission (& redirect to the Home Page)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData); // "Captures" form data
        navigate('/'); // Redirects to Home Page after submission
    };

    //Standard HTML form
    return (
        <>
            <h2>Contact Me</h2>
            <div className="contact-info">
                <h3>My Contact Information</h3>
                <p>Email: soroush@fakemail.com</p>
                <p>Phone: 123-456-7890</p>
                <p>Address: 1 Bloor Ave, Toronto, ON, Can</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Contact Number:</label>
                    <input
                        type="text"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">Send Message</button>
            </form>
        </>
    );
}