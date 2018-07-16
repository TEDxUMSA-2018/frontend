import React from 'react';
import {SectionTitle} from '../../../common';
import {auth} from '../../../firebase';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.loginForm = React.createRef();
  }
  handleSubmit = (e) => {
    const email = this.loginForm.current.email.value;
    const password = this.loginForm.current.password.value;
    console.log("login", email, password);

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.history.push('/gestor-blog');
      })
      .catch(error => {
        console.log("la cagaste papu");
      });

    e.preventDefault();
  };
  render() {
    return <React.Fragment>
      <SectionTitle
        title="Iniciar Sesión"
        background="pink"
      />
      <div className="container has-text-centered">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={this.handleSubmit} ref={this.loginForm}>
              <div className="field">
                <div className="control">
                  <input className="input" name="email" type="email" placeholder="usuario@ejemplo.com" autoFocus="" autoComplete="off" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input" name="password" type="password" placeholder="Tu contraseña" />
                </div>
              </div>
              <button className="button is-block is-info is-fullwidth">Iniciar Sesión</button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>;
  }
}

export default Login;
