import React, { Component } from 'react';

export default class Wysiwyg3Col extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            margin: 'my-5',
            columnMargin: 'mb-3 mb-md-0'
        };
    }

    static defaultProps = {
        col1Title: 'H2 Heading',
        col1Body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        col2Title: 'H2 Heading',
        col2Body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        col3Title: 'H2 Heading',
        col3Body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }

    render() {
        return <section class={'wysiwyg3-col ' + this.state.columnMargin}> 
            <div class={'row'}>
                <div className={'wysiwyg-content-1 col-12 col-md-4 ' + this.state.columnMargin}>
                    <h2>{this.props.col1Title}</h2>
                    <p>{this.props.col1Body}</p>               
                </div>
               <div className={'wysiwyg-content-2 col-12 col-md-4 ' + this.state.columnMargin}>
                    <h2>{this.props.col2Title}</h2>
                    <p>{this.props.col2Body}</p>
                </div>
               <div className={'wysiwyg-content-3 col-12 col-md-4'}>
                    <h2>{this.props.col3Title}</h2>
                    <p>{this.props.col3Body}</p>
               </div>
            </div>
        </section>
    }
}