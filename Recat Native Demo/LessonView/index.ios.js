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
  http://reactnative.cn/docs/0.42/view.html

  在Web开发中，div是最重要的一个元素，页面布局的基础。
  在ReactNative开发中，View组件的作用类似于div。是最基本的组件，
  被看做是容器组件
*/

var LessonView = React.createClass({
  render: function() {
    return (
      <View style={[styles.container, styles.flex]}>
        <View style={styles.item}>
          <View style={[styles.flex, styles.center]}>
            <Text>酒店</Text>
          </View>


          <View style={[styles.flex, styles.lineLeftRight]}>
            <View style={[styles.flex, styles.center, styles.lineCenter]}>
              <Text>海外酒店</Text>
            </View>
            <View style={[styles.flex, styles.center, styles.lineCenter]}>
              <Text>特价酒店</Text>
            </View>
          </View>


          <View style={styles.flex}>
            <View style={[styles.flex, styles.center, styles.lineCenter]}>
              <Text>团购</Text>
            </View>
            <View style={[styles.flex, styles.center]}>
              <Text>民宿·客栈</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
});
// export default class LessonView extends Component {
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
var styles = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: "#F2F2F2",
  },
  // 多个子组件都需要设置
  flex: {
    flex: 1,
  },
  // 多个子组件需要设置
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#FF607C",
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    height: 80,
    borderRadius: 5,
  },
  // 给中间的区域设置左右边线
  lineLeftRight:{
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "white",
  },
  // 给上班区域设置下边线
  lineCenter: {
    borderBottomWidth: 1,
    borderColor: "white",
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

AppRegistry.registerComponent('LessonView', () => LessonView);
