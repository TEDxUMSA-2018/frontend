import React from 'react';

import SectionTitle from '../../common/SectionTitle';
import ImageDescription from '../../common/ImageDescription'

export default class Speakers extends React.Component{
    tedxUrl = "https://tedxumsa.org/images/speakers";
    speakers = [
        {
            name: "Alina Santander",
            image: this.tedxUrl + "/AlinaSantander.png",
            text: "Alina is a wonderful speaker"
        },
        {
            name: "Miguel Figueroa",
            image: this.tedxUrl + "/MiguelFigueroa.png",
            text: "Miguel is a wonderful speaker"
        },
        {
            name: "Carlos Guaipatin",
            image: this.tedxUrl + "/CarlosGuaipatin.png",
            text: "Carlos is a wonderful speaker"
        },
        {
            name: "Jazmin Quiroz",
            image: this.tedxUrl + "/JazminQuiroz.png",
            text: "Jazmin is a wonderful speaker"
        },
        {
            name: "Alex Ayala",
            image: this.tedxUrl + "/AlexAyala.png",
            text: "Alex is a wonderful speaker"
        }
    ]
    render(){
        return (
            <div className="speakers-page">
                <SectionTitle
                    title="Expositores"
                    background="green"
                />
                
                <br/>
                <br/>
                <div className="speakers-cont">
                    {this.speakers.map((speaker, i) => {
                        return (<ImageDescription
                            key={i}
                            width={"33%"}
                            text={speaker.text}
                            title={speaker.name}
                            img={speaker.image}

                        />)
                    }
                    )}
                </div>
                { this._get_content() }
            </div>
        )
    }

    _get_content = () => 
        <React.Fragment>
            <div>Whatever</div>
        </React.Fragment>
}