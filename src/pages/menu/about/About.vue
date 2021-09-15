<template>
  <div class="body">
    <div class="background"></div>
    <div class="intro-right">
      <div class="container-fluid full-height">
        <div class="row text-center align-items-center full-height">
          <div class="col">
            <img
              src="@/assets/images/profile.jpeg"
              alt=""
              class="avatar mb-4"
            />
            <p class="parand display-5 my-2">امید دلکَش</p>
            <p class="ghasem">ویو‌جی‌اس دولوپر</p>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-8 panel-left px-0">
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
            <a
              href="tel:+989353417352"
              class="ghasem mb-5 phone fs-1 btn btn-outline-dark"
              >۹۸۹۳۵۳۴۱۷۳۵۲+</a
            >
            <h1 class="display-4 mosa my-5">درباره‌ی من</h1>
            <p class="parand fs-3 mb-5">
              من جونیور دولوپر هستم، البته
              <span class="fw-bold nabi">خودآموخته</span>.
            </p>
            <p class="parand fs-4 pb-3">
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
                      <a
                        href="#"
                        class="btn btn-outline-secondary float-start parand"
                        >مشاهده ...</a
                      >
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
                      <a
                        href="#"
                        class="btn btn-outline-secondary float-start parand"
                        >مشاهده ...</a
                      >
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
                      <a
                        href="#"
                        class="btn btn-outline-secondary float-start parand"
                        >مشاهده ...</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" class="a float-start mt-4 px-4 parand fs-5">بیشتر ››</a>
          </section>

          <section class="contact pb-5">
            <div class="container">
              <h1 class="parand py-3">ارسال پیام به من:</h1>
              <form
                target="_blank"
                action="https://formsubmit.co/omiddellcash@gmail.com"
                method="POST"
              >
                <input type="hidden" name="_captcha" value="false" />
                <div class="form-group">
                  <div class="row mb-4 gy-4">
                    <div class="col-md-6">
                      <input
                        type="text"
                        name="name"
                        class="form-control parand"
                        placeholder="نام و نام‌خانوادگی"
                        required
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="email"
                        name="email"
                        class="form-control "
                        placeholder="Email address"
                        required
                        style="direction:ltr;font-family:sans-serif"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <textarea
                    placeholder="متن پیام"
                    class="form-control parand fs-4"
                    name="message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-dark mt-2 parand">
                  ارسال
                </button>
              </form>
            </div>

            <div class="d-flex justify-content-around pb-4 shadow mt-5 pt-2">
              <a href="https://wa.me/+989353417352"
                ><i class="bi bi-whatsapp bis hvr-buzz-out fs-2"></i
              ></a>
              <a href="https://www.instagram.com/dellcash/"
                ><i class="bi bi-instagram bis hvr-buzz-out fs-2"></i
              ></a>
              <a href="https://github.com/Dellcash"
                ><i class="bi bi-github bis hvr-buzz-out fs-2"></i
              ></a>
              <a href="https://www.linkedin.com/in/dellcash/"
                ><i class="bi bi-linkedin bis hvr-buzz-out fs-2"></i
              ></a>
            </div>
          </section>

          <footer class="footer">
            <div class="container-fluid text-center shadow py-3 mt-5">
              <span class="text-muted parand">
                طراحی شده توسط
                <span class="farsi">"دلکش"</span>
              </span>
            </div>
          </footer>
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
      rgba(26, 27, 27, 0.1),
      rgba(88, 143, 211, 0.2)
    ),
    url("~@/assets/images/o.jpg");
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
    background: linear-gradient(
        to right,
        rgba(142, 145, 145, 0.2),
        rgba(28, 63, 107, 0.5)
      ),
      url("~@/assets/images/or.jpg");
    /* background-size: contain, cover; */
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
.a {
  text-decoration: none;
  color: #444;
}
.phone {
  text-decoration: none;
  color: #444;
}
.phone:hover {
  color: #fff;
}
.footer {
  background-color: #fff;
  font-size: 1rem;
}
/* .panel-left{
  background-color:#eee;
} */
.background {
  background-color: #eee;
  width: 100%;
  height: 100%;
  z-index: -1;
  position: fixed;
  clip-path: polygon(11% 0, 80% 0%, 100% 100%, 41% 100%);
}
</style>
