<template>
  <div class="body">
    <div class="intro-right">
      <div class="container-fluid full-height">
        <div class="row text-center align-items-center full-height">
          <div class="col">
            <img src="@/assets/images/profile.jpeg" alt="" class="avatar" />
            <p class="parand display-5 mb-0">امید دلکَش</p>
            <p class="ghasem">ویو‌جی‌اس دولوپر</p>
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
                  "خداوند در جزئیات است <br />شیطان هم همینطور."
                </p>
              </blockquote>
              <figcaption style="direction:ltr" class="blockquote-footer">
                Mies van der Rohe <cite title="Source Title">۱۹۶۰</cite>
              </figcaption>
            </figure>
          </section>
          <section class="intro">
            <h1 class="display-4 mosa">درباره‌ی من</h1>
            <p>
              من جونیور دولوپر هستم، البته
              <span class="fw-bold">خودآموخته</span>.
            </p>
            <p>
              بـه احتمال خیلی زیاد با سختیاش آشنا هستید و می‌دونید که به
              <span class="fw-bold">پشتکار</span>  و <span>Self‌‌Control</span> بالایی نیاز داره.
            </p>
            <p>دلایلی که به سمته برنامه‌نویسی کشیده شدم 
              <span class="fw-bold">ایده‌پردازی</span> و مهارتی که توو <span class="fw-bold">problem solving</span> که دارم بود. <br>
            </p>
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
.intro-right {
  background: linear-gradient(
      to right,
      rgba(66, 184, 131, 0.2),
      rgba(53, 73, 94, 0.5)
    ),
    url("~@/assets/images/sea.jpg");
  background-size: cover;
  position: fixed;
  right: 0;
  width: 33.3333%;
  height: 100%;
  color: #fff;
}
@media (max-width: 768px) {
  .intro-right {
    height: 30vh;
    margin-bottom: 0;
    position: relative;
    width: 100%;
    background: linear-gradient(
        to right,
        rgba(66, 184, 131, 0.2),
        rgba(53, 73, 94, 0.5)
      ),
      url("~@/assets/images/sear.jpg");
    background-size: cover;
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
</style>
