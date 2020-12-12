import React, { Component } from 'react';

export default class Wysiwyg1Col extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            margin: 'my-5',
        };
    }

    static defaultProps = {
        title: 'H2 Heading',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }

    render() {
        return <section class={'wysiwyg1-col ' + this.state.margin}> 
            <div class={'row'}>
                <div className={'wysiwyg-content col-12'}>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.body}</p>
                </div>
            </div>
        </section>
    }
}