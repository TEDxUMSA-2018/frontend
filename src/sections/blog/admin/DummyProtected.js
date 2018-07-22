import React from 'react';
import {SectionTitle} from '../../../common';
import {auth} from '../../../firebase';


const authentication = Component => {
  return class extends React.Component {
    componentDidMount() {
      auth.onAuthStateChanged((user) => {
        if (!user) {
          this.props.history.push("/signin");
        }
      });
    }
    render() {
      return <Component  />;
    }
  }
};

export { authentication };

class DummyProtected extends React.Component {
  handleSignOut = () => {
    auth.signOut();
  };
  render() {
    return <React.Fragment>
        <SectionTitle
            title="Something Protected"
            background="pink"
        />
        <div className="container">
          <h4>klaatu barada nikto</h4>
          <button onClick={this.handleSignOut}>Cerrar Sesión</button>
        </div>
    </React.Fragment>;
  }
}

export default authentication(DummyProtected);
