import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { Component } from 'react';

export default class WysiwygMedia extends Component {
    constructor(props) {
        super(props);

        this.state = {
            margin: 'my-5',
        };
    }

    render() {
        let image = getImage(this.props.module.image.localFile);
        let altTag = 'undefined' !== typeof(this.props.module.image.altText) ? 
        this.props.module.image.altText : '';

        return <section class={'wysiwygMedia ' + this.state.margin}>
            <div className={'container'}>
                <div class={'row'}>
                    <div className={'wysiwyg-media-content col-12 mb-3 mb-md-0 col-md-6'}
                        dangerouslySetInnerHTML={{ __html: this.props.module.wysiwygContent }} />
                    <div className={'wysiwyg-media col-12 col-md-6'}>
                        <GatsbyImage class={'media_image w-100'} image={image} alt={altTag} />
                    </div>
                </div>
            </div>
        </section>
    }
}