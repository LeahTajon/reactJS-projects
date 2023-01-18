import React from 'react';
import profilePhoto from '../images/profile-photo.jpg';

export default function ProfilePhoto() {
    return (
        <div>
            <img className="profile-photo" src={profilePhoto} alt="Laura Smith"/>
        </div>
    )
}