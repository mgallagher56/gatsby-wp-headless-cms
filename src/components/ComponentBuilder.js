import React from "react";
import Wysiwyg1Col from './acfModules/wysiwyg1-col';
import Wysiwyg2Col from './acfModules/wysiwyg2-col';
import Wysiwyg3Col from './acfModules/wysiwyg3-col';
import Wysiwyg4Col from './acfModules/wysiwyg4-col';
import WysiwygMedia from './acfModules/wysiwyg-media';
import CardContainer from './acfModules/cardContainer';
import Hero from './acfModules/hero';
import HeroCard from "./cards/heroCard";
import LongCard from "./cards/longCard";

const Components = {
        wysiwyg1col    : Wysiwyg1Col,
        wysiwyg2col    : Wysiwyg2Col,
        wysiwyg3col    : Wysiwyg3Col,
        wysiwyg4col    : Wysiwyg4Col,
        wysiwygmedia   : WysiwygMedia,
        cardcontainer  : CardContainer,
        hero           : Hero,
        herocard       : HeroCard,
        longcard       : LongCard
};

const ComponentBuilder = ( module, moduleName ) => {
    if ( moduleName !== '' ) {
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

export default ComponentBuilder