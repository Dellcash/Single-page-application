<template>
  <div class="card d">
    <div class="card-header ">
      <router-link class="post" :to="{ name: 'postId', params: { id: post.id } }">
        {{ post.title }}
      </router-link>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Body: {{ post.body }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
};
</script>

<style scoped>

.d{
  direction: ltr;
  font-family: sans-serif;
}
.router-link-active {
  color: rgba(0, 0, 0, 0.9) !important;
  text-decoration: none;
  font-weight: bold;
  cursor: auto;
}
.post {
  text-decoration: none;
  transition: all 0.3s;
}
</style>
