import React, { Component } from 'react';

export default class Wysiwyg3Col extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            margin: 'my-5',
            columnMargin: 'mb-3 mb-md-0'
        };
    }

    render() {
        return <section class={'wysiwyg3-col ' + this.state.columnMargin}> 
            <div class={'row'}>
                <div className={'wysiwyg-content-1 col-12 col-md-4 ' + this.state.columnMargin}>
                    <p>wysiwyg content 1 </p>
               </div>
               <div className={'wysiwyg-content-2 col-12 col-md-4 ' + this.state.columnMargin}>
                    <p>wysiwyg content 2 </p>
               </div>
               <div className={'wysiwyg-content-3 col-12 col-md-4'}>
                    <p>wysiwyg content 3 </p>
               </div>
            </div>
        </section>
    }
}