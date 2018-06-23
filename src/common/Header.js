import React from 'react';

import { OverlayNavbar } from './OverlayNavbar';
import { IconDetail } from './index';
import { animate } from './Animation';

class Header extends React.Component{
    openAnimationTime = 400;
    baseHeight = 60;
    contentHeight = 240;
    state = {
        eventHeight: (-1) * this.contentHeight,
        eventOpen: false
    };

    baseIconSize = {text: "13px", icon: "28px"};
    render(){
        return (
            <div className='header'>
                <div
                    className='event-container'
                    style={{height: this.baseHeight}}>
                    <div
                        className="event-details"
                        style={{
                            top: this.state.eventHeight + "px",
                            height: (this.baseHeight + this.contentHeight + 10) + "px"
                        }}
                        onClick={this.toggleEvent.bind(this)}>
                        <div
                            className="content"
                            style={{height: this.contentHeight + "px"}}>
                            conten
                        </div>
                        <div
                            className="base"
                            style={{height: this.baseHeight}}>
                            <div className="left-side">
                                <IconDetail
                                    text="24 de septiembre"
                                    icon="far fa-calendar"
                                    size={this.baseIconSize}
                                    animationTime = {this.openAnimationTime}
                                    displayText = {this.state.eventOpen}
                                />
                            </div>
                            <div className="right-side">
                                <IconDetail
                                    text="paraninfo UMSA"
                                    icon="fas fa-map-marker-alt"
                                    size={this.baseIconSize}
                                    animationTime = {this.openAnimationTime}
                                    displayText = {this.state.eventOpen}
                                />
                            </div>
                            <div className="bottom">
                                <div className="bottom-content">
                                    <IconDetail
                                        icon="fas fa-angle-down"
                                        size={{icon: "20px"}}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <OverlayNavbar />
            </div>
        )
    }
    toggleEvent = (ex) => {
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

export { Header }