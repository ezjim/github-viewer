import React from 'react';
import PropTypes from 'prop-types';
import Repo from '../Repo/Repo.jsx';

const Repos = ({ repos }) => {
  const repoData = repos.map(repo => <Repo key={repo.id} {...repo} />);
  return (
    <ul>
      {repoData}
    </ul>
  );
};

Repos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired
  }))
};

export default Repos;
