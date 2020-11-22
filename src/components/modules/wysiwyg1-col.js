import React, { Component } from 'react';

export default class Wysiwyg1Col extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            margin: 'my-3',
        };
    }

    render() {
        return <section class={'wysiwyg1-col ' + this.state.margin}> 
            <div class={'row'}>
                <div className={'wysiwyg-content col-12'}>
                    <p>1-col wysiwyg content </p>
               </div>
            </div>
        </section>
    }
}