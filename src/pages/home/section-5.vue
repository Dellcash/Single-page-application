<template>
  <div class="container">
    <div class="row text-center">
      <h4 class="fw-bold mb-4">تماس با ما</h4>
      <p>منتظر نظرات و انتقادات گرم شما کاربران گرامی هستیم.</p>
    </div>

    <div class="row align-items-center">
      <div class="col-md-5 offset-md-2">
        <form @submit.prevent="validate">
          <div class="mb-3">
            <label class="form-label">آدرس ایمیل:</label>
            <input
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
              v-model="form.title"
              style="direction:ltr; font-family:sans-serif"
            />
            <div class="text-danger" style="font-size:13px">
              <transition name="slide-fade" mode="out-in">
                <p v-if="form.titleError">{{ form.titleError }}</p>
              </transition>
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">متن پیام:</label>
            <textarea
              class="form-control"
              cols="10"
              rows="3"
              v-model="form.body"
            ></textarea>
            <div class="text-danger" style="font-size:13px">
              <transition name="slide-fade" mode="out-in">
                <p v-if="form.bodyError">{{ form.bodyError }}</p>
              </transition>
            </div>
          </div>
          <button type="submit" class="btn btn-primary" :disabled="loading">
            <div
              v-if="loading"
              class="spinner-border spinner-border-sm "
              role="status"
            >
              <!-- <transition name="slide-fade" mode="out-in"> -->
              <span class="visually-hidden">Loading...</span>
              <!-- </transition> -->
            </div>
            ارسال پیام
          </button>
        </form>
      </div>
      <div class="col-md-5 ">
        <img class="img-fluid " src="@/assets/images/img_5.png" alt="" />
      </div>
    </div>

    <div class="row text-center gy-5">
      <div class="col-md-2">
        <a target="_blank" href="https://getbootstrap.com/">
          <img
            width="70"
            class="img-fluid"
            src="@/assets/images/img_6.svg"
            alt=""
          />
        </a>
      </div>
      <div class="col-md-2">
        <a target="_blank" href="https://laravel.com/">
          <img
            width="70"
            class="img-fluid"
            src="@/assets/images/img_7.svg"
            alt=""
          />
        </a>
      </div>
      <div class="col-md-2">
        <a href="https://nodejs.org/en/">
          <img
            width="70"
            class="img-fluid"
            src="@/assets/images/img_8.svg"
            alt=""
          />
        </a>
      </div>
      <div class="col-md-2">
        <a href="https://www.python.org/">
          <img
            width="70"
            class="img-fluid"
            src="@/assets/images/img_9.svg"
            alt=""
          />
        </a>
      </div>
      <div class="col-md-2">
        <a href="https://github.com/">
          <img
            width="70"
            class="img-fluid"
            src="@/assets/images/img_10.svg"
            alt=""
        /></a>
      </div>
      <div class="col-md-2">
        <img
          width="70"
          class="img-fluid"
          src="@/assets/images/img_11.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  setup() {
    const form = reactive({
      title: "",
      titleError: "",
      body: "",
      bodyError: "",
    });
    const loading = ref(false);

    function validate() {
      if (form.title === "") {
        form.titleError = "ورودی ایمیل را پر کنید";
      } else {
        form.titleError = "";
      }
      if (form.body === "") {
        form.bodyError = "ورودی متن پیام را پر کنید";
      } else {
        form.bodyError = "";
      }

      if (form.title !== "" && form.body !== "") {
        loading.value = true;
        sendPost();
      }
    }

    function sendPost() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: form.title,
          body: form.body,
          userId: 1,
        })
        .then(function() {
          loading.value = false;

          Swal.fire({
            title: "متشکریم",
            text: "پیام با موفقیت ارسال شد.",
            icon: "success",
            confirmButtonText: "تاٍیید",
          });
        })
        .catch(function(err) {
          console.log(err);
        });
    }

    return { validate, loading, form };
  },
};
</script>

<style scoped>
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
</style>
