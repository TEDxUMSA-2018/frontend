import React from 'react';

import { SectionTitle, Description } from '../../common';
import MemberCard from './components/MemberCard';

const TEAM = [{
    imageURL: 'https://bulma.io/images/placeholders/1280x960.png',
    name: 'Ana Quispe',
    position: 'Licenciataria',
    quote: 'Quiero aportar a la comunidad universitaria con buenas ideas de nuestra comunidad',
    favoriteTalkTitle: 'How we can design timeless cities for our collective future',
    favoriteTalkURL: 'https://www.ted.com/talks/vishaan_chakrabarti_how_we_can_design_timeless_cities_for_our_collective_future'
}, {
    imageURL: 'https://bulma.io/images/placeholders/1280x960.png',
    name: 'Andres Mamani',
    position: 'Media y Contenido',
    quote: 'Quiero aportar a la comunidad universitaria con buenas ideas de nuestra comunidad',
    favoriteTalkTitle: 'How we can design timeless cities for our collective future',
    favoriteTalkURL: 'https://www.ted.com/talks/vishaan_chakrabarti_how_we_can_design_timeless_cities_for_our_collective_future'
}, {
    imageURL: 'https://bulma.io/images/placeholders/1280x960.png',
    name: 'Micaela Ortuño',
    position: 'Curaduría',
    quote: 'Quiero aportar a la comunidad universitaria con buenas ideas de nuestra comunidad',
    favoriteTalkTitle: 'How we can design timeless cities for our collective future',
    favoriteTalkURL: 'https://www.ted.com/talks/vishaan_chakrabarti_how_we_can_design_timeless_cities_for_our_collective_future'
}, {
    imageURL: 'https://bulma.io/images/placeholders/1280x960.png',
    name: 'Angelica Quispe',
    position: 'Relaciones Externas',
    quote: 'Quiero aportar a la comunidad universitaria con buenas ideas de nuestra comunidad',
    favoriteTalkTitle: 'How we can design timeless cities for our collective future',
    favoriteTalkURL: 'https://www.ted.com/talks/vishaan_chakrabarti_how_we_can_design_timeless_cities_for_our_collective_future'
},{
    imageURL: 'https://bulma.io/images/placeholders/1280x960.png',
    name: 'Sergio Guachalla',
    position: 'Marketing',
    quote: 'Quiero aportar a la comunidad universitaria con buenas ideas de nuestra comunidad',
    favoriteTalkTitle: 'How we can design timeless cities for our collective future',
    favoriteTalkURL: 'https://www.ted.com/talks/vishaan_chakrabarti_how_we_can_design_timeless_cities_for_our_collective_future'
}]

export default class Team extends React.Component{
    render(){
        return (
            <div className="team-page">
                <SectionTitle
                    title="Equipo"
                    background="pink"
                />

                { this._get_content() }
            </div>
        )
    }

    _get_content = () => 
        <React.Fragment>
            <Description
                title='Somos un equipo de voluntarios'
                description='You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder.'
                imagePath="/images/ted.png"
                leftImage={true}
            />
            <div className="container" style={{ marginTop: 20 }}>
                { this._get_cards() }
            </div>
        </React.Fragment>
    
    _get_cards = () => 
        <React.Fragment>
            <div className="columns">
                { TEAM.slice(0, 3).map( (member, index) =>
                    <div className="column is-4">
                        <MemberCard
                            imageURL={member.imageURL} 
                            name={member.name}
                            position={member.position}
                            quote={member.quote}
                            favoriteTalkTitle={member.favoriteTalkTitle}
                            favoriteTalkURL={member.favoriteTalkURL}
                        />
                    </div>
                )}
            </div>
            <div className="columns">
                { TEAM.slice(3).map( (member, index) =>
                    <div className="column is-4">
                        <MemberCard
                            imageURL={member.imageURL} 
                            name={member.name}
                            position={member.position}
                            quote={member.quote}
                            favoriteTalkTitle={member.favoriteTalkTitle}
                            favoriteTalkURL={member.favoriteTalkURL}
                        />
                    </div>
                )}
            </div>
        </React.Fragment>
}