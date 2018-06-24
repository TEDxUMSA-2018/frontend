import React from 'react';

const SectionSubtitle = props => {
    return (
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        { props.title }
                    </h1>
                </div>
            </div>
        </section>
    );
}

export { SectionSubtitle }