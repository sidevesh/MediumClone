import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  BackHandler,
  ScrollView,
  Platform,
  ToastAndroid,
  AlertIOS
} from 'react-native';
import CommentsBox from './CommentsBox';
import whole_data from './data';

export default class Blog extends Component {

  endReached(nativeEvent) {
    const paddingToBottom = 20;
    return nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >=
      nativeEvent.contentSize.height - paddingToBottom;
  };

  constructor(props) {
    super(props);
    this.state = {
      calc_height: 0,
      data: {},
      last_loaded: 0
    }
  }

  getArticle(id) {
    return whole_data.articles.filter((article) => {
      return article.id === id;
    });
  }

  componentWillMount() {
    this.setState({data: this.getArticle(this.props.id)[0]});
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', ()=>{
      this.props.showHome();
      return true;
    });
  }

  render() {
    return (
      <ScrollView
        onScroll={(e)=>{
          if(this.endReached(e.nativeEvent)&&(this.state.last_loaded<(this.state.data.comments.length))) {
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
        <View style={styles.container}>
          <Image
            source={{uri: this.state.data.image_url}}
            resizeMode="stretch"
            style={{height: this.state.calc_height}}
            onLayout={(e)=>{this.setState({calc_height: e.nativeEvent.layout.width*9/16})}}
          />
          <Text style={styles.articleTitle}>
            {this.state.data.title}
          </Text>
          <Text style={styles.articleContent}>
            {this.state.data.content}
          </Text>
          {this.state.last_loaded!==0 &&
            <CommentsBox data={this.state.data.comments.slice(0, this.state.last_loaded)}/>
          }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  articleTitle: {
    fontSize: 34,
    margin: 15,
  },
  articleContent: {
    textAlign: 'center',
    color: '#333333',
    margin: 15,
    fontSize: 20
  }
});