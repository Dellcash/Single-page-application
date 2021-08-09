<template>
  <transition class="animate__animated animate__fadeInLeft">
    <div class="container mt-5">
      <div class="row g-3">
        <div v-if="loading" class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div v-else class="col-md-4">
          <user-card-view :user="user"></user-card-view>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import UserCardView from "@/components/users/CardView.vue";
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import axios from "axios";

export default {
  components: {
    UserCardView,
  },
  setup() {
    const user = ref({});
    const loading = ref(true);
    const route = useRoute();

    function getUser() {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
        .then(function(response) {
          user.value = response.data;
          loading.value = false;
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getUser();

    return { user, loading };
  },
};
</script>

<style scoped>

</style>
