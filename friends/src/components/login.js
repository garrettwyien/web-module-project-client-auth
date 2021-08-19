import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };
    handlechange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
            [e.target.name]: e.target.value
            }
        });
    };
    login = e => {
        e.preventDefault();
        axios.post(`http://localhost:5000`, this.state.credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("role", res.data.role);
                localStorage.setItem("username", res.data.username);
                this.props.history.push('/protected');
            })
            .catch(err=> {
                console.log(err);
            });
    };

    render() {
        return (
            <div>
                <form>
                    <input
                    type="text"
                    name="username"
                    value={this.state.credentials.username}
                    onChange={this.handleChange}>
                        Username:
                    </input>
                    <input
                    type="password"
                    name="password"
                    value={this.state.credentials.username}
                    onChange={this.handleChange}>
                        Password:
                    </input>
                    <button>Log in</button>
                </form>
            </div>
        )
    }
};

export default Login;