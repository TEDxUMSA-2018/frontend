import React from 'react';

export default class Footer extends React.Component{
    render(){
        return (
            <div className='footer-view'>
                <div className="icons-cont">
                    <div id="facebook" className="icon-container">
                        <i className="contact-icon fab fa-facebook-f" />
                    </div>
                    <div id="email" className="icon-container">
                        <i className="contact-icon fas fa-envelope" />
                    </div>
                    <div id="instagram" className="icon-container">
                        <i className="contact-icon fab fa-instagram" />
                    </div>
                    <div id="twitter" className="icon-container">
                        <i className="contact-icon fab fa-twitter" />
                    </div>
                </div>
                <div className="base-cont">
                    <div></div>
                    <div className="copyright">© Copyright 2018. All rights reserved.</div>
                </div>
            </div>
        )
    }
}