import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Linking, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './Styles/PostStyle'

export default class Post extends Component {

  constructor(props) {
    super(props)
  }

  render () {
    const { author, title, url, thumbnail, ups, images } = this.props;

    return (
      <View style={styles.container}>

        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => console.log('pressed')}>
            <Image
              style={styles.image}
              source={{uri: thumbnail}}
            />
          </TouchableOpacity>
            <TouchableOpacity>

          </TouchableOpacity>
          </View>

          <View style={styles.row}>
          <Icon style={styles.icon}
            name='arrow-up'
            size={11}>
          </Icon>
          <Text style={styles.count}>{' ' + ups}</Text>
          <Icon style={styles.icon}
            name='arrow-down'
            size={11}>
          </Icon>

        </View>
        <Text
          style={styles.linkLabel}
          onPress={() =>
            Linking.openURL(url)}> {title}
        </Text>
    </View>
    )
  }
}
