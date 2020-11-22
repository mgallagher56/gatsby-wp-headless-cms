import React, { Component } from 'react';
import hero_image from '../../assets/images/stock_languages.jpeg'

export default class Hero extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return <section class={'hero-module mb-5'}> 
            <div class={'row d-flex flex-column flex-md-row'}>
                <div class={'hero-media d-flex col-12 col-md-8 overflow-hidden'}>
                    <img class={'hero_image'} src={hero_image} alt='Web devices and programming languages' />
                </div>
                <div class={'hero-content d-flex flex-column col-12 col-md-4 text-center'}>
                        <h1>Marc Gallagher-Reid</h1>
                        <h2>Web Developer</h2>
                </div>
            </div>
        </section>
    }
}