import React from 'react';

import OverlayNavbar from './OverlayNavbar';
import IconDetail from './IconDetail';
import { animate } from './Animation';
import styled from 'styled-components';

export default class Header extends React.Component{
    openAnimationTime = 300;
    baseHeight = 60;
    contentHeight = 240;
    state = {
        eventHeight: (-1) * this.contentHeight,
        eventOpen: false
    };

    baseIconSize = {text: "13px", icon: "28px"};
    render(){
        const EventDetails = styled.div`
            position: absolute;
            top: ${this.state.eventHeight}px;
            height: ${this.baseHeight + this.contentHeight}px;
        `;
        const EventContainer = styled.div`
            height: ${this.baseHeight}px;
        `;
        const Content = styled.div`
            height: ${this.contentHeight}px;
        `;
        const Base = styled.div`
            height: ${this.baseHeight}px;
        `;
        return (
            <div className='header'>
                <EventContainer className='event-container'>
                    <EventDetails
                        className="event-details"
                        onClick={this.toggleEvent}>
                        <Content className="content">
                            content
                        </Content>
                        <Base className="base">
                            <div className="left-side">
                                <IconDetail
                                    text="24 de septiembre"
                                    icon="far fa-calendar"
                                    size={this.baseIconSize}
                                />
                            </div>
                            <div className="right-side">
                                <IconDetail
                                    text="paraninfo UMSA"
                                    icon="fas fa-map-marker-alt"
                                    size={this.baseIconSize}
                                />
                            </div>
                        </Base>
                    </EventDetails>
                </EventContainer>
                <OverlayNavbar />
            </div>
        )
    }
    toggleEvent =  ()  => {
        const duration = this.openAnimationTime;
        if(this.state.eventOpen) {
            animate(duration,'easeOutQuad', 240).subscribe(x => {
                this.setState({
                    eventHeight: (-1)*x
                });
            });
        } else {
            animate(duration,'easeOutQuad', 240).subscribe(x => {
                this.setState({
                    eventHeight: x - 240
                });
            });
        }
        this.setState({eventOpen: !this.state.eventOpen});
    }
}