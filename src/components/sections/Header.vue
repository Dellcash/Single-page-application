<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Web SPA</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/users">User</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/posts">Post</router-link>
            </li>
            <li class="nav-item dropdown">
              <router-link
                class="nav-link dropdown-toggle"
                to="/menu"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </router-link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" to="">Blog</a></li>
                <li><a class="dropdown-item" to="">Admin Console</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" to="">About Me</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script> 
export default {};
</script>

<style scoped>
.router-link-active{
  color: rgba(0,0,0,0.9) !important;
  border-bottom: 2px solid rgba(0,0,0,0.9) !important;
}
a{
  cursor: pointer;
}
</style>
