import React, { Component } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Bubbles from './Bubbles';
import DesktopNav from './DesktopNav';
import { TimelineMax, Linear } from 'gsap';

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
            document.body.style.overflowY = 'hidden';
            document.getElementById( 'navbar-mobile' ).style.top = window.scrollY + 'px';
            this.bubbleAnimation('play')
 
        } else {
            this.navAnimation.reverse();
            document.body.style.overflowY = 'visible';
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
        this.navBackground = this.navBar.current.parentElement.nextSibling.children;
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
                }, 'blur'
            );

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
                    return timelineArray.push(new TimelineMax({ paused: true, repeat: -1, delay: 0 }).fromTo(bubble,
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
                    case 'pause':
                        timelineArray.map((timeline) => {
                            return timeline.pause();
                        })
                        break;
                    case 'play':
                    default:
                        timelineArray.map((timeline) => {
                            return timeline.play( 0 );
                        })
                        break;
                }
            }, 1000)
        }
    }
    
    render () {
        return (
            <div ref={this.navBar}>
                <nav className={`nav-mobile d-flex d-md-none position-absolute justify-content-center w-100 ${this.state.menuToggle ? 'open' : ''}`}>
                    <a role={'button'} id={'nav-toggle'} className={'collapsible-nav d-md-none d-flex flex-column justify-content-center'} onClick={this.handleClick}>
                        <svg width="55" height="45" viewBox="0 0 100 100">
                            <path class="menu-icon line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                            <path class="menu-icon line2" d="M 20,50 H 80" />
                            <path class="menu-icon line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                        </svg>
                    </a>
                    <ul id={ 'navbar-mobile' } ref={this.nav} className={'navbar-mobile flex-row flex-wrap w-100 h-100 position-absolute'}>
                    <Bubbles />
                        <li className={'menu-item home'}>
                            <AniLink fade duration={1}
                                color='mediumspringgreen' to='/'
                                className='nav-link w-100 h-100'
                                onClick={this.handleClick}>
                                <p> Home </p>
                            </AniLink>
                        </li>
                        <li className={'menu-item projects'}>
                            <AniLink paintDrip duration={1}
                                color='mediumspringgreen'
                                to='/projects' className='nav-link w-100 h-100'
                                onClick={this.handleClick}>
                                <p> Projects </p>
                            </AniLink>
                        </li>
                        <li className={'menu-item technologies'}>
                            <AniLink paintDrip duration={1}
                                color='mediumspringgreen'
                                to='/#technologies'
                                className='nav-link w-100 h-100'
                                onClick={this.handleClick}>
                                <p> Technologies</p>
                            </AniLink>
                        </li>
                        <li className={'menu-item about'}>
                            <AniLink paintDrip duration={1}
                                color='mediumspringgreen' to='/experience'
                                className='nav-link w-100 h-100'
                                onClick={this.handleClick}>
                                <p> Experience </p>
                            </AniLink>
                        </li>
                        <li className={'menu-item baseplate'}>
                            <AniLink paintDrip duration={1}
                                color='mediumspringgreen'
                                to='/baseplate' className='nav-link w-100 h-100'
                                onClick={this.handleClick}>
                                <p> Baseplate </p>
                            </AniLink>
                        </li>
                        <li className={'menu-item'}>
                            <AniLink paintDrip duration={1}
                                color='mediumspringgreen' to='/placeholder2'
                                className='nav-link w-100 h-100'
                                onClick={this.handleClick}>
                                <p> Contact </p>
                            </AniLink>
                        </li>
                    </ul>
                </nav>
                <DesktopNav />
            </div>
        );
    }
} 