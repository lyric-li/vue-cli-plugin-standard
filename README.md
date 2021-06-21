# vue-cli-plugin-standard

> Vue Cli 默认生成项目规范增强插件

`@vue/cli 4.5.13` `node v14.3.0`


## 使用方式

全局安装 Vue CLI 包
```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

创建默认 Vue 项目
```bash
vue create vue-demo-app
```

安装插件
```bash
git clone https://gitee.com/lyric-li/vue-cli-plugin-standard.git

npm install --save-dev file:/full/path/vue-cli-plugin-standard
vue invoke vue-cli-plugin-standard
```


## 生成模板规范

### 目录规范

#### API

统一管理模块的 url 请求地址， 如：`src/api/xxx.js`


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

- 第三方库
  
  存放在 `src/lib` 下

- 工具类

  存放在 `src/utils` 下


### 开发规范

#### 代码格式、命名规范等，以 `ESLint Standard` 规范为基础标准

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
- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem)
- [amfe-flexible](https://github.com/amfe/lib-flexible)


### 注意事项

- 由于开启了 `eslint` 和 `stylelint`, 推荐 `vscode` 安装 `eslint` 和 `stylelint-plus` 并开启保存自动修复功能
