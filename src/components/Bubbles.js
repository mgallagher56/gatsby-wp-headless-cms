import React, { Component } from 'react';
import bubbleImg from '../assets/images/bubble.webp';
import bubbleBlue from '../assets/images/bubble-blue.webp';
import bubbleMint from '../assets/images/bubble-mint.webp'
import bubbleOrange from '../assets/images/bubble-orange.webp'
import bubblePink from '../assets/images/bubble-pink.webp'
import bubbleYellow from '../assets/images/bubble-yellow.webp'

export default class Bubbles extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            randNumber: Math.floor( Math.random() * 20 ) + 10,
            multiplier: []
        }
    }

    componentDidMount() {
        function range(size, startAt = 1) {
            return [...Array(size).keys()].map(i => i + startAt);
        }

        this.setState( ({
            multiplier: range(this.state.randNumber)
        }) );
    }

    render() {
        return (
            <div>
            {this.state.multiplier.map(
                () => ( <div>
                        <img src={ bubbleImg } className={ 'bubble' } alt={ 'bubble' } />
                        <img src={ bubbleBlue } className={ 'bubble' } alt={ 'bubble' }/>
                        <img src={ bubbleImg } className={ 'bubble' } alt={ 'bubble' } />
                        <img src={ bubbleMint } className={ 'bubble' } alt={ 'bubble' }/>
                        <img src={ bubbleImg } className={ 'bubble' } alt={ 'bubble' } />
                        <img src={ bubbleOrange } className={ 'bubble' } alt={ 'bubble' }/>
                        <img src={ bubbleImg } className={ 'bubble' } alt={ 'bubble' } />
                        <img src={ bubblePink } className={ 'bubble' } alt={ 'bubble' }/>
                        <img src={ bubbleImg } className={ 'bubble' } alt={ 'bubble' } />
                        <img src={ bubbleYellow } className={ 'bubble' } alt={ 'bubble'} />
                        <img src={ bubbleImg } className={ 'bubble' } alt={ 'bubble' } />
                    </div>
                )
            )}
            </div>
        )
    }
}