import React from 'react';

export const ParticipateCard = ({imageUrl, title, assetUrl, content}) => {
    return (
        <div className="column is-4">
            <div className="card is-usp">
                <img 
                    alt="Participar"
                    role="presentation" 
                    src={ imageUrl } 
                />
                <hr className="spacer is-1" />
                <h3 className="title is-4 is-spaced">
                    <a 
                        href={assetUrl}
                        target="_blank"
                    >
                        { title }
                    </a>
                </h3>
                <p className="subtitle is-5">
                    { content }
                </p>
            </div>
        </div>
    );
}