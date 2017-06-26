import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Touchable} from './helpers';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Comment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      is_liked: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainCommentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.commentName}>{this.props.data.author}</Text>
            <Text style={styles.commentContent}>{this.props.data.content}</Text>
          </View>
          <Touchable onPress={()=>{this.setState({is_liked: !this.state.is_liked})}}>
            <Icon name={this.state.is_liked ? "thumb-down" : "thumb-up"} color="#4F8EF7" size={20}/>
          </Touchable>
        </View>
        {this.props.data.comments!==undefined && this.props.data.comments.length!==0 &&
          <View style={styles.childComment}>
            {this.props.data.comments.map((comment)=>{
              return <Comment data={comment} key={comment.id}/>;
            })}
          </View>
        }
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  mainCommentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    marginBottom: 5
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  commentName: {
    fontSize: 16
  },
  commentContent: {
    fontSize: 14
  },
  childComment: {
    paddingLeft: 30,
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  }
});