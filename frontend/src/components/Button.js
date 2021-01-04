import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props !== nextProps;
    }

    render() {
        return (
            <button width="128px;" height="64px;" onClick={this.props.onClick}>Hi</button>
        );
    }
}

export default Button;