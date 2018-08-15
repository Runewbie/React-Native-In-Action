/*
  电影列表模板：搜索栏、电影列表
  电影列表的内容：通过调用电影搜索接获得多条电影数据
  电影列表Item是单独封装的
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ListView,
  ScrollView
} from 'react-native';

var SearchBar = require("./../common/searchBar");
var Util = require("./../common/util");
var ServiceURL = require("./../common/service");
var MovieItem = require("./movie_item");
var MovieWebView = require("./../common/customerWebView");

var MovieList = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({
      rowHasChanged: (oldRow, newRow) => oldRow!==newRow
    });

    // 返回对象
    return {
      dataSoruce: ds,
      show: false,
      keywords: "哈利波特"
    }
  },
  _changeText: function(text) {
    // 将搜索栏的值存到keyword中
    this.setState({
      keywords: text
    });
  },
  _searchPress: function() {
    this.getData();
  },
  _showDetail: function(title, url) {
    var detailRoute = {
      component: MovieWebView,
      passProps: {
        backName: "电影",
        title: title,
        url: url
      }
    }
    // 推出数据
    this.props.navigator.push(detailRoute);
  },
  getData: function() {
    this.setState({
      show: false
    });
    // 请求数据
    var that = this;
    var url = ServiceURL.movie_search + "?count=20&q=" + this.state.keywords;
    // 开始网络请求
    Util.getRequest(
      url,
      function(data) {
        if (!data.subjects || data.subjects == 0 ) {
          return alert("未找到相关电影");
        }
        var ds = new ListView.DataSource({
          rowHasChanged: (oldRow, newRow) => oldRow!==newRow
        });
        var movies = data.subjects;
        that.setState({
          show: true,
          dataSource: ds.cloneWithRows(movies)
        });
      },
      function(error) {
        alert(erro);
      }
    );
  },
  render: function() {
    return (
        <ScrollView>
          <SearchBar
            placeholder="请输入电影的名称"
            onPress={this._searchPress}
            onChangeText={this._changeText}
          />
          {
            this.state.show ?
              <ListView
                dataSource={this.state.dataSource}
                initialListSize={10}
                renderRow={this._renderRow}
                renderSeparator={this._renderSeparator}
              />
            : Util.loading
          }
        </ScrollView>
    );
  },
  // 网络请求
  componentDidMount: function() {
    // 请求数据
    this.getData();
  },

  // 渲染行
  _renderRow: function(movie) {
    return <MovieItem movie={movie} onPress={this._showDetail.bind(this, movie.title, movie.alt)}/>;
  },
  // 渲染分割线
  _renderSeparator: function(sectionID:number, rowID:number) {
    var style = {
      height: 1,
      backgroundColor: "#CCCCCC"
    };
    return <View style={style} key={sectionID+rowID}></View>
  }
});

var style = StyleSheet.create({

});

module.exports = MovieList;
