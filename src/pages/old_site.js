import React, { Component } from 'react';
import '../assets/oldSite.css';
import Typed from 'react-typed';
import video from '../assets/images/video.mp4'
import githubImg from '../assets/images/GitHub.png';
import linkedInImg from  '../assets/images/linkedin.png';

export default class oldSite extends Component {

    render() {
        return (
            <Layout>
            <SEO title={pageData.title} />

                <div id='oldSite'>
                    {/* <NavBar /> */} 
                    <div id='oldNav'>
                        <img class='burger' src='img/burger.svg'></img>
                        <ul class='menu'>
                            <h1 class="logo">MGR</h1>
                            <li class='nav-link '><a href='#portfolio'>Portfolio</a></li>
                            <li class='nav-link about'><a href='#about'>About Me</a></li>
                            <li class='nav-link '><a target="_blank" href='img/Marc%20Gallagher-Reid%20-%20CV%20.pdf'>My CV</a></li>
                            <li class='nav-link '><a href='#contact'>Contact</a></li>
                            <li class='oldSocial linkedIn'><a href='https://www.linkedin.com/in/marcgallagherreid/'><img alt="linkedIn" src={linkedInImg}></img></a></li>
                            <li class='oldSocial gitHub'><a href='https://github.com/mgallagher56'><img alt="gitHub" src={githubImg}></img></a></li>
                        </ul>
                        <h1 class="logoSmall">MGR</h1><h1 class="logoSmall">MGR</h1>
                    </div>

                    <div class='burgerMenu'>
                        <ul class='burgerMenu'>
                            <li class='burgerItem'><a href='#portfolio'>Portfolio</a></li>
                            <li class='burgerItem'><a href='#about'>About Me</a></li>
                            <li class='burgerItem'><a target="_blank" href='../assets/images/Marc%20Gallagher-Reid%20-%20CV.pdf'>My CV</a></li>
                            <li class='burgerItem'><a href='#contact'>Contact</a></li>
                        </ul>
                    </div>

                    <div class='header'>
                        <div class="innerHeader"> 
                            <h1 class="headerText headerText1 typed" id="typed">
                            <Typed
                                strings={['',
                                'Marc Gallagher-Reid\n']}
                                startDelay={500}
                                loop={false}
                                typeSpeed={70}
                            />
                            </h1>
                            <h1 class="headerText headerText2" id="typed">
                            <Typed
                                strings={['',
                                'Full Stack Developer\n']}
                                startDelay={3000}
                                loop={false}
                                typeSpeed={70}
                            />
                            </h1>

                            <h1 class="headerText headerText3" id="typed">
                            <Typed
                                strings={[ '',
                                'Mayden Academy Graduate\n']}
                                startDelay={6000}
                                loop={false}
                                typeSpeed={70}
                            />
                            </h1>

                            <div class="video">
                                <video autoplay loop muted>
                                    <source src={video} type="video/mp4"></source>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>

                    <a name='portfolio'></a>

                    <div class='portfolio'>
                        <h1 class="title">Portfolio</h1>

                        <div class='overlay'>
                            <div class='portfolioBox project1'>
                                <h1>My Portfolio</h1>
                                <a href='#'>
                                    <button class='projectButton' type='button'>View</button>
                                </a>
                                <a href='http://bit.ly/mgrDev'>
                                    <button class='projectButton' type='button'>GitHub</button>
                                </a>
                            </div>
                        </div>


                        <div class='overlay'>
                            <div class='portfolioBox project2'>
                                <h1>PHP Collection App</h1>
                                <a href='http://bit.ly/mgrCollection'>
                                    <button class='projectButton' type='button'>View</button>
                                </a>
                                <a href='http://bit.ly/mgrCollectonGitHub'>
                                    <button class='projectButton' type='button'>GitHub</button>
                                </a>
                            </div>
                        </div>

                        <div class='overlay'>
                            <div class='portfolioBox project3'>
                                <h1>JS Pairs Game</h1>
                                <a href='http://bit.ly/mgrPairsGame'>
                                    <button class='projectButton' type='button'>View</button>
                                </a>
                                <a href='http://bit.ly/mgrPairsGameGitHub'>
                                    <button class='projectButton' type='button'>GitHub</button>
                                </a>
                            </div>
                        </div>

                        <div class='overlay'>
                            <div class='portfolioBox project4'>
                                <h1>Solar System</h1>
                                <a href='http://bit.ly/mgrSolarSystem'>
                                    <button class='projectButton' type='button'>View</button>
                                </a>
                                <a href='http://bit.ly/mgrSolarSystemGitHub'>
                                    <button class='projectButton' type='button'>GitHub</button>
                                </a>
                            </div>
                        </div>

                        <div class='overlay'>
                            <div class='portfolioBox project5'>
                                <h1>JS API Fetch</h1>
                                <a href='http://bit.ly/mgrFetchApp'>
                                    <button class='projectButton' type='button'>View</button>
                                </a>
                                <a href='http://bit.ly/mgrGitHubFetchRepo'>
                                    <button class='projectButton' type='button'>GitHub</button>
                                </a>
                            </div>
                        </div>

                        <div class='overlay'>
                            <div class='portfolioBox project6'>
                                <h1>JS Finance Calc</h1>
                                <a href='http://bit.ly/mgrFinanceCalc'>
                                    <button class='projectButton' type='button'>View</button>
                                </a>
                                <a href='http://bit.ly/mgrFinanceCalcGitHub'>
                                    <button class='projectButton' type='button'>GitHub</button>
                                </a>
                            </div>
                        </div>

                        <div class='overlay'>
                            <div class='portfolioBox project7'>
                                <h1>OOP Recipe App</h1>
                                <a href='http://bit.ly/mgrGrub'>
                                    <button class='projectButton' type='button'>View</button>
                                </a>
                                <a href='http://bit.ly/mgrGrubGitHub'>
                                    <button class='projectButton' type='button'>GitHub</button>
                                </a>
                            </div>
                        </div>

                        <div class='overlay'>
                            <div class='portfolioBox project8'>
                                <h1>PHP/JQUERY Ski</h1>
                                <a href='http://bit.ly/mgrSkiSite'>
                                    <button class='projectButton' type='button'>View</button>
                                </a>
                                <a href='http://bit.ly/mgrSkiRepo'>
                                    <button class='projectButton' type='button'>GitHub</button>
                                </a>
                            </div>
                        </div>

                        <div class='overlay'>
                            <div class='portfolioBox project9'>
                                <h1>MVC PHP ToDo App</h1>
                                <a target="_blank" href='https://youtu.be/VPtLjSFwok8'>
                                    <button class='projectButton' type='button'>View</button>
                                </a>
                                <a href='http://bit.ly/mgrToDoGithub'>
                                    <button class='projectButton' type='button'>GitHub</button>
                                </a>
                            </div>
                        </div>

                        <div class='overlay'>
                            <div class='portfolioBox project10'>
                                <h1>Project 10</h1>
                                <a href='#'>
                                    <button class='projectButton' type='button'>View</button>
                                </a>
                                <a href='#'>
                                    <button class='projectButton' type='button'>GitHub</button>
                                </a>
                            </div>
                        </div>

                        <div class='overlay'>
                            <div class='portfolioBox project11'>
                                <h1>Project11</h1>
                                <a href='#'>
                                    <button class='projectButton' type='button'>View</button>
                                </a>
                                <a href='#'>
                                    <button class='projectButton' type='button'>GitHub</button>
                                </a>
                            </div>
                        </div>

                        <div class='overlay'>
                            <div class='portfolioBox project12'>
                                <h1>Project12</h1>
                                <a href='#'>
                                    <button class='projectButton' type='button'>View</button>
                                </a>
                                <a href='#'>
                                    <button class='projectButton' type='button'>GitHub</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <section class='aboutMe'>
                        <a name='about'></a>  
                        <h1>About Me</h1>
                        <div class='profileImg'></div>
                        <p>Hello World. I'm a recent graduate from Mayden Academy in Bath, after taking part in a 16 week course
                        (August-December 2019) to become a Full Stack Developer. I'm passionate about Agile software development, and
                        I'm proficient in HTML, CSS, PHP and JavaScript, including MVC design pattern with the Slim framework, NodeJS with Express, and React.</p>
                        <br />
                        <p>I also have a keen interest in how technology is developed, emerging technologies and PC hardware. Building my
                        first PC around 5 years ago opened the door to my interest in the technology industry as a whole, which, over
                        the years, has led me to this point of developing a career in the software industry. </p>
                    </section>

                    <section class="contact">
                        <a name='contact'></a>
                        <h1 class='footer'>Contact</h1>
                        <ul>
                            <li class="socialFooter">
                                <a href='mailto:mgrdevuk@gmail.com?subject=Mail%20from%20MG%20Portfolio%20Site'>
                                    <button class='email' type='button'>Email Me</button>
                                </a>
                            </li>

                            <li class='socialFooter'>
                                <a href='https://github.com/mgallagher56'>
                                    <img class="socialImg" src={githubImg}></img>
                                </a>
                            </li>

                            <li class='socialFooter'>
                                <a href='https://www.linkedin.com/in/marcgallagherreid/'>
                                    <img class="socialImg linkedIn" src={linkedInImg}></img>
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </Layout>
        );
    }
}
