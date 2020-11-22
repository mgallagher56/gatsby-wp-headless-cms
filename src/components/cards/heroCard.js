import React, { Component } from 'react';
import card_eg from '../../assets/images/gatsby-astronaut.webp'

export default class HeroCard extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return <div class={'row my-3 col-12 col-md-6 col-lg-4 '}>
            <div class={' card hero-card'}>
                <div class={'card-media col-12'}>
                    <img class={'w-100'} src={card_eg} alt={'card image'} />
                </div> 
                <div class={'card-content col-12 p-2'}>
                    <h3>Title</h3>
                    <h4>Subtitle</h4>
                    <p>Here is an example of some longer body text</p>
                </div>
            </div>
        </div>
    }
}