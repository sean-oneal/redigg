import React, { Component } from 'react'
import { ScrollView, Text, Button } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/PostDetailsStyle'

class PostDetails extends Component {
  // static navigationOptions = ({navigation}) => ({
  //   title: navigation.state.params.name,
  // });

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {

    return (

      <ScrollView style={styles.container}>
        <Text>PostDetails Container</Text>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)
