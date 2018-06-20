import React from 'react';
import PropTypes from 'prop-types';

class Description extends React.Component{
    static proptypes = {
        title: PropTypes.string,
        description: PropTypes.string,
        imagePath: PropTypes.string,
        leftImage: PropTypes.bool
    }

    render(){
        const { leftImage } = this.props;
        const content = leftImage
            ? [ this._get_image(), this._get_content() ]
            : [ this._get_content(), this._get_image() ]

        return (
            <section className="section is-hero">
                <div className="container">
                    <div className="columns is-vcentered">
                        { content }                        
                    </div>
                </div>
            </section>
        );
    }

    _get_content = () => {
        const {
            title,
            description
        } = this.props;
        
        return (
            <div key={`about-${title}`} className="column is-6 is-5-fullhd is-offset-1-fullhd">
                <div className="section-header">
                    <h1 className="title is-spaced">{ title }</h1>
                    <h2 className="subtitle is-3">{ description }</h2>
                </div>
            </div>
        );
    }

    _get_image = () => {
        const {
            title,
            imagePath
        } = this.props;
        const imageUrl = `${window.location.origin}/${imagePath}`;

        return (
            <div key={`image-${title}`} className="column is-6">
                <div className="section-media">
                    <img alt={ title } role="presentation" src={ imageUrl } />
                </div>
            </div>
        );
    }
}

export default Description;