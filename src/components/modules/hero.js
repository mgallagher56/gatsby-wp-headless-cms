import React, { Component } from 'react';

export default class Hero extends Component {

    render() {
        return <section class={'hero-module mb-5 mt-md-5'}> 
            <div class={'container'}>
                <div className={'row d-flex flex-column flex-md-row'}>
                    <div className={'hero-media d-flex col-12 col-md-7 overflow-hidden'}>
                        <img 
                            className={'hero_image'}  
                            src={this.props.module.image.localFile.childImageSharp.fluid.srcWebp} 
                            alt={this.props.module.image.altText}
                        />
                    </div>
                    <div className={'hero-content d-flex flex-column col-12 col-md-5'} 
                    dangerouslySetInnerHTML={{__html: this.props.module.wysiwyg}} />
                </div>
            </div>
        </section>
    }
}