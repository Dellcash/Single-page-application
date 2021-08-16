<template>
  <div>
    <section-1 />
    <section-2 />
  </div>
</template>

<script>
import section1 from "./section-1.vue";
import section2 from "./section-2.vue";

export default {
  components: { section1, section2 },
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
