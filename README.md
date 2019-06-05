# day01
## 1. 项目开发准备
    项目描述
    技术选型
    API接口

## 2. 开启项目开发
    使用脚手架创建项目: vue-cli2
    安装所有依赖/指定依赖
    开发环境运行
    生产环境打包与运行

## 3. 搭建项目整体界面结构
    1). 项目路由拆分
        确定路由组件显示的区域
        确定路由是几级路由
    2). App组件组成
        底部导航组件: FootGuide
        导航路由组件: MSite/Search/Order/Profile
    3). vue-router的理解和使用
        $router: 路由器对象, 包含一些操作路由的功能方法, 来实现编程式导航(跳转路由)
        $route: 当前路由对象, 一些当前路由信息数据的容器, path/meta/query/params
    4). FootGuide: 底部导航组件
        动态class
        编程式路由导航

## 4. 拆分组件
    1). 导航路由组件
        MSite
        Search
        Order
        Profile
    2). 抽取头部组件
        Header
        通过props向子组件传递数据
        通过slot向子组件传递标签
    3). 抽取商家列表组件
        ShopList
    4). 登陆/注册路由组件
        Login
        FooterGuide的显示/隐藏: 通过路由的meta标识

## 5. 启动后台应用并测试
    运行后台项目(启动mongodb服务),
    使用postman测试后台接口, 如果不一致, 修改接口文档

## 6. 封装ajax:
    ajax请求的函数: 封装promise+axios
    接口请求函数: 根据接口文档定义
    解决ajax的跨越域问题: 配置代理, 对代理的理解

# day02
## 1. 使用vue-cli3
    1). 创建项目
        yarn global add @vue/cli
        vue create gshop-client3
    2). 打包运行
        开发环境运行: yarn serve
        生产环境打包运行: yarn run build  / serve dist
    3). 下载
        yarn add stylus stylus-loader -D
        yarn add vue-router swiper axios
    4). 拷贝相关源码, 并修改
        src/*
        static/css/reset.css
        index.html
    5). 解决相关问题
        1). eslint检查提示的问题: package.json
            "rules": {
              "no-unused-vars": "off",
              "no-console": "off"
            },

        2). 异常: You are using the runtime-only build of Vue where the template compiler is not available
            原因: 默认引用的vue包是不带编译器的vue.runtime.esm.js, 而我们需要带编译器的版本:vue.esm.js
            解决: 配置指定引用带编译器的版本:vue.esm.js   --vue.config.js
                module.exports = {
                  configureWebpack: {
                    resolve: {
                      alias: {
                        'vue$': 'vue/dist/vue.esm.js'  // $代表精确匹配
                      }
                    }
                  }
                }



