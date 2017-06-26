import React, { Component } from 'react';
import Home from './Home';
import Blog from './Blog';

export default class MediumClone extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentSection: "home"
    }
  }

  render() {
      if(this.state.currentSection==="home") {
        return <Home showBlogById={(id)=>{this.setState({currentSection: id})}}/>;
      }
      else {
        return <Blog id={this.state.currentSection} showHome={()=>{this.setState({currentSection: "home"})}}/>;
      }
  }

}