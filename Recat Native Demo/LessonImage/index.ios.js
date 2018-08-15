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
  Image
} from 'react-native';

/*
  用于显示图片的组件，包括网络图片、静态资源等
  常用属性：
    resizeMode 图片适应模式cover、contain、stretch
    source 图片引用地址
    iOS支持属性：onLoad、onLoadEnd、onLoadStart、onProgres
*/

// 练习：显示两张图片，分别是网络图片、静态资源

var LessonImage = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.net}>
          <Image
            style={styles.netImage}
            source={{uri:"http://n.sinaimg.cn/fashion/transform/20170325/SVBt-fyctevp7694856.jpg"}}
          />
        </View>
        <View style={styles.local}>
          <Image
            style={styles.localImage}
            source={require('./ReactNative.jpg')}
            // source={require("./ReactNative.jpg")}
          />
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
    alignItems: "center",
  },
  net: {
    marginTop: 30,
    width: 300,
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "cyan"
  },
  netImage: {
    width: 280,
    height: 200,
    backgroundColor: "gray"
  },
  local: {
    marginTop: 30,
    width: 300,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow"
  },
  localImage: {
    width: 180,
    height: 180,
    backgroundColor: "gray"
  }
});

AppRegistry.registerComponent('LessonImage', () => LessonImage);
