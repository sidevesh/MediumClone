import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import {Touchable} from './helpers';

export default class BlogCard extends Component {
  render() {
    return (
      <Touchable onPress={()=>{this.props.showBlog()}} style={{margin: 10}}>
        <View style={styles.card}>
          <CardTitle
            title={this.props.data.title}
            subtitle={"By "+this.props.data.author}
            avatarSource={{uri: this.props.data.author_image}}
          />
          <CardContent text={this.props.data.content.slice(0,180)+"..."}/>
        </View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 5
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 2,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0.3,
    }
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});