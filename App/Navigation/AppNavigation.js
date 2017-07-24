import { StackNavigator } from 'react-navigation';
import ContentList from '../Containers/ContentList';
import LaunchScreen from '../Containers/LaunchScreen';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Home: {screen: ContentList},
  ContentList: { screen: ContentList },
  Trending: { screen: ContentList },
  // LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'ContentList',
  navigationOptions: {
    headerStyle: styles.header,
  }
});

export default PrimaryNav;
