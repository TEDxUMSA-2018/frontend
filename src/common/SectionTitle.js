import React from 'react';

const sectionTitle = props => 
    <section 
        className={`section-title hero ${props.background}`}>
        <div className="hero-body">
            <div className="container">
                <h1 className="title">
                    { props.title }
                </h1>
            </div>
        </div>
    </section>

export default sectionTitle;