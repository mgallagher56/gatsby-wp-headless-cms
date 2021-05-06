import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { Component } from 'react';
import Button from '../../components/Button';

export default class HeroCard extends Component {

    static defaultProps = {
        title: 'Title',
        subtitle: 'Subtitle',
        body: 'Body ',
    }

    render() {
        let image = null !== this.props.module.image ? getImage(this.props.module.image.localFile) : '';
        let altTag = null !== this.props.module.image ? this.props.module.image.altText : '';

        return <>
            <div class={'card hero-card my-3 mx-3'}>
                <div class={'card-media'}>
                    <GatsbyImage image={image} alt={altTag} className={'h-100 w-100'} />
                </div> 
                <div class={'card-content p-2'}>
                    <a href={this.props.module.url}>
                        <h5>{this.props.module.title}</h5>
                        <h6>{this.props.module.subtitle}</h6>
                        <div dangerouslySetInnerHTML={{__html: this.props.module.content }}></div>
                        <Button type={'small'} href={this.props.module.url} text={this.props.module.buttonText} />
                    </a>
                </div>
            </div>
        </>
    }
}