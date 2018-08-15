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

//ES5语法
var LessonFlex = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.child1}>
        </View>

        <View style={styles.child2}>
        </View>
      </View>
    );
  }
});
// export default class LessonFlex extends Component {
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

//ES5语法
// var styles = StyleSheet.create({
//   container: {
//     margin: 30,
//     width: 300,
//     height: 500,
//     backgroundColor: "yellow",
//     // 默认主轴方向是column
//     // 设置为横向排列
//     flexDirection: "row",
//     // 主轴方向
//     justifyContent: "center",
//     // 交叉轴
//     // alignItems: "center",
//   },
//   child1: {
//     width: 100,
//     height: 100,
//     backgroundColor: "green",
//   },
//   child2: {
//     width: 100,
//     height: 100,
//     backgroundColor: "blue",
//   }
// });
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

/*
  flex
  可以给组件制定flex，flex的值是数字。flex：1表示，组件可以撑满父组件的所有剩余空间
  同时存在多个并列的子组件，flex：1，均分。
  如果并列的子组件deflex值不一样，则谁的值更大，谁占据的剩余空间比例更大
  （即占据剩余空间的比等于并列组件空间flex值的比）
  练习：
*/
var styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: "cyan",
  },
  child1: {
    flex : 1,
    backgroundColor: "green",
  },
  child2: {
    // flex: 1,
    // flex: 2,
    flex: 3,
    backgroundColor: "yellow",
  }
});


AppRegistry.registerComponent('LessonFlex', () => LessonFlex);
