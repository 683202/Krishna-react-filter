import React from 'react';
import DefectTable from './DefectTable';
import App from './App';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role: ''
        }
    }

    render() {

        return (
            <div>
                <form>You are a :
                    <select ref="refLogin">
                        <option value="developer"> Developer</option>
                        <option value="tester"> Tester</option>
                    </select>
                    <button type="button" onClick={() => {
                        this.setState({
                            role: this.refs.refLogin.value
                        });
                    }}>
                        Login
                    </button>
                </form>
                <App role={this.state.role}/>
            </div>
        );
    }
}

export default Login;