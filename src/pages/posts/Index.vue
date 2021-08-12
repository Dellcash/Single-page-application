<template>
  <div class="container mt-5">
    <transition class="animate__animated animate__fadeInRight" mode="out-in">
      <router-link :to="{ name: 'createPost' }" class="btn btn-dark mb-2"
        >Create Post</router-link
      >
    </transition>
    <div class="row g-3">
      <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-else class="col-md-6" v-for="post in posts" :key="post.id">
        <transition class="animate__animated animate__fadeIn" mode="out-in">
          <post-card-view :post="post"></post-card-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "@vue/reactivity";
import PostCardView from "../../components/posts/CardView.vue";

export default {
  components: { PostCardView },
  setup() {
    const posts = ref([]);
    const loading = ref(true);

    function getPosts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(function(response) {
          posts.value = response.data;
          loading.value = false;
        })
        .catch(function(error) {
          console.log(error);
        });
    }

    getPosts();

    return { posts, loading };
  },
};
</script>

<style lang="scss" scoped></style>
