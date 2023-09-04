import React from "react"
import Home from "./Home"
import About from "./About"
import Skills from "./Skills"
import Project from "./Project"
import Contact from "./Contact"
import './css/Header.css'

export default function Header(){
    const [darkmode, setDarkmode] = React.useState(false)
    
    function Switch(){
        setDarkmode(prev => {
           return !prev
        })
    }
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    return (
        <div className="main">
            <div className="header">
                <h1>Portfolio</h1>
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Skills">Skills</a></li>
                    <li><a href="#Project">Projects</a></li>
                    <li><a href="#Contact">Contacts</a></li>
                
                </ul>
                <div className="darkmode" onClick={Switch}>
                    <img className={darkmode? "darkModeIcon" : "lightModeIcon"} src="/images/darkMode.png"/>
                </div>
            </div>
            <section id="Home">
              <Home />
            </section>
            <section id="About">
                <About />
            </section>
            <section id="Skills">
                <Skills />
            </section>
             <section id="Project">
                <Project />
             </section>
             <section id="Contact">
                <Contact />
             </section>
             <section id="Contact">
                <Contact />
             </section>
         
        </div> 
    )
}