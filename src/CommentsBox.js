import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Comment from './Comment';

export default class CommentsBox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.commentsHeading}>Comments</Text>
        {this.props.data.map((comment)=>{
          return <Comment data={comment} key={comment.id}/>;
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    margin: 15
  },
  commentsHeading: {
    fontSize: 20
  }
});