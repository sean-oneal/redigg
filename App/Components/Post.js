import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Linking, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './Styles/PostStyle'

export default class Post extends Component {
  // Prop type warnings
  // static propTypes = {
  //   author: PropTypes.string,
  //  title: PropTypes.string,
  //  link: PropTypes.string,
  //  thumbnail: PropTypes.string,
  //  ups: PropTypes.number
  // }
  constructor(props) {
    super(props)
  }
  // // Defaults for props
  // static defaultProps = {
  //   author: null,
  //   title: null,
  //   link: null,
  //   thumbnail: '',
  //   ups: 0,
  // }

  render () {
    const { author, title, url, thumbnail, ups, images } = this.props;
    return (
      <View style={styles.container}>

        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => Linking.openURL(images[0].source.url)}>
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
