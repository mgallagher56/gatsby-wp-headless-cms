import React, { Component } from 'react';

export default class CTA extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return <div class={'cta-module row col-12 p-0'}>
            <div class={' col-6 col-md-7 h-100 p-0'}>
                <img src={card_eg} alt={'card image'} />
            </div> 
            <div class={'button-container col-6 col-md-5 p-2'}>
                <h4>Title</h4>
                <h5>Subtitle</h5>
                <p>Body Text</p>
            </div>
        </div>
    }
}