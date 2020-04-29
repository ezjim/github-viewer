import React from 'react';
import PropTypes from 'prop-types';

const User = ({ login, following, location, html_url, avatar_url }) => (
  <figure>
    <img src={avatar_url} alt={name} />
    <figcaption>
      <p>{login}</p>
      <p>{location}</p>
      <p>{following}</p>
      <p>{html_url}</p>
    </figcaption>
  </figure>
);
User.propTypes = {
  avatar_url: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  following: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired
};

export default User;
