# 11 ElementUI集成

## 11.1 ElementUI入门梳理

1、框架区别

Vue 是前端MVC框架 ，用于搭建项目；

ElementUI是前端样式+交互框架 

2、单页面与多页面应用

单页面：整个应用就一个页面，其它都是以组件的形式加入页面；

多页面：主要用在搜索引擎；

3、完整引入与按需引入、按需加载

1）官方示例：<https://element.eleme.cn/#/zh-CN/component/quickstart>

2）常用交互组件

3）国际化

4）主题色改变

5）内置



## 11.2 ElementUI运用

cnpm i element-ui babel-plugin-component --save-dev

添加.babelrc文件

```
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

启动项目报错：

```
Error: Cannot find module 'babel-preset-es2015' from '...'
```

解决方法：

1、安装@babel/preset-env，命令如下：

cnpm  i  @babel/preset-env  -D

2、修改.babelrc文件，把es2015改成@babel/preset-env

```
{
  "presets": [["@babel/preset-env", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

3、重运行项目

其实.babelrc的配置项，可以写入到babel.config.js文件中，之后不再需要.babelrc文件了。

## 11.3 Babel介绍



##  11.4 退出功能实现