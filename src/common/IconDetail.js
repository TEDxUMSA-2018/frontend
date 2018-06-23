import React from 'react';
import styled from 'styled-components';
import { animate } from './Animation';


class IconDetail extends React.Component{
    constructor(props) {
        super(props);
        const textWidth = (props.displayText === undefined || props.displayText )?100:0;
        const opacity = (props.displayText === undefined || props.displayText )?1:0;
        this.state = {
            minTextWidth: textWidth,
            opacity: opacity
        }
    }

    render () {
        const Icon = styled.div`
            color: ${(this.props.color)? this.props.color : "black"}
            font-size: ${ this.props.size.icon };
            min-width: 10%;
        `;
        const Text = styled.div`
            padding-left: 6px;
            color: ${(this.props.color)? this.props.color : "black"}
            font-size: ${ this.props.size.text };
            opacity: ${this.state.opacity};
            max-width: ${this.state.minTextWidth}%; 
        `;
        return (
            <div className="icon-detail">
                <Icon>
                    <i className={this.props.icon} />
                </Icon>
                <Text>{this.props.text}</Text>
            </div>
        )
    };
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.displayText !== this.props.displayText) {
            const duration = this.props.animationTime;
            let textWidth = (pos) => (1-pos)*100;
            let opacity = (pos) => (1-pos);
            if ( this.props.displayText) {
                textWidth = (pos) => pos*100;
                opacity = (pos) => pos;
            }
            animate((duration)? duration: 300,'easeOutQuad', 1)
                .subscribe(pos => {
                    this.setState({
                        minTextWidth: textWidth(pos),
                        opacity: opacity(pos)
                    })
                })
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if ( nextProps.displayText != null && nextProps.displayText !== this.props.displayText) {
            return true;
        }
        if ( nextState.minTextWidth !== this.state.minTextWidth ) {
            return true;
        }
        return false;
    }
}

export { IconDetail }