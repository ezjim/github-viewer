import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ name, avatar_url }) => (
  <section>
    <img src={avatar_url} alt={name} />
    <p>{name}</p>
  </section>
);

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired
};

export default Repo; 
