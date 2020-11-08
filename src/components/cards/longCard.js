import React, { Component } from 'react';
import card_eg from '../../assets/images/gatsby-astronaut.webp'

export default class LongCard extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return <div class={'card long-card row col-12 col-md-10 mx-auto'}>
            <div class={'card-media col-6 col-md-8'}>
                <img class={'h-25'} src={card_eg} alt={'card image'} />
            </div>
            <div class={'card-content col-6 col-md-4'}>
                <h3>Title</h3>
                <h4>Subtitle</h4>
                <p>Body Text</p>
            </div>
        </div>
    }
}