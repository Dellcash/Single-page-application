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

  <section class="bg-light">
    <div class="container">
      <div class="row g-4 align-items-center">
        <div class="col-md-4">
          <i class="bi bi-stack fs-2 icon mb-4"></i>
          <p class="fw-bold">چند ابزار و کتابخانه های مرتبط</p>
          <p>
            ساخت اپلیکیشن‌های جذاب، عالی است؛ اما ساخت سریع آن‌ها نیز مهم است.
            بنابراین به چند ابزار و کتابخانه برای اینکار احتیاج داریم.
          </p>
          <a
            class="btn btn-outline-dark b"
            href="https://v3.vuejs.org/"
            target="_blank"
            >Vue Js</a
          >
        </div>

        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6">
              <div class="card text-center shadow">
                <div class="card-body">
                  <i class="bi bi-graph-up fs-2 icon mb-4"></i>
                  <p class="card-title fw-bold mb-4">Vuex</p>
                  <p class="card-text text-muted">
                    Vuex یک کتابخانه مدیریت وضعیت است که مخصوص ایجاد
                    اپلیکیشن‌های پیچیده و بزرگ در ویوجی‌اس است.
                  </p>
                </div>
              </div>

              <div class="card text-center shadow mt-4">
                <div class="card-body">
                  <i class="bi bi-bricks fs-2 icon mb-4"></i>
                  <p class="card-title fw-bold mb-4">Vuetify</p>
                  <p class="card-text text-muted">
                    Vuetify به شما کمک می‌کند تا کامپوننت‌های رابط کاربری مربوط
                    به اپلیکیشن‌های ویوجی‌اسی را مطابق با الگوهای طراحی متریال
                    ایجاد کنید.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6 mt-5">
              <div class="card text-center shadow">
                <div class="card-body">
                  <i class="bi bi-menu-button-wide-fill fs-2 icon mb-4"></i>
                  <p class="card-title fw-bold mb-4">Nuxt.Js</p>
                  <p class="card-text text-muted">
                    این چارچوب کاربران را قادر می سازد تا کاربران، محتوا یا بخش
                    هایی از آن را داشته باشند و به طور کامل بر روی سرور پیش رندر
                    شده و به شیوه ژنراتور های سایت ایستا کار کنند.
                  </p>
                </div>
              </div>

              <div class="card text-center shadow mt-4">
                <div class="card-body">
                  <i class="bi bi-input-cursor-text fs-2 icon mb-4"></i>
                  <p class="card-title fw-bold mb-4">Vuefire</p>
                  <p class="card-text text-muted">
                    Vuefire یک راه حل کوچک و کاربردی برای ایجاد پیوندهای بیدرنگ
                    بین Firebase RTDB یا Firebase Cloud Firestore و برنامه Vue
                    شما است.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div style="height: 80px; overflow: hidden;">
    <svg
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
      style="height: 100%; width: 100%;"
    >
      <path
        d="M0.00,49.98 C149.99,150.00 501.97,37.98 501.97,38.97 L500.00,0.00 L0.00,0.00 Z"
        style="stroke: none; fill: #f8f9fa;"
      ></path>
    </svg>
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
.icon {
  color: #0d6efd;
  background-color: #ebeafb;
  display: inline-flex;
  padding: 15px;
  border-radius: 15px;
}
.b {
  font-family: sans-serif;
}
</style>
