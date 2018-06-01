import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { getImageFRomId } from '../utils/api';
import Card from './Card';

const keyExtractor = ({ id }) => id;

export default class CardList extends Component {
  static propTypes = { 
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isREquired,
        author: PropTypes.stringisREquired,
      }),
    ).isRequired,
  };

  renderItem = ({ item: { id, author } }) => (
    <Card
      fullname={author}
      image={{
        uri: getImageFromId(id),
      }}
    />
  );

  render() {
    const { items } = this.props;

    return (
      <FlatList
        data={items}
        renderItem={this.renderItem}
        keyExtractor={keyExtractor}
      />
    );
  }
}