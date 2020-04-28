import React, { Component } from 'react';
import User from '../User/User';
import UserSearch from '../User/UserSearch';
import Repos from '../repo/Repos';
import { fetchUserInfo, fetchUserRepos } from '../repo/services/getRepos.jsx';


export default class GitViewer extends Component {
  state = {
    username: '',
    user: {
      avatar_url: '',
      login: '',
      location: '',
      following: 0,
      html_url: ''
    }
    // repos: []
    // search: false
  }

  handleUserChange = ({ target }) => {
    this.setState({ username: target.value });
  }

  handleUserSubmit = () => {
    fetchUserInfo(this.state.username);
    fetchUserRepos(this.state.username)
      .then(repos => this.setState({ repos, search: true }));
  }

  render() {
    let searched = '';
    if(this.state.search) {
      searched = 
      <>
        <User {...this.state.user} /> 
        <Repos repos={this.state.repos} />
      </>;
    }
    return (
      <>
        <UserSearch username={this.state.username} 
          onUserChange={this.handleUserChange} 
          onUserSubmit={this.handleUserSubmit}/>
        {searched}
      </>
    );
  }
}
