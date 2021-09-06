<template>
  <div style="height: 80px; overflow: hidden; ">
    <svg
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
      style="height: 100%; width: 100%;"
    >
      <path
        d="M-1.97,104.11 C-4.79,105.09 352.42,5.44 503.67,75.48 L500.00,150.00 L0.00,150.00 Z"
        style="stroke: none; fill: #f8f9fa;"
      ></path>
    </svg>
  </div>

  <footer class="bg-light">
    <div class="container pb-3">
      <div class="row g-5">
        <div class="col-md-4 offset-md-1">
          <img style="width:100px" src="@/assets/images/logo.jpg" alt="" />
          <p class="mt-2 mb-1">
             واو وبسایتی برای معرفی فریمورک ویو جی‌اس و تازه ترین خبر‌ها در
            مورده آن.
          </p>
          <i class="bi bi-instagram fs-2"></i>
          <i class="bi bi-telegram fs-2 mx-3"></i>
          <i class="bi bi-github fs-2 ms-3"></i>
          <i class="bi bi-linkedin fs-2"></i>
        </div>
        <div class="col-md-7 ">
          <div class="row">
            <div class="col-md-4">
              <h6 class="fw-bold w-75">بخش‌های وبسایت</h6>
              <ul class="list-unstyled p-0">
                <li>
                  <router-link class="footer-links" to="/"
                    >صفحه اصلی</router-link
                  >
                </li>
                <li class="my-2">
                  <router-link class="footer-links" :to="{ name: 'blog' }"
                    >وبلاگ</router-link
                  >
                </li>
                <li>
                  <a
                    class="footer-links"
                    href="https://v3.vuejs.org/guide/introduction.html"
                    >مستندات</a
                  >
                </li>
                <li class="mt-2">
                  <a
                    class="footer-links"
                    href="mailto:omiddellcash@gmail.com"
                    subject="subject text"
                    >پشتیبانی</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <h6 class="fw-bold w-75">آموزش‌ها</h6>
              <ul class="list-unstyled p-0">
                <li>
                  <a class="footer-links" href="https://www.vuemastery.com/"
                    >Vue Mastery</a
                  >
                </li>
                <li class="my-2">
                  <a class="footer-links" href="https://vueschool.io/"
                    >VueSchool</a
                  >
                </li>
                <li>
                  <a
                    class="footer-links"
                    href="https://www.udemy.com/topic/vue-js/"
                    >Udemy</a
                  >
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <h6 class="fw-bold w-75">درباره من</h6>
              <ul class="list-unstyled p-0">
                <li>
                  <router-link class="footer-links" :to="{name : 'aboutMe'}"
                    >درباره من</router-link
                  >
                </li>
                <li class="my-2">
                  <router-link class="footer-links" :to="{ name: 'blog' }"
                    >تماس با من</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.footer-links {
  text-decoration: none;
  color: #000;
}
.footer-links:hover {
  color: #000;
}
h6 {
  border-bottom: 2px solid #000;
  height: 35px;
}
</style>
