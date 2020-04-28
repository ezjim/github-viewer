import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ name, URL }) => (
  <figure>
    <figcaption>
      <p>{name}</p>
      <p>{URL}</p>
    </figcaption>
  </figure>
);

Repo.propTypes = {

  name: PropTypes.string.isRequired,
  URL: PropTypes.string.isRequired
};
export default Repo;
