import React, { Component } from 'react';
import GliderComponent from 'react-glider-carousel';
import { getDocument } from 'ssr-window';
import ModuleParser from '../ModuleParser';
const document = getDocument();
export default class CardContainer extends Component {
    render() {
        let cards = this.props.module.cards;
        let cardType = this.props.module.cardType;

        // add tab role to pagination dots in glider component
        this.gliderDots = document.querySelectorAll('.glider-dot');
        let len = this.gliderDots.length;
        let i;
        for (i = 0; i < len; i++) {
            this.gliderDots[i].setAttribute('role', 'tab');
            console.log(this.gliderDots[i].attributes);
        }

        if (null !== this.props.module.cards) {
            if ('longcard' !== cardType) {
                return (
                    <section className={'container'}>
                        <div className={'row justify-content-center'}>
                            {/* <GliderComponent
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
                                }}> */}
                                <ModuleParser moduleData={cards} moduleName={cardType} />
                            {/* </GliderComponent> */}
                        </div>
                    </section>
                )
            } else {
                return (<section className={'container'}>
                    <div className={'row'}>
                        <ModuleParser moduleData={cards} moduleName={cardType} />
                    </div>
                </section>
                )
            }
        } else {
            return (<section className={'container'}>
                <h3>Add cards to card container in wordpress</h3>
            </section>
            )
        }
    }
}