<template>
  <div class="container mt-5">
    <div class="row g-3">
      <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="col-md-4" v-for="user in users" :key="user.id">
        <user-card-view :user="user"></user-card-view>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "@vue/reactivity";
import UserCardView from "../../components/users/CardView.vue";
import { useRoute } from 'vue-router';

export default {
  components: {
    UserCardView,
  },
  setup() {
    const users = ref([]);
    const loading = ref(true);
    const route = useRoute()

    function getUsers() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(function(response) {
          users.value = response.data;
          loading.value = false;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
    getUsers();
    return { users, loading, route };
  },
};
</script>

<style lang="scss" scoped></style>
