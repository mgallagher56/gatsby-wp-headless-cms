import React, { Component } from 'react';
import card_eg from '../../assets/images/gatsby-astronaut.webp'

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
        return <div class={'row my-3 mx-auto col-12 col-md-6 col-lg-4 '}>
            <div class={'card hero-card'}>
                <div class={'card-media col-12'}>
                    <img class={'w-100'} src={card_eg} alt={'card image'} />
                </div> 
                <div class={'card-content col-12 p-2'}>
                    <h3>{this.props.title}</h3>
                    <h4>{this.props.subtitle}</h4>
                    <p>{this.props.body}</p>
                </div>
            </div>
        </div>
    }
}