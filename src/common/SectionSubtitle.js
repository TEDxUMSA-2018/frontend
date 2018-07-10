import React from 'react';

const SectionSubtitle = ({title}) => {
    return (
        <section className="section-subtitle hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        { title }
                    </h1>
                </div>
            </div>
        </section>
    );
}

export { SectionSubtitle }