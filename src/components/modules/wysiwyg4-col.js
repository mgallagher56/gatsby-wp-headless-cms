import React, { Component } from 'react';

export default class Wysiwyg4Col extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            margin: 'my-3',
        };
    }

    render() {
        return <section class={'wysiwyg4-col '  + this.state.margin}> 
            <div class={'row'}>
                <div className={'wysiwyg-content-1 col-12 col-md-6 col-lg-3'}>
                    <p>wysiwyg content 1 </p>
               </div>
               <div className={'wysiwyg-content-2 col-12 col-md-6 col-lg-3'}>
                    <p>wysiwyg content 2 </p>
               </div>
               <div className={'wysiwyg-content-3 col-12 col-md-6 col-lg-3'}>
                    <p>wysiwyg content 3 </p>
               </div>
               <div className={'wysiwyg-content-4 col-12 col-md-6 col-lg-3'}>
                    <p>wysiwyg content 4 </p>
               </div>
            </div>
        </section>
    }
}