import React, { Component } from 'react';
import NavBar from '../components/template-parts/navBar';
import '../assets/styles.css';

const NotFound = () => {
    return (
        <div>
            <NavBar />
            <div className={ 'container' }>
                <h1>Oops, looks like this page hasn't been built yet</h1>
            </div>
        </div>
    );
}

export default NotFound;