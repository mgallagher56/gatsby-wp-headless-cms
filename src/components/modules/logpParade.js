import React, { Component } from 'react';
import card_eg from '../../assets/images/gatsby-icon.png'


export default class LogoParade extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return <section class={'row'}>
            <div class={'col-12 d-flex flex-wrap justify-content-center'}>
                <img class={'col-2'} src={card_eg} alt={'card image'} />
                <img class={'col-2'} src={card_eg} alt={'card image'} />
                <img class={'col-2'} src={card_eg} alt={'card image'} />
                <img class={'col-2'} src={card_eg} alt={'card image'} />
                <img class={'col-2'} src={card_eg} alt={'card image'} />
                <img class={'col-2'} src={card_eg} alt={'card image'} />
                <img class={'col-2'} src={card_eg} alt={'card image'} />
                <img class={'col-2'} src={card_eg} alt={'card image'} />
            </div>
        </section>
    }
}