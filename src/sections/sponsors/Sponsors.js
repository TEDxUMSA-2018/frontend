import React from 'react';

import { SectionTitle } from '../../common';

export default class Sponsors extends React.Component{
    render(){
        return (
            <div className="speakers-page">
                <SectionTitle
                    title="Sponsors"
                    background="pink"
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