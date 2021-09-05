<template>
  <div class="body">
    <header class="main_header">
      <div
        class="d-flex justify-content-center align-items-center flex-column py-5 "
      >
        <h1 class="vue-color ghasem mb-0">دنیای</h1>
        <h1 class="vue-color main_heading ghasem">ویو‌جی‌اس</h1>
        <p class="main_heading__para parand">
          <span class=" fs-5">خوش اومدید به </span>
          <span class="vue-bg p-1 text-white rounded-1 hvr-glow fs-8 parand"
            >ریزاطلاعات ویو‌جی‌اس</span
          >
        </p>
      </div>
      <!-- The main image -->
      <div
        class="main_header__div d-flex align-items-start justify-content-center pe-5 flex-column shadow"
      >
        <p class="ghasem">دنیای ویو‌جی‌اس</p>
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
    <div class="container">
      <div class="row">
        <!-- to get the left and right side div space -->
        <div class="col-xl-10 col-lg-10 col-md-11 col-11 mx-auto my-5">
          <div class="row gx-5 mx-sm-auto">
            <!-- to get the left side of the div space -->
            <div class="col-lg-8 col-md-11 col-11 mx-auto">
              <div class="row gy-5">
                <!-- first post -->
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
                      <button class="btn btn-success" id="like_btn">
                        لایک
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-hand-thumbs-up-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"
                          />
                        </svg>
                      </button>
                    </div>
                    <div>
                      <button
                        class="btn btn-outline-success mb-3"
                        @click="showPost"
                      >
                        پاسخ
                        <badge class="badge bg-white text-dark p-2">۱</badge>
                      </button>
                    </div>
                  </div>
                  <div
                    class="replies pb-4 animate__animated animate__fadeInDown"
                    id="reply1"
                    v-if="!post"
                  >
                    <div
                      class="d-flex justify-content-start flex-row align-items-center card replay_card py-3"
                    >
                      <div class="reply_img mx-2 align-items-center">
                        <img src="@/assets/images/user1.jpg" alt="" />
                      </div>
                      <div class="replY_text_left">
                        <p class="blog_title m-0 small">
                          <span class="fw-bold">دلکش </span>۱۸ سپتامبر ٬۲۰۲۰
                          ۵:۳۷
                        </p>
                        <p class="m-0">عالی بود پستت٬ادامه بده!!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- to get the right side of the div space -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: true,
    };
  },
  methods: {
    showPost() {
      this.post = !this.post;
    },
  },
};
</script>

<style scoped>
:root {
  --bg-size: 100% 100%;
}
.vue-color {
  color: #42b883;
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
a {
  text-decoration: none;
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
    margin-top: -270px;
  }
  25% {
    margin-top: -270px;
  }
  30% {
    margin-top: -175px;
  }
  50% {
    margin-top: -175px;
  }
  55% {
    margin-top: -87px;
  }
  75% {
    margin-top: -87px;
  }
  80% {
    margin-top: 8px;
  }
  99.99% {
    margin-top: 8px;
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
    margin-top: -270px;
  }
  25% {
    margin-top: -270px;
  }
  30% {
    margin-top: -175px;
  }
  50% {
    margin-top: -175px;
  }
  55% {
    margin-top: -87px;
  }
  75% {
    margin-top: -87px;
  }
  80% {
    margin-top: 8px;
  }
  99.99% {
    margin-top: 8px;
  }
  100% {
    margin-top: -275px;
  }
}
</style>
