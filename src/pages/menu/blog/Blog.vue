<template>
  <header class="main_header">
    <div
      class="d-flex justify-content-center align-items-center flex-column py-5 "
    >
      <h1 class="text-success ghasem">دنیای</h1>
      <h1 class="text-success main_heading ghasem">ویو‌جی‌اس</h1>
      <p class="main_heading__para">
        <span class=" fs-5">خوش اومدید به </span>
        <span class="bg-success p-1 text-white rounded-1 hvr-glow fs-8"
          >ریزاطلاعات ویو‌جی‌اس</span
        >
      </p>
    </div>
    <!-- The main image -->
    <div
      class="main_header__div d-flex align-self-start justify-content-center pl-5 flex-column shadow"
    >
      <p class="ghasem">دنیای ویو‌جی‌اس</p>
      <h2 class="animateWord">
        <span>اون </span>
        <div>
          <ul class="flip">
            <li>سریعه</li>
            <li>سبکه</li>
            <li>یادگیریش راحته</li>
            <li>و <span>زیباس</span></li>
          </ul>
        </div>
      </h2>
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
                  <h1>ویو‌جی‌اس ۳</h1>
                  <p class="blog-title">
                    <span class="fw-bold">زمان انتشار,</span>
                    <span>۱۸ سپتامبر ۲۰۲۰</span>
                  </p>
                </div>
                <figure class="right_side__img mb-5">
                  <img src="@/assets/images/v3..jpg" class="img-fluid shadow" />
                </figure>
                <p>
                  <span class="fw-bold">"One Piece" </span>نام نسخه سوم
                  ویو‌جی‌اس است. " آپدیت های بزرگ ویو هرکدوم با یه اسم انیمه خاص
                  نامگذاری میشن."
                </p>
                <p>
                  ويژگی‌های مهمی که به این نسخه
                  اضافه شد میشه اشاره کرد به<br>
                  <span class="fw-bold">"Composition API" </span><br>
                  <span class="fw-bold">"Teleport" </span><br>
                  <span class="fw-bold">"Fragments" </span><br>
                  <span class="fw-bold">"v-modelهای بیشتر" </span><br>
                  <span class="fw-bold">"سرعت"</span><br>
                  و...
                </p>
              </div>
            </div>
          </div>
          <!-- to get the right side of the div space -->
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
.ghasem {
  font-family: "AGhasem";
}
</style>
