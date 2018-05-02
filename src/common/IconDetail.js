import React from 'react';
import styled from 'styled-components';


const IconDetail = (props) => {
    const Icon = styled.div`
        padding-left: 6px;
        color: ${(props.color)? props.color : "black"}
        font-size: ${ props.size.icon };
    `;
    const Text = styled.div`
        padding-left: 6px;
        color: ${(props.color)? props.color : "black"}
        font-size: ${ props.size.text };
    `;
    return (
        <div className="icon-detail">
            <Icon>
                <i className={props.icon} />
            </Icon>
            <Text>{props.text}</Text>
        </div>
    );
}

export default IconDetail;