import React from 'react';
import Form from './components/forms';

const ROLE = {
    VOLUNTEER: 'Voluntario',
    SPEAKER: 'Speaker',
    SPONSOR: 'Auspiciador',
    ATTENDEE: 'Asistente',
    NULL: ''
}

export default class Participate extends React.Component{
    state = {
        isFormVisible: false,
        form: ROLE.NULL
    }
    render(){
        const {isFormVisible} = this.state;
        return (
            <div className="participate-page">
                { !isFormVisible
                    ? this.getInitialPage()
                    : this.getForm()
                }
            </div>
        )
    }

    getInitialPage = () => (
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h2 className="subtitle is-size-2">
                        QUIERO SER:
                    </h2>
                    <br/>
                    <h1 className="title is-size-1" onClick={() => this.onSelectRole(ROLE.VOLUNTEER)}>
                        Voluntario
                    </h1>
                    <h1 className="title is-size-1" onClick={() => this.onSelectRole(ROLE.SPEAKER)}>
                        Expositor
                    </h1>
                    <h1 className="title is-size-1" onClick={() => this.onSelectRole(ROLE.SPONSOR)}>
                        Auspiciador
                    </h1>
                    <br/>
                    <h4 className="is-size-3 has-text-right" onClick={() => this.onSelectRole(ROLE.ATTENDEE)}>
                        Deseo asistir al evento
                    </h4>
                </div>
            </div>
        </section>
    )

    getForm = () => {
        const { form } = this.state;
        let name = '';
        let contact = 'EMAIL';

        switch(form){
            case ROLE.VOLUNTEER:
            case ROLE.SPEAKER:
            case ROLE.ATTENDEE:
                name = 'NOMBRE';
                break;
            case ROLE.SPONSOR:
                name = 'EMPRESA';
                break;
            default:
                break;
        }

        return (
            <Form
                role={this.state.form}
                fields={{ name, contact }}
                onCloseForm={this.onCloseForm}
            />
        )
    }

    onSelectRole = role => {
        this.setState({
            isFormVisible: true,
            form: role
        });
    }

    onCloseForm = () => {
        this.setState({
            isFormVisible: false
        })
    }
}