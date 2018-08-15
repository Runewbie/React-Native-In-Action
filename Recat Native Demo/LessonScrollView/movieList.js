import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  Image
} from 'react-native';

/*
  数据源网址：
  https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json
  返回的是JSON格式的数据

  还未学习网络请求，使用本地数据

  JSON格式化工具网址：
  https://c.runoob.com/front-end/53
*/

// 从文件中读取数据源，执行JSON.parse()方法，将JSON格式的字符串
// 转换为JSON格式对象
var movieData = require("./data.json");

// 获取所有movies数据，属性movies是一个数组
var movies = movieData.movies;

var MovieList = React.createClass({
  render: function() {
    // 创建电影列表组件,根据movies中元素的个数，创建对应的组件
    // 遍历数组，每当获取一个movie对象，将创建一个数组对象。格式一样，显示内容不一样

    // 定义空数组，存储显示电影信息的组件
    var moviesRows = [];
    // 遍历数组
    for (var i in movies) {
      // 获取movie对象
      var movie = movies[i];
      // 创建组件,显示电影信息:图片(movie.posters.thumbnail)，电影名称(movie.title)、上映时间(movie.year)
      var row = (
        <View style={styles.row} key={i}>
          <Image
            style={styles.thumbnail}
            source={{uri:movie.posters.thumbnail}}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>{movie.year}</Text>
          </View>
        </View>
      );
      // 将创建的组件存储到数组中
      moviesRows.push(row);
    }

    return(
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {
            // 数组(所有的子组件)
            moviesRows
          }
        </ScrollView>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    flex: 1,
    marginTop: 25,
    backgroundColor: "#F5FCFF"
  },
  row: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  thumbnail: {
    width: 53,
    height: 81,
    backgroundColor: "gray"
  },
  rightContainer: {
    marginLeft: 10,
    flex: 1
  },
  title: {
    fontSize: 18,
    marginTop: 3,
    marginBottom: 3,
    textAlign: "center"
  },
  year: {
    marginBottom: 3,
    textAlign: "center"
  }
});

module.exports = MovieList;
