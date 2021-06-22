<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="tip">
      <p>
        If "Vant" is successfully added to this project, you'll see an
        <code v-text="'<van-button>'" />
        below
      </p>
      <van-button
        type="primary"
      >
        主要按钮
      </van-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.about {
  padding: 8px;

  .tip {
    p {
      text-align: left;
    }
  }
}
</style>
