<template>
  <header class="shadow ">
    <nav class="navbar  navbar-expand-lg  navbar-light bg-light">
      <div class="container ">
        <!-- <a class="navbar-brand web" href="/">V<img src="@\assets\images\eye.png">W</a> -->
        <a class="navbar-brand web" href="/"><img class="logo" src="@/assets/images/logo.jpg" alt="logo"></a>
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
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link " to="/">خانه</router-link>
            </li>
            <li class="nav-item dropdown">
              <router-link
                class="nav-link dropdown-toggle "
                :to="{ name: 'menuTemplate' }"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                منو
              </router-link>
              <transition
                class="animate__animated animate__fadeInDown "
                mode="out-in"
              >
                <ul class="dropdown-menu " aria-labelledby="navbarDropdown">
                  <li>
                    <router-link class="dropdown-item " :to="{ name: 'users' }"
                      >کاربران</router-link
                    >
                  </li>
                  <li>
                    <router-link class="dropdown-item" :to="{ name: 'posts' }"
                      >پست ها</router-link
                    >
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <router-link
                      class="dropdown-item"
                      :to="{ name: 'adminConsole' }"
                      >داشبورد ادمین</router-link
                    >
                  </li>
                </ul>
              </transition>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/blog">وبلاگ</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">درباره من</router-link>
            </li>
          </ul>
        </div>
        <div>
          <router-link :to="{ name: 'signIn'}" class="btn btn-outline-primary" style="border:none !important">ورود</router-link>
          <router-link :to="{ name: 'signUp' }" class="btn btn-primary me-2" style="border:none !important">ثبت نام</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.dropdown-menu[data-bs-popper] {
  left: -47px;
}
.dropdown-item {
  display: -webkit-inline-box;
}
.dropdown-toggle::after {
  margin-bottom: -5px;
}
.web {
  font-size: 30px;
 font-family:monospace;
 /* font-weight: bold; */
}
.router-link-active {
  color: rgba(0, 0, 0, 0.9) !important;
  border-bottom: 2px solid rgba(0, 0, 0, 0.9) !important;
}
a {
  cursor: pointer;
}
#navbarDropdown {
  /* border-bottom: 2px solid rgba(0, 0, 0, 0.9) !important; */
  color: rgba(0, 0, 0, 0.9) !important;
}
.dropdown-item {
  border: none !important;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important; */
}
.logo{
  width: 100px
}
</style>
