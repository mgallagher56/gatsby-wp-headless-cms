import React, { Component } from 'react';
import Button from './../Button';

export default class CTA extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return <div class={'cta-module card row mx-auto my-5 text-center col-12 p-0 flex-md-row text-md-left'}>
            <div class={'cta-content p-2 col-12 col-md-6 offset-md-1'}>
                <h2>Title</h2>
                <p>Subtitle</p>
            </div>
            <div class={'button-container d-flex p-3 mx-auto justify-content-around col-12 col-md-5 flex-md-row my-md-auto'}>
                <Button />
                <Button />
            </div>
        </div>
    }
}