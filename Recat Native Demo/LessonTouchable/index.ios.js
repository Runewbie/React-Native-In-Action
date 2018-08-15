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
  TouchableOpacity
} from 'react-native';

/*
  React Native 提供3个组件用于给其他没有触摸事件的组件绑定触摸事件
  TouchableOpacity 透明触摸，点击时，组件会出现透明过渡效果
  TouchableHeight 高亮数模，点击时，组价会出现高亮效果
  TouchableWithoutFeedback 无反馈触摸，点击时，组件无视觉变化

  使用时需要导入组件
*/

var LessonTouchable = React.createClass({
  clickBtn: function() {
    alert("点击搜索按钮");
  },
  render: function() {
    return(
    <View style={styles.container}>
      <View style={styles.flex}>
        <View style={styles.input}>
        </View>
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
// export default class LessonTouchable extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('LessonTouchable', () => LessonTouchable);
