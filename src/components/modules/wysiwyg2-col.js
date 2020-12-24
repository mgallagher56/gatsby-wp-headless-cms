import React, { Component } from 'react';

export default class Wysiwyg2Col extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            margin: 'my-5',
            columnMargin: 'mb-3 mb-md-0'
        };
    }

    render() {
        return <section class={'wysiwyg2-col ' + this.state.margin}>
            <div class={'row'}>
                <div className={'wysiwyg-content-1 col-12 col-md-6 ' + this.state.columnMargin}>
                    <p>2-col wysiwyg content 1 </p>
               </div>
               <div className={'wysiwyg-content-2 col-12 col-md-6'}>
                    <p>2-col wysiwyg content 2 </p>
               </div>
            </div>
        </section>
    }
}