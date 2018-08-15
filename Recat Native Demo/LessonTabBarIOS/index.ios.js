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
  TabBarIOS
} from 'react-native';

/*
  在ReactNative中，实现页面切换，提供了两个组件：TabBarIOS、TabBarIOS.Item

  常用性能：
  selected：是否选中某个Tab，如果为true则选中并显示组件
  title：标题
  barTintColor：Tab栏的颜色
  icon：图标
  onPress：点击事件‘当某个tab被选中时，需要改变组件的selected={true}设置

  实现原理：点击tab时触发onPress法，记录被点击tab的title。再通过
  title设置tab是否被选中。（通过比较设置select的值，true/fasle）
*/

// 把TextInput、Image、ListView三节课的练习，集成到TabBarIOS中
// 导入：textInput.js
// 导入: loadImage.js、在Xcode中天机图片、配置http请求
// 导入：movieList.js、data.json

var LessTextInput = require("./textInput");
var LessonImage = require("./loadImage");
var MovieList = require("./movieList");

var LessonTabBarIOS = React.createClass({
  getInitialState: function() {
    return {
      // 用于记录显示页面组件对应的title
      tab: "LessTextInput"
    };
  },
  // TabBarIOS.Item的onPress的处理方法
  select: function(tabName) {
    this.setState({
      tab: tabName
    });
  },
  render: function() {
    return (
      <TabBarIOS style={{flex:1}}>
        <TabBarIOS.Item
          title="LessTextInput"
          icon={require("./Star.png")}
          onPress={this.select.bind(this, "LessTextInput")}
          selected={this.state.tab==="LessTextInput"}
        >
          <LessTextInput></LessTextInput>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="LessonImage"
          systemIcon="bookmarks"
          onPress={this.select.bind(this, "LessonImage")}
          selected={this.state.tab==="LessonImage"}
        >
          <LessonImage></LessonImage>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="MovieList"
          icon={require("./Play.png")}
          onPress={this.select.bind(this, "MovieList")}
          selected={this.state.tab==="MovieList"}
        >
          <MovieList></MovieList>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});


AppRegistry.registerComponent('LessonTabBarIOS', () => LessonTabBarIOS);
