import React, { Component } from 'react';
import card_eg from '../../assets/images/gatsby-icon.png'


export default class LogoParade extends Component {

    render() {
        return <section class={'conatiner'}>
            <div className={'row'}>
                <div class={'col-12 d-flex flex-wrap justify-content-center'}>
                    <img class={'col-2'} src={card_eg} alt={''} />
                    <img class={'col-2'} src={card_eg} alt={''} />
                    <img class={'col-2'} src={card_eg} alt={''} />
                    <img class={'col-2'} src={card_eg} alt={''} />
                    <img class={'col-2'} src={card_eg} alt={''} />
                    <img class={'col-2'} src={card_eg} alt={''} />
                    <img class={'col-2'} src={card_eg} alt={''} />
                </div>
            </div>
        </section>
    }
}