import React from 'react';

const MemberCard = ({imageURL, name, position}) => {
    return (
        <div className="column is-3">
            <div className="card member-card">
                <div className="card-image">
                    <figure className="image is-square">
                        <img src={imageURL} alt={name} />
                    </figure>
                </div>
                <div className="card-content has-background-black">
                    <div className="content has-text-color-white">
                        <p className="title is-4">{name}</p>
                        <p className="subtitle is-6">{position}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberCard;