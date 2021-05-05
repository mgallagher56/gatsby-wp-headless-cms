import React, { Component } from 'react';
import GliderComponent from 'react-glider-carousel';
import ModuleParser from '../ModuleParser';

export default class CardContainer extends Component {
    render() {
        let cards = this.props.module.cards;
        let cardType = this.props.module.cardType;

        if ( null !== this.props.module.cards ) {
            if ( 'longcard' !== cardType ) {
                return(
                    <section className={'container'}>
                        <div className={'row'}>
                            <GliderComponent
                            // hasArrows={true}
                            hasDots={true}
                            draggable={true}
                            // arrows={{
                            //     prev: 'glider-prev',
                            //     next: 'glider-next'
                            //   }}
                            settings={{
                                slidesToShow: '3',
                                slidesToScroll: 1,
                                scrollLock: false,
                                rewind: true,
                                draggable: true,
                                duration: 1
                            }}>
                                <ModuleParser moduleData={ cards } moduleName={ cardType } />
                            </GliderComponent>
                        </div>
                    </section>
                )
            } else {
                return( <section className={'container'}>
                        <div className={'row'}>
                            <ModuleParser moduleData={ cards } moduleName={ cardType } />
                        </div>
                </section>
                )
            }
        } else {
            return( <section className={'container'}>
                <h3>Add cards to card container in wordpress</h3>
            </section>
            )
        }
    }
}