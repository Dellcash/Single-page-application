<template>
  <div>
    <Header></Header>

    <router-view>
      
    </router-view>
  </div>
</template>

<script>
import Header from "./components/sections/Header.vue";
export default {
  components: { Header },
  setup() {
    return {};
  },
};
</script>

<style scoped>
h1 {
  font-size: 30px;
}
</style>