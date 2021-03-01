import React, { Component } from 'react';

export default class Wysiwyg1Col extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            margin: 'my-5',
        };
    }

    render() {
        return <section class={'wysiwyg1-col ' + this.state.margin}> 
            <div class={'container'}>
                <div class={'row'}>
                    <div className={'wysiwyg-content col-12'} dangerouslySetInnerHTML={{__html: this.props.module.wysiwyg }} />
                </div>
            </div>
        </section>
    }
}