import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor: Colors.snow
  },
  row: {
    flex: 1,
    minHeight: 75,
    backgroundColor: Colors.steel,
    justifyContent: 'center'
  },
  label: {
    textAlign: 'center',
    color: Colors.panther
  },
  listContent: {
    marginTop: Metrics.smallMargin
  }
})
