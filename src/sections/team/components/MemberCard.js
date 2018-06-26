import React from 'react';

const MemberCard = ({imageURL, name, position, quote, favoriteTalkTitle, favoriteTalkURL}) => {
    return (
        <div class="member-card card">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img src={imageURL} alt={name}/>
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-5">{name} ({position})</p>
                    </div>
                </div>
                <div class="content">
                    <blockquote>{quote}</blockquote>
                    <h2 className="subtitle is-6">Charla TED Favorita</h2>
                    <a target="_blank" href={favoriteTalkURL}>{favoriteTalkTitle}</a>
                </div>
            </div>
        </div>
    )
}

export default MemberCard;