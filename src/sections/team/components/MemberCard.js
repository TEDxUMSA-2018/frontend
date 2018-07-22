import React from 'react';

const MemberCard = ({imageURL, name, position, quote, favoriteTalkTitle, favoriteTalkURL}) => {
    return (
        <div className="member-card card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={imageURL} alt={name}/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-5">{name} ({position})</p>
                    </div>
                </div>
                <div className="content">
                    <blockquote>{quote}</blockquote>
                    <h2 className="subtitle is-6">Charla TED Favorita</h2>
                    <a target="_blank" href={favoriteTalkURL}>{favoriteTalkTitle}</a>
                </div>
            </div>
        </div>
    )
}

export default MemberCard;