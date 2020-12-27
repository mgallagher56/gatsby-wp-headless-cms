import React, { Component } from 'react';
import card_eg from '../../assets/images/gatsby-icon.png'

export default class LongCard extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return <div class={'card long-card row col-12 p-0 mx-auto'}>
            <div class={'card-media col-6 col-md-7 h-100 p-0'}>
                <img src={card_eg} alt={'card image'} />
            </div> 
            <div class={'card-content col-6 col-md-5 p-2'}>
                <h4>Title</h4>
                <h5>Subtitle</h5>
                <p>Body Text</p>
            </div>
        </div>
    }
}