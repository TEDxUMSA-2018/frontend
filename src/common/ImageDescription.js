import React from 'react';
import styled from 'styled-components';

let IDContainer;
export default class ImageDescription extends React.Component{
    constructor(props) {
        super(props);
        IDContainer = styled.div`
            overflow: hidden;
            position: relative;
            width: ${props.width};
            height: auto;
        `;
    }
    render(){
        return (
            <IDContainer>
                <img
                    className="IDImage"
                    src={this.props.img}
                    alt="" />
                <div className="blur" />
                <div id="title">
                    {this.props.title}
                </div>
                <div id="text">
                    {this.props.text}
                </div>
            </IDContainer>
        )
    }
}