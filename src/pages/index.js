import React, { Component } from 'react';
import NavBar from '../components/template-parts/navBar';
import Hero from '../components/modules/hero';
import '../assets/styles.css';
import CardContainer from '../components/modules/cardContainer';
import Wysiwyg1Col from '../components/modules/wysiwyg1-col';
import Wysiwyg2Col from '../components/modules/wysiwyg2-col';
import Wysiwyg3Col from '../components/modules/wysiwyg3-col';
import Wysiwyg4Col from '../components/modules/wysiwyg4-col';



class IndexPage extends Component {
    render() {
        return (
            <div> 
                <NavBar />
                    <h3>Header</h3>
                <Hero />
                <div className={ 'container' }>
                    <Wysiwyg1Col />
                    <Wysiwyg2Col />
                    <Wysiwyg3Col />
                    <Wysiwyg4Col />
                    <h3>Projects</h3>
                    <h2>Card Container</h2>
                    <CardContainer />
                    <h3>Technologies</h3>
                    <h3>About Me</h3>
                    <h3>Socials</h3>
                </div>
            </div>
        );
    }
}

export default IndexPage;