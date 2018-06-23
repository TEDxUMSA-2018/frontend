import React from 'react';

const SectionTitle = props => 
    <section 
        className={`section-title hero ${props.background}`}>
        <div className="hero-body">
            <div className="container">
                <h1 className="title">
                    { props.title.toUpperCase() }
                </h1>
            </div>
        </div>
    </section>

export { SectionTitle };