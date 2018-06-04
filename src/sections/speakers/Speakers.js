import React from 'react';

import SectionTitle from '../../common/SectionTitle';

export default class Speakers extends React.Component{
    render(){
        return (
            <div className="speakers-page">
                <SectionTitle
                    title="Expositores"
                    background="green"
                />
                
                <br/>
                <br/>

                { this._get_content() }
            </div>
        )
    }

    _get_content = () => 
        <React.Fragment>
            <div>Whatever</div>
        </React.Fragment>
}