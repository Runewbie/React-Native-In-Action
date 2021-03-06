import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl
} from 'react-native';

/*
  ScrollView 简单实现
  实现监测拖拽、滑动的相关方法
  添加几个子组件
*/

var MyScrollView = React.createClass({
  _onScrollBeginDrag: function() {
    console.log("开始拖拽");
  },
  _onScrollEndDrag: function() {
    console.log("结束拖拽");
  },
  _onMomentumScrollBegin: function() {
    console.log("开始滑动");
  },
  _onMomentumScrollEnd: function() {
    console.log("滑动结束");
  },
  _onRefresh() {
    console.log("刷新");
  },
  render: function() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={true}
          onScrollBeginDrag={this._onScrollBeginDrag}
          onScrollEndDrag={this._onScrollEndDrag}
          onMomentumScrollBegin={this._onMomentumScrollBegin}
          onMomentumScrollEnd={this._onMomentumScrollEnd}
          refreshControl={
            <RefreshControl
              refreshing={false}
              tintColor="red"
              title="正在刷新......"
              onRefresh={this._onRefresh}
            />
          }
          >
          <View style={styles.view_1}></View>
          <View style={styles.view_2}></View>
          <View style={styles.view_3}></View>
        </ScrollView>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cyan"
  },
  scrollView: {
    marginTop: 25,
    backgroundColor: "#CCCCCC"
  },
  view_1: {
    margin: 15,
    height: 300,
    flex: 1,
    backgroundColor: "yellow"
  },
  view_2: {
    margin: 15,
    height: 300,
    flex: 1,
    backgroundColor: "blue"
  },
  view_3: {
    margin: 15,
    height: 300,
    flex: 1,
    backgroundColor: "green"
  }
});

module.exports = MyScrollView;
