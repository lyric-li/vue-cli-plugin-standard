<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  computed: {
    ...mapState("counter", {
      num: state => state.num,
    }),
  },
  created() {
    this.someAsyncTask();
  },
  methods: {
    ...mapActions("counter", [
      "someAsyncTask",
    ]),
  },
};
</script>

<style scoped>
.home {
  padding: 8px;
}
</style>
