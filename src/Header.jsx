import React from "react"
import './css/Header.css'

export default function Header(){
    const [darkmode, setDarkmode] = React.useState(false)
    
    const image1 = darkmode? "/images/darkMode.png" : "/images/lighMode.png"
    function Switch(){
        setDarkmode(prev => {
           return !prev
        })
    }
    return (
        <div className="main">
            {/* Header */}
            <div className="header">
                <h1>Portfolio</h1>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Skills">Skills</a></li>
                    <li><a href="#Project">Projects</a></li>
                    <li><a href="#">Contacts</a></li>
                
                </ul>
                <div className="darkmode" onClick={Switch}>
                    <img src={image1}/>
                </div>
            </div>
            {/*Home*/}
            <section id="Home">
                <div className="Home">
                    <div className="home-desc">
                        <div className="desc">
                            <h2>Hello, Good Day!</h2>
                            <h1>Cristian Amparo</h1>
                            <h3>Front-End Web Developer</h3>
                            <button className="btn-LetsTalk">Let's Talk</button>
                        <div className="socialmedia">
                            <img src="/images/linkedin.png" />
                            <img src="/images/github.png" />
                            <img src="/images/facebook.png" />
                            <img src="/images/twitter.png" />
                            <img src="/images/instagram.png" />
                        </div>
                        </div>
                     </div>
                        <div className="home-profile">                     
                            <img className="profile" src="/images/profile.png"/>
                        </div>
                        <div class="triangleA">
                            <img src="/images/triangle.png" alt="" />
                        </div>
                        <div class="triangleB">
                            <img src="/images/triangle.png" alt="" />
                        </div>
                        
                    
                </div>
            </section>
            {/*About*/}
            <section id="About">
                <div className="About">
                    <div className="About-profile">                     
                        <img className="aboutImage" src="/images/about.png"/>
                    </div>
                    <div>
                        <div className="About-desc">
                            <h1>About Me</h1>
                            <h2>Front-End Developer</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi qui nihil maxime deserunt officia iste facilis at ullam nostrum quam. Eum hic natus nobis est optio odio numquam libero ratione dicta, distinctio ipsa incidunt aliquam quas aperiam! Nesciunt ducimus modi earum qui voluptate tempora, adipisci error, corporis accusamus fugiat veritatis!</p>
                            <button className="downloadCV">Download CV</button>
                        </div>

                    </div>
                    <div class="triangleC">
                        <img src="/images/triangle.png" alt="" />
                    </div>

                </div>
            </section>
            {/*Skills*/}
            <section id="Skills">
                <div className="Skills">
                    <div className="skills-desc">
                        <h1>My Skills</h1>
                    </div>
                    <div className="Skills-container">
                            <div class="card">
                                <div className="cardImage">
                                <img src="/images/html-5.png" alt="Card Image" />
                                </div>
                                <div class="card-content">
                                    <h3>HTML</h3>
                                    <p class="description">This is a sample card with a hidden description.</p>
                                </div>
                            </div>
                            <div class="card">
                                <div className="cardImage">
                                <img src="/images/css.png" alt="Card Image" />
                                </div>
                                <div class="card-content">
                                    <h3>CSS</h3>
                                    <p class="description">This is a sample card with a hidden description.</p>
                                </div>
                            </div>
                            <div class="card">
                                <div className="cardImage">
                                <img src="/images/js.png" alt="Card Image" />
                                </div>
                                <div class="card-content">
                                    <h3>JavaScript</h3>
                                    <p class="description">This is a sample card with a hidden description.</p>
                                </div>
                            </div>
                            <div class="card">
                                <div className="cardImage">
                                <img src="/images/tailwind.png" alt="Card Image" />
                                </div>
                                <div class="card-content">
                                    <h3>Tailwind</h3>
                                    <p class="description">This is a sample card with a hidden description.</p>
                                </div>
                            </div>
                            <div class="card">
                                <div className="cardImage">
                                <img src="/images/react.png" alt="Card Image" />
                                </div>
                                <div class="card-content">
                                    <h3>ReactJS</h3>
                                    <p class="description">This is a sample card with a hidden description.</p>
                                </div>
                            </div>
                    </div>
                    <div class="triangleE">
                            <img src="/images/triangle.png" alt="" />
                        </div>
                        <div class="triangleF">
                            <img src="/images/triangle.png" alt="" />
                        </div>
                </div>
            </section>

             {/*Project*/}
            <section id="Project">
                <div className="Project">
                    <div className="project-desc">
                        <h1>My Projects</h1>
                    </div>
                    <div className="project-container">
                    <div class="project-card">
                     <img src="/images/project2.png" alt="Card Image"/>
                        <div class="project-card-content">
                            <h3>Card Title</h3>
                            <p>This is a sample card with a side-slide description.</p>
                        </div>
                    </div>

                    <div class="project-card">
                     <img src="/images/project.jpg" alt="Card Image"/>
                        <div class="project-card-content">
                            <h3>Card Title</h3>
                            <p>This is a sample card with a side-slide description.</p>
                        </div>
                    </div>
                    <div class="project-card">
                     <img src="/images/project2.png" alt="Card Image"/>
                        <div class="project-card-content">
                            <h3>Card Title</h3>
                            <p>This is a sample card with a side-slide description.</p>
                        </div>
                    </div>

                    <div class="project-card">
                     <img src="/images/project.jpg" alt="Card Image"/>
                        <div class="project-card-content">
                            <h3>Card Title</h3>
                            <p>This is a sample card with a side-slide description.</p>
                        </div>
                    </div>
                    </div>  
                </div>
            </section>

             <section id="Project">
                <div className="About">
                    <div className="About-profile">                     
                        <img className="aboutImage" src="/images/about.png"/>
                    </div>
                    <div>
                        <div className="About-desc">
                            <h1>About Me</h1>
                            <h2>Front-End Developer</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi qui nihil maxime deserunt officia iste facilis at ullam nostrum quam. Eum hic natus nobis est optio odio numquam libero ratione dicta, distinctio ipsa incidunt aliquam quas aperiam! Nesciunt ducimus modi earum qui voluptate tempora, adipisci error, corporis accusamus fugiat veritatis!</p>
                            <button className="downloadCV">Download CV</button>
                        </div>

                    </div>
                    <div class="triangleC">
                        <img src="/images/triangle.png" alt="" />
                    </div>
                    
                </div>
            </section>
        </div> 
    )
}