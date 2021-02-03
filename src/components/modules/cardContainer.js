import React, { Component } from 'react';
import GliderComponent from 'react-glider-carousel';
import ModuleParser from '../ModuleParser';

export default class CardContainer extends Component {
    constructor( props ) {
        super( props );
    }
    
    render() {
        let cards = this.props.module.cards;
        let cardType = this.props.module.cardType;

        if ( null !== this.props.module.cards ) {
            return(
                <GliderComponent
                hasArrows={true}
                hasDots={true}
                draggable={true}
                // arrows={{
                //     prev: 'glider-prev',
                //     next: 'glider-next'
                //   }}
                settings={{
                    slidesToShow: '3.5',
                    slidesToScroll: 1,
                    scrollLock: false,
                    rewind: true,
                    draggable: true,
                    duration: 1
                }}>
                <ModuleParser moduleData={ cards } moduleName={ cardType } />
                </GliderComponent>

            )
        } else {
            return(<h3>Add cards to card container in wordpress</h3>
            )
        }
        // return <section class={'card-container-module overflow-hidden my-5'}>
        //     <h2>{this.props.module.title}</h2>
        //     <div class={'col-12 d-flex flex-wrap justify-content-between'}>

        //     </div>
        // </section> 
    }
}