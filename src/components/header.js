import React from 'react';
import { Link } from 'react-router-dom';
import './components.css';
import './header.css';

function Header({toggleTheme}) {
    return (
        <div id='header-div'>
            <header>
                <div id="shortcuts">
                    <Link to='/'>About Me</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/contactme'>Contact Me</Link>
                </div>

                <div id="lightDark">
                    <button onClick={toggleTheme} id="lightDarkButton">Light/Dark Mode</button>
                </div>
            </header>

            <section id="image">
                <h1>A vision for the future</h1>
            </section>
        </div>
    );
}

export default Header;
