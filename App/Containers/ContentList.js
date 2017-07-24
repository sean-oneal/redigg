import React, { Component } from 'react';
import * as ReactNavigation from 'react-navigation'
import { View, Text, TouchableOpacity, ListView, Image, Linking, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import RediggActions from '../Redux/RediggRedux';
import NavActions from '../Redux/NavigationRedux';

// For empty lists
import AlertMessage from '../Components/AlertMessage';

// Custom Components
import Post from '../Components/Post';
import RoundedButton from'../Components/RoundedButton';

// Styles
import styles from './Styles/ContentListStyle';

class ContentList extends Component {
  state: {
    dataSource: Object
  }

  constructor (props) {
    super(props)

    const dataObjects = [] || this.props.dataObjects;

    const rowHasChanged = (r1, r2) => r1 !== r2;

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged});

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(dataObjects),
      refreshing: false
    }
  }

  renderRow ({data}) {
      return (
        <Post {...data} ></Post>
      )
    }

  componentWillReceiveProps (newProps) {
    if (newProps) {
      this.setState(prevState => ({
        dataSource: prevState.dataSource.cloneWithRows(newProps.dataObjects.contentList),
        refreshing: false
      }))
    }
  }

  // private function to refresh content on pull down
  _onRefresh = () => {
    this.setState({refreshing: true});
    this.props.fetchData();
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
        <RoundedButton text={'home'} onPress={this.props.navigation.reRoute}></RoundedButton>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    dataObjects: state.redigg.contentList,
    navState: state.nav
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(RediggActions.userRequest()),
    reRoute: () => dispatch(NavActions.navigate({title: 'ContentList'}))
    }
}
ContentList.navigationOptions = {title: 'Redigg'};

export default connect(mapStateToProps, mapDispatchToProps)(ContentList);
