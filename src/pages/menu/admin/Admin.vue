<template>
  <div class="body">
    <!-- Top Nav -->
    <nav class="navbar navbar-expand-lg py-3 px-4 auto-hiding-navbar fixed-top">
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
        <ul class="navbar-nav ms-auto ">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ادمین
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">تنظیمات کاربر</a></li>
              <li><a class="dropdown-item" href="#">ساخت اکانت جدید</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#">خروج</a>
          </li>
        </ul>
        <form @submit.prevent="" class="search-form d-flex ms-auto mt-1 mb-0 ">
          <button class="btn btn-outline-primary" type="submit">جستجو</button>
          <input
            class="form-control me-2"
            type="search"
            placeholder="جستجو"
            aria-label="Search"
          />
        </form>
      </div>
    </nav>
    <!-- End Top Nav -->

    <div class="row">
      <!-- Sidebar -->
      <div class="">
        <nav id="sidebar" class="col sidebar">
          <a href="/" class="navbar-brand">
            <img src="@/assets/images/visibility.png" alt="logo" class="logo" />
          </a>
          <ul class="nav flex-column vertical-nav ">
            <li class="nav-item">
              <router-link
                class="nav-link active"
                aria-current="page"
                :to="{ name: 'home' }"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-house-door"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"
                  />
                </svg>
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bar-chart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"
                  />
                </svg>
              </a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'posts' }">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chat-left-dots"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                  />
                  <path
                    d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                  />
                </svg>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
      <!-- End Sidebar -->

      <div class="main col-11">
        <div class="row first-row">
          <div class="col-md-4">
            <section id="recently-posted">
              <div class="card">
                <div class="card-header">
                  پست های اخیراً منتشر شده
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item ">
                    <div class="row g-0 ">
                      <div class="col-md-3">
                        <img
                          src="@/assets/images/user.jpg"
                          alt="Post One Photo"
                          class="img-fluid"
                        />
                      </div>
                      <div class="col-md-9">
                        <div class="card-body p-1 pe-2">
                          <h6 class="card-title">لورم ایپسوم متن ساختگی ...</h6>
                          <p class="card-text" style="font-size:12px">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ
                          </p>
                          <p class="card-text">
                            <small class="text-muted" style="font-size:11px"
                              >۳ روز پیش اضافه شده</small
                            >
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="row g-0">
                      <div class="col-md-3">
                        <img
                          src="@/assets/images/user.jpg"
                          alt="Post One Photo"
                          class="img-fluid"
                        />
                      </div>
                      <div class="col-md-9">
                        <div class="card-body p-1 pe-2">
                          <h6 class="card-title">لورم ایپسوم متن ساختگی ...</h6>
                          <p class="card-text" style="font-size:12px">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ
                          </p>
                          <p class="card-text">
                            <small class="text-muted" style="font-size:11px"
                              >۳ روز پیش اضافه شده</small
                            >
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="row g-0">
                      <div class="col-md-3">
                        <img
                          src="@/assets/images/user.jpg"
                          alt="Post One Photo"
                          class="img-fluid"
                        />
                      </div>
                      <div class="col-md-9">
                        <div class="card-body p-1 pe-2">
                          <h6 class="card-title">لورم ایپسوم متن ساختگی ...</h6>
                          <p class="card-text" style="font-size:12px">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ
                          </p>
                          <p class="card-text">
                            <small class="text-muted" style="font-size:11px"
                              >۳ روز پیش اضافه شده</small
                            >
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          <div class="col-md-8">
            <section id="statistic">
              <div class="card">
                <div class="card-header">
                  آمار
                </div>
                <div class="stats py-3 px-4">
                  <div class="py-4">
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-striped"
                        role="progressbar"
                        style="width: 57%"
                        aria-valuenow="57"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p class="card-text">
                      مشاهده کنندگان وبلاگ
                    </p>
                  </div>
                  <div class="py-4">
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-striped bg-success"
                        role="progressbar"
                        style="width: 36%"
                        aria-valuenow="36"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p class="card-text">
                      پست‌های خوانده شده
                    </p>
                  </div>
                  <div class="py-4">
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-striped bg-warning"
                        role="progressbar"
                        style="width: 25%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p class="card-text">
                      دنبال کنندگان
                    </p>
                  </div>
                  <div class="py-4">
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-striped bg-danger"
                        role="progressbar"
                        style="width: 50%"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p class="card-text">
                      بازدیدکنندگان ترک کردند
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div class="row second-row">
          <div class="col-4">
            <section id="recently-commented">
              <div class="card">
                <div class="card-header">
                  آخرین کامنت‌ها
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item ">
                    <div class="row g-0">
                      <div class="col">
                        <div class="card-body p-0">
                          <h6 class="card-title">نام کاربری</h6>
                          <p class="card-text" style="font-size:12px">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ <br /><small class="text-muted"
                              >۳ روز پیش اضافه شده</small
                            >
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="row g-0">
                      <div class="col">
                        <div class="card-body p-0">
                          <h6 class="card-title">نام کاربری</h6>
                          <p class="card-text" style="font-size:12px">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ <br /><small class="text-muted"
                              >۳ روز پیش اضافه شده</small
                            >
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item ">
                    <div class="row g-0">
                      <div class="col">
                        <div class="card-body p-0">
                          <h6 class="card-title">نام کاربری</h6>
                          <p class="card-text" style="font-size:12px">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ <br /><small class="text-muted"
                              >۳ روز پیش اضافه شده</small
                            >
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          <div class="col-5">
            <section id="notes-form">
              <div class="card">
                <div class="card-header">
                  یادداشت بنویسید
                </div>
                <div class="card-body px-4">
                  <form>
                    <div class="mb-3">
                      <label class="form-label">یادداشت</label>
                      <textarea class="form-control" rows="7"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">
                      ذخیره
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </div>

          <div class="col">
            <section id="active-user">
              <div class="card">
                <div class="card-header">
                  بیشترین کاربرهای فعال
                </div>
                <div class="card-body text-center">
                  <div class="img-container mb-4">
                    <img
                      src="@/assets/images/use.jpg"
                      alt="User"
                      class="card-img-top"
                    />
                  </div>
                  <h6 class="card-title">امید دلکَش</h6>
                  <p class="card-text">
                    کامنت‌ها
                    <span class="badge bg-light text-dark">۱۱۰</span>تا
                  </p>
                  <p class="card-text">
                    پست‌ها
                    <span class="badge bg-light text-dark">۴۵</span>مقاله
                  </p>
                </div>
              </div>
            </section>
          </div>
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
/* * {
  direction: ltr;
} */
ul {
  padding-inline-start: 0;
}
.dropdown-menu[data-bs-popper] {
  left: -47px;
}
.dropdown-item {
  display: -webkit-inline-box;
}
.dropdown-toggle::after {
  margin-bottom: -5px;
}
.body {
  background: #f6f6f6 !important;
  height: 200vh;
}
nav {
  background-color: white;
}
.search-form {
  width: 50%;
}
#sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  box-shadow: -1px 0 0 rgba(0, 0, 0, 0.1);
  max-width: 10vw;
}
#sidebar .nav-item {
  text-align: center;
  padding: 25px 0;
}
#sidebar .nav-item a {
  color: rgba(0, 0, 0, 0.2);
}
#sidebar .nav-item a.active {
  color: #0d6efd;
}
.vertical-nav {
  margin-top: 20vh;
}
.logo {
  max-height: 30px;
  margin: 20px 15px;
  width: 40px;
}
a.navbar-brand {
  text-align: center;
  width: 100%;
  display: block;
}
.nav {
  padding-right: 0;
}
.navbar-brand {
  margin-right: 0;
}

section {
  margin: 10px;
}
.main {
  padding: 2rem;
  padding-top: calc(4rem + 74px);
}
.main .first-row,
.main .second-row {
  padding-bottom: 3rem;
}
.main .row .card {
  height: 100%;
}
.card {
  border: 0;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  max-height: 100%;
}

.card-header {
  background: white;
  font-weight: 700;
  padding: 20px;
}
.card-body{
  padding: 0.5rem;
  font-size: 12px;
}
#recently-posted .card img{
  padding-top: 0.5rem;
}

.stats .card-text{
  padding-top: 5px;
  padding-left: 2px;
  text-transform: uppercase;
  font-weight: 700;
  font-size:12px
}
.img-container{
  height: 120px;
  width: 120px;
  text-emphasis: center;
  margin: auto;
  display: block;
  margin-top:20px;
}
.card-img-top{
  height: 100%;
  width: 100%;
  border-radius: 100%;
}
.badge{
  font-size: 18px;
}
</style>
