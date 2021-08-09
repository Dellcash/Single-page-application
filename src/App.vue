<template>
  <div>
    <Header></Header>

    <router-view v-slot="{ Component }">
      <transition
        enter-active-class="animate__animated animate__fadeIn"
        mode="out-in"
      >
        <component :is="Component"></component>
      </transition>
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
