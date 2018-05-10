import React from 'react';
import {
  ColorPropType,
  StyleSheet,
  Text,
  View
} from 'react-native';
import PropTypes from 'prop-types';

export default function Avatar({ size, backgroundColor, initials }) {
  
}

Avatar.propTypes = {
  initials: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  backgroundColor: ColorPropType.isRequired,
};
