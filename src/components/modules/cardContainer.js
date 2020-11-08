import React, { Component } from 'react';
import LongCard from '../cards/longCard';

export default class CardContainer extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return <section class={'card-container-module overflow-hidden'}>
            <div class={'col-12 d-flex flex-wrap '}>
                <LongCard />
                <LongCard />
                <LongCard />
                <LongCard />
                <LongCard />
                <LongCard />
            </div>
        </section>
    }
}