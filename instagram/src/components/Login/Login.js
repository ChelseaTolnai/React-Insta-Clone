import React, { Component } from 'react';
import ls from 'local-storage';
import { Card, CardTitle, Form, Input, Button } from 'reactstrap';
import styled from 'styled-components';

const LoginPage = styled.div`
    margin: 5% auto;
    width: 90%;
    max-width: 800px;
    font-family: 'Open Sans', sans-serif;
`
const CenterChildWrapper = styled.div`
    padding: 2%;
    background-color: rgb(85, 225, 200);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const LoginTitle = styled.h1`
    font-family: 'Oleo Script Swash Caps', cursive;
    font-size: 4em;
`
const LoginLogo = styled.i`
    font-size: 3.5em;
`
const LoginInput = styled.div`
    margin-bottom: 2%;
    width: 90%;
`

class Login extends Component {
    
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            user: {}
        }
    }

    handleValueChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSumbit = () => {
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        ls.set('user', user)
        this.setState({
            user: ls.get('user'),
        });
        window.location.reload();
    }

    render() {
        return (
            <LoginPage>
                <Card >
                    <Form>
                        <CenterChildWrapper>

                            <CardTitle>
                                <CenterChildWrapper>
                                    <LoginLogo className="fas fa-camera-retro"></LoginLogo>
                                    <LoginTitle>Instaclone</LoginTitle>
                                </CenterChildWrapper>
                            </CardTitle>

                            <LoginInput>
                                <Input 
                                    type="text"
                                    name="username"
                                    placeholder="Username..."
                                    value={this.state.username} 
                                    onChange={this.handleValueChange} 
                                />
                            </LoginInput>

                            <LoginInput>
                                <Input 
                                    type="password"
                                    name="password"
                                    placeholder="Password..." 
                                    value={this.state.password} 
                                    onChange={this.handleValueChange}
                                />
                            </LoginInput>

                            <Button color="primary" onClick={this.handleSumbit}>Login</Button>
                        
                        </CenterChildWrapper>
                    </Form>
                </Card>
            </LoginPage>
        );
    }
}

export default Login;