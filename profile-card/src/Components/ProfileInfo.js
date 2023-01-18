import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function ProfileInfo() {
    return (
        <div className='profile-info-container'>
            <section className='name-info'>
                <h1>Laura Smith</h1>
                <h3>Frontend Developer</h3>
                <h4>laurasmith.website</h4>
            </section>

            <section className="contact-info">
                <a href="google.com" className="contact-btn">
                   <FaEnvelope size="1rem"/> Email</a>
                <a href="google.com" className="contact-btn"> <FaLinkedin size="1rem"/>LinkedIn</a>
            </section>

            <section className="about-info">
                <h5>About</h5>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and bes practices, and am always looking for new things to learn.
                </p>
                <h5>Interests</h5>
                
                <p>
                    Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </p>
                
            </section>

            
        </div>
    )
}