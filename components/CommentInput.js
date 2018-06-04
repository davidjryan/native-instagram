import { StyleSheet, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class CommentInput extends Component {
  static propTypes = {
    onSubmit: PropTyes.func.isRequired,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    placeholder: '',
  }

  state = {
    text: '',
  };

  handleChangeText = text => {
    this.setState({ text });
  };

  handleSubmitEditing = () => {
    const { onSubmit } = this.props;
    const { text } = this.state;

    if (!text) return;

    onSubmit(text);
    this.setState({ text: '' });
  }
}