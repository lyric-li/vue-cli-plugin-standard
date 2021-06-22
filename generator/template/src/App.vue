<template>
  <div id="app">
    <div id="nav">
      <div
        class="gitee"
        @click="toGitee"
      >
        <svg-icon icon-class="gitee" />
      </div>
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    toGitee() {
      window.open("https://gitee.com/lyric-li/vue-cli-plugin-standard");
    },
  },
};
</script>

<style lang="less">
#app {
  font-size: @font-size-m;
  color: @primary-font-color;
  text-align: center;
}

#nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;

  a {
    margin: 0 5px;
    font-size: 16px;
    font-weight: bold;
    color: @primary-font-color;

    &:hover {
      color: @primary-color;
    }

    &.router-link-exact-active:hover {
      color: @primary-color;
    }

    &.router-link-exact-active {
      color: @primary-dark-color;
    }
  }

  .gitee {
    cursor: pointer;
  }
}
</style>
