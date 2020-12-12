import React, { Component } from 'react';
import hero_image from '../../assets/images/stock_languages.jpeg'

export default class WysiwygMedia extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            margin: 'my-5',
        };
    }

    static defaultProps = {
        title: 'Title',
        subtitle: 'Subtitle',
        body: 'Body ',
    }

    render() {
        return <section class={'wysiwygMedia ' + this.state.margin}>
            <div class={'row'}>
                <div className={'col-12 mb-3 mb-md-0 col-md-6'}>
                    <h5>{this.props.subtitle}</h5>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.body}</p>
               </div>
               <div className={'wysiwyg-media col-12 col-md-6 overflow-hidden'}>
                   <img class={'media_image w-100'} src={hero_image} alt='Example' />
               </div>
            </div>
        </section>
    }
}