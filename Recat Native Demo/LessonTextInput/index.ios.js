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
  TextInput,
  TouchableOpacity
} from 'react-native';

/*
  注意：组件需要导入！！！

  TextInput 是一个允许用户在应用中通过键盘输入文本的基本组件。
  本组件的属性提供了多种特性的配置，譬如自动完成、自动大小写、
  占位文字，以及多种不同的键盘类型（如纯数字键盘）等等
  常用：
  placeholder 占位符
  value 输入框的值
  password 是否密文输入
  editable 输入框是否可编辑
  returnKeyType 键盘return键类型
  onChange 当文本变化时调用
  onEndEditing 当结束编辑时调用
  onSubmEditing 当结束编辑，点击提交按钮时调用
  ......
*/


var LessonTextInput = React.createClass({
      getInitialState: function() {
        return {
          inputText: ""
        };
      },
      // 输入框的onChanage实现
      getContent: function(text) {
        this.setState({
          inputText: text
        });
      },
      // 按钮的方法实现
      clickBtn: function() {
        alert(this.state.inputText);
      },
      render: function() {
        return(
          <View style={styles.container}>
            <View style={styles.flex}>
              <TextInput
                style={styles.input}
                returnKeyType="search"
                placeholder="请输入内容"
                onChangeText={this.getContent}
              />
            </View>
            <TouchableOpacity style={styles.btn} onPress={this.clickBtn}>
              <Text style={styles.search}>搜索</Text>
            </TouchableOpacity>
          </View>
        );
      }
});

var styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 45,
    marginTop: 25,
  },
  flex: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    marginLeft: 5,
    paddingLeft: 5,
    borderColor: "#CCC",
    borderRadius: 4,
  },
  btn: {
    width: 55,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "#23BEFF",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  search: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
  }
});

AppRegistry.registerComponent('LessonTextInput', () => LessonTextInput);
