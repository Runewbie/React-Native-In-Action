import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Image
} from 'react-native';

// 从文件中读取数据
var movieData = require("./data.json");

// 获取所有movies数据，属性movies是一个数组
// 原始数据
var movies = movieData.movies;

var MovieList = React.createClass({
  getInitialState: function() {
    // 创建dataSource对象
    var ds = new ListView.DataSource({
      rowHasChanged: (oldRow, newRow) => oldRow !== newRow
    });
    return {
      dataSource: ds.cloneWithRows(movies)
    };
  },
  // 渲染行组件
  _renderRow: function(movie) {
    return (
      <View style={styles.row}>
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
  },
  // 渲染头部
  _renderHeader: function() {
    return (
      <View style={styles.header}>
        <Text style={styles.header_text}>Movies List</Text>
        <View style={styles.separator}></View>
      </View>
    );
  },
  // 渲染分割线
  _renderSeparator: function(sectionID:number, rowID:number) {
    return (
      <View style={styles.separator} key={sectionID+rowID}></View>
    );
  },
  render: function() {
    return (
      <ListView
        style = {styles.listView}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        renderHeader={this._renderHeader}
        renderSeparator={this._renderSeparator}
        initialListSize={10}
      />
    );
  }
});

var styles = StyleSheet.create({
  listView: {
    marginTop: 25,
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  // 行组件样式
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
  },
  // header组件样式
  header: {
    height: 50,
    backgroundColor: "#F5FCFF"
  },
  header_text: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 44
  },
  // 分割线组件的样式
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  }
});

module.exports = MovieList;
