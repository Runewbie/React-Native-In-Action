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
  View
} from 'react-native';

/*
  应用程序由很多功能视图组成，一个应用中重要的功能之一就是“导航”，在ReactNative中称为“路由route”，
  使用导航器可以让你在应用的不同场景(页面)间进行切换。

  在ReactNative中，有两个实现导航功能的组件：Navigator和NavigatorIOS
  Navigator支持安卓和iOS，NavigatorIOS支持iOS
  NavigatorIOS比Navigator具有更多的属性和方法，在UI方面可以进行更多的设置，例如：backButtonIcon，
  backButtonTitle，onLeftButtonPress等等，比较方便
  如果想实现更多的自定义设置，建议用Navigator
*/

// 实现导航功能，页面切换
// var LessonNavigator = require("./navigation");
// 实现导航功能，页面传值
var LessonNavigator = require("./pussValue");

AppRegistry.registerComponent('LessonNavigator', () => LessonNavigator);
