import React, {Component, Fragment} from 'react';

export default class Form extends Component {
    state = {
        nameField: '',
        contactField: '',
        messageVisible: false
    }

    render() {
        return (
            <section className="hero-form hero is-fullheight has-background-black">
                <div className="hero-head">
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-brand">
                            <a 
                                className="navbar-item"
                                onClick={this.hideForm}
                            >
                                Volver
                            </a>
                        </div>
                    </div>
                </nav>
                </div>
                <div className="hero-body">
                    <div className="container has-text-left">
                        <div className="columns">
                            { this.state.messageVisible && this.renderMessage() }
                        </div>
                        <div className="columns">
                            <div className="column is-6 is-offset-3">
                                { this.renderForm() }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    renderForm = () => (
        <Fragment>
            <div className="field">
                <label className="label is-large">{this.props.fields.name}</label>
                <div className="control">
                    <input 
                        className="input is-medium" 
                        type="text" 
                        placeholder="TEDxUMSA Lover"
                        value={this.state.nameField}
                        onChange={this.onNameChange}
                    />
                </div>
            </div>

            <div className="field">
                <label className="label is-large">{this.props.fields.contact}</label>
                <div className="control">
                    <input 
                        className="input is-medium" 
                        type="email" 
                        placeholder="tedxumsa-lover@algunlugar.com"
                        value={this.state.contactField}
                        onChange={this.onEmailChange}
                    />
                </div>
            </div>
            <br/>
            <div className="control has-text-centered">
                <button 
                    className="button is-medium"
                    onClick={this.onSubmitInformation}
                    disabled={this.state.nameField === '' || this.state.contactField === ''}
                >
                    QUIERO RECIBIR INFORMACIÓN
                </button>
            </div>
        </Fragment>
    )

    renderMessage = () => (
        <div className="column is-8 is-offset-2">
            <article className="message is-success">
                <div className="message-body">
                    Gracias por querer ser parte de TEDxUMSA!. Tu información fue guardada correctamente, puedes seguir navegando por la página.
                </div>
            </article>
            <br/>
        </div>
    )

    onNameChange = e => {
        this.setState({
            nameField: e.target.value
        })
    }
    onEmailChange = e => {
        this.setState({
            contactField: e.target.value
        })
    }
    onSubmitInformation = () => {
        this.setState({
            messageVisible: true
        })
    }
    onDismissInformation = () => {
        this.setState({
            messageVisible: false
        })
    }
    hideForm = () => {
        this.props.onCloseForm();
    }
}