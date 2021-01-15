import React, { Component } from 'react';
import HeroCard from '../cards/heroCard';
import LongCard from '../cards/longCard';

export default class CardContainer extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return <section class={'card-container-module overflow-hidden my-5'}>
            <h2>{this.props.module.title}</h2>
            <div class={'col-12 d-flex flex-wrap justify-content-between'}>
                <LongCard title={'Project 1'} />
                <HeroCard title={'Project 2'} />
                <HeroCard title={'Project 3'} />
                <HeroCard title={'Project 4'} />
            </div>
        </section> 
    }
}