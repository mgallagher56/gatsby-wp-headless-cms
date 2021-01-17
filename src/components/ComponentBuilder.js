import React from "react";
import Wysiwyg1Col from './modules/wysiwyg1-col';
import Wysiwyg2Col from './modules/wysiwyg2-col';
import Wysiwyg3Col from './modules/wysiwyg3-col';
import Wysiwyg4Col from './modules/wysiwyg4-col';
import WysiwygMedia from './modules/wysiwyg-media';
import CardContainer from './modules/cardContainer';
import Hero from './modules/hero';

const Components = {
        wysiwyg1col    : Wysiwyg1Col ,
        wysiwyg2col    : Wysiwyg2Col,
        wysiwyg3col    : Wysiwyg3Col,
        wysiwyg4col    : Wysiwyg4Col,
        wysiwygmedia   : WysiwygMedia,
        cardcontainer  : CardContainer,
        hero           : Hero
};

export default ( module ) => {
    if ( typeof module.__typename !== "undefined" ) {
        let moduleName = module.__typename.substr( 'WpPage_Pagebuilder_Layouts_'.length).toLowerCase()
        // component does exist
        if (typeof Components[moduleName] !== "undefined") {
            return React.createElement(Components[moduleName], {
                module: module
            });
        }
        // component doesn't exist yet
        return React.createElement(
            () => <div>The component {moduleName} has not been created yet.</div>,
            { key: module._uid }
        );
    } else {
         // component doesn't exist yet
         return React.createElement(
            () => <div>Add modules in Wordpress to view them here</div>
        );
    }
}