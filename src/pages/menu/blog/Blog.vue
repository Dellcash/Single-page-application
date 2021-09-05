<template>
  <div class="body">
    <header class="main_header">
      <div
        class="d-flex justify-content-center align-items-center flex-column py-5 "
      >
        <h1 class="vue-color ghasem mb-0">دنیای</h1>
        <h1 class="vue-color main_heading ghasem">ویو‌جی‌اس</h1>
        <p class="main_heading__para">
          <span class=" fs-5">خوش اومدید به </span>
          <span class="vue-bg p-1 text-white rounded-1 hvr-glow fs-8"
            >ریزاطلاعات ویو‌جی‌اس</span
          >
        </p>
      </div>
      <!-- The main image -->
      <div
        class="main_header__div d-flex align-self-start justify-content-center pl-5 flex-column shadow"
      >
        <p class="ghasem">دنیای ویو‌جی‌اس</p>
        <h4 class="animateWord">
          <span>اون </span>
          <div>
            <ul class="flip">
              <li>سریعه</li>
              <li>سبکه</li>
              <li>یادگیریش راحته</li>
              <li>و <span>زیباس</span></li>
            </ul>
          </div>
        </h4>
        <button class="">مستندات</button>
      </div>
    </header>

    <!-- ْTwo side div -->
    <div class="container-fluid">
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
                    <p class="blog-title nabi">
                      <span class="fw-bold ">زمان انتشار,</span>
                      <span>۱۸ سپتامبر ۲۰۲۰</span>
                    </p>
                  </div>
                  <figure class="right_side__img mb-5">
                    <img
                      src="@/assets/images/v3..jpg"
                      class="img-fluid shadow"
                    />
                  </figure>
                  <p>
                    <span class="fw-bold">"One Piece" </span>نام نسخه سوم
                    ویو‌جی‌اس است. " آپدیت های بزرگ ویو هرکدوم با یه اسم انیمه
                    خاص نامگذاری میشن."
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
                  <a href="#" class="text-success"> <p class="vue-color">ادامه مطلب...</p> </a>
                  <div class="d-flex justify-content-between left-div-btns">
                    <div>
                      <button class="left_div__like" id="like_btn">
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
                      <button class="left_div_reply">
                        پاسخ <badge class="bg-white text-dark p-2">۱</badge>
                      </button>
                    </div>
                  </div>
                  <div class="replies" id="reply1">
                    <div
                      class="d-flex justify-content-start flex-row align-items-center card replay_card py-3"
                    >
                      <div class="reply_img mx-2 align-items-center">
                        <img src="@/assets/images/user1.jpg" alt="" />
                      </div>
                      <div class="replY_text_left">
                        <p class="blog_title">
                          <span class="fw-bold">دلکش</span>۱۸ سپتامبر ۲۰۲۰٬۵:۳۷
                        </p>
                        <p>عالی بود پستت٬ادامه بده!!</p>
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
data(){
  return{
  }
}
};
</script>

<style scoped>
:root {
  --bg-size: 100% 100%;
}
.vue-color{
  color: #42b883
}
.vue-bg{
  background-color:#42b883
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
.main_header__div{
  height: calc(100vh - 40vh);
  background-image: url('~@/assets/images/Vue.js_Logo_2.svg') , linear-gradient(to right, #42b883 , #35495e);
  background-size:  contain,cover;
  background-repeat: no-repeat;
}
</style>
