import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { Component } from 'react';

export default class Hero extends Component {

    render() {
        let image = getImage(this.props.module.image.localFile);
        let altTag = 'undefined' !== typeof(this.props.module.image.altText) ? 
        this.props.module.image.altText : '';

        return <section class={'hero-module mb-5 mt-md-5'}> 
            <div class={'container'}>
                <div className={'row d-flex flex-column flex-md-row'}>
                    <div className={'hero-media d-flex col-12 col-md-7 overflow-hidden'}>
                        <GatsbyImage 
                            className={'hero_image'}  
                            image={image} 
                            alt={altTag}
                        />
                    </div>
                    <div className={'hero-content d-flex flex-column col-12 col-md-5'} 
                    dangerouslySetInnerHTML={{__html: this.props.module.wysiwyg}} />
                </div>
            </div>
        </section>
    }
}