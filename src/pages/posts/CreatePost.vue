<template>
  <div class="container mt-5">
    <div class="row g-3">
      <div class="col-md-5">
        <transition class="animate__animated animate__fadeInDown" mode="out-in">
          <h2 class="mb-5">Create Post:</h2>
        </transition>

        <form @submit.prevent="validate">
          <transition
            class="animate__animated animate__fadeInDown"
            mode="out-in"
          >
            <div class="mb-3">
              <label class="form-label">Title:</label>
              <input
                type="text"
                class="form-control"
                v-model.lazy="form.title"
              />
              <div class="text-danger">
                <transition name="slide-fade" mode="out-in">
                  <p v-if="form.titleError">
                    {{ form.titleError }}
                  </p>
                </transition>
              </div>
            </div>
          </transition>

          <transition class="animate__animated animate__fadeInUp" mode="out-in">
            <div class="mb-3">
              <label class="form-label">Body</label>
              <textarea
                class="form-control"
                rows="5"
                v-model.lazy="form.body"
              ></textarea>
              <transition name="slide-fade" mode="out-in">
                <div class="text-danger" v-if="form.bodyError">
                  {{ form.bodyError }}
                </div>
              </transition>
            </div>
          </transition>
          <transition class="animate__animated animate__fadeInUp" mode="out-in">
            <button type="submit" class="btn btn-dark" :disabled="loading">
              <div
                v-if="loading"
                class="spinner-border spinner-border-sm "
                role="status"
              >
                <!-- <transition name="slide-fade" mode="out-in"> -->
                <span class="visually-hidden">Loading...</span>
                <!-- </transition> -->
              </div>

              Create Post
            </button>
          </transition>
        </form>
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
        form.titleError = "Title Needed";
      } else {
        form.titleError = "";
      }
      if (form.body === "") {
        form.bodyError = "Body has to Filed!";
      } else {
        form.bodyError = "";
      }

      if (form.title !== "" && form.body !== "") {
        loading.value = true;
        createPost();
      }
    }

    function createPost() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: form.title,
          body: form.body,
          userId: 1,
        })
        .then(function() {
          loading.value = false;

          Swal.fire({
            title: "Thanks!",
            text: "Post Created Successfully!",
            icon: "success",
            confirmButtonText: "Ok",
          });
        })
        .catch(function(err) {
          console.log(err);
        });
    }

    return { form, validate, loading };
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
*{
  direction: ltr;
   font-family: sans-serif;
}
</style>
