import React, { Component } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Bubbles from '../Bubbles';
import { TimelineMax, Linear } from 'gsap';
import line from '../../assets/images/horziontalLine.svg';
import logo from '../../assets/images/gatsby-astronaut.png';

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuToggle: false,
            navHeight: '',
            clickCount: 0,
        };
        this.nav = React.createRef();
        this.navBar = React.createRef();
        // this.burgerTop = React.createRef()
        // this.burgerMiddle = React.createRef()
        // this.burgerBottom = React.createRef()
        this.tl = new TimelineMax({ paused: true });
        this.handleClick = this.handleClick.bind(this);


    }

    handleClick(e) {
        e.stopPropagation();
        this.setState(prevState => ({
            menuToggle: !prevState.menuToggle,
        }));
        if (!this.state.menuToggle) {
            this.navAnimation.play();
            document.body.style.position = 'fixed';
            this.bubbleAnimation('play')

        } else {
            this.navAnimation.reverse();
            document.body.style.position = '';
            this.bubbleAnimation('pause')
        }
    }

    componentDidMount() {
        this.setState(({
            navHeight: document.getElementById('nav-toggle').offsetHeight.toString() + 'px',
        }));

        let navItems = this.nav.current.children;
        this.listItems = [];
        let listLength = navItems.length;

        for (let i = 0; i < listLength; i++) {
            let tempList = navItems[i];
            let sublistLength = tempList.children.length;
            for (let j = 0; j < sublistLength; j++) {
                this.listItems.push(tempList.children[j]);
            }
        }

        // this.burgerAnimation = this.tl.fromTo(this.burgerTop, {}, {}).play()
        this.navBackground = this.navBar.current;

        //get all elements behind mobile nav
        let getSiblings = function (elem) {
            return Array.prototype.filter.call(elem.parentNode.children, function (sibling) {
                return sibling !== elem;
            });
        };

        this.navBackground = getSiblings(this.navBackground);
        
        this.navAnimation = this.tl.fromTo([this.navBackground, this.listItems],
            { filter: '' },
            {
                filter: 'blur(8px)',
                duration: 1
            }, 'blur')
            .fromTo(this.listItems,
                {
                    y: '100vh'
                },
                {
                    y: 0,
                    duration: .5,
                    ease: 'ease',
                    stagger: 0.10,
                }, 'blur')

            .fromTo(this.listItems,
                {
                    scale: .75,
                    filter: 'blur(8px)'
                },
                {
                    duration: .5,
                    scale: 1,
                    stagger: 0.10,
                    delay: .5,
                    filter: '',
                }, 'blur');

        let rand = (max, min) => {
            return Math.floor(Math.random() * max) + min
        }

        this.bubbleAnimation = (control) => {
            let timelineArray = [];
            setTimeout(() => {
                let bubbles = document.querySelectorAll('.bubble');
                Array.from(bubbles).map((bubble) => {
                    bubble.addEventListener('mouseenter', (e) => {
                        new TimelineMax().fromTo(e.target,
                            {},
                            {
                                autoAlpha: 0, duration: 0.05
                            })
                    })
                    timelineArray.push(new TimelineMax({ paused: true, repeat: -1, delay: 0 }).fromTo(bubble,
                        {
                            x: rand(100, 0) + 'vw',
                            y: '130vh',
                            scale: '0.' + rand(9, 1),
                            zIndex: 100
                        },
                        {
                            x: rand(120, 100) + 'vw',
                            y: rand(75, -20) + 'vh',
                            scale: rand(3, 1) + '.' + rand(9, 0),
                            duration: rand(12, 7),
                            delay: rand(3, 0),
                            ease: Linear.easeNone,
                            stagger: 0.4,
                            display: 'none',
                            zIndex: 100
                        }, 'bubbles'
                    ))
                })
                switch (control) {
                    case 'play':
                    default:
                        timelineArray.map((timeline) => {
                            timeline.play();
                        })
                        break;
                    case 'pause':
                        timelineArray.map((timeline) => {
                            timeline.pause(0);
                        })
                        break;
                }
            }, 1000)
        }
    }

    render () {

        let mobileNavStyle = {
            height: `calc(100vh - 78px)`,
        };

        return (
            <div ref={this.navBar}>
                <nav className={'nav-mobile d-md-none position-relative w-100'}>
                    <div id={'nav-toggle'} className={'collapsable-nav d-md-none'}>
                        <span onClick={this.handleClick}>
                            <img src={line} className={'burger burgerTop'} alt={'burger-menu-top'}
                                ref={this.burgerTop} />
                            <img src={line} className={'burger burgerMiddle'} alt={'burger-menu-middle'}
                                ref={this.burgerMiddle} />
                            <img src={line} className={'burger burgerBottom'} alt={'burger-menu-bottom'}
                                ref={this.burgerBottom} />
                        </span>
                    </div>
                    <ul style={mobileNavStyle} ref={this.nav}
                        className={`navbar-mobile flex-row flex-wrap w-100 position-fixed ${this.state.menuToggle ? 'open' : ''}`}>

                        <Bubbles />

                        <div className={'row w-100 h-25 m-0'}>
                            <li className={'menu-item col-6 home'}>
                                <AniLink fade duration={1}
                                    color='mediumspringgreen' to='/'
                                    className='nav-link'>
                                    <p> Home </p>
                                </AniLink>
                            </li>
                            <li className={'menu-item col-6 projects'}>
                                <AniLink paintDrip duration={1}
                                    color='mediumspringgreen'
                                    to='/#projects' className='nav-link'>
                                    <p> Projects </p>
                                </AniLink>
                            </li>
                        </div>
                        <div className={'row w-100 h-25 m-0'}>
                            <li className={'menu-item col-6 technologies'}>
                                <AniLink paintDrip duration={1}
                                    color='mediumspringgreen'
                                    to='/#technologies'
                                    className='nav-link'>
                                    <p> Technologies</p>
                                </AniLink>
                            </li>
                            <li className={'menu-item col-6 about'}>
                                <AniLink paintDrip duration={1}
                                    color='mediumspringgreen' to='/#about'
                                    className='nav-link'>
                                    <p> About </p>
                                </AniLink>
                            </li>
                        </div>
                        <div className={'row w-100 h-25 m-0'}>
                            <li className={'menu-item col-6 cv'}>
                                <AniLink paintDrip duration={1}
                                    color='mediumspringgreen' to='/cv'
                                    className='nav-link'>
                                    <p> My CV </p>
                                </AniLink>
                            </li>
                            <li className={'menu-item col-6 baseplate'}>
                                <AniLink paintDrip duration={1}
                                    color='mediumspringgreen'
                                    to='/baseplate' className='nav-link'>
                                    <p> Baseplate </p>
                                </AniLink>
                            </li>
                        </div>
                        <div className={'row w-100 h-25 m-0'}>
                            <li className={'menu-item col-6'}>
                                <AniLink paintDrip duration={1}
                                    color='mediumspringgreen' to='/old_site'
                                    className='nav-link'>
                                    <p> Old Site </p>
                                </AniLink></li>
                            <li className={'menu-item col-6'}>
                                <AniLink paintDrip duration={1}
                                    color='mediumspringgreen' to='/placeholder2'
                                    className='nav-link'>
                                    <p> placeholder2 </p>
                                </AniLink>
                            </li>
                        </div>
                    </ul>
                </nav>
                <nav>
                    <ul className='navbar-nav mr-auto navbar-desktop d-none d-md-flex flex-row justify-content-around'>
                        <img src={logo} alt='Logo'></img>
                        <li><AniLink paintDrip duration={1} color='mediumspringgreen' to='/'
                            className='nav-link'> Home </AniLink></li>
                        <li><AniLink paintDrip duration={1} color='mediumspringgreen' to='/#projects'
                            className='nav-link'> Projects </AniLink></li>
                        <li><AniLink paintDrip duration={1} color='mediumspringgreen' to='/#technologies'
                            className='nav-link'> Technologies </AniLink></li>
                        <li><AniLink paintDrip duration={1} color='mediumspringgreen' to='/#about'
                            className='nav-link'> About </AniLink></li>
                        <li><AniLink paintDrip duration={1} color='mediumspringgreen' to='/cv'
                            className='nav-link'> My CV </AniLink></li>
                        <li><AniLink paintDrip duration={1} color='mediumspringgreen' to='/baseplate'
                            className='nav-link'> Baseplate </AniLink></li>
                        <li><AniLink paintDrip duration={1} color='mediumspringgreen' to='/old_site'
                            className='nav-link'> Old Site </AniLink></li>
                        <li><AniLink paintDrip duration={1} color='mediumspringgreen' to='/placeholder2'
                            className='nav-link'> placeholder2 </AniLink></li>
                    </ul>
                </nav>
            </div>
        );
    }
} 