import React from 'react';

import OverlayNavbar from './OverlayNavbar';
import IconDetail from './IconDetail';

export default class Footer extends React.Component{
    baseIconSize = {text: "13px", icon: "28px"};
    render(){
        return (
            <div className='header'>
                <div className='event-container'>
                    <div className="event-details">
                        <div className="content">
                            content
                        </div>
                        <div className="base">
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
                        </div>
                    </div>
                </div>
                <OverlayNavbar />
            </div>
        )
    }
}