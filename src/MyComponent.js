import React from 'react'
import PropTypes from 'prop-types';

function MyComponent({ text }) {
  return <div>This is my component. This is my text: {text}</div>
}

MyComponent.propTypes = {
  text: PropTypes.string,
};

export default MyComponent