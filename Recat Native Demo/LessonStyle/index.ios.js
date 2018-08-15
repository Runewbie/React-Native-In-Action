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

// 定义组件
var LessonStyle = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>

        <View style={[styles.top, styles.border]}>
        </View>

        <View style={[styles.bottom, styles.border,{borderWidth: 5}]}>
        </View>

      </View>
    );
  }
});
// export default class LessonStyle extends Component {
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

// 定义样式
var styles = StyleSheet.create({
  // 外层
  container: {
    marginTop: 25,
    marginLeft: 30,
    backgroundColor: 'red',
    width: 300,
    height: 400,
  },
  // 上层
  top: {
    backgroundColor: 'green',
    width: 280,
    height: 250,
    margin: 10,
    // borderWidth: 3,
    // borderColor: "black",
  },
  // 下层
  bottom: {
    backgroundColor: 'yellow',
    width: 280,
    height: 110,
    margin: 10,
    // borderWidth: 3,
    // borderColor: "black",
  },
  border: {
    borderWidth: 3,
    borderColor: "black",
  }
});
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

AppRegistry.registerComponent('LessonStyle', () => LessonStyle);
