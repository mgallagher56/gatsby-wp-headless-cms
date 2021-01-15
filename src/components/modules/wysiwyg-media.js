import React, { Component } from 'react';
import hero_image from '../../assets/images/stock_languages.jpeg'

export default class WysiwygMedia extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            margin: 'my-5',
        };
    }

    render() {
        return <section class={'wysiwygMedia ' + this.state.margin}>
            <div class={'row'}>
                <div className={'wysiwyg-media-content col-12 mb-3 mb-md-0 col-md-6'} 
                dangerouslySetInnerHTML={{__html: this.props.module.wysiwygContent }} />
               <div className={'wysiwyg-media col-12 col-md-6'}>
                   <img class={'media_image w-100'} src={this.props.module.image.localFile.publicURL} alt={this.props.module.image.altText} />
               </div>
            </div>
        </section>
    }
}