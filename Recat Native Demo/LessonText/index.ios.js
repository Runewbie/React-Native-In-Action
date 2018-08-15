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
  http://reactnative.cn/docs/0.42/text.html#content

  常用特性：
  onPress 手指触摸事件
  numberOfLines 显示多少行

  可以设置字体的颜色、大小、对齐方式等
*/

/*
  界面布局分为两部分：
  Header和新闻信息

  整个页面是一个组件，由两个子组件组成

  如果都写在index.ios.js文件中，代码比较乱
  在单独一个文件中定义子组件，使用Module.exports将组件导出为独立的模块，
  可以在其他文件中引用
*/
// 引入
var Header = require("./header");
var News = require("./news");
// import Header from "./header";

var LessonText = React.createClass({
  render: function() {
    // 定义数组存储新闻内容
    var news = [
      "1群： 439022088（已满) 2群： 488376556（已满）",
      "3群： 527104912（已满） 4群： 170754112（已满）",
      "5群： 138811944（已满） 6群： 446548027（已满）",
      "7群： 115487854（已满） 8群： 317323710（已满）",
      "9群： 128731649"
    ];

    return (
      <View style={styles.flex}>
        {/* Header */}
        <Header></Header>
        {/* News */}
        <News news={news}></News>
      </View>
    );
  }
});

var styles = StyleSheet.create({
    flex: {
      flex: 1
    }
});

// export default class LessonText extends Component {
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

AppRegistry.registerComponent('LessonText', () => LessonText);
