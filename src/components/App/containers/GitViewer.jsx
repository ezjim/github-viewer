import React, { Component } from 'react';
import User from '../User/User';
import Repo from '../repo/Repo.jsx';
import { fetchUserInfo, fetchUserRepos } from '../services/getRepos.jsx';


export default class GitViewer extends Component {
  state = {
    userInfo: [],
    userRepos: []
  }

  componentDidMount() {
    fetchUserInfo()
      .then(userInfo => this.setState({ userInfo }));
    fetchUserRepos()
      .then(userRepos => this.setState({ userRepos }));
  }

  render() {
    const { userInfo, userRepos } = this.state;
    return (
      <div>
        <div>
          <User userInfo={userInfo} />
        </div>
        <div>
          <Repo userRepos={userRepos} />
        </div>
      </div>
    );
  }
}
