## React Native零基础入门到项目实战

此项目记录我在2017年3月学习[React Native零基础入门到项目实战](http://study.163.com/course/introduction.htm?courseId=1003290004)的过程，整理了一下放到GitHub上，分为React、React Native和豆瓣项目实战三个部分（DoubanProject在Recat Native Demo文件目录下）,废话不多说，贴上笔记和代码。

### 第一部分 React 简介

#### 一、React简介

> 网上资料众多，不再赘述，传送门[React](https://reactjs.org/tutorial/tutorial.html)

#### 二、React Native开发环境配置(Mac环境)

##### **1.编辑器** 

>  Atom，Settings快捷键： command ＋ ，

##### **2.插件**   

Atom插件 ：

> -  浏览器浏览功能open-in-browser
> - 分页展示html页面效果atom-html-preview
> - 文件路径补全autocomplete-path 

##### **3.React下载** 

#####  **4.browser.min.js文件**  

```jsx
注意：
使用时需要注意版本问题！！！
React v15.3.2
browser.min.js v5.8.24
使用最新版的会导致无法渲染的问题
```

#### 三、创建React

##### **1、JSX语法入门**

> JSX不是一门新的语言，是个语法(语法糖)
>
> - 1、JSX必须借助React环境运行
> - 2、JSX标签其实就是HTML标签，只不过我们在JavaScript中书写这些标签的时候，不用使用引号("")括起来,可以像XML一样书写

```jsx
ReactDOM.render(
  <h1>Hello React</h1>,
  document.getElementById('container')
);

// 转换：JSX语法能够让我们更直观的看到组件的DOM结构，但不能直接在浏览器上运行，最终会转化为JavaScript代码
// 在浏览器上运行

ReactDOM.render(
  React.createElement('h1',null,'hello react'),
  document.getElementById('container')
);

// 4、在JSX中运行JavaScript代码
// 使用{}括起来 {表达式}

var text = "Plum";
ReactDOM.render(
  <h1>{text}</h1>,
  document.getElementById('container')
);

// 5.例如：属性、设置样式、事件绑定
```

##### **2、React模板文件**

```html
<!DOCTYPE html>
<!-- 模板文件，请勿修改 -->
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <!--react.js是react的核心库 -->
    <script src="./build/react.js" charset="utf-8"></script>
    <!--react-dom.js提供与dom相关的功能-->
    <script src="./build/react-dom.js" charset="utf-8"></script>
    <!-- browser.min.js的作用是将JSX的语法转换成JavaScript的语法 -->
    <script src="./build/browser.min.js" charset="utf-8"></script>
    <!-- 上边直接使用本地文件，也可以使用在线文件，在src处传入网址 -->

  </head>
  <body>
    <!-- React的渲染模板内容会插入到扎个dom节点中，作为一个容器 -->
    <div id="container">

    </div>
  </body>
  <!-- 在React开发中，使用JSX，跟JavaScript不兼容，在使用JSX的地方，要设置type：text/babel -->
  <!-- babel是一个转换编译器，ES6转换成可以在浏览器中运行的代码 -->
  <script type="text/babel">
    // 在此处编写React代码
    
  </script>
</html>
```

#### 四、组件

##### **1、定义组件**

> 创建一个组件类，用于输出Hello React
> 规则：
>
> - 1、React中创建的组件类以大写字母命名，驼峰命名法
> - 2、在React中使用React.createClass方法创新一个组件类
> - 3、核心代码：每个组件类都必须实现自己的render方法。输出定义好的组件模板。返回值：null，false，组件模板
> - 4.注意：组件类只能包含一个顶层标签

```jsx
// 创建组件类
var HelloMessage = React.createClass({
  render: function () {
    return <h1>Hello React</h1>
  }
});

// 调用组件类进行渲染,在模板中插入  <HelloMessage/>会自动生成一个实例
ReactDOM.render(
  <HelloMessage/>,
  document.getElementById('container')
);
```
##### **2、组件的样式**

> 设置组件的样式，讲解三种样式：
>
> - 1、内联样式
> - 2、对象样式
> - 3、选择器样式

```jsx
/*
     注意：在React和HTML5中设置样式时的书写格式是有区别的
      *1、HTML5以分号(:)结尾
      *   React以逗号(,)结尾
      *2、HTML5中key、value都不加引号
      *   React中属于JavaScript对象，key的名字不能出现连接符(-),需要使用驼峰命名法。如果value为
      *   字符串，需要加引号。
      *3、HTML5中，value如果是数字，需要带单位
      *   React中不需要带单位

      我们定义一个组件类，同时使用3种设置组件样式的方式
      需求：定义一个组件类，分为上下两行显示内容
      <div> 内联样式：设置背景颜色，边框大小，边框颜色
        <h1></h1> 对象样式：设置背景颜色，字体颜色
        <p></p> 选择器样式：设置字体大小
      <div/>

      注意：在React中使用选择器样式时，属性名不能使用class，需使用className替换
      类似的：使用htmlFor替换for属性
    */

    // 创建设置h1样式的对象
    var hStyle = {
      backgroundColor:"green",
      color:"red"
    }

    var ShowMessage = React.createClass({
        render: function(){
          return(
            <div style={{backgroundColor:"yellow",borderWidth:5,borderColor:"black",borderStyle:"solid"}}>
              <h1 style={hStyle}>{this.props.firstRow}</h1>
              <p className="pStyle">{this.props.secondRow}</p>
            </div>
          )
        }
    });

    // 渲染
    ReactDOM.render(
      <ShowMessage firstRow="你好" secondRow="React"/>,
      document.getElementById('container')
    );
```

```jsx
<!-- 选择器样式 -->
    <style>
        .pStyle {
          color: red;
          font-size: 20px;
        }
    </style>
```

##### **3、复合组件**

> 也称为组合组件，创建多个组件合成一个组件

```jsx
  /*
    需求：
    定义一个组件WebShow。功能：输出网站的名字和网址，网址是一个可以点击的链接
    分析：定义一个组件WebName负责输出网站的名字，定义组件WebLink显示网站的网址，且可以点击
  */

  // 定义WebName组件
  var WebName = React.createClass({
    render:function(){
      return <h1>Facebook</h1>
    }
  });

  // 定义WebLink组件
  var WebLink = React.createClass({
    render: function(){
      return <a href="https://www.facebook.com/">https://www.facebook.com</a>
    }
  });

  // 定义复合组件WebShow
  var WebShow = React.createClass({
    render: function(){
      return(
        <div>
          <WebName/>
          <WebLink/>
        </div>
      );
    }
  });

  // 渲染
  ReactDOM.render(
    <WebShow/>,
    document.getElementById('container')
  );
```

#### 五、属性设置

##### **1、props**

```jsx
/*
    需求：
    定义一个组件WebShow。功能：输出网站的名字和网址，网址是一个可以点击的链接
    分析：定义一个组件WebName负责输出网站的名字，定义组件WebLink显示网站的网址，且可以点击

    思路：
    1、给WebShow设置两个属性，wname，wlink
    2、WebShow的props对象增加两个属性值
    3.WebName从WebShow的props对象中获取wname的值，即网站名。
*/


  //  定义WebName
  // var WebName = React.createClass({
  //   render: function(){
  //     return <h1>{this.props.webName}</h1>;
  //   }
  // });
 
  // // 定义WebLink
  // var WebLink = React.createClass({
  //   render: function(){
  //     return <a href={this.props.webLink}>{this.props.webLink}</a>;
  //   }
  // });
  
  // // 定义WebShow
  // var WebShow = React.createClass({
  //   render: function(){
  //     return (
  //       <div>
  //         <WebName webName={this.props.wname}/>
  //         <WebLink webLink={this.props.wlink}/>
  //       </div>
  //     );
  //   }
  // });
  
  // // 渲染
  // ReactDOM.render(
  //   <WebShow wname="Facebook" wlink="https://www.facebook.com"/>,
  //   document.getElementById('container')
  // );

  /*
    ...this.props
    props提供的语法糖，可以将父组件中的全部属性都复制给子组件

    需求：定义一个Link组件，Link组件中只包含一个<a>，我们不给<a>设置任何属性，
  */
  var Link = React.createClass({
    render: function() {
      return <a {...this.props}>{this.props.name}</a>
    }
  });

  // 渲染
  ReactDOM.render(
    <Link href="https://www.facebook.com" name="Facebook"/>,
    document.getElementById('container')
  );
```

##### **2、children**

```jsx
/*
  this.props.children
  children是一个例外，不是跟组件的属性对应的。表示组件的所有的子节点。
  HTML5中有一种标签：列表 <ul> <ol> <li>
  定义一个列表组件，列表项中显示的内容，以及列表项的数量都是由外部决定的
*/

var ListComponent = React.createClass({
  render: function() {
    return (
      <ul>
        {
          /*
            列表项数量以及内容不确定，在创建模板时才能确定
            利用this.props.children从父组件获取需要展示的列表内容
            获取到列表项内容后，需要遍历children，逐项进行设置
            利用React.Children.map方法
            返回值：数组对象。这里数组中的元素是<li>
          */
          React.Children.map(this.props.children, function(child){
            //child是遍历得到的父组件的子节点
            return <li>{child}</li>
          })
        }
      </ul>
    );
  }
});

ReactDOM.render(
  (
    <ListComponent>
     <h1>Facebook</h1>
     <a href="https://www.facebook.com">https://www.facebook.com</a>
    </ListComponent>
  ),
  document.getElementById('container')
);
```

##### **3、属性默认设置** 

> 设置组件属性的默认值：通过实现组件的getDefaultProps方法，对属性设置默认值

```jsx
/*
  属性验证 propTypes
  组件类的属性
  用于验证组件实例的属性是否符合要求
*/
// var ShowTitle = React.createClass({
//   propTypes: {
//     // title数据类型必须是字符串
//     title: React.PropTypes.string.isRequired
//   },
//   render: function() {
//     return <h1>{this.props.title}</h1>
//   }
// });
//
// ReactDOM.render(
//   <ShowTitle title="123"/>,
//   document.getElementById('container')
// );

/*
  设置组件属性的默认值
  通过实现组件的getDefaultProps方法，对属性设置默认值
*/
var MyTitle = React.createClass({
  getDefaultProps: function() {
    return {
      title: "Feacbook"
    };
  },
  render: function() {
    return <h1>{this.props.title}</h1>
  }
});

ReactDOM.render(
  <MyTitle/>,
  document.getElementById('container')
);
```

#### 六、表单

##### **1、state**

>  state 状态,props组件自身的属性。当state发生变化时，会调用组件内部的render方法
>
> ```jsx
>   this.state
> ```

```jsx
/*
      事件处理
      React中的事件名称，首字母小写，驼峰命名法
      案例：定义一个组件，组将中包含一个button，给button绑定一个onClick事件
*/
    // var MyButton = React.createClass({
    //   handleClick: function() {
    //     alert("点击按钮触发的效果");
    //   },
    //   render: function() {
    //     return(
    //       <button onClick={this.handleClick}>{this.props.buttonTitle}</button>
    //     );
    //   }
    // });
    //
    // ReactDOM.render(
    //   <MyButton buttonTitle="按钮"/>,
    //   document.getElementById('container')
    // );

    /*
      state 状态
      props组件自身的属性
      this.state
    */
    // 需求：创建一个CheckButton的组件，包含一个checkbox类型<input>
    // 复选框在选中和未选中两种状态下会显示不同的文字。即根据状态渲染
    var CheckButton = React.createClass({
      // 定义初始状态
      getInitialState: function() {
        return {
          // 在这个对象中设置的属性，将会存储在state中
          // 默认装填，未选中
          isCheck: false
        }
      },
      // 定义事件绑定的方法
      handleChange: function() {
        // 修改状态值，通过this.state读取设置的状态值
        this.setState({
          isCheck: !this.state.isCheck
        });
      },

      render: function() {
        // 根据状态值，设置显示的文字
        // 在JSX语法中，不能直接使用if，else，要使用三目运算符
        var text = this.state.isCheck ? "已选中" : "未选中"

        return (
          <div>
            <input type="checkbox" onChange={this.handleChange}/>{text}
          </div>
        );
      }
    });

    ReactDOM.render(
      <CheckButton/>,
      document.getElementById('container')
    );
```

##### **2、表单**

```jsx
/*
    需求：定义一个组件，可以将用户在输入框内输入的内容进行实时的显示
    分析：
    组件与用户交互过程中，存在状态的变化，即输入框的值
*/
  var Input = React.createClass({
    getInitialState: function() {
        return{
          value: "请输入"
        };
    },
    handleChange: function(event) {
      // 通过event.target.value读取用户输入的值
      this.setState({
        value: event.target.value
      });
    },
    render: function() {
      var value = this.state.value;
      return(
        <div>
          <input type="text" value={value} onChange={this.handleChange}/>
          <p>{value}</p>
        </div>
      );
    }
  });

  ReactDOM.render(
    <Input />,
    document.getElementById('container')
  );
```

#### 七、组件的生命周期

##### **1、生命周期介绍**

> - 1、组件的生命周期可分为三个状态
>   - 1）Mounting：组件挂载，已插入真实DOM
>   - 2）Updating：组件更新，正在被重新渲染
>   - 3）Unmounting：组件移除，已移除真实DOM
> - 2、组件的生命周期可分为四个阶段：   创建、实例化、更新、销毁
> - 3、举例：网易新闻列表页面

##### **2、生命周期的方法**

> - 1、Mounting组件挂载相关
>   - 1）componentWillMount：组件将要挂载。在render之前执行，但仅执行一次，即使多次重复渲染该组件，或者改变了组件的state
>   - 2）componentDidMount：组件已经挂载。在render之后执行，同一个组件重复渲染只执行一次
> - 2、Updating组件更新相关
>   -  1）componentWillReceiveProps(object nextProps)：已加载组件收到更新的props之前调用，注意组件初始化渲染时则不会执行
>   -  2）shouldComponentUpdate(object nextProps, object nextState) ：返回值为Boolean， 组件判断是否重新渲染时调用。该接口实际是组件接收到了新的 props 或者新的 state 的时候会立即调用，然后通过
>   -  3）componentWillUpdate(object nextProps, object nextState)： 组件将要更新
>   -  4)componentDidUpdate(object prevProps, object prevState)： 组件已更新
> - 3、Unmounting组件移除相关
>   - 1）componentWillUnmount： 在组件要被移除之前的时间点触发，可以利用该方法来执行一些必要的清理组件将要被移除
> - 4、生命周期中与props和state相关
>   -  1）getDefaultProps 设置props属性默认值
>   -  2）getInitialState 设置state属性初始值

```jsx
/*
	生命周期各阶段介绍
*/
    var Demo = React.createClass({
      /*
      一、创建阶段
      流程：
        只调用getDefaultProps方法
      */
      getDefaultProps: function() {
        // 在创建类的时候被调用，设置this.props的默认值
        console.log("getDefaultProps");
        return{};
      },

      /*
      二、实例化阶段
      流程：
        getInitialState
        componentWillMount
        render
        componentDidMount
      */
      getInitialState: function() {
        // 设置this.state的默认值
        console.log("getInitialState");
        return null;
      },
      componentWillMount: function() {
        // 在render之前调用
        console.log("componentWillMount");
      },
      render: function() {
        // 用来渲染并返回一个虚拟DOM
        console.log("render");
        return <div>Hello React</div>
      },
      componentDidMount: function() {
        // 在render之后调用
        // 在该方法中，React会使用render方法返回的虚拟DOM对象创建真实的DOM结构
        // 可以在这个方法中读取DOM节点
        console.log("componentDidMount");
      },

      /*
      三、更新阶段
      流程：
        componentWillReceiveProps
        shouldComponentUpdate 如果返回值为false，后三个方法不执行
        componentWillUpdate
        render
        componentDidUpdate
      */
      componentWillReceiveProps: function() {
        console.log("componentWillReceiveProps");
      },
      shouldComponentUpdate: function() {
        // 是否需要更新
        console.log("shouldComponentUpdate");
        // return true;
        return false;
      },
      componentWillUpdate: function() {
        console.log("componentWillUpdate");
      },
      componentDidUpdate: function() {
        console.log("componentDidUpdate");
      },

      /*
      四、销毁阶段
      流程：
        componentWillUnmount
      */
      componentWillUnmount: function() {
        console.log("componentWillUnmount");
      }
    });

    // 第一次创建并加载组件
    ReactDOM.render(
      <Demo/>,
      document.getElementById('container')
    );

    // 重新渲染
    ReactDOM.render(
      <Demo/>,
      document.getElementById('container')
    );

    // 移除组件
    ReactDOM.unmountComponentAtNode(document.getElementById('container'));
```

***

### 第二部分、React Native简介

#### 八、React Native简介

网上资料众多，不再赘述，传送门[react-native](https://facebook.github.io/react-native/)

使用RN可以进行iOS和Android的开发，基于React框架 运行速度比原生慢 安装包大，必备知识：H5、JS、CSS、AJAX、原生开发

#### 九、React Native开发环境配置

参考地址：

[阮一峰老师的](http://www.ruanyifeng.com/blog/2015/03/react.html)

http://blog.csdn.net/hello_hwc/article/details/51612139  

http://reactnative.cn/docs/0.42/getting-started.html#content 

#### 十、React Native项目创建及结构分析 

node_modules 源码和依赖包

Android 和 iOS 是两个项目工程文件

package.json是配置信息

index.android.js和index.ios.js是编写React Native开发的入口文件

```jsx
/*
  第一部分
  导入ReactNative包，导入ReactNative组件
  AppRegistry：JS运行所有ReactNative应用的入口
  StyleSheet：ReactNative中使用的样式表，类似CSS样式表
  各种开发中需要使用的组件
  模板中使用的是ES6语法，ES5语法如下：
  let React = require("react-native");
  let {
    AppRegistry,
    StyleSheet,
    Text,
    View
  } = React;
  require函数，搜索目录加载文件
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

/*
  第二部分
  创建ReactNative组件
  模板中使用的是ES6语法
  render() {} 是ES6中的函数简写
  ES5语法如下：
  var HelloWorld = React.createClass({
  render: function{
  return {};
  }
  });
*/
export default class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

/*
  第三部分
  StyleSheet.create创建样式实例
  在应用中只会被创建一次，不用每次在渲染周期中重新创建
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

/*
  第四部分
  注册入口组件
  AppRegistry:负责注册运行ReactNative应用程序JavaScript入口
  registerComponent注册应用程序的入口组件。告知ReactNative哪一个组件
  被注册为应用的根容器
  第二个参数使用了ES6语法，箭头函数：
  () => HelloWorld
  返回的必须是定义的组件类的名字
  等价于
  function() {return HelloWorld}
*/
AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
```

```jsx
  //设置index.ios.buddle的请求地址 可以访问远程地址或本地资源路径
  //真机测试，请求地址与电脑设备的网段有关
  //jsbundle是ReactNative的JavaScript代码打包后的文件
  NSURL *jsCodeLocation;
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
  //创建RCTRootView对象，负责加载JavaScript APP并渲染相关视图
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"HelloWorld"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
```

#### 十一、SytleSheet样式表 

```jsx
// 定义组件
var LessonStyle = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>

        <View style={styles.top}>
        </View>

        <View style={styles.bottom}>
        </View>

      </View>
    );
  }
});

  // 上层
  top: {
    backgroundColor: 'green',
    width: 280,
    height: 250,
    margin: 10,
    borderWidth: 3,
    borderColor: "black",
  },
  // 下层
  bottom: {
    backgroundColor: 'yellow',
    width: 280,
    height: 110,
    margin: 10,
    borderWidth: 3,
    borderColor: "black",
  },
});
```

**拼接样式，数组中越往后的优先级越高：**

```jsx
// 定义组件
var LessonStyle = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>

        <View style={[styles.top, styles.border]}>
        </View>

        <View style={[styles.bottom, styles.border]}>
        </View>

      </View>
    );
  }
});

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
```

#### 十二、Flexbox布局 

```jsx
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

//ES5语法
var styles = StyleSheet.create({
  container: {
    margin: 30,
    width: 300,
    height: 500,
    backgroundColor: "yellow",
    // 默认主轴方向是column
    // 设置为横向排列
    flexDirection: "row",
    // 主轴方向
    justifyContent: "center",
    // 交叉轴
    // alignItems: "center",
  },
  child1: {
    width: 100,
    height: 100,
    backgroundColor: "green",
  },
  child2: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  }
});
```

```jsx
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
```

#### 十三、View组件 

```jsx
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
```

#### 十四、Text组件 

##### **1、Text组件-Header**

```jsx
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
// import Header from "./header";

var LessonText = React.createClass({
  render: function() {
    return (
      <View style={styles.flex}>
        {/* Header */}
        <Header></Header>
        {/* News */}
      </View>
    );
  }
});

var styles = StyleSheet.create({
    flex: {
      flex: 1
    }
});


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// 组件
var Header = React.createClass({
  render: function() {
    return (
      <View style={styles.flex}>
        <Text style={styles.font}>
          <Text style={styles.font_1}>网易</Text>
          <Text style={styles.font_2}>新闻</Text>
          <Text >有态度</Text>
        </Text>
      </View>
    );
  }
});

// 样式
var styles = StyleSheet.create({
  flex: {
    marginTop: 25,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#EF2D36",
    alignItems: "center"
  },
  // 字体设置的公共部分
  font: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  font_1: {
    color: "#CD1D1C",
  },
  font_2: {
    color: "#FFF",
    backgroundColor: "#CD1D1C"
  }
});

// 导出模块
module.exports = Header;
```

##### **2、Text组件-News模块** 

```jsx
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
      "1群： 439022088（已满)",
      "2群： 488376556（已满）",
      "3群： 527104912（已满）",
      "4群： 170754112（已满）",
      "5群： 138811944（已满）",
      "6群： 446548027（已满）",
      "7群： 115487854（已满）",
      "8群： 317323710（已满）",
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

//news.js:
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// 组件
var News = React.createClass({
  show: function(title) {
    alert(title);
  },
  render: function() {
    // 定义数组,用于存储设置好的组件
    var newsComponents = [];
    // 遍历存储信息的数组，从外部传入的
    for (var i in this.props.news) {
      var text = (
        <Text
          onPress={this.show.bind(this, this.props.news[i])}
          style={styles.news_item}
          numberOfLines={2}
          key={i}>
          {this.props.news[i]}
        </Text>
      );
      // 将设置好的Text存入数组
      newsComponents.push(text);
    }
    return (
      <View style={styles.flex}>
        <Text style={styles.news_title}>今日要闻</Text>
        {newsComponents}
      </View>
    );
  }
});

// 样式
var styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  // “今日要闻”标题
  news_title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#CD1D1C",
    marginLeft: 10,
    marginTop: 15,
  },
  // 每条新闻
  news_item: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15,
    lineHeight: 30,
  }
});
// 导出模块
module.exports = News;
```

#### 十五、TouchableOpacity组件 

```jsx
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
```

#### 十六、TextInput组件 

```jsx
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
/*
  注意：组件需要导入！！！
  TextInput 是一个允许用户在应用中通过键盘输入文本的基本组件。
  本组件的属性提供了多种特性的配置，譬如自动完成、自动大小写、
  占位文字，以及多种不同的键盘类型（如纯数字键盘）等等
  常用：
  placeholder 占位符
  value 输入框的值
  password 是否密文输入
  editable 输入框是否可编辑
  returnKeyType 键盘return键类型
  onChange 当文本变化时调用
  onEndEditing 当结束编辑时调用
  onSubmEditing 当结束编辑，点击提交按钮时调用
  ......
*/
var LessonTextInput = React.createClass({
      getInitialState: function() {
        return {
          inputText: ""
        };
      },
      // 输入框的onChanage实现
      getContent: function(text) {
        this.setState({
          inputText: text
        });
      },
      // 按钮的方法实现
      clickBtn: function() {
        alert(this.state.inputText);
      },
      render: function() {
        return(
          <View style={styles.container}>
            <View style={styles.flex}>
              <TextInput
                style={styles.input}
                returnKeyType="search"
                placeholder="请输入内容"
                onChangeText={this.getContent}
              />
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
```

#### 十七、Image组件 

```jsx
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
/*
  用于显示图片的组件，包括网络图片、静态资源等
  常用属性：
    resizeMode 图片适应模式cover、contain、stretch
    source 图片引用地址
    iOS支持属性：onLoad、onLoadEnd、onLoadStart、onProgres
*/
// 练习：显示两张图片，分别是网络图片、静态资源
var LessonImage = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.net}>
          <Image
            style={styles.netImage}
            source={{uri:"http://n.sinaimg.cn/fashion/transform/20170325/SVBt-fyctevp7694856.jpg"}}
          />
        </View>
        <View style={styles.local}>
          <Image
            style={styles.localImage}
            source={require('./ReactNative.jpg')}
            // source={require("./ReactNative.jpg")}
          />
        </View>
      </View>
    );
  }
});
var styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
    alignItems: "center",
  },
  net: {
    marginTop: 30,
    width: 300,
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "cyan"
  },
  netImage: {
    width: 280,
    height: 200,
    backgroundColor: "gray"
  },
  local: {
    marginTop: 30,
    width: 300,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow"
  },
  localImage: {
    width: 180,
    height: 180,
    backgroundColor: "gray"
  }
});
```

#### 十八、ScrollView组件 

##### **1、ScrollView组件-基本功能实现** 

```jsx
// 练习1：实现ScrollView基本功能
var LessonScrollView = require("./myScrollView");
// 练习2：电影列表
//----------------------------------------
myScrollView.js文件
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
```

##### **2、ScrollView组件-电影列表**

实例网址：

https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json

```jsx
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// 练习1：实现ScrollView基本功能
// var LessonScrollView = require("./myScrollView");
// 练习2：电影列表
var LessonScrollView = require("./movieList");
AppRegistry.registerComponent('LessonScrollView', () => LessonScrollView);
//-------------------movieList.js文件
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
```

#### 十九、ListView组件

##### **1、ListView组件-基本功能实现** 

```jsx
// 练习1：ListView基本练习
var LessonListView = require("./myListView");
// 练习2：电影列表
//-------myListView.js文件
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
/*
  ListView 数据列表
  ListView 最重要的是设置每行显示的组件
  section,header
  使用ListView.DataSource，给它传递一个普通的数组，再使用dataSource对象实例化一个ListView组件
  ListView实现：row/section组件定义、设置数据
  设置ListView数据源：
  将dataSource对象设置为state属性，ListView会根据数据源进行渲染
*/
// 原始数据： 数组（字符串）
var contents = [
  "测试数据测试数据1",
  "测试数据测试数据2",
  "测试数据测试数据3",
  "测试数据测试数据4",
  "测试数据测试数据5",
  "测试数据测试数据6",
  "测试数据测试数据7",
  "测试数据测试数据8"
];
var MyListView = React.createClass({
  getInitialState: function() {
    // 创建dataSource对象
    var ds = new ListView.DataSource({
      // 通过判断决定渲染哪些行组件，避免全部渲染，提高渲染效率
      rowHasChanged: (oldRow, newRow) => oldRow !== newRow
    });
    return {
      // 设置dataSource时，不直接使用提供的原始数据,需要使用clonewithRows对数据源进行复制
      // 使用复制后的数据源实例化ListView, 优势：当原始数据发生变化时，ListView的dataSource不会改变
      dataSource: ds.cloneWithRows(contents)
    };
  },
  // 实现渲染行的方法,渲染行组件，参数是每行要显示的数据对象
  _renderRow: function(rowData:string) {
    return(
      <View style={styles.row}>
        <Text style={styles.content}>{rowData}</Text>
      </View>
    );
  },
  render: function() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25
  },
  row: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    height: 100,
    borderBottomWidth: 1,
    borderColor: "#CCCCCC"
  },
  content: {
    flex: 1,
    fontSize: 20,
    color: "blue",
    lineHeight: 100
  }
});

module.exports = MyListView;
```

##### **2、ListView组件-电影列表**

```jsx
// 练习1：ListView基本练习
// var LessonListView = require("./myListView");
// 练习2：电影列表
var LessonListView = require("./movieList");
//-------------movieList.js
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
```

#### 二十、Navigator组件 

##### **1、Navigator组件-导航功能** 

```jsx
/*
  应用程序由很多功能视图组成，一个应用中重要的功能之一就是“导航”，在ReactNative中称为“路由route”，
  使用导航器可以让你在应用的不同场景(页面)间进行切换。
  在ReactNative中，有两个实现导航功能的组件：Navigator和NavigatorIOS
  Navigator支持安卓和iOS，NavigatorIOS支持iOS
  NavigatorIOS比Navigator具有更多的属性和方法，在UI方面可以进行更多的设置，例如：backButtonIcon，
  backButtonTitle，onLeftButtonPress等等，比较方便
  如果想实现更多的自定义设置，建议用Navigator
*/
// 实现导航功能，页面切换
var LessonNavigator = require("./navigation");
//-------  navigation.js
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native';
/*
  导航器通过路由对象（route）来分辨不同的场景，每个路由对象都对应一个页面组件，
  开发者设置什么，导航器显示什么，所以route是导航器中重要的一个对象
  三步操作实现导航功能：
  1、设置路由对象（告诉导航器我要显示哪个页面）
    创建路由对象，对象的内容自定义，但是必须包含该场景需要展示的页面组件
  2、场景渲染配置（告诉导航器我要什么样的页面跳转效果）
  3、渲染场景（告诉导航器如何设置渲染页面）
    利用第一步设置的路由对象进行渲染场景
*/
// 定义第一个页面
// FirstPage 一个button，点击进入下一级页面
var FirstPage = React.createClass({
  // 按钮onPress事件处理方法
  pressPush: function() {
    // 推出下一级页面
    var nextRoute = {
      component: SecondPage
    };
    this.props.navigator.push(nextRoute);
  },
  render: function() {
    return (
      <View style={[styles.flex,{backgroundColor:"yellow"}]}>
        <TouchableOpacity style={styles.btn} onPress={this.pressPush}>
          <Text>点击推出下一级页面</Text>
        </TouchableOpacity>
      </View>
    );
  }
});
// 定义第二个页面
// SecondPage 一个button，点击返回上一级页面
var SecondPage = React.createClass({
  pressPop: function() {
    // 返回上一级
    this.props.navigator.pop();
  },
  render: function() {
    return (
      <View style={[styles.flex,{backgroundColor:"cyan"}]}>
        <TouchableOpacity style={styles.btn} onPress={this.pressPop}>
          <Text>点我跳回去</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

var LessonNavigator =  React.createClass({
  render: function() {
    var rootRoute = {
      component: FirstPage
    };
    return (
      <Navigator
        /*
        第一步：
        initialRoute
        这个指定了默认的页面，也就是启动App之后会看到界面的第一屏。
        对象的属性是自定义的，这个对象中的内容会在renderScene方法中处理。
        备注：必须包含的属性，即component，表示需要渲染的页面组件
        */
        initialRoute={rootRoute}
        /*
        第二步：
        configureScene
        场景渲染的配置
        */
        configureScene={(route) => {
          return Navigator.SceneConfigs.PushFromRight;
        }}
        /*
        第三步：
        renderScene
        渲染场景
        参数： route（第一步创建并设置给导航器的路由对象），navigation（导航器对象）
        实现：给需要显示的组件设置属性
        */
        renderScene={(route, navigator) => {
          // 从route对象中获取页面组件
          var Component = route.component;
          return (
            <Component
              navigator={navigator}
              route={route}
            />
          );
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    width: 150,
    height: 30,
    borderColor: "#0089FF",
    borderWidth: 1,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center"
  }
});

module.exports = LessonNavigator;
```

**2、Navigator组件-导航传值** 

```jsx
//---pussValue.js
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  TextInput
} from 'react-native';

// 从前一个页面向后一个页面传值
// 定义InputPage 输入值、按钮
var InputPage = React.createClass({
  getInitialState: function() {
    return {
      // 记录输入框的值
      content: ""
    };
  },
  getInputContent: function(inputText) {
    // 将输入框的值进行记录
    this.setState({
      content: inputText
    });
  },
  pushNextPage: function() {
    // 推出下一级页面，并且传值
    var route = {
      component: DetailPage,
      passProps: {
        // 将输入框的内容传递给下一级页面
        showText:this.state.content
      }
    };
    this.props.navigator.push(route);
  },
  render: function() {
    return (
      <View style={inputStyle.container}>
        <TextInput
          style={inputStyle.input}
          placeholder="请输入内容"
          onChangeText={this.getInputContent}
        />
        <TouchableOpacity style={inputStyle.btn} onPress={this.pushNextPage}>
          <Text>进入下一页</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

var LessonNavigator = React.createClass({
  render: function() {
    var rootRoute = {
      component: InputPage,
      // 存储需要传递的内容
      passProps: {

      }
    };
    return (
      <View style={{flex:1}}>
        <Navigator
          initialRoute={rootRoute}
          configureScene={(route) => {
            return Navigator.SceneConfigs.PushFromRight;
          }}
          renderScene={(route, navigator) => {
            var Component = route.component;
            return (
              <Component
                navigator={navigator}
                route={route}
                {...route.passProps}
              />
            );
          }}
        />
      </View>
    );
  }
});

var inputStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  input: {
    height: 45,
    marginLeft: 25,
    marginRight: 25,
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4
  },
  btn: {
    marginTop: 20,
    height: 30,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "black",
    padding: 5,
    justifyContent: "center",
    alignItems: "center"
  }
});

// DetailPage 显示文本、按钮
var DetailPage = React.createClass({
  popFrontPage: function() {
    // 返回上一级页面
    this.props.navigator.pop();
  },
  render: function() {
    return (
      <View style={detailStyle.container}>
        <Text style={detailStyle.text}>{this.props.showText}</Text>
        <TouchableOpacity style={detailStyle.btn} onPress={this.popFrontPage}>
          <Text>返回上一页</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

var detailStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  text: {
    marginLeft: 25,
    marginRight: 25,
    padding: 25,
    backgroundColor: "cyan",
    fontSize: 20,
    textAlign: "center"
  },
  btn: {
    marginTop: 20,
    height: 30,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "black",
    padding: 5,
    justifyContent: "center",
    alignItems: "center"
  }
});

var styles = StyleSheet.create({
});

module.exports = LessonNavigator;
```

#### 二十一、TabBarIOS组件 

```jsx
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
  TabBarIOS
} from 'react-native';

/*
  在ReactNative中，实现页面切换，提供了两个组件：TabBarIOS、TabBarIOS.Item
  常用性能：
  selected：是否选中某个Tab，如果为true则选中并显示组件
  title：标题
  barTintColor：Tab栏的颜色
  icon：图标
  onPress：点击事件‘当某个tab被选中时，需要改变组件的selected={true}设置
  实现原理：点击tab时触发onPress法，记录被点击tab的title。再通过
  title设置tab是否被选中。（通过比较设置select的值，true/fasle）
*/
// 把TextInput、Image、ListView三节课的练习，集成到TabBarIOS中
// 导入：textInput.js
// 导入: loadImage.js、在Xcode中天机图片、配置http请求
// 导入：movieList.js、data.json
var LessTextInput = require("./textInput");
var LessonImage = require("./loadImage");
var MovieList = require("./movieList");

var LessonTabBarIOS = React.createClass({
  getInitialState: function() {
    return {
      // 用于记录显示页面组件对应的title
      tab: "LessTextInput"
    };
  },
  // TabBarIOS.Item的onPress的处理方法
  select: function(tabName) {
    this.setState({
      tab: tabName
    });
  },
  render: function() {
    return (
      <TabBarIOS style={{flex:1}}>
        <TabBarIOS.Item
          title="LessTextInput"
          icon={require("./Star.png")}
          onPress={this.select.bind(this, "LessTextInput")}
          selected={this.state.tab==="LessTextInput"}
        >
          <LessTextInput></LessTextInput>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="LessonImage"
          systemIcon="bookmarks"
          onPress={this.select.bind(this, "LessonImage")}
          selected={this.state.tab==="LessonImage"}
        >
          <LessonImage></LessonImage>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="MovieList"
          icon={require("./Play.png")}
          onPress={this.select.bind(this, "MovieList")}
          selected={this.state.tab==="MovieList"}
        >
          <MovieList></MovieList>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

AppRegistry.registerComponent('LessonTabBarIOS', () => LessonTabBarIOS);

//-----------------有可能会出现的错误：
/*错误描述:
Element type is invalid: expected a String(for built-in components) or a class/function(for composite components) but got:object. check the render method of ‘….’
这个错误是很不容易发现的原因是由于ES5语法和ES6语法混乱搭配导致的。
ES5 语法 导出模块
module.exports = Page2;

ES5语法 引入模块
var NaviBar = require('./NaviBar');

ES6 导出语法
export  default class Page2 extends Component {

ES6 语法 导入模块
import NaviBar from './NaviBar';

两种语法混乱使用, 比如用ES6 导出 用ES5导入, 就可能会产生上述错误
*/
```

#### 二十二、fetch网络请求-get和post 

##### **1、fetch网络请求-get和post**

```jsx
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

/*
   在ReactNative中，使用fetch实现网络请求。fetch同XMLHttpRequest非常类似，是一个封装程度更高的网络
   API，使用起来很简洁，因为使用了Promise。
   Promise是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大，ES6将其写进了语言
   标准，统一了用法。原生提供了Promise对象。
   简单地说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
   Promise对象代表一个异步操作：有三种状态：Pending（进行中）、Resolved（已完成）、Rejected（
   已失败）。
   Promise实例生成以后，可以分别指定“完成”和“失败”状态额回调函数。
   实现方式：链式调用方法。
   fetch中使用的就是该特性。

   语法：
   fetch(参数)
   .then(完成的回调函数)
   .catch(失败的回调函数)

    fetch(url,opts)
    .then((response) => {
      // 网络请求成功执行该回调函数，得到响应对象，通过response可以获取
      // 请求的参数。例如：json、text等

      return response.text();
      // return response.json();
    })
    .then((response) => {
      // 处理请求得到的数据
    })
    。catch((response) => {
      // 网络请求失败执行该回调函数，得到错误信息
    })
*/
function getRequest(url) {
  var opts = {
    method: "GET"
  }

  fetch(url, opts)
  .then((response) => {
    return response.text();// 返回一个带有文本的对象
  })
  .then((responseText) => {
    alert(responseText);
  })
  .catch((error) => {
    alert(error);
  })
}

/*
  FormData

  Web应用中频繁使用的一项功能就是表单数据的序列化，XMLHttpRequest2定义了
  FormData类型。
  FormData主营用于实现序列化表单以及创建与表单格式相同的数据。

  var data = new FormData();
  data.append("name","yihuiyun");
  append方法接收两个参数：键和值。分别对应表单字段的名字和字段中包含的值，
  天机多个键值对。

  在JQuery中，“key1=value1&key2=value2”作为参数传入对象框架会自动封装成
  FormData形式。
  在Fetch中进行post请求时，需要自动创建FormData对象传给body
*/
function postRequest(url) {
  // 将“key1=value1&key2=value2”封装成FormData形式

  let formData = new FormData();
  formData.append("username","reactnative");
  formData.append("password","456");

  var opts = {
    method: "POST",
    body: "formData"
  }

  fetch(url,opts)
  .then((response) => {
    return response.text();
  })
  .then((responseText) => {
    return alert(responseText);
  })
  .catch((error) => {
    alert(error);
  })
}

var GetData = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={getRequest.bind(this,"http://project.lanou3g.com/projects/bj/reactnative/login.php?username=lanou&password=123")}>
          <View style={styles.btn}>
            <Text>GET</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={postRequest.bind(this,"http://project.lanou3g.com/projects/bj/reactnative/login.php")}>
          <View style={styles.btn}>
            <Text>POST</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "cyan",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  btn: {
    width: 60,
    height: 30,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "black",
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center"
  }
});

module.exports = GetData;
```

##### **2、fetch网络请求-电影列表** 

```jsx
//----movieList.js
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
```

### 三、项目实战

#### 二十三、豆瓣项目 

##### **1、项目介绍**

一、项目设计

```jsx
豆瓣项目
    |
    |-----图书
    |		|
    |		|-----列表页面（搜索功能）
    |		|
    |		|-----详细页面（自定义布局）
    |
    |-----电影
    		|
    		|-----列表页面（搜索功能）
    		|
    		|-----详细页面（WebView）
```

二、模块划分

```jsx
1、公共模块

	1）工具类		util.js

		获取屏幕size
		基于分fetch的get请求
		loading组件

	2）API接口列表	service.js

		图书搜索
		图书详情
		电影搜索

	3）Navigator封装		navigator.js

		每个模块都需要Navigator控制页面导航

	4)Header封装		header.js left_icon.js

		图书评价、电影详情都需要展示header

	5)搜索框封装		searchBar.js

		图书列表和电影列表都需要添加搜索框

	6)WebView封装 customWebView.js
		通过WebView加载电影详情

2、图书模块

	1)图书列表 				book_list.js
	2)图书列表Item(行组件)	   book_item.js
	3)图书详情 				book_detai.js

3、电影模块
	1)电影列表 				movie_list.js
	2)电影列表Item(行组件)    movie_item.js
```

三、项目API
```jsx
豆瓣API V2	https://developers.douban.com/wiki/?title=api_v2
图书API V2 	https://developers.douban.com/wiki/?title=book_v2
电影API V2 	https://developers.douban.com/wiki/?title=movie_v2

1、图书
	1）搜索图书：
	API：GET  https://api.douban.com/v2/book/search
	
	参数	意义	备注
	q	查询关键字	q和tag必传其一
	tag	查询的tag	q和tag必传其一
	start	取结果的offset	默认为0
	count	取结果的条数	默认为20，最大为100

2、电影：
	1）电影搜索：
	API：GET		https://developers.douban.com/wiki/?title=movie_v2#search

	Resources URI
	/v2/movie/search?q={text}

	Required Scope
	movie_basic_r

	Example:
	GET /v2/movie/search?q=张艺谋 GET /v2/movie/search?tag=喜剧
```
##### **2、创建项目-搭建框架** 

```jsx
//---index.ios.js
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
  TabBarIOS,
  StatusBar
} from 'react-native';

// 隐藏状态栏
StatusBar.setHidden(true);

// TabBarIOS管理两个模块：图书、电影
var DoubanProject = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: "图书"
    };
  },
  render: function() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title={"图书"}
          selected={this.state.selectedTab==="图书"}
          onPress={() => {
            this.setState({
              selectedTab: "图书"
            })
          }}
          icon={require("./image/book-icon.png")}
        >
          <View style={{backgroundColor:"cyan", flex:1}}></View>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title={"电影"}
          selected={this.state.selectedTab==="电影"}
          onPress={() => {
            this.setState({
              selectedTab: "电影"
            })
          }}
          icon={require("./image/movie-icon.png")}
        >
          <View style={{backgroundColor:"yellow", flex:1}}></View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

AppRegistry.registerComponent('DoubanProject', () => DoubanProject);
```

##### **3、公共模块开发** 

```jsx
//---customerWebView.js
/*
  实现功能：封装WebView，根据传入的url展示网页信息
  包含组件：Header、WebView
  外部传入：
    给Header设置：navigator、initObj(backName, title)
    给WebView设置：source
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

var Header = require("./header");

var CustomerWebView = React.createClass({
  render: function() {
    return (
      <View style={{backgroundColor:"white", flex:1}}>
        <Header
          navigator={this.props.navigator}
          initObj={{
            backName: this.props.backName,
            barTitle: this.props.title
          }}
        />
        <WebView
          startInLoadingState={true}
          contentInset={{top:44, bottom:-120}}
          source={{url:this.props.url}}
        />
      </View>
    );
  }
});

module.exports = CustomerWebView;
```

```jsx
//--header.js
/*
  实现功能：封装Header，在头部展示标题和返回按钮
  包含组件：
  外部传入：
    navigator 点击返回按钮返回上一级页面
    initObj(backName, barTitle)  返回按钮的名称、标题
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

var Icon = require("./left_icon");

var Header = React.createClass({
  render: function() {

    // 获取obj对象，包括：backName(按钮名称)、barTitle
    var headerContent = this.props.initObj;

    return (
      <View style={styles.header}>
        <TouchableOpacity style={styles.left_btn} onPress={this._pop}>
          <Icon/>
          <Text style={styles.btn_text}>{headerContent.backName}</Text>
        </TouchableOpacity>
        <View style={styles.title_container}>
          <Text style={styles.title} numberOfLines={1}>{headerContent.barTitle}</Text>
        </View>
      </View>
    );
  },

  // 返回按钮事件处理方法
  _pop: function() {
    this.props.navigator.pop();
  }
});

var styles = StyleSheet.create({
  header: {
    height: 44,
    backgroundColor: "#3497FF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  left_btn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  btn_text: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold"
  },
  title_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    lineHeight:  18,
    width: 200
  }
});

module.exports = Header;
```

```jsx
//---left_icon.js
/*
  实现功能：封装返回按钮图标，不使用图片
  包含组件：
  外部传入：
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var Icon = React.createClass({
  render: function() {
    return (
      <View>
        <View style={styles.go}></View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  go: {
    width: 15,
    height: 15,
    borderLeftWidth: 2,
    borderBottomtWidth: 2,
    borderColor: "#FFF",
    marginLeft: 10,
    transform: [{rotate:"45deg"}] //将一个矩形旋转了45°
  }
});

module.exports = Icon;
```

```jsx
//--navigation.js
/*
  实现功能：封装导航器初始化设置
  包含组件： Navigator
  外部传入：
    component 需要展示的页面组件
    route对象  必须添加component属性：如果需要传值可以添加passProps属性
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

var Navigation = React.createClass({
  render: function() {
    // 创建route对象，约定格式
    var rootRoute = {
      component: this.props.component,
      passProps: {

      }
    };

    return (
      <Navigator
        initialRoute={rootRoute}
        configureScene={(rootRoute) => {
          return Navigator.SceneConfigs.PushFromRight
        }}
        renderScene={(route, navigator) => {
           var Component = route.component;
           return (
             <View style={{flex:1}>
              <Component
                navigator={navigator}
                route={route}
                {...this.passProps}
              />
             </View>
           );
        }}
      />
    );
  }
});

var styles = StyleSheet.create({

});

module.exports = Navigation;
```

```jsx
//--searchBar.js
/*
  实现功能：封装搜索栏组件，包括文本输入框和搜索按钮
  包含组件：
  外部转入：
    输入框和按钮的属性设置由外部传入。例如：placeholder、onPress、onChangeText
    使用...this.props将外部传入的属性设置给TextInput和TouchableOpacity
    注意：指定高度、边框颜色、边框线宽
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

var SearchBar = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} {...this.props}/>
        </View>
        <TouchableOpacity style={styles.btn} {...this.props}>
          <Text style={styles.search}>搜索</Text>
        <TouchableOpacity>
      </View>
    );
  }
});

var style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    height: 44,
    marginTop: 10,
  },
  inputContainer: {
    flex: 1,
    marginLeft: 5,
  },
  input: {
    flex: 1,
    height: 44,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#CCC",
    padding: 5
  },
  btn: {
    width: 55,
    height: 44,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "#23BEFF",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  search: {
    flex: 1,
    color: "#FFF",
    fontSize: 44,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 44
  }
});

module.exports = SearchBar;
```

```jsx
//---service.js
/*
  接口 API
  基于豆瓣开放API的图书、电影
*/
var BaseURL = "https://api.douban.com/v2/";

var Douban_APIS = {

  /*
    图书搜索

    image 图书缩略图
    title 图书名称
    publisher 出版社
    author  作者
    price 价格
    pages 图书总页数
  */
  book_search: BaseURL + "book/search",

  /*
    图书详情

    image 图书缩略图
    title 图书名单
    publisher 出版社
    author  作者
    price 价格
    pages 图书总页数
    summary 图书简介
    author_intro  作者简介
  */
  book_detail_id: BaseURL + "book/",

  /*
    电影搜索

    images.medium 电影图像
    title 电影名称
    casts 电影演员  数据需要再处理
    rating。average  电影评分
    year  电影上映时间
    genres  电影标签
    alt 电影详情url
  */
  movie_search: BaseURL + "movie/search",
}

module.exports = Douban_APIS;
```

```jsx
//---util.js
/*
  实现功能：定义多个属性，在项目中会使用的一些功能。包括：获得屏幕的尺寸、
  loading组件、GET请求方法
  包含组件：
  外部传入：
    GET请求方法需要从外部传入url、请求成功的回调方法、请求失败的回调方法
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions, //  用于获取设备屏幕的宽高
  ActivityIndicator //  用于显示loading界面
} from 'react-native';

var Util = {
  // 屏幕尺寸
  windowSize: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },

  // 基于fetch的get方法，只负责下载数据，下载后的处理操作在回调方法中实现
  // successCallBack 数据下载成功的回调方法，在组件中实现
  // failCallBack 数据下载失败的回调方法，在组件中实现
  getRequest: function(url, successCallBack, failCallBack) {
    fetch(url)
    .then((response) => response.json())
    .then((responseData) => successCallBack(responseData))
    .catch((error) => failCallBack(error));
  },

  // loading 效果
  loading: <ActivityIndicator style={{marginTop: 200}}/>
}

module.exports = Util;
```

##### **3、图书模块开发-BookItem行组件** 

```jsx
//----book_item.js
/*
  图书列表item
  实现功能：展示图书信息、点击item进入图书详情页面
  包含组件：基本组件
  外部传入：
    book  图书对象
    onPress事件处理方法 通过...this.props绑定，需要设置参数，即图书id
    需要使用到的字段：
      image 图书缩略图
      title 图书名称
      publisher 出版社
      author 作者
      price 价格
      pages 图书总页数
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

var BookItem = React.createClass({
  render: function() {
      var book = this.props.book;

      return(
        <TouchableOpacity style={styles.item} {...this.props}>
          {/*图书图像*/}
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{url:book.image}}/>
          </View>
          {/*图书信息*/}
          <View style={styles.contentContainer}>
            <View style={styles.textContainer}>
              <Text numberOfLines={1}>{book.title}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.publisher_author} numberOfLines={1}>{book.publisher}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.publisher_author} numberOfLines={1}>{book.author}</Text>
            </View>
            <View style={{flexDirection:"row", flex:1, alignItems:"center"}}>
              <Text style={styles.price}>{book.price}</Text>
              <Text style={styles.pages}>{book.pages}页</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
  }
});

var styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    height: 120,
    padding: 10
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 100
  },
  contentContainer: {
    flex: 1,
    justifyContent: 15
  },
  textContainer: {
    flex: 1,
    justifyContent: "center"
  },
  publisher_author: {
    color: "#A3A3A3",
    fontSize: 13
  },
  price: {
    color: "#2BB2A3",
    fontSize: 16
  },
  pages: {
    alignItems: 10,
    color: "#A7A0A0"
  }
});

module.exports = BookItem;
```

##### **4、图书模块开发-BookList图书列表** 

```jsx
//---book_item.js
/*
  图书列表item
  实现功能：展示图书信息、点击item进入图书详情页面
  包含组件：基本组件
  外部传入：
    book  图书对象
    onPress事件处理方法 通过...this.props绑定，需要设置参数，即图书id
    需要使用到的字段：
      image 图书缩略图
      title 图书名称
      publisher 出版社
      author 作者
      price 价格
      pages 图书总页数
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

var BookItem = React.createClass({
  render: function() {
      var book = this.props.book;

      return(
        <TouchableOpacity style={styles.item} {...this.props}>
          {/*图书图像*/}
          <View style={styles.imageContainer}>
            <Image source={{uri:book.image}} style={styles.image} />
          </View>
          {/*图书信息*/}
          <View style={styles.contentContainer}>
            <View style={styles.textContainer}>
              <Text numberOfLines={1}>{book.title}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.publisher_author} numberOfLines={1}>{book.publisher}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.publisher_author} numberOfLines={1}>{book.author}</Text>
            </View>
            <View style={{flexDirection:"row", flex:1, alignItems:"center"}}>
              <Text style={styles.price}>{book.price}</Text>
              <Text style={styles.pages}>{book.pages}页</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
  }
});

var styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    height: 120,
    padding: 10
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 100
  },
  contentContainer: {
    marginLeft: 10,
    flex: 1,
    justifyContent: "center"
  },
  textContainer: {
    flex: 1,
    justifyContent: "center"
  },
  publisher_author: {
    color: "#A3A3A3",
    fontSize: 13
  },
  price: {
    color: "#2BB2A3",
    fontSize: 16
  },
  pages: {
    marginLeft: 10,
    alignItems: "center",
    color: "#A7A0A0"
  }
});

module.exports = BookItem;
```

```jsx
//--book_list.js
/*
  图表列表模块：搜索栏、图书列表
  图书列表的内容：通过调用图书搜索接口获得更多条图书数据
  图书列表item是单独封装
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

// 引入外围组件
var Util = require("./../common/util");
var SearchBar = require("./../common/searchBar");
var ServiceURL = require("./../common/service");
var BookItem =require("./book_item");


var BookList = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({
      rowHasChanged: (oldRow, newRow) => oldRow!==newRow
    });
    return {
      // dataSoruce
      dataSource: ds,
      // 网络请求状态标识
      show: false,
      // 搜索关键字
      // 作用：1、搜索接口设置搜索内容；2、点击搜索按钮时，修改关键字内容，重新请求数据，重新渲染
      keywords: "React"
    };
  },

  getDate: function() {
    // 开启loading，每次搜索时都要重新下载显示数据
    this.setState({
      show: false
    });
    // 请求数据
    var that = this;
    var url = ServiceURL.book_search + "?count=20&q=" + this.state.keywords;
    Util.getRequest(
      url,
      function(data){
        // 请求成功回调函数
        /*
          如果没有相关书籍，使用alert提示
          https://api.douban.com/v2/book/search?count=20&q=react
          {"count":0,"start":0,"total": 0,"books":[]}
        */
        if (!data.books || data.books.length == 0) {
          return alert("未查询到相关书籍");
        }

        // 设置下载状态和数据源
        var ds = new ListView.DataSource({
          rowHasChanged: (oldRow, newRow) => oldRow!==newRow
        });
        that.setState({
          show: true,
          dataSource: ds.cloneWithRows(data.books)
        });
      },
      function(error){
        // 请求失败回调函数
        alert(error);
      }
    );
  },
  // TextInput的onChangeText事件处理方法
  _changeText: function(text) {
    this.setState({
      keywords: text
    });
  },
  // 点击搜索按钮
  _searchPress: function() {
    this.getDate();
  },
  render: function() {
    return (
      <ScrollView>
        <SearchBar
          placeholder="请输入图书的名称"
          onPress={this._searchPress}
          onChangeText={this._changeText}
        />
        {
          // 请求数据时显示loading，数据请求成功后显示ListView
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
  componentDidMount: function() {
    // 请求数据
    this.getDate();
  },
  _renderRow: function(book) {
    return <BookItem book={book}/>
  },
  _renderSeparator: function(sectionID:number, rowID:number) {
    var style = {
      height: 1,
      backgroundColor: "#CCCCCC"
    }
    return <View style={style} key={sectionID+rowID}/>
  }
});

var styles = StyleSheet.create({

});

module.exports = BookList;
```

##### **5、图书模块开发-BookDetail图书详情** 

```jsx
//---book_detail.js
/*
  实现功能：展示图书详情，包括：图书信息、图书简介、作者简介
  包含组件：基本组件、BookItem（图书信息中使用BookItem展示）
  外部传入：
  需要使用的字段：
    image 图书缩略图
    title 图书名称
    publisher 出版社
    author 作者
    price 价格
    pages 图书总页数
    summary 图书简介
    author_intro  作者简介
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

// 导入外围组件
var ServiceURL = require("./../common/service");
var Util = require("./../common/util");
var Header = require("./../common/header");
var BookItem = require("./book_item");

var BookDetail = React.createClass({
  getInitialState: function() {
    return {
      bookData: null //图书对象详情信息
    }
  },

  getData: function() {
    var that = this;
    var url = ServiceURL.book_detail_id + this.props.bookID;
    Util.getRequest(
      url,
      function(data){
        that.setState({
          bookData: data
        });
      },
      function(error) {
        alert(error);
      }
    );
  },

  render: function() {
    return (
      <ScrollView style={styles.container}>
        {
          this.state.bookData ?
            <View>
              <Header
                initObj={{backName:"图书", barTitle:this.state.bookData.title}}
                navigator={this.props.navigator}
              />
              <BookItem book={this.state.bookData}/>
              <View>
                <Text style={styles.title}>图书简介</Text>
                <Text style={styles.text}>{this.state.bookData.summary}</Text>
              </View>
              <View style={{marginTop:10}}>
                <Text style={styles.title}>作者简介</Text>
                <Text style={styles.text}>{this.state.bookData.author_intro}</Text>
              </View>
              {/*占位view，用于遮挡TabBar*/}
              <View style={{height:55}}></View>
            </View>
          : Util.loading
        }
      </ScrollView>
    );
  },

  // 网络请求
  componentDidMount: function() {
    // 请求图书详情
    this.getData();
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  title: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    fontWeight: "bold"
  },
  text: {
    marginLeft: 10,
    marginRight: 10,
    color: "#000D22"
  }
});

module.exports = BookDetail;
```



##### **6、电影模块开发-MovieItem行组件** 

```jsx
//---movie_item.js文件
/*
  实现功能：展示电影信息，点击item进入电影详情页
  包含组件：基本组件
  外部传入：
  movie 电影对象
  onPress 通过...this.props绑定，需设置参数：电影名称、电影详情页面url
  需要使用的字段：
    images.medium 电影图像
    title 电影名称
    casts 电影演员  数据需要再处理
    rating.avrage 电影评分
    year  电影上映时间
    genres  电影标签
    alt 电影详情url
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

var MovieItem = React.createClass({
  render: function() {

    var movie = this.props.movie; //获取电影对象

    // 提取演员姓名，
    // 原始数据结构：数组元素是描述演员的对象，对象中包含演员的名字
    // 需要遍历数组，把每个演员的名字存在一个新的数据中。
    var actors = [];
    for (var i in movie.casts) {
      actors.push(movie.casts[i].name);
    }

    return (
      <TouchableOpacity style={styles.item} {...this.props}>
        <!-- 左半部分，显示图片 -->
        <View style={styles.imageContainer}>
          <Image style={styles.image} resizeMode="contain" source={{uri:movie.images.medium}}/>
        </View>
        <!-- 右半部分，显示文字-->
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text} numberOfLines={1}>名称：{movie.title}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text} numberOfLines={1}>演员：{actors}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text} numberOfLines={1}>评分：{movie.rating.avrage}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text} numberOfLines={1}>时间：{movie.year}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text} numberOfLines={1}>标签：{movie.genres}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
});

var styles = StyleSheet.create({
  item: {
      flexDirection: "row",
      height: 120,
      padding: 10
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 80,
    height: 110
  },
  contentContainer: {
    flex: 1,
    marginLeft: 15
  },
  textContainer: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "black"
  }
});

module.exports = MovieItem;
```

##### **7、电影模块开发-电影列表和详情** 

```jsx
//---movie_list.js
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
```



##### **8、项目真机测试**

> 真机测试请参看教学视频[React Native零基础入门到项目实战](http://study.163.com/course/introduction.htm?courseId=1003290004)