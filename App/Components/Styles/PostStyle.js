import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'wrap',
    minHeight: 120,
    width: 'auto',
    flexDirection: 'row',
    backgroundColor: Colors.snow,
    marginVertical: Metrics.smallMargin - 2,
    marginTop: Metrics.smallMargin - 5,
  },
  image: {
    // marginRight: 30,
    height: 75,
    width: 75,
    borderRadius: 5
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textCol: {
    flex: 3,
    flexDirection: 'column',
    padding: 5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  linkLabel: {
    padding: 3,
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.charcoal,
    alignSelf: 'auto',
    textAlign: 'auto'
  },
  icon: {
    padding: 5,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  count: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.charcoal,
    textAlign: 'center'
  },
  text: {
    padding: 5,
    fontSize: 10,
    color: Colors.charcoal,
    alignSelf: 'auto',
    textAlign: 'auto'
  }
})
