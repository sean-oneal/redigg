import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ListView, Image, Linking } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
// For empty lists
import AlertMessage from '../Components/AlertMessage'
import DrawerButton from '../Components/DrawerButton'
import RoundedButton from '../Components/RoundedButton'

// Styles
import styles from './Styles/ContentListStyle'

class ContentList extends Component {
  state: {
    dataSource: Object
  }

  constructor (props) {
    super(props)
    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    const dataObjects = require('../Fixtures/redditExampleData.json').data.children

    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(dataObjects)
    }
  }

  /* ***********************************************************
  * STEP 3
  * `renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  renderRow ({data}) {
    return (
      <View style={styles.row}>
        <AlertMessage></AlertMessage>
        <TouchableOpacity onPress={() => Linking.openURL(data.preview.images[0].source.url)}>
          <Image
            style={{width: 50, height: 50}}
            source={{uri: data.thumbnail}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.col}>
          <Icon
            style={styles.downIcon}
            name='arrow-up'
            size={20}>{' ' + data.ups}
          </Icon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.col} >
          <Icon
            style={styles.downIcon}
            name='arrow-down'
            size={20}>{' ' + data.downs}
          </Icon>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.linkLabel}
            onPress={() =>
              Linking.openURL(data.url)}>
            {data.title}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRows` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState(prevState => ({
          dataSource: prevState.dataSource.cloneWithRows(newProps.someData)
        }))
      }
    }
  *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  // Render a footer.
  renderFooter = () => {
    return (
      <Text> - Footer - </Text>
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderFooter={this.renderFooter}
          enableEmptySections
          pageSize={15}
        />

      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentList)
