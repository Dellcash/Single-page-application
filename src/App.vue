<template>
  <div>
    <Header v-if="!$route.meta.hideNavbar"></Header>

    <router-view v-slot="{ Component }">
      <transition
        enter-active-class="animate__animated animate__fadeIn"
        mode="out-in"
      >
        <component :is="Component"></component>
      </transition>
    </router-view>
    <!-- <router-view></router-view> -->
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

<style>
@font-face {
  font-family: "Vazir";
  src: url("./fonts/Vazir.eot");
  /* IE9 Compat Modes */
  src: url("./fonts/Vazir.eot?#iefix") format("embedded-opentype"),
    url("./fonts/Vazir.woff2") format("woff2"),
    url("./fonts/Vazir.woff") format("woff"),
    url("./fonts/Vazir.ttf") format("truetype");
  /* Safari, Android, iOS */
}
@font-face {
  font-family: 'AGhasem';
  src: url('./fonts/AGhasem.ttf');
}
@font-face{
  font-family: 'Parand';
  src: url('./fonts/Mj_Parand.TTF');
}
@font-face {
  font-family: 'Nabi' ;
  src: url('./fonts/Mj_NabighaLight.ttf');
}
@font-face {
  font-family: 'Mosa';
  src: url('./fonts/Mj_Mousa.TTF');
}
body {
  font-family: "Vazir" !important;
  background: white !important;
}

</style>
