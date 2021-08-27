<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card border-0 shadow rounded-3 my-5">
          <div class="card-body p-4 p-sm-5 hvr-shadow-radial">
            <h5 class="card-title text-center mb-5 fw-light fs-5 fw-bold">
              Sign In
            </h5>
            <form @submit.prevent="validate">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  placeholder="name@example.com"
                  v-model="form.email"
                />
                <div class="text-danger">
                  <transition name="slide-fade" mode="out-in">
                    <p v-if="form.emailError">{{ form.emailError }}</p>
                  </transition>
                </div>
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  v-model="form.phone"
                />
                <div class="text-danger">
                  <transition name="slide-fade" mode="out-in">
                    <p v-if="form.phoneError">{{ form.phoneError }}</p>
                  </transition>
                </div>
                <label for="floatingPassword">Password</label>
              </div>

              <div class="form-check mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="rememberPasswordCheck"
                />
                <label class="form-check-label" for="rememberPasswordCheck">
                  Remember password
                </label>
              </div>
              <div class="d-grid">
                <button
                  class="btn btn-primary btn-login text-uppercase fw-bold"
                  type="submit"
                  :disabled="loading"
                >
                  <div
                    v-if="loading"
                    class="spinner-border spinner-border-sm "
                    role="status"
                  ></div>
                  Sign in
                </button>
              </div>
              <hr class="my-4" />
              <div class="d-grid mb-2">
                <button
                  class="btn btn-google btn-login text-uppercase fw-bold"
                  type="submit"
                >
                  <i class="bi bi-google me-2" style="font-size:20px"></i> Sign
                  in with Google
                </button>
              </div>
              <div class="d-grid">
                <button
                  class="btn btn-facebook btn-login text-uppercase fw-bold"
                  type="submit"
                >
                  <i class="bi bi-facebook me-2" style="font-size:20px"></i>
                  Sign in with Facebook
                </button>
              </div>
            </form>
          </div>
        </div>
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
      email: "",
      emailError: "",
      phone: "",
      phoneError: "",
    });
    const loading = ref(false);

    function validate() {
      if (form.email === "") {
        form.emailError = "Email Needed!!";
      } else {
        form.emailError = "";
      }
      if (form.phone === "") {
        form.phoneError = "Password Needed!!";
      } else {
        form.phoneError = "";
      }

      if (form.email !== "" && form.phone !== "") {
        loading.value = true;
        loginUser();
      }
    }

    function loginUser() {
      axios
        .post("https://jsonplaceholder.typicode.com/users", {
          username: form.userName,
          email: form.email,
          phone: form.phone,
          userId: 1,
        })
        .then(function() {
          loading.value = false;

          Swal.fire({
            title: "Thanks",
            text: "Logged in Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        })
        .catch(function(err) {
          console.log(err);
        });
    }

    return { validate, form, loading };
  },
};
</script>

<style scoped>
* {
  direction: ltr;
  font-family: sans-serif;
}
body {
  background: #007bff;
  background: linear-gradient(to right, #0062e6, #33aeff);
}

.btn-login {
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  padding: 0.75rem 1rem;
}

.btn-google {
  color: white !important;
  background-color: #ea4335;
}

.btn-facebook {
  color: white !important;
  background-color: #3b5998;
}
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
