import React, { Component } from 'react';
import NavBar from '../components/template-parts/navBar';
import '../assets/styles.css';


class IndexPage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className={ 'container' }>
                    <h3>Header</h3>
                    <h3>Projects</h3>
                    <h3>Technologies</h3>
                    <h3>About Me</h3>
                    <h3>Socials</h3>
                </div>
            </div>
        );
    }
}

export default IndexPage;