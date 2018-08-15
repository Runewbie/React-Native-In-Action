import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListView,
  Image
} from 'react-native';

/*
  展示电影列表

  逻辑：未获得数据时，显示等待页面；获得数据时，显示电影列表页面

  需要给state添加一个属性，用于记录下载状态
*/

var REQUEST_URL = "https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json"

var MovieList = React.createClass({
  // 设置初始状态值
  getInitialState: function () {
    var ds = new ListView.DataSource({
      rowHasChanged: (oldRow, newRow) => oldRow!==newRow
    });

    return {
      loaded: false, // 数据是否下载成功的标识
      dataSource: ds
    };
  },
  // 下载数据
  getData: function() {
    fetch(REQUEST_URL)
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      // 刷线组件，重现渲染组件，展示LIstView
      // 得到新的数据，更新dataSource
      this.setState({
        loaded: true,
        dataSource: this.state.dataSource.cloneWithRows(responseData.movies)
      });
    })
    .catch((error) => {
      alert(error);
    })
  },

  render: function() {
    // 如果未请求到数据，提示“等待加载”页面
    if(!this.state.loaded) {
      return this.renderLoadingView();
    }

    // 电影列表
    return (
      <ListView
        style={styles.listView}
        dataSource={this.state.dataSource}
        initialListSize={10}
        renderHeader={this._renderHeader}
        renderRow={this._renderRow}
        renderSeparator={this._renderSepartor}
      />
    );
  },

  // 组件挂载完成
  componentDidMount: function() {
    // 组件挂载后，开始下载数据
    this.getData();
  },

  // 等待加载数据页面
  renderLoadingView: function() {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>loading movies ......</Text>
      </View>
    );
  },
  // 渲染行
  _renderRow: function(movie) {
    return (
      <View style={styles.rowContainer}>
        <Image
          style={styles.thumbnail}
          source={{uri: movie.posters.thumbnail}}
        />
        <View style={styles.textContainer}>
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
        <Text style={styles.header_text}>MovieList</Text>
        <View style={styles.header_Separator}></View>
      </View>
    );
  },
  // 渲染分割线
  _renderSepartor: function(sectionID:number, rowID:number) {
    var style = {
      height: 1,
      backgroundColor: "#CCCCCC"
    };
    return (
      <View style={style} key={sectionID+rowID}></View>
    );
  }
});

var styles = StyleSheet.create({
  // loading样式
  loadingContainer: {
    flex: 1,
    marginTop: 25,
    backgroundColor: "cyan",
    justifyContent: "center",
    alignItems: "center"
  },
  loadingText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  // ListView Row
  rowContainer: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  thumbnail: {
    width: 53,
    height: 81,
    backgroundColor: "gray",
  },
  textContainer: {
    flex: 1,
    marginLeft: 10
  },
  title: {
    marginTop: 3,
    fontSize: 18,
    textAlign: "center"
  },
  year: {
    marginTop: 3,
    marginBottom: 3,
    textAlign: "center"
  },
  // ListView Header
  header: {
    height: 44,
    backgroundColor: "#F5FCFF",
  },
  header_text: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  header_Separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  // ListView
  listView: {
    marginTop: 25,
    backgroundColor:  "#CCCCCC"
  }
});

module.exports = MovieList;
