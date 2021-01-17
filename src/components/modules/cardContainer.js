import React, { Component } from 'react';
import GliderComponent from 'react-glider-carousel';
import './../../assets/glider.css';
import HeroCard from '../cards/heroCard';
import LongCard from '../cards/longCard';

export default class CardContainer extends Component {
    constructor( props ) {
        super( props );
    }
    
    render() {
        return(
            <GliderComponent
            hasArrows={true}
            hasDots={true}
            draggable={true}
            arrows={{
                prev: 'glider-prev',
                next: 'glider-next'
              }}
            settings={{
                slidesToShow: '2.5',
                slidesToScroll: 1,
                scrollLock: false,
                rewind: true,
                draggable: true,
                duration: 1
            }}>
                <div><HeroCard title={'Project 1'} /></div>
                <div><HeroCard title={'Project 2'} /></div>
                <div><HeroCard title={'Project 3'} /></div>
                <div><HeroCard title={'Project 4'} /></div>
                <div><HeroCard title={'Project 5'} /></div>
                <div><HeroCard title={'Project 6'} /></div>
                <button aria-label="Previous" class="glider-prev">«</button>
                <button aria-label="Next" class="glider-next">»</button> 

            </GliderComponent>
        )
        // return <section class={'card-container-module overflow-hidden my-5'}>
        //     <h2>{this.props.module.title}</h2>
        //     <div class={'col-12 d-flex flex-wrap justify-content-between'}>

        //     </div>
        // </section> 
    }
}