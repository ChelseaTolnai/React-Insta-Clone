import React, { Component } from 'react';
import Authenticate from './components/Authentication/Authenticate';
import Login from './components/Login/Login';
import PostsPage from './components/PostContainer/PostsPage';
import styled from 'styled-components'
import './App.css';

const StyledApp = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: rgb(85, 225, 200);
  font-family: 'Open Sans', sans-serif;
`

class App extends Component {

  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <StyledApp>
        <PostsPage />
      </StyledApp>
    );
  }
}

export default Authenticate(App)(Login);