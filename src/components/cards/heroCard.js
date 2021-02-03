import React, { Component } from 'react';
import Button from '../../components/Button';

export default class HeroCard extends Component {
    constructor( props ) {
        super( props );
    }

    static defaultProps = {
        title: 'Title',
        subtitle: 'Subtitle',
        body: 'Body ',
    }

    render() {
        return <>
            <div class={'card hero-card my-3 mx-3'}>
                <div class={'card-media'}>
                    <img src={this.props.module.image.localFile.publicURL} alt={'card image'} />
                </div> 
                <div class={'card-content p-2'}>
                    <h5>{this.props.module.title}</h5>
                    <h6>{this.props.module.subtitle}</h6>
                    <div dangerouslySetInnerHTML={{__html: this.props.module.content }}></div>
                    <Button type={'small'} href={this.props.module.url} text={this.props.module.buttonText} />
                </div>
            </div>
        </>
    }
}

// type: 'large',
// href: '#',
// defaultClasses: 'btn ',
// addClasses: '',
// text: 'Button'