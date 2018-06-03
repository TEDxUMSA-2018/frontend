import React from 'react';

import SectionTitle from '../../common/SectionTitle';

export default class About extends React.Component{
    render(){
        return (
            <div className="about-page">
                <SectionTitle
                    title="Acerca de"
                    background="pink"
                />
                
                { this._get_content() }
            </div>
        )
    }

    _get_content = () => 
        <React.Fragment>
            <div className="columns is-gapless ted">
                <div className="column title">
                    <h1>TED</h1>
                </div>
                <div className="column description">
                    <p>Maecenas eu placerat ante. Fusce ut neque justo, et aliquet enim. In hac habitasse platea dictumst. Nullam commodo neque erat, vitae facilisis erat. Cras at mauris ut tortor vestibulum fringilla vel sed metus. Donec interdum purus a justo feugiat rutrum. Sed ac neque ut neque dictum accumsan. Cras lacinia rutrum risus, id viverra metus dictum sit amet.</p>
                </div>
            </div>
            <div className="columns is-gapless tedxumsa">
                <div className="column description">
                    <p>Maecenas eu placerat ante. Fusce ut neque justo, et aliquet enim. In hac habitasse platea dictumst. Nullam commodo neque erat, vitae facilisis erat. Cras at mauris ut tortor vestibulum fringilla vel sed metus. Donec interdum purus a justo feugiat rutrum. Sed ac neque ut neque dictum accumsan. Cras lacinia rutrum risus, id viverra metus dictum sit amet.</p>
                </div>
                <div className="column title">
                    <h1>TEDxUMSA</h1>
                </div>
            </div>
        </React.Fragment>
}