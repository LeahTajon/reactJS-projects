import React from 'react'
import ProfilePhoto from './ProfilePhoto'

export default function MainContent() {
    return (
        <div>
            <header>
                <ProfilePhoto />
            </header>
            <main>
                this is the profile info
            </main>
            <footer>
                this is the social media links
            </footer>
        </div>
    )
}