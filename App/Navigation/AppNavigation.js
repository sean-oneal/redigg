import { StackNavigator } from 'react-navigation'
import ContentList from '../Containers/ContentList'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  ContentList: { screen: ContentList },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ContentList',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
