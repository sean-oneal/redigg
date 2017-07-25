import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  container: {

    flex: 1,
    padding: 10,
    minHeight: 75,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.snow,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'space-between'
  },
  image: {
    marginLeft: 5,
    height: 75,
    width: 75,
    borderRadius: 5
  },
  row: {
    flex: 1,
    alignSelf: 'center',
    padding: 5,
    backgroundColor: Colors.snow,
    marginVertical: Metrics.smallMargin,

  },
  textRow: {
    flex: 3,

  },
  linkLabel: {
    padding: 5,
    fontWeight: 'bold',
    textAlign:'center',
    alignSelf: 'flex-end',
    color: Colors.panther,
  },

  icon: {
    marginLeft: 20,
    padding: 2,
  },
  count: {
    fontSize: 16,
    padding: 5,
    fontWeight: 'bold',
    color: Colors.steel,
  }
})
