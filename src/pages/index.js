import React, { Component } from 'react';
import NavBar from '../components/template-parts/navBar';
import Hero from '../components/modules/hero';
import '../assets/styles.css';
import CardContainer from '../components/modules/cardContainer';
import Wysiwyg1Col from '../components/modules/wysiwyg1-col';
import Wysiwyg2Col from '../components/modules/wysiwyg2-col';
import Wysiwyg3Col from '../components/modules/wysiwyg3-col';
import Wysiwyg4Col from '../components/modules/wysiwyg4-col';
import CTA from '../components/modules/cta';
import WysiwygMedia from '../components/modules/wysiwyg-media';
import LogoParade from '../components/modules/logpParade';

class IndexPage extends Component {
    render() {
        return (
            <div> 
                <NavBar />
                <Hero />
                <div className={ 'container' }>
                    <Wysiwyg1Col title={'Projects'} body={'Find out more about the projects I\'ve helped develop'} />
                    <CardContainer />
                    <Wysiwyg1Col title={'Technologies'} body={'Have a look at some of the technologies I work with'} />
                    <LogoParade />
                    <Wysiwyg2Col />
                    <Wysiwyg3Col />
                    <Wysiwyg4Col />
                    <CTA title={'Feeling social?'} body={'Find me on Github or LinkedIn'} buttonText={'Go to GitHub'}/>
                    <WysiwygMedia subtitle={'– About'} title={'Who am I?'} body={''}/>
                    <CTA title={'Looking to work on a project?'} body={'Have a look at some more information or drop me a line'}/>
                </div>
            </div>
        );
    }
}

export default IndexPage;