import React, {Component} from 'react';
import $ from 'jquery';
import FormSerializer, { serializeObject } from 'form-serializer';
import Recaptcha from 'react-recaptcha';

const BASE_URL = 'https://script.google.com/';
const SCRIPT_ID = 'AKfycbx3xMSaqxLvT3e9nFV6-xwmWnTCS-iSJ1yOTapZO5fHK0ctnquP';
const PATH = `macros/s/${SCRIPT_ID}/exec`;

export default class Form extends Component {
    state = {
        nameField: '',
        contactField: '',
        messageVisible: false,
        loading: false,
        isVerified: false
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
        <form id='test-form'>
            <div className="field">
                <label className="label is-large">{this.props.fields.name}</label>
                <div className="control">
                    <input 
                        name='nombre'
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
                        name='email'
                        className={`input is-medium ${!this.validateEmail(this.state.contactField) && 'is-danger'}`}
                        type="email" 
                        placeholder="tedxumsa-lover@algunlugar.com"
                        value={this.state.contactField}
                        onChange={this.onEmailChange}
                    />
                </div>
            </div>
            <div className='field' style={{ display: 'flex', justifyContent: 'center' }}>
                <Recaptcha
                    sitekey="6Lce5m0UAAAAAAzcFWCgr29xE8t2ZYDgd5wdKS6C"
                    render="explicit"
                    hl='es'
                    onloadCallback={this.onLoadCallback}
                    verifyCallback={this.verifyCallback}
                />
            </div>
            <br/>
            <div className="control has-text-centered">
                <button 
                    className={`button is-medium ${this.state.loading ? 'is-loading' : ''}`}
                    onClick={this.onSubmitInformation}
                    disabled={this.state.nameField === '' || !this.validateEmail(this.state.contactField) || !this.state.isVerified}
                >
                    QUIERO RECIBIR INFORMACIÓN
                </button>
            </div>
        </form>
    )

    renderMessage = () => (
        <div className="column is-8 is-offset-2">
            <article className="message is-success">
                <div className="message-body">
                    Gracias por querer ser parte de TEDxUMSA!. Tu información fue guardada correctamente, nos comunicaremos pronto contigo, puedes seguir navegando por la página.
                </div>
            </article>
            <br/>
        </div>
    )

    onNameChange = e => {
        this.setState({
            nameField: e.target.value
        });
    }
    onEmailChange = e => {
        this.setState({
            contactField: e.target.value
        });
    }
    onSubmitInformation = (e) => {
        const reactContext = this;
        const $form = $('form#test-form');
        const url = `${BASE_URL}${PATH}`;
        const data = {
            ...$form.serializeObject(),
            hora: new Date(),
            tipo: this.props.role
        }
        reactContext.setState({
            loading: true
        });
        e.preventDefault();
        
        const jqxhr = $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data
        }).done(
            // do something
            function() { 
                reactContext.setState({
                    messageVisible: true,
                    loading: false
                }); 
            }
        );
    }
    onDismissInformation = () => {
        this.setState({
            messageVisible: false
        })
    }
    hideForm = () => {
        this.props.onCloseForm();
    }
    validateEmail = (email) => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    onLoadCallback = () => {
        console.log('Done!!!!');
    };
    verifyCallback = (response) => {
        if(response){
            this.setState({
                isVerified: true
            })
        }
    }
}