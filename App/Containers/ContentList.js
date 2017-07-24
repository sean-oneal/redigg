import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ListView, Image, Linking, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import GithubActions from '../Redux/GithubRedux';

// For empty lists
import AlertMessage from '../Components/AlertMessage';

// Custom Components
import Post from '../Components/Post';
// import DrawerButton from '../Components/DrawerButton';
// import RoundedButton from '../Components/RoundedButton'

// Styles
import styles from './Styles/ContentListStyle'

class ContentList extends Component {
  state: {
    dataSource: Object
  }

  constructor (props) {
    super(props)

    const dataObjects = [] || this.props.dataObjects

    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(dataObjects),
      refreshing: false
    }
  }

  // TODO: Refactor -> place inside of custom Post Component
  renderRow ({data}) {
      return (
        // <View key={data.id}style={styles.row}>
        //   <Image
        //     style={{width: 50, height: 50}}
        //     source={{uri: data.thumbnail}}
        //     />
        //   <Text> {data.title} </Text>
        //   <Icon
        //      style={styles.downIcon}
        //      name='arrow-up'
        //      size={20}>{' ' + data.ups}
        //    </Icon>
        // </View>
        <Post {...data} ></Post>
      )
    }

    // return (
    //   <View style={styles.row}>
    //     <AlertMessage></AlertMessage>
    //     <TouchableOpacity onPress={() => Linking.openURL(data.preview.images[0].source.url)}>
    //       <Image
    //         style={{width: 50, height: 50}}
    //         source={{uri: data.thumbnail}}
    //       />
    //     </TouchableOpacity>
    //     <TouchableOpacity style={styles.col}>
    //       <Icon
    //         style={styles.downIcon}
    //         name='arrow-up'
    //         size={20}>{' ' + data.ups}
    //       </Icon>
    //     </TouchableOpacity>
    //     <TouchableOpacity style={styles.col} >
    //       <Icon
    //         style={styles.downIcon}
    //         name='arrow-down'
    //         size={20}>{' ' + data.downs}
    //       </Icon>
    //     </TouchableOpacity>
    //     <TouchableOpacity>
    //       <Text
    //         style={styles.linkLabel}
    //         onPress={() =>
    //           Linking.openURL(data.url)}>
    //         {data.title}
    //       </Text>
    //     </TouchableOpacity>
    //   </View>
    // )


  componentWillReceiveProps (newProps) {
    if (newProps) {
      this.setState(prevState => ({
        dataSource: prevState.dataSource.cloneWithRows(newProps.dataObjects.contentList),
        refreshing: false
      }))
    }
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.props.fetchData()
  }

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  noRowData () {
    return this.state.dataSource.getRowCount() === 0;
  }

  // Render a footer.
  renderFooter = () => {
    return (
      <Text> </Text>
    )
  }

  render () {
    return (
      <View style={styles.container}>
      <AlertMessage show={this.noRowData()}></AlertMessage>
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderFooter={this.renderFooter}
          enableEmptySections
          pageSize={25}
          refreshControl= {
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dataObjects: state.github.contentList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(GithubActions.userRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentList)
