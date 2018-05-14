import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import Avatar from './Avatar';
import getAvatarColor from '../utils/getAvatarColor'; 
import getInitials from '../utils/getInitials';

export default function AuthorRow({ fullname, linktext, onPressLinkText }) {
  return (
    <View style={styles.container}>
      <Avatar
        size={35}
        initials={getInitials(fullname)}
        backgroundColor={getAvatarColor(fullname)}
      />
      <Text style={styles.text} numberOfLines={1}>
        {fullname}
      </Text>
      {!!linktext && (
        <TouchableOpacity onPress={onPressLinkText}>
          <Text numberOfLines={1}>{linktext}</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  text: {
    flex: 1,
    marginHorizontal: 6,
  },
})

AuthorRow.propTypes = {
  fullname: PropTypes.string.isRequired,
  linktext: PropTypes.string.isRequired,
  onPressLinkText: PropTypes.func.isRequired,
};