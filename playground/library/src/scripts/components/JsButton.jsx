import * as React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string.isRequired,
};

const defaultProps = {};

/**
 * Button.
 */
export default function JsButton(props) {
  const { label } = props;

  return (
    <button type="button">
      {label}
    </button>
  );
}

JsButton.propTypes = propTypes;
JsButton.defaultProps = defaultProps;
JsButton.displayName = 'JsButton';
