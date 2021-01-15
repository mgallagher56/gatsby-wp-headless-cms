import React, { Component } from 'react';
import hero_image from '../../assets/images/stock_languages.jpeg'

export default class Hero extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return <section class={'hero-module mb-5'}> 
            <div class={'row d-flex flex-column flex-md-row'}>
                <div class={'hero-media d-flex col-12 col-md-7 overflow-hidden'}>
                    <img 
                        class={'hero_image'}  
                        src={this.props.module.image.localFile.publicURL} 
                        alt={this.props.module.image.altText}
                     />
                </div>
                <div className={'hero-content d-flex flex-column col-12 col-md-5'} 
                dangerouslySetInnerHTML={{__html: this.props.module.wysiwyg}} />
            </div>
        </section>
    }
}