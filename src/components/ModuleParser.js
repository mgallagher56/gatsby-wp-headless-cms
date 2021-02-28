import React, { Component } from 'react';
import ComponentBuilder from './ComponentBuilder'

class ModuleParser extends Component {
    constructor(props){
        super(props);
    }

    static defaultProps = {
        moduleData: [],
        moduleName: ''
    }

    render() {
        return <>
            {
                this.props.moduleData.map( ( module ) => {
                    let moduleName = typeof module.__typename === 'undefined' ?
                    this.props.moduleName : module.__typename.substr( 'WpPage_Pagebuilder_Layouts_'.length).toLowerCase();
                    return ComponentBuilder( module, moduleName );
                })
            }
        </>
    }
}
    
export default ModuleParser;
