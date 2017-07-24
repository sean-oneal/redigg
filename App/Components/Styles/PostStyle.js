import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 10,
    height: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: Colors.snow,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'space-between'
  },
  image: {
    marginLeft: 5,
    height: 60,
    width: 60,
    borderRadius: 5
  },
  row: {
    alignSelf: 'center',
    padding: 2,
    backgroundColor: Colors.snow,
    marginVertical: Metrics.smallMargin,
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  linkLabel: {
    padding: 5,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.panther,
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
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
    textAlign: 'center'
  }
})
