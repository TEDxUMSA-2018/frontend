import React from 'react';
import MemberCard from './components/MemberCard';
// import Background from '../../../public/images/team/team.jpg';

export default class Team extends React.Component{
    render(){
        return (
            <div className="team-page">
                <section className="hero legend is-fullheight">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h2 className="subtitle is-size-2">
                                Nosotros hacemos
                            </h2>
                            <h1 className="title is-size-1">
                                TEDxUMSA
                            </h1>
                        </div>
                    </div>
                </section>
                <section className="hero is-fullheight has-background-black">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <div className="columns is-multiline">
                                <MemberCard
                                    imageURL='images/team/ana.png'
                                    name='Ana Quispe'
                                    position='Licenciataria'
                                />
                                <MemberCard
                                    imageURL='images/team/carlos.jpg'
                                    name='Carlos Zabaleta'
                                    position='King in the north'
                                />
                                <MemberCard
                                    imageURL='images/team/carlos.jpg'
                                    name='Carlos Zabaleta'
                                    position='King in the north'
                                />
                                <MemberCard
                                    imageURL='images/team/carlos.jpg'
                                    name='Carlos Zabaleta'
                                    position='King in the north'
                                />
                                <MemberCard
                                    imageURL='images/team/carlos.jpg'
                                    name='Carlos Zabaleta'
                                    position='King in the north'
                                />
                                <MemberCard
                                    imageURL='images/team/carlos.jpg'
                                    name='Carlos Zabaleta'
                                    position='King in the north'
                                />
                                <MemberCard
                                    imageURL='images/team/carlos.jpg'
                                    name='Carlos Zabaleta'
                                    position='King in the north'
                                />
                                <MemberCard
                                    imageURL='images/team/carlos.jpg'
                                    name='Carlos Zabaleta'
                                    position='King in the north'
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}