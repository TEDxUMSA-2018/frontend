import React from 'react';

const PersonCard = ({colWidth, imageURL, name, description}) => {
    return (
        <div className={`column is-${colWidth}`}>
            <div className="card person-card" style={{ backgroundColor: 'none' }}>
                <div className="card-image">
                    <figure className="image is-square">
                        <img src={imageURL} alt={name} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="content has-text-color-white">
                        <p className="title is-4">{name}</p>
                        <p className="subtitle is-6">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { PersonCard };