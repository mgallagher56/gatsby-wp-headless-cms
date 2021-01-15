import React, { Component } from 'react';
import ComponentBuilder from './ComponentBuilder'

class ModuleParser extends Component {
    constructor(props){
        super(props);

        this.props = {
            moduleData: [],
        }
    }

    render() {
        return <>
            { 
                this.props.moduleData.map( ( module ) => {
                    return ComponentBuilder( module )
                })
            }
        </>
    }
}
    
export default ModuleParser;
