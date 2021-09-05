<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div class="text-center mt-4">
          <img
            class="mb-4"
            src="@/assets/images/error-404-monochrome.svg"
            alt="404"
          />
          <p class="lead">This requested URL was not found on this server.</p>
          <router-link to="/">
           /* Return to Home
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
img {
  max-width: 20rem;
}
* {
  direction: ltr;
}
p{
  color:rgb(51, 49, 49)
}
</style>
