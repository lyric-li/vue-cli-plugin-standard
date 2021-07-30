# vue-cli-plugin-standard

> Vue Cli 默认生成项目规范增强插件

`@vue/cli v4.5.13` `node v14.3.0` `yarn v1.22.10`

## 新功能

* 开发
  * 目录规范
  * 代码规范
  * 样式规范

* 构建
  * SVG 雪碧图
  * 8k以下小图转 Base64
  * 全局注入主题变量，支持全局修改 VantUI 组件样式
  * GZip 压缩
  * Stylelint 校验
  * 浏览器适配

* 部署
  * CI/CD

## 使用方式

全局安装 Vue CLI 包
```bash
npm install yarn -g
yarn global add @vue/cli
```

创建默认 Vue 项目
```bash
vue create vue-demo-app
```

安装插件
```bash
git clone https://gitee.com/lyric-li/vue-cli-plugin-standard.git

yarn file:/full/path/vue-cli-plugin-standard -D
vue invoke vue-cli-plugin-standard
```


## 生成模板规范

### 目录规范

#### API

统一管理模块的 url 请求地址， 如：`src/api/xxx.js`

### ASSETS

静态资源存放目录

styles CSS 样式表目录

- theme.less 主题样式
- modify.less 重新定义 Vant UI 组件主题样式
- reset.less 覆盖样式

[按钮变量](https://github.com/youzan/vant/blob/dev/src/button/var.less)

#### 图标

- 引入方式

  将 xxx.svg 图标放入 `src/icons/svg` 目录下

- 使用方式

  ```
  <svg-icon iconClass="xxx"/>
  ```

#### 状态管理

- 全局

  管理全局状态，存放在 `src/store` 下

- 模块

  管理模块状态，存放在 `src/store/modules` 下，其中 `index.js` 作为模块统一处理文件，请勿修改

#### 其它

- 插件

  存放在 `src/plugins` 下

- 第三方库
  
  存放在 `src/lib` 下

- 工具类

  存放在 `src/utils` 下


### 开发规范

#### 代码格式、命名规范等，以 `ESLint Airbnb` 规范为基础标准

- 判断相等统一用 `===`
- 字符串统一用 `""`
- 结尾统一加`;`


#### CSS 遵从 [`BEM`](https://www.jianshu.com/p/54b000099217) 规范

.块__元素--修饰符{}

- `block` 代表了更高级别的抽象或组件
- `block__element` 代表 `block` 的后代，用于形成一个完整的 `block` 的整体
- `block--modifier` 代表 `block` 的不同状态或不同版本


#### Git Commit 规范

用于说明 commit 的类别，只允许使用下面7个标识。

- feat：新功能（feature）
- fix：修补bug
- docs：文档（documentation）
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动


### 技术栈

#### 基础框架

- [vue](https://cn.vuejs.org/)
- [vue-router](https://router.vuejs.org/zh/)
- [vuex](https://vuex.vuejs.org/zh/)

#### 第三方插件

- [axios](https://github.com/axios/axios)
- [vant](http://element-cn.eleme.io/#/zh-CN)
- [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport)


### 注意事项

- 由于开启了 `eslint` 和 `stylelint`, 推荐 `vscode` 安装 `eslint` 和 `stylelint-plus` 并开启保存自动修复功能
