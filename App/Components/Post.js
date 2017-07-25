import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navigtation, View, Text, TouchableOpacity, Linking, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavActions from '../Redux/NavigationRedux';
import styles from './Styles/PostStyle';

export default class Post extends Component {

  constructor(props) {
    super(props)
  }
  render () {
    const { author, title, subreddit_name_prefixed, subreddit, num_comments, url, thumbnail, ups, images, permalink } = this.props;
    let titleText = null;
    let titleLen = title.length;

    if (titleLen >= 100) {
      titleText = title.slice(0, 70);
      // titleText = title.slice(0, titleLen)
      titleLen = titleText.length - 1;

      if (titleText[titleLen] !== ' ') {
          let end = titleLen - 10;

        for (let i = titleLen; i >= end; i--) {
          if (titleText[i] !== ' ') {
            let newTitle = null;

            newTitle = titleText.slice(0, i);
            titleText = newTitle;

           } else {
            titleText.trim();
            break;
           }
        }
        titleText += ('...');
      } else {
        //remove until we hit
        titleText.trim();
      }
    } else {
      titleText = title;
    }

    return (
      <View style={styles.container}>
        <View style={styles.column}>
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
      <View style={styles.column}>
        <TouchableOpacity
          onPress={console.log('navigate pressed in post')}>
          <Image
            style={styles.image}
            source={{uri: thumbnail}}
          />
        </TouchableOpacity>

      </View>
      <View style={styles.textCol}>
        <Text
          style={styles.linkLabel}
          onPress={() =>
            Linking.openURL('https://www.reddit.com' + permalink)}> {titleText}
        </Text>
        <Text style={styles.text}> {`submitted to ${subreddit_name_prefixed} by ${author} `}
        </Text>
          <Text style={styles.text}> {`Comments ${num_comments} `}
          </Text>
      </View>
    </View>
    )
  }
}
