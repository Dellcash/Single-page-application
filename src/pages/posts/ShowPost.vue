<template>
  <transition class="animate__animated animate__fadeInLeft">
    <div class="container mt-5">
      <div class="row g-3">
        <div v-if="loading" class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div v-else class="col-md-7">
          <div class="card">
            <div class="card-header title">
              {{ post.title }}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Body: {{ post.body }}</li>
            </ul>
            <div class="card-footer">
              <button class="btn btn-sm btn-danger">Delete</button>
              <button class="btn btn-sm btn-dark ms-3">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import axios from "axios";

export default {
  setup() {
    const post = ref();
    const loading = ref(true);
    const route = useRoute();

    function getPost() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then(function(response) {
          post.value = response.data;
          loading.value = false;
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getPost();

    return { post, loading };
  },
};
</script>

<style scoped>
*{
  direction: ltr;
  font-family: sans-serif;
}
.title {
  font-weight: bold;
}
</style>
