<template>
  <div class="body">
    <!-- Nav -->
    <header class="shadow ">
      <nav class=" navbar  navbar-expand-lg  navbar-light bkg ">
        <div class="container py-2 mb-2 font-monospace flex-md-column-reverse">
          <!-- <a class="navbar-brand web" href="/">V<img src="@\assets\images\eye.png">W</a> -->
          <!-- <a class="navbar-brand web" href="/"
            ><img class="logo" src="@/assets/images/logo.jpg" alt="logo"
          /></a> -->
          <button
            class="navbar-toggler "
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
                <router-link
                  class="nav-link col-1 col-sm-auto fw-bold px-3"
                  to="/"
                  >خانه</router-link
                >
              </li>
              <li class="nav-item dropdown">
                <router-link
                  class="nav-link dropdown-toggle fw-bold px-3"
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
                      <router-link
                        class="dropdown-item "
                        :to="{ name: 'users' }"
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
                <router-link
                  class="nav-link col-sm-auto fw-bold px-3"
                  :to="{ name: 'blog' }"
                  >وبلاگ</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  class="nav-link col-2 col-sm-auto fw-bold px-3"
                  to="/about"
                  >درباره من</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <header class="main_header">
      <div
        class="d-flex justify-content-center align-items-center flex-column py-5 "
      >
        <h1 class="vue-color ghasem mb-0">دنیای</h1>
        <h1 class="vue-color main_heading ghasem">ویو‌جی‌اس</h1>
        <p class="main_heading__para parand" style="font-size: 20px;">
          <span class=" fs-5" style="color:black">خوش اومدید به </span>
          <span class="vue-bg p-1 text-white rounded-1 hvr-glow fs-8 parand"
            >ریزاطلاعات ویو‌جی‌اس</span
          >
        </p>
      </div>
      <!-- The main image -->
      <div
        class="main_header__div d-flex align-items-start justify-content-center pe-5 flex-column shadow"
      >
        <p class="ghasem" style="font-size:50px">ویو‌جی‌اس</p>
        <h2 class="animateWord">
          <span class="mosa">اون </span>
          <div>
            <ul class="flip" style="padding-right: 0">
              <li class="farsi">و <span>زیباست </span></li>
              <li class="parand">یادگیریش راحته</li>
              <li class="bank">سبکه</li>
              <li class="moshfeg">سریعه</li>
            </ul>
          </div>
        </h2>
        <a
          href="https://v3.vuejs.org/"
          class="btn btn-success mt-2"
          target="_blank"
          >مستندات</a
        >
      </div>
    </header>

    <!-- ْTwo side div -->
    <div class="container-fluid">
      <div class="row">
        <!-- to get the left and right side div space -->
        <div class="col-xl-10 col-lg-10 col-md-11 col-11 mx-auto my-5">
          <div class="row gx-5 mx-sm-auto">
            <!-- to get the left side of the div space -->
            <div class="col-lg-8 col-md-11 col-11 mx-auto me-lg-0">
              <div class="row gy-5">
                <!-- first post -->
                <div class="col-12 card p-4 shadow blog_left__div">
                  <div
                    class="d-flex justify-content-center align-items-center flex-column pt-3 pb-5 "
                  >
                    <h1 class="mosa ">ویو‌جی‌اس ۳</h1>
                    <p class="blog_title nabi">
                      <span class="fw-bold ">زمان انتشار, </span>
                      <span>۱۸ سپتامبر ۲۰۲۰</span>
                    </p>
                  </div>
                  <figure class="right_side__img mb-5">
                    <img
                      src="@/assets/images/v3..jpg"
                      class="img-fluid shadow hvr-float-shadow"
                    />
                  </figure>
                  <p>
                    <span class="fw-bold" style="color:black">"One Piece" </span
                    >نام نسخه سوم ویو‌جی‌اس است. "آپدیت‌های بزرگ ویو هر کدوم با
                    یه اسم انیمه خاص نام‌گذاری می‌شن."
                  </p>
                  <p>
                    ويژگی‌های مهمی که به این نسخه اضافه شد می‌شه اشاره کرد به<br />
                    <span class="fw-bold">"Composition API" </span><br />
                    <span class="fw-bold">"Teleport" </span><br />
                    <span class="fw-bold">"Fragments" </span><br />
                    <span class="fw-bold">"v-modelهای بیشتر" </span><br />
                    <span class="fw-bold">"سرعت"</span><br />
                    و...
                  </p>
                  <a href="#" class="text-success">
                    <p class="vue-color">ادامه مطلب...</p>
                  </a>
                  <div class="d-flex justify-content-between left-div-btns">
                    <div>
                      <button
                        class="btn btn-success "
                        id="like_btn"
                        @click="likedPost"
                      >
                        <!-- {{liked ? 'خوشم‌اومد' : 'لایک'}} -->
                        لایک
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-hand-thumbs-up-fill animate__animated animate__fadeIn"
                          viewBox="0 0 16 16"
                          v-if="!liked"
                        >
                          <path
                            d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-check2 animate__animated animate__fadeIn"
                          viewBox="0 0 16 16"
                          v-else
                        >
                          <path
                            d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                          />
                        </svg>
                      </button>
                    </div>
                    <div>
                      <button
                        class="btn btn-outline-success mb-3 py-1"
                        @click="showPost"
                      >
                        پاسخ
                        <p class="badge bg-white text-dark m-0">۱</p>
                      </button>
                    </div>
                  </div>
                  <transition
                    name="custom-classes-transition"
                    enter-active-class="animate__animated animate__fadeInDown"
                    leave-active-class="animate__animated animate__fadeOutDown"
                  >
                    <div class="replies pb-4 " id="reply1" v-if="!post">
                      <div
                        class="d-flex justify-content-start flex-row align-items-center card replay_card py-3"
                      >
                        <div class="reply_img mx-2 align-items-center">
                          <img src="@/assets/images/user1.jpg" alt="" />
                        </div>
                        <div class="replY_text_left">
                          <p class="blog_title m-0 small">
                            <span class="fw-bold" style="color:black"
                              >دلکش </span
                            >۱۸ سپتامبر ٬۲۰۲۰ ۵:۳۷
                          </p>
                          <p class="m-0">عالی بود پستت٬ادامه بده!!</p>
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
                <!-- second post -->
                <div class="col-12 card p-4 shadow blog_left__div">
                  <div
                    class="d-flex justify-content-center align-items-center flex-column pt-3 pb-5 "
                  >
                    <h1 class="mosa ">ویو‌جی‌اس ۳</h1>
                    <p class="blog_title nabi">
                      <span class="fw-bold ">زمان انتشار,</span>
                      <span>۱۸ سپتامبر ۲۰۲۰</span>
                    </p>
                  </div>
                  <figure class="right_side__img mb-5">
                    <img
                      src="@/assets/images/v3..jpg"
                      class="img-fluid shadow hvr-float-shadow"
                    />
                  </figure>
                  <p>
                    <span class="fw-bold" style="color:black">"One Piece" </span
                    >نام نسخه سوم ویو‌جی‌اس است. " آپدیت های بزرگ ویو هرکدوم با
                    یه اسم انیمه خاص نامگذاری میشن."
                  </p>
                  <p>
                    ويژگی‌های مهمی که به این نسخه اضافه شد میشه اشاره کرد به<br />
                    <span class="fw-bold">"Composition API" </span><br />
                    <span class="fw-bold">"Teleport" </span><br />
                    <span class="fw-bold">"Fragments" </span><br />
                    <span class="fw-bold">"v-modelهای بیشتر" </span><br />
                    <span class="fw-bold">"سرعت"</span><br />
                    و...
                  </p>
                  <a href="#" class="text-success">
                    <p class="vue-color">ادامه مطلب...</p>
                  </a>
                  <div class="d-flex justify-content-between left-div-btns">
                    <div>
                      <button
                        class="btn btn-success "
                        id="like_btn"
                        @click="likedPost1"
                      >
                        <!-- {{liked ? 'خوشم‌اومد' : 'لایک'}} -->
                        لایک
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-hand-thumbs-up-fill animate__animated animate__fadeIn"
                          viewBox="0 0 16 16"
                          v-if="!liked1"
                        >
                          <path
                            d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-check2 animate__animated animate__fadeIn"
                          viewBox="0 0 16 16"
                          v-else
                        >
                          <path
                            d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                          />
                        </svg>
                      </button>
                    </div>
                    <div>
                      <button
                        class="btn btn-outline-success mb-3 py-1"
                        @click="showPost1"
                      >
                        پاسخ
                        <p class="badge bg-white text-dark m-0">۲</p>
                      </button>
                    </div>
                  </div>
                  <transition
                    name="custom-classes-transition"
                    enter-active-class="animate__animated animate__fadeInDown"
                    leave-active-class="animate__animated animate__fadeOutDown"
                  >
                    <div class="replies pb-4 " id="reply1" v-if="!post1">
                      <div
                        class="d-flex justify-content-start flex-row align-items-center card replay_card py-3 mb-3"
                      >
                        <div class="reply_img mx-2 align-items-center">
                          <img src="@/assets/images/user1.jpg" alt="" />
                        </div>
                        <div class="replY_text_left">
                          <p class="blog_title m-0 small">
                            <span class="fw-bold" style="color:black"
                              >دلکش </span
                            >۱۸ سپتامبر ٬۲۰۲۰ ۵:۳۷
                          </p>
                          <p class="m-0">کاش میشد دید.</p>
                        </div>
                      </div>
                      <div
                        class="d-flex justify-content-start flex-row align-items-center card replay_card py-3"
                      >
                        <div class="reply_img mx-2 align-items-center">
                          <img src="@/assets/images/user1.jpg" alt="" />
                        </div>
                        <div class="replY_text_left">
                          <p class="blog_title m-0 small">
                            <span class="fw-bold" style="color:black"
                              >دلکش </span
                            >۱۸ سپتامبر ٬۲۰۲۱ ۱:۳۱
                          </p>
                          <p class="m-0">رو چ حساب آخه اینجوری عمل کردن؟؟</p>
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
                <!-- third post -->
                <div class="col-12 card p-4 shadow blog_left__div mb-5">
                  <div
                    class="d-flex justify-content-center align-items-center flex-column pt-3 pb-5 "
                  >
                    <h1 class="mosa ">ویو‌جی‌اس ۳</h1>
                    <p class="blog_title nabi">
                      <span class="fw-bold ">زمان انتشار,</span>
                      <span>۱۸ سپتامبر ۲۰۲۰</span>
                    </p>
                  </div>
                  <figure class="right_side__img mb-5">
                    <img
                      src="@/assets/images/v3..jpg"
                      class="img-fluid shadow hvr-float-shadow"
                    />
                  </figure>
                  <p>
                    <span class="fw-bold" style="color:black">"One Piece" </span
                    >نام نسخه سوم ویو‌جی‌اس است. " آپدیت های بزرگ ویو هرکدوم با
                    یه اسم انیمه خاص نامگذاری میشن."
                  </p>
                  <p>
                    ويژگی‌های مهمی که به این نسخه اضافه شد میشه اشاره کرد به<br />
                    <span class="fw-bold">"Composition API" </span><br />
                    <span class="fw-bold">"Teleport" </span><br />
                    <span class="fw-bold">"Fragments" </span><br />
                    <span class="fw-bold">"v-modelهای بیشتر" </span><br />
                    <span class="fw-bold">"سرعت"</span><br />
                    و...
                  </p>
                  <a href="#" class="text-success">
                    <p class="vue-color">ادامه مطلب...</p>
                  </a>
                  <div class="d-flex justify-content-between left-div-btns">
                    <div>
                      <button
                        class="btn btn-success "
                        id="like_btn"
                        @click="likedPost2"
                      >
                        <!-- {{liked ? 'خوشم‌اومد' : 'لایک'}} -->
                        لایک
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-hand-thumbs-up-fill animate__animated animate__fadeIn"
                          viewBox="0 0 16 16"
                          v-if="!liked2"
                        >
                          <path
                            d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"
                          />
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-check2 animate__animated animate__fadeIn"
                          viewBox="0 0 16 16"
                          v-else
                        >
                          <path
                            d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                          />
                        </svg>
                      </button>
                    </div>
                    <div>
                      <button
                        class="btn btn-outline-success mb-3 py-1"
                        @click="showPost2"
                      >
                        پاسخ
                        <p class="badge bg-white text-dark  m-0">۳</p>
                      </button>
                    </div>
                  </div>
                  <transition
                    name="custom-classes-transition"
                    enter-active-class="animate__animated animate__fadeInDown"
                    leave-active-class="animate__animated animate__fadeOutDown"
                  >
                    <div class="replies pb-4" id="reply1" v-if="!post2">
                      <div
                        class="d-flex justify-content-start flex-row align-items-center card replay_card py-3 mb-3"
                      >
                        <div class="reply_img mx-2 align-items-center ">
                          <img src="@/assets/images/user1.jpg" alt="" />
                        </div>
                        <div class="replY_text_left">
                          <p class="blog_title m-0 small">
                            <span class="fw-bold" style="color:black"
                              >دلکش </span
                            >۱۸ سپتامبر ٬۲۰۲۱ ۶:۳۷
                          </p>
                          <p class="m-0">
                            اصن فکرشم نمیکردم اینجوری بوده باشه!!!
                          </p>
                        </div>
                      </div>
                      <div
                        class="d-flex justify-content-start flex-row align-items-center card replay_card py-3 mb-3"
                      >
                        <div class="reply_img mx-2 align-items-center">
                          <img src="@/assets/images/user1.jpg" alt="" />
                        </div>
                        <div class="replY_text_left">
                          <p class="blog_title m-0 small">
                            <span class="fw-bold" style="color:black"
                              >دلکش </span
                            >۱۸ سپتامبر ٬۲۰۲۲ ۹:۳۷
                          </p>
                          <p class="m-0">قشنگ بود :///</p>
                        </div>
                      </div>
                      <div
                        class="d-flex justify-content-start flex-row align-items-center card replay_card py-3"
                      >
                        <div class="reply_img mx-2 align-items-center">
                          <img src="@/assets/images/user1.jpg" alt="" />
                        </div>
                        <div class="replY_text_left">
                          <p class="blog_title m-0 small">
                            <span class="fw-bold" style="color:black"
                              >دلکش </span
                            >۱۸ سپتامبر ٬۲۰۲۰ ۵:۳۷
                          </p>
                          <p class="m-0">عالی بود پستت٬ادامه بده!!</p>
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
            <!-- to get the right side of the div space -->
            <div
              class="col-lg-3 col-md-7 col-11 justify-content-end m-lg-0 mx-auto"
            >
              <div class="row gy-5 left_div_blog">
                <!-- About me -->
                <div
                  class="col-12 container-fluid about_me_div shadow farsi text-md-center mb-5"
                >
                  <p class="text-white fs-4 mb-0 text-center">امید دلکَش</p>
                  <p class="text-white fs-6 text-center mb-1">
                    بله من ویو‌جی‌اس ‌دولوپر هستم.!
                  </p>
                </div>
                <!-- core team member -->
                <div class="core_team">
                  <div class="right_div_title py-2 pl-2">
                    <h5>اعضای اصلی</h5>
                  </div>
                  <div class="right_sub__div shadow small">
                    <div class="row">
                      <div class="col-3 core_team__img1 py-2 pl-2 rounded-3"></div>
                      <div class="col-9 mt-3" style="padding-right:.5rem">
                        <h5 class="mb-0">ایوان یوو</h5>
                        <p>خالق ویو‌جی‌اس</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-3 core_team__img2 py-2 pl-2 rounded-3"></div>
                      <div class="col-9 mt-3" style="padding-right:.5rem">
                        <h5 class="mb-0">کازُپون</h5>
                        <p>عضو اصلی تیم</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-3 core_team__img3 py-2 pl-2 rounded-3"></div>
                      <div class="col-9 mt-3" style="padding-right:.5rem">
                        <h5 class="mb-0">آدام جار</h5>
                        <p>بنیان‌گذار vuemastery</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-3 core_team__img4 py-2 pl-2 rounded-3"></div>
                      <div class="col-9 mt-3" style="padding-right:.5rem">
                        <h5 class="mb-0">کیا کینگ</h5>
                        <p>عضو اصلی تیم</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- advertise part -->
                <div class="right_div_post">
                  <div class="right_div_title py-2 pl-2">
                    <h5>تبلیغات</h5>
                  </div>
                  <div class="right_sub_div">
                    <div class="advertise_img shadow">
                      <p>تبلیغات در اینجا قرار می‌گیرد.</p>
                    </div>
                  </div>
                </div>
                <!-- tags -->
                <div class="right_div_post">
                  <div class="right_div_title py-2 pl-2">
                    <h5>تگ‌ها</h5>
                  </div>
                  <div
                    class="tags_main right_sub__div bgv p-1 shadow py-2 justify-content-around"
                  >
                    <a href="#" class="badge shadow text-capitalize">vue</a>
                    <a href="#" class="badge shadow text-capitalize">vuetify</a>
                    <a href="#" class="badge shadow text-capitalize">vuex</a>
                    <a href="#" class="badge shadow text-capitalize">nuxt</a>
                    <a href="#" class="badge shadow text-capitalize"
                      >tailwind</a
                    >
                    <a href="#" class="badge shadow text-capitalize"
                      >bootstrapvue</a
                    >
                    <a href="#" class="badge shadow text-capitalize">c</a>
                  </div>
                </div>
                <!-- inspiration -->
                <div class="right_div_post">
                  <div class="right_div_title py-2 pl-2">
                    <h5>الهام‌گرفته‌شده از</h5>
                  </div>
                  <div class="right_sub__div text-center p-2 shadow pt-4">
                    <div class="row gx-3">
                      <div class="col-6">
                        <figure>
                          <img
                            src="@/assets/images/eye(5).png"
                            alt=""
                            class="img-fluid shadow hvr-float-shadow"
                          />
                        </figure>
                      </div>
                      <div class="col-6">
                        <figure>
                          <img
                            src="@/assets/images/eye-tracking.png"
                            alt=""
                            class="img-fluid shadow hvr-float-shadow"
                          />
                        </figure>
                      </div>
                      <div class="col-6">
                        <figure>
                          <img
                            src="@/assets/images/view.png"
                            alt=""
                            class="img-fluid shadow hvr-float-shadow"
                          />
                        </figure>
                      </div>
                      <div class="col-6">
                        <figure>
                          <img
                            src="@/assets/images/visibility3.png"
                            alt=""
                            class="img-fluid shadow hvr-float-shadow"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- follow me -->
                <div class="right_div_post">
                  <div class="right_div_title py-2 pl-2">
                    <h5>دنبال‌ کنید</h5>
                  </div>
                  <div
                    class="right_sub__div d-flex justify-content-around pb-4 shadow"
                  >
                    <a href="#"
                      ><i class="bi bi-telegram bis hvr-buzz-out"></i
                    ></a>
                    <a href="#"
                      ><i class="bi bi-instagram bis hvr-buzz-out"></i
                    ></a>
                    <a href="#"
                      ><i class="bi bi-github bis hvr-buzz-out"></i
                    ></a>
                    <a href="#"
                      ><i class="bi bi-linkedin bis hvr-buzz-out"></i
                    ></a>
                  </div>
                </div>
                <!-- subscribe newsletter -->
                <div class="right_div_post">
                  <div class="right_div_title py-2 pl-2">
                    <h5>اشتراک‌گذاری</h5>
                  </div>
                  <div class="right_sub_div">
                    <form @submit.prevent="validate">
                      <div
                        class="mb-3 p-3 shadow"
                        style="border-radius: 0 0 5px 5px;"
                      >
                        <label for="exampleInputEmail1" class="form-label"
                          >آدرس ایمیل خود را برای دریافت آخرین خبرها وارد
                          کنید.</label
                        >
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="name@mail.com"
                          v-model="form.title"
                        />
                        <div style="font-size:13px;direction:ltr">
                          <transition name="slide-fade" mode="out-in">
                            <p class="text-danger" v-if="form.titleError">
                              {{ form.titleError }}
                            </p>
                          </transition>
                        </div>
                        <button
                          type="submit"
                          class="btn btn-success mt-2"
                          :disabled="loading"
                        >
                          <div
                            v-if="loading"
                            class="spinner-border spinner-border-sm "
                            role="status"
                          >
                            <!-- <transition name="slide-fade" mode="out-in"> -->
                            <span class="visually-hidden">Loading...</span>
                            <!-- </transition> -->
                          </div>
                          ارسال
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer>
      <p class="text-center py-4 bg-light">
        طراحی شده توسط <span class="farsi">"دلکش"</span>
      </p>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      post: true,
      post1: true,
      post2: true,
      liked: false,
      liked1: false,
      liked2: false,
      form: {
        title: "",
        titleError: "",
      },
      loading: false,
    };
  },
  methods: {
    showPost() {
      this.post = !this.post;
    },
    showPost1() {
      this.post1 = !this.post1;
    },
    showPost2() {
      this.post2 = !this.post2;
    },
    likedPost() {
      this.liked = !this.liked;
    },
    likedPost1() {
      this.liked1 = !this.liked1;
    },
    likedPost2() {
      this.liked2 = !this.liked2;
    },
    validate() {
      if (this.form.title === "") {
        this.form.titleError = "Email needed!!";
      } else {
        this.form.titleError = "";
      }
      if (this.form.title !== "") {
        this.loading = true;
        this.sendMail();
      }
    },
    sendMail() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: this.form.title,
          userId: 1,
        })
        .then(() => {
          this.loading = false;

          Swal.fire({
            title: "متشکریم",
            text: "ایمیل با موفقیت ارسال شد.",
            icon: "success",
            confirmButtonText: "تاٍیید",
          });
        })
        .then(() => {
          this.form.title = "";
        })
        .catch(function(err) {
          console.log(err);
        });
    },
  },
  watch: {
    $route(to) {
      document.title = to.meta.title || "وبلاگ ــ یعنی ریزاطلاعات";
    },
  },
};
</script>

