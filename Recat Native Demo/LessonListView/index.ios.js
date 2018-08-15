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

// 练习1：ListView基本练习
// var LessonListView = require("./myListView");
// 练习2：电影列表
var LessonListView = require("./movieList");

AppRegistry.registerComponent('LessonListView', () => LessonListView);
