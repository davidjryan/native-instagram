import { Image, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import AuthorRow from './AuthorRow';

export default class Card extends Component {
  static propTypes = {
    fullname: PropTypes.string.isRequired,
    image: Image.propTypes.source.isRequired,
    linkText: PropTypes.string,
    onPressLinkText: PropTypes.func,
  };

  static defaultProps = {
    linkText: '',
    onPressLinkText: () => {},
  };

  state = {
    loading: true,
  };

  handleLoad = () => {
    this.setState({ loading: false });
  }

  render() {
    const { fullname, image, linkText, onPressLinkText } = this.props;
    const { loading } = this.state;

    return (
      <View>
        <AuthorRow
          fullname={fullname}
          linkText={linkText}
          onPressLinkText={onPressLinkText}
        />
        <Image style={styles.image} source={image} onLoad={this.handleLoad}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
});