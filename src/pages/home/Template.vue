<template>
  <div>
    <section-1 />
    <section-2 />
    <section-3 />
    <section-4 />
    <section-5 />
    <Footer />
  </div>
</template>

<script>
import Footer from '../../components/sections/Footer.vue';
import section1 from "./section-1.vue";
import section2 from "./section-2.vue";
import section3 from "./section-3.vue";
import section4 from "./section-4.vue";
import section5 from "./section-5.vue";

export default {
  components: { section1, section2, section3, section4, section5, Footer},
    watch: {
      '$route' (to, from) {
        document.title = to.meta.title || 'واو ــ دنیای ویو‌جی‌اس'
      }
    },
};
</script>

<style scoped>

</style>
