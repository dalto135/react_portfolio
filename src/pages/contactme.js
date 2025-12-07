import React from 'react';
import './pages.css';
import './contactme.css';

function Contactme() {
    return (
        <section className="page" id="contactMe">
            <div className="pageTitle" id="contactMeTitle">
                <h1>Contact Me</h1>
            </div>
            
            <address className="pageContent" id="contactMeContent">
                <a href="https://github.com/dalto135" target="_blank" rel='noreferrer'>GitHub</a>
            </address>
        </section>
    );
}

export default Contactme;