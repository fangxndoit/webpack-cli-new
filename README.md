# 多页面webpack脚手架
本脚手架已经支持使用ES6，less，模块化，热加载，eslint等功能


## Build Setup

``` bash
# 安装依赖
npm install

# 开发的时候在本地启localhost:8080，并开始热加载
npm run dev-pc/dev-app

# production的发布时打包
npm run build-pc/build-app

```


## 目录结构

```

└─src                                 // src 文件夹
│    ├─pages       
|    |    ├─app                       // 页面文件夹
|    │    │  ├─home
│    │    |       home.html
│    │    |       home.js
│    │    |       home.scss
│    │    |
│    │    |
│    │    └─pc
|    │        ├─home
│    │             home.html
│    │             home.js
│    │             home.scss
|    |
│    ├─api
|    |    test.js                 // 接口配置
│    │  
│    ├─common                     // 公共样式
│    │        
│    ├─images                     // 公共图片         
│    │          
│    │
│    └─tools                        // 工具文件夹
│            utils.js
│            request.js             // axios 配置
|            wx-jsdk.js             // wx-jssdk 配置
|            wx-pay.js              // 微信支付配置
|
├─config   
|     ├─app-webpack                           // app 配置
│     |      webpack.config.dev.js            // 开发环境的webpack配置文件
│     |      webpack.config.prod.js           // 生成环境的webpack配置文件
|     |
|     ├─pc-webpack                            // pc 配置
│     |      webpack.config.dev.js            // 开发环境的webpack配置文件
│     |      webpack.config.prod.js           // 生成环境的webpack配置文件
|     └─page.config.js                        // 页面的配置文件
|       
|
│  .babelrc                         // babel的配置文件
│  .eslintignore
│  .eslintrc.js                     // eslint的配置文件
│  .gitignore
│  package.json
│  README.md
         

```

## 开发流程

如果增加新页面

1. 在pages中新增一个文件夹
2. 在page.config.js中添加这个页面的信息即可

比如
```
  {
    name: 'contact',
    html: 'contact/contact.html',
    jsEntry: 'contact/contact.js'
  }

