import React from 'react';

const PersonCard = ({imageURL, name, description}) => {
    return (
        <div className="column is-3">
            <div className="card person-card">
                <div className="card-image">
                    <figure className="image is-square">
                        <img src={imageURL} alt={name} />
                    </figure>
                </div>
                <div className="card-content has-background-black">
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