<template>
  <div class="body">
    <div class="intro-right">
      <div class="container-fluid full-height">
        <div class="row text-center align-items-center full-height">
          <div class="col">
            <img
              src="@/assets/images/profile.jpeg"
              alt=""
              class="avatar mb-4"
            />
            <p class="parand display-5 my-2" >امید دلکَش</p>
            <p class="ghasem" >ویو‌جی‌اس دولوپر</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-8 panel-left">
          <section class="quote">
            <figure>
              <blockquote class="blockquote">
                <p class="text-muted parand">
                  "خداوند در جزئیات است، <br />شیطان هم همینطور."
                </p>
              </blockquote>
              <figcaption style="direction:ltr" class="blockquote-footer">
                Mies van der Rohe <cite title="Source Title">۱۹۶۰</cite>
              </figcaption>
            </figure>
          </section>

          <section class="intro">
            <h1 class="display-4 mosa mb-5">درباره‌ی من</h1>
            <p class="parand fs-3 mb-5">
              من جونیور دولوپر هستم، البته
              <span class="fw-bold nabi">خودآموخته</span>.
            </p>
            <p class="parand fs-4 mb-2">
              بـه احتمال خیلی زیاد با سختیاش آشنا هستید و می‌دونید که به
              <span class="fw-bold nabi fs-3">پشتکار</span> و
              <span class="font-e fw-bold">Self‌‌Control</span> بالایی نیاز
              داره.
              <br />
              <span class="ghasem  fs-6">
                "بخصوص برای کسی که شغلش ۳۶۰درجه با برنامه‌نویسی فرق میکنه."
              </span>
            </p>
            <p class="parand fs-4">
              دلایلی که به سمته برنامه‌نویسی کشیده شدم
              <span class="nabi fs-3">ایده‌پردازی</span> و مهارتی که توو
              <span class="fw-bold font-e">problem solving</span> که دارم بود،
              چون بنظرم بهترین مکان براش برنامه‌نویسیه. <br />
            </p>
          </section>

          <section class="projects">
            <h2 class="display-7 parand mb-4">
              تعدادی از پروژه‌های که با این فریمورک پیاده‌سازی کردم:
            </h2>
            <div class="container-fluid">
              <div class="row gy-4 ">
                <div class="col-md-6">
                  <img
                    src="@/assets/images/g1.jpg"
                    alt="Portfolio image"
                    class="img-fluid thumbnail"
                  />
                </div>
                <div class="col-md-6">
                  <img
                    src="@/assets/images/g2.jpg"
                    alt="Portfolio image"
                    class="img-fluid thumbnail"
                  />
                </div>
                <div class="col-md-6">
                  <img
                    src="@/assets/images/g3.jpg"
                    alt="Portfolio image"
                    class="img-fluid thumbnail"
                  />
                </div>
                <div class="col-md-6">
                  <img
                    src="@/assets/images/g4.jpg"
                    alt="Portfolio image"
                    class="img-fluid thumbnail"
                  />
                </div>
              </div>
            </div>
          </section>

          <section class="blog">
            <h2 class="display-7 parand mb-4">وبلاگ من:</h2>
            <div class="container-fluid">
              <div class="row gy-4">
                <div class="col-md-4">
                  <div class="card">
                    <img
                      src="@/assets/images/g1.jpg"
                      class="card-img-top"
                      alt="blog"
                    />
                    <div class="card-body">
                      <h5 class="card-title mosa">ویو‌جی‌اس ۳</h5>
                      <p class="card-text text-muted mb-0 mosa">تاریخ انتشار</p>
                      <a href="#" class="btn btn-outline-secondary float-start parand">مشاهده ...</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card">
                    <img
                      src="@/assets/images/g2.jpg"
                      class="card-img-top"
                      alt="blog"
                    />
                    <div class="card-body">
                      <h5 class="card-title mosa">ویو‌جی‌اس ۳</h5>
                      <p class="card-text text-muted mb-0 mosa">تاریخ انتشار</p>
                      <a href="#" class="btn btn-outline-secondary float-start parand" >مشاهده ...</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card">
                    <img
                      src="@/assets/images/g3.jpg"
                      class="card-img-top"
                      alt="blog"
                    />
                    <div class="card-body">
                      <h5 class="card-title mosa">ویو‌جی‌اس ۳</h5>
                      <p class="card-text text-muted mb-0 mosa">تاریخ انتشار</p>
                      <a href="#" class="btn btn-outline-secondary float-start parand">مشاهده ...</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <a href="#" class="a float-start mt-4 px-4">بیشتر ››</a>

          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    $route(to) {
      document.title = to.meta.title || "پورتفولیو ــ درباره‌ی من";
    },
  },
};
</script>

<style scoped>
/* fonts */
.font-e {
  font-family: "Courier New", Courier, monospace;
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
/* fonts */
.body {
  height: 100%;
  font-size: 1.5rem;
  color: #444;
}
p {
  line-height: 1.6rem;
}
.intro-right {
  background: linear-gradient(
      to right,
      rgba(66, 184, 131, 0.2),
      rgba(53, 73, 94, 0.5)
    ),
    url("~@/assets/images/m.jpeg");
  background-size: cover;
  position: fixed;
  right: 0;
  width: 33.3333%;
  height: 100%;
  color: #fff;
}
@media (max-width: 768px) {
  .intro-right {
    height: 40vh;
    margin-bottom: 0;
    position: relative;
    width: 100%;
  }
  section {
    margin: 3rem !important;
  }
}

.avatar {
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  margin: 1rem;
}

.full-height {
  height: 100%;
}

.quote {
  float: left;
}

section {
  margin: 5rem;
  font-size: 1rem;
}
.a{
  text-decoration: none;
  color: #444;
}
</style>
