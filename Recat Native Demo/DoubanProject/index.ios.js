/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  StatusBar
} from 'react-native';

// 导入自定义组件
var Navigation = require("./iOS_views/common/navigation");
var BookList = require("./iOS_views/book/book_list");
var MovieList = require("./iOS_views/movie/movie_list")
// 隐藏状态栏
StatusBar.setHidden(true);

// TabBarIOS管理两个模块：图书、电影
var DoubanProject = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: "图书"
    };
  },
  render: function() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title={"图书"}
          selected={this.state.selectedTab==="图书"}
          onPress={() => {
            this.setState({
              selectedTab: "图书"
            })
          }}
          icon={require("./image/book-icon.png")}
        >
          <Navigation component={BookList}/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title={"电影"}
          selected={this.state.selectedTab==="电影"}
          onPress={() => {
            this.setState({
              selectedTab: "电影"
            })
          }}
          icon={require("./image/movie-icon.png")}
        >
          <Navigation component={MovieList}/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});



AppRegistry.registerComponent('DoubanProject', () => DoubanProject);
