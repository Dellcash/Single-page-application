<template>

  <div style="height: 80px; overflow: hidden; ">
    <svg
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
      style="height: 100%; width: 100%;"
    >
      <path
        d="M-1.97,104.11 C-4.79,105.09 352.42,5.44 503.67,75.48 L500.00,150.00 L0.00,150.00 Z"
        style="stroke: none; fill: #35495e;"
      ></path>
    </svg>
  </div>

  <div style="background-color: #35495e">
    <div class="container">
      <div class="row text-center text-white">
        <h2 class="fw-bold mb-4">کنفرانس‌ها</h2>
        <h4 class="mb-5">
          ما را در برگزاری بهترین همایش‌های ممکن برای جامعه یاری کنید.
        </h4>
      </div>

      <div class="row">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="@/assets/images/evan.jpeg "
                class="d-block w-100"
                alt=""
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>VUEJS GLOBAL</h5>
                <p>
                  October 1-4, 2021 <br />
                  Amsterdam, Netherlands and Online
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="@/assets/images/vue-korea1.jpg"
                class="d-block w-100 h-100"
                alt=""
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>VueJS Korea</h5>
                <p>
                  2018.12 <br />
                  Vue.tiful is Vue.js developer community in Korea sharing
                  knowledge and tips
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="@/assets/images/venue1.jpg"
                class="d-block w-100"
                alt=""
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>VueJS LONDON 2019</h5>
                <p>
                  Time to get hyped about compositionAPI and Vue3
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col mt-5">
          <p class="text-white">
             * برای مشاهده کنفرانس‌های برگزارشده
            <a class="ey" href="https://events.vuejs.org/conferences/" target="_blank"
              >کلیک</a
            > کنید.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div style="height: 80px; overflow: hidden;">
    <svg
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
      style="height: 100%; width: 100%;"
    >
      <path
        d="M0.00,49.98 C149.99,150.00 501.97,37.98 501.97,38.97 L500.00,0.00 L0.00,0.00 Z"
        style="stroke: none; fill: #35495e;"
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
.ey{
  text-decoration: none;
}
</style>
