import React, { Component } from 'react';
import Button from './Button'
import * as data from '../assets/_conf/_colorCombinations.json';

class ColorCombinations extends Component {
    constructor( props ) {
        super( props );
        this.props = {
            colorMaps: '',
            btnTypes: '',
        };
    }

    static defaultProps = {
        colorMaps: Object.entries( data ),
        btnStates: [ 'Idle', 'Outline', 'Text', 'Arrow', 'Icon', 'Circle', 'Square' ],
        btnTypes: [ 'Contained', 'Outline', 'Text', 'Arrow', 'Icon', 'Round', 'Square' ],
    };

    render() {
        // returns a btn for each given state
        let outputBtnStates = ( buttonTypes ) => {
            return buttonTypes.map( ( type ) => {
                return <div className={ 'col' }>
                    <Button addClasses={'btn-small btn-' + type.toLowerCase() } />
                </div>;
            } );
        }

        // returns a row for each button state (e.g. hover) with a column for each button type (e.g. outlined)
        let buttonOutput = ( buttonStates, buttonTypes ) => {
            return buttonStates.map( ( state ) => {
                return <div className={ 'row my-3' }>
                    <div className={ 'col text-center' }>
                        <h4>{ state }</h4>
                    </div>
                    { outputBtnStates( buttonTypes ) }
                </div>;
            } );
        };


        let variationOutput = ( colorMaps ) => {
            return Object.entries( colorMaps[0][1] ).map( ( value, key ) => {
                return <div className='col'>
                    <h3>{ value[1]['set'] + ' ' + value[0] }</h3>
                    { buttonOutput( this.props.btnStates, this.props.btnTypes ) }
                </div>;
            } );
        };


        return (
            <div>
                { variationOutput( this.props.colorMaps ) }
            </div>
        );
    }
}

export default ColorCombinations;