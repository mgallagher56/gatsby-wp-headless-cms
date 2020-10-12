import React, { Component } from 'react';

class Button extends Component {
    static defaultProps = {
        type: 'large',
        href: '#',
        defaultClasses: 'btn ',
        addClasses: '',
        text: 'Button'
    }
    
    
    render() {
        return (
            <div>
                <button href={this.props.href} className={this.props.defaultClasses + this.props.addClasses} >{this.props.text}</button>
            </div>
        )
    }
}

export default Button;

