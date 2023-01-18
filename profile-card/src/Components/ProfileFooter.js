import React from 'react'
import { FaTwitterSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';

export default function ProfileFooter() {
    return (
        <div>
            <section className='footer'>
                <div className='social-media-links'>
                    <a href="google.com">
                        <FaTwitterSquare color="#918E9B"/>
                        </a>
                    <a href="google.com">
                        <FaFacebookSquare color="#918E9B"/>
                    </a>
                    <a href="google.com">
                        <FaInstagramSquare color="#918E9B"/>
                    </a>
                    <a href="google.com">
                        <FaGithubSquare color="#918E9B"/>
                    </a>
                </div> 
            </section>
        </div>
    )
} 