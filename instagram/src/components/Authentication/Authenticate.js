import React, {Component} from 'react';
import ls from 'local-storage';

const Authenticate = App => Login => 
    class extends Component {
        constructor() {
            super();
            this.state = {
                isLoggedIn: false
            }
        }

        componentDidMount() {
            if (ls.get('user')){
                this.setState({ isLoggedIn: true });
            }
        }

        render() {
            return (
                <div>
                    {this.state.isLoggedIn
                        ? <App /> 
                        : <Login />
                    }
                </div>
            )
        }
    };

export default Authenticate;