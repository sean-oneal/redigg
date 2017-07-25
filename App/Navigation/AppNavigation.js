import React from 'react';
import { View , Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PostDetails from '../Containers/PostDetails'
import ContentList from '../Containers/ContentList';
import LaunchScreen from '../Containers/LaunchScreen';
import { Colors} from '../Themes/';
import Icon from 'react-native-vector-icons/FontAwesome';


import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  PostDetails: { screen: PostDetails },
  ContentList: { screen: ContentList },
  // LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  header: 'card',
  headerMode: 'float',
  initialRouteName: 'ContentList',
  navigationOptions: {
    headerStyle: styles.header,
  }
});

export default PrimaryNav;
