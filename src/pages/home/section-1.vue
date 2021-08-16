<template>
  <section>
    <div class="container ">
      <div class="row align-items-center mt-5 pt-3">
        <div class="col-md-6 mt-5 mt-md-0">
          <h2 class="fw-bold text-success mb-4">
            ویو جی اس در طراحی وب
          </h2>
          <ul>
            <li>
              <h5 class="fw-bold">کاربرد ویو جی اس در وب سایت های SPA</h5>
            </li>
          </ul>
          <br />
          <br />
          <p>
            <span
              >شما میتونین با استفاده از Vue Js سایت های SPA طراحی کنین.</span
            >
          </p>
          <p>
            <span
              >اجازه بدین قبل از عمیق تر شدن در این قسمت توضیحی در مورد SPA
              براتون بدم.</span
            >
            <br />
            <span
              >کلمه SPA مخفف Single Page Application بوده و به معنی تک صفحه هست.
              پس وقتی میگیم وب سایت Spa، منظورمون یک وب سایت تک صفحه ای
              هست؛</span
            >
          </p>
          <!-- <p>
          <span
            >یک مثال براتون بزنم درمورد SPA، قطعا همه شما گوشی همراه اندروید یا
            ios داشته و یک برنامه ای تحت عنوان فایل های شخصی؛</span
          >
          <br />
          <span
            >به شکلی که شما میتونین بدون این که صفحه وب سایت رفرش بشه میتونین
            بین صفحات سایت (url های سایت) جابجا بشین.</span
          >
        </p>
        <p>
          <span
            >اگر شما از پوشه ای وارد پوشه دیگر بشین صفحه برای شما لود نمیشه و به
            راحتی جابجا میشین.</span
          >
          <br />
          <span
            >یا اگه میخواین یک سایت SPA هم مشاهده کنین میتونین به سایت
            <a
              class="text-reset"
              href="https://vuetifyjs.com/en/components/alerts"
              >Vuetify</a
            >
            مراجعه کنین.</span
          >
        </p>
        <p>
          <span
            >اگر شما در سمت چپ از این سایت بین Compenent ها کلیک کنین، بدون رفرش
            شدن صفحه میتونین به url مدنظرتون منتقل بشین.
          </span>
        </p> -->
          <p class="source">
            <span
              >منبع:
              <a class="text-reset" href="https://sabzlearn.ir/" target="_blank"
                >سبزلرن</a
              >
            </span>
          </p>

          <router-link class="btn btn-dark " :to="{ name: 'users' }"
            >کاربران</router-link
          >
          <router-link class="btn btn-light me-3" :to="{ name: 'posts' }"
            >پست ها</router-link
          >
        </div>
        <div class="col-md-6">
          <img
            class="img-fluid "
            src="@/assets/images/img1.png"
            alt="designer"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.source {
  font-size: 13px;
}
</style>
