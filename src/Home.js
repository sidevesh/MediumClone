import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Platform,
  ToastAndroid,
  AlertIOS
} from 'react-native';
import BlogCard from './BlogCard';
import data from './data';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      last_loaded: 5
    };
  }

  endReached(nativeEvent) {
    const paddingToBottom = 20;
    return nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >=
      nativeEvent.contentSize.height - paddingToBottom;
  };

  render() {
    return (
      <ScrollView
        style={{backgroundColor: '#757575'}}
        onScroll={(e)=>{
          if(this.endReached(e.nativeEvent)&&(this.state.last_loaded<(data.articles.length))) {
            if(Platform.OS==='android') {
              ToastAndroid.show('Loading More', ToastAndroid.SHORT);
            }
            else if(Platform.OS==='ios') {
              AlertIOS.alert('Loading More');
            }
            this.setState({last_loaded: this.state.last_loaded+5});
          }
        }}
      >
        {data.articles.slice(0, this.state.last_loaded).map((article)=>{
          return <BlogCard data={article} showBlog={()=>{this.props.showBlogById(article.id)}} key={article.id}/>;
        })}
      </ScrollView>
    );
  }

}