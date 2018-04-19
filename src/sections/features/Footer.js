import React from 'react';

export default class Footer extends React.Component{
    render(){
        return (
            <div className='footer-view'>
                <div className="icons-cont">
                    <div id="facebook" class="icon-container">
                        <i class="contact-icon fab fa-facebook-f"></i>
                    </div>
                    <div id="email" class="icon-container">
                        <i class="contact-icon fas fa-envelope"></i>
                    </div>
                    <div id="instagram" class="icon-container">
                        <i class="contact-icon fab fa-instagram"></i>
                    </div>
                    <div id="twitter" class="icon-container">
                        <i class="contact-icon fab fa-twitter"></i>
                    </div>
                </div>
            </div>
        )
    }
}