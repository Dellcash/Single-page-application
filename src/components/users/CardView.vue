<template>
  <div class="card d mt-2" >
    <div class="card-header ">
      <router-link class="user" :to="{ name: 'userId', params: { id: user.id } }">
        {{ user.name }}
      </router-link>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Username: {{ user.username }}</li>
      <li class="list-group-item">Email: {{ user.email }}</li>
      <li class="list-group-item">Website: {{ user.website }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
};
</script>

<style scoped>
/* .d{
  direction: ltr;
} */
.router-link-active {
  color: rgba(0, 0, 0, 0.9) !important;
  text-decoration: none;
  font-weight: bold;
  cursor: auto;
}
.user {
  text-decoration: none;
  transition: all 0.3s;
}
*{
  direction: ltr;
}
</style>