<style scoped>
:root {
  --bg-size: 100% 100%;
}
.row {
  margin-right: 0;
  margin-left: 0;
}
.row > * {
  padding-right: 0;
  padding-left: 0;
}
.vue-color {
  color: #42b883 !important;
}
.vue-bg {
  background-color: #42b883;
}
.ghasem {
  font-family: "AGhasem";
}
.mosa {
  font-family: "Mosa";
}
.parand {
  font-family: "Parand";
}
.nabi {
  font-family: "Nabi";
}
.farsi {
  font-family: "Farsi";
}
.moshfeg {
  font-family: "Moshfeg";
}
.parand {
  font-family: "Parand";
}
.bank {
  font-family: "Bank";
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
a {
  text-decoration: none;
}
.bkg {
  background: #f7f7f7;
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
.btn-success {
  color: #fff;
  background-color: #42b883;
  border-color: #42b883;
}
.router-link-active {
  color: #35495e !important;
  border-bottom: 2px solid #35495e !important;
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
.logo {
  width: 100px;
}
.b {
  font-size: 1rem;
}
p,
label,
input::placeholder {
  line-height: 170%;
  color: #6c757d;
}
figure img,
svg,
.fab {
  transition: 0.3s all ease;
}
.main_header__div {
  height: calc(100vh - 40vh);
  background-image: url("~@/assets/images/256px-Vue.js_Logo_2.svg.png"),
    linear-gradient(to right, #42b883, #35495e);
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center;
}
.main_header__div p {
  font-size: 2.5rem;
  color: #fff;
  padding-bottom: 0;
  margin-bottom: 0;
}
.main_header__div h2 {
  font-weight: bold;
  color: #fff;
  position: relative;
  padding-bottom: 1rem;
  transition: 0.3s all ease;
}
.animateWord div li {
  font-weight: bold;
  padding: 0 1rem;
  height: 2rem;
  margin-bottom: 3.7rem;
  display: block;
}
.animateWord div {
  overflow: hidden;
  position: relative;
  float: left;
  height: 4rem;
  padding-top: 1rem;
  margin-top: -1rem;
}
.flip {
  -webkit-animation: flip4 10s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
  animation: flip4 10s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
}
@-webkit-keyframes flip4 {
  0% {
    margin-top: -360px;
  }
  5% {
    margin-top: -272px;
  }
  25% {
    margin-top: -272px;
  }
  30% {
    margin-top: -179px;
  }
  50% {
    margin-top: -179px;
  }
  55% {
    margin-top: -87px;
  }
  75% {
    margin-top: -87px;
  }
  80% {
    margin-top: 6px;
  }
  99.99% {
    margin-top: 6px;
  }
  100% {
    margin-top: -275px;
  }
}
@keyframes flip4 {
  0% {
    margin-top: -360px;
  }
  5% {
    margin-top: -272px;
  }
  25% {
    margin-top: -272px;
  }
  30% {
    margin-top: -179px;
  }
  50% {
    margin-top: -179px;
  }
  55% {
    margin-top: -87px;
  }
  75% {
    margin-top: -87px;
  }
  80% {
    margin-top: 6px;
  }
  99.99% {
    margin-top: 6px;
  }
  100% {
    margin-top: -275px;
  }
}

/* left side div style */
.about_me_div {
  height: 19rem;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  background-image: linear-gradient(
      to bottom,
      transparent 75%,
      rgba(208, 206, 207, 0.5) 75%
    ),
    url("~@/assets/images/pro.jpeg");
  background-size: cover ;
  border-radius: 5px;
}
.right_div_title {
  background-image: linear-gradient(to right, #42b883, #35495e);
  color: #fff;
  box-shadow: 0 1rem 3rem -1rem rgba(255, 255, 255, 0.5);
  border-radius: 5px 5px 0 0;
}
.right_div_title h5 {
  padding-right: 2rem;
  margin-bottom: 0;
  margin: 0.5rem 0;
}
.core_team__img1 {
  background-image: url("~@/assets/images/you.jpg");
  background-size: 100% 100%;
  /* border-radius: 100%; */
  height: 4.5rem;
}
.core_team__img2 {
  background-image: url("~@/assets/images/kazu.jpg");
  background-size: 100% 100%;
  height: 4.5rem;
}
.core_team__img3 {
  background-image: url("~@/assets/images/adam-jahr.jpg");
  background-size: 100% 100%;
  /* border-radius: 100%; */
  height: 4.5rem;
}
.core_team__img4 {
  background-image: url("~@/assets/images/king.jpg");
  background-size: 100% 100%;
  /* border-radius: 100%; */
  height: 4.5rem;
}
.right_sub__div {
  background: #fff;
  padding: 0.5rem 0 0 0;
  border-radius: 0 0 5px 5px;
}
.right_sub__div .row {
  /* margin-bottom:1rem; */
  padding-right: 0.3rem;
}
/* ad */
.advertise_img {
  min-width: 10rem;
  height: 10rem;
  display: grid;
  place-items: center;
}

/* tags style */
.tags_main {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(4rem, 8rem));
  grid-gap: 0.5rem;
}
.tags_main a {
  font-size: 1rem;
  line-height: 170%;
  font-weight: lighter;
  background: #35495e;
}
.tags_main a:hover {
  color: white;
  background-image: linear-gradient(to right, #35495e, #42b883);
  transition: all ease 0.2s;
}
/* icon */
.bis {
  color: #000;
  font-size: 2rem;
}
.bi:hover {
  color: #42b883;
}
/* subscribe */
.right_sub_div #exampleInputEmail1 {
  font-family: sans-serif;
  direction: ltr;
  padding: 0.5rem;
  margin: 0.5rem 0;
}
footer p {
  margin-bottom: 0;
  padding-bottom: 0;
}
</style>
