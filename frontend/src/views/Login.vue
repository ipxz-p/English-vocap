<template>
  <div class="flex">
    <div
      class="bg-mypurple-400 h-screen flex items-center justify-center w-full max_login:hidden"
    >
      <img src="../assets/img/rocket1.png" alt="" class="w-1/3"/>
    </div>
    <div
      class="h-screen bg-white flex max_login:w-full min_login:basis-[400px] min_login:shrink-0 justify-center items-center px-6 min_login:px-10"
    >
      <div class="w-full py-4">
        <div class="" @submit="login()">
          <h1 class="text-4xl">Login</h1>
          <div class="mt-8">
            <h1>Username</h1>
            <div
              class="px-3 mt-1 border-2 border-gray-300 w-full rounded-xl h-10 "
              v-bind:class="{'border-red-400': !isValid1}"
            >
              <input
                v-model="username"
                class="outline-0 w-full h-full"
                type="text"
                name=""
                placeholder="Min 4 character"
                
              />
            </div>
            <p v-if="!isValid1" class="text-red-500">Please enter your username correctly.</p>
          </div>
          <div class="mt-2">
            <h1>Password</h1>
            <div
              class="px-3 mt-1 border-2 border-gray-300 w-full rounded-xl h-10"
              v-bind:class="{'border-red-400': !isValid2}"
            >
              <input
                v-model="password"
                class="outline-0 w-full h-full"
                type="password"
                name="password"
                placeholder="Min 6 character"
              />
            </div>
            <p v-if="!isValid2" class="text-red-500">Please enter your password correctly.</p>
          </div>
          <button
            @click="login()"
            class="w-full bg-mypink-300 text-white py-2 mt-8 rounded-xl"
            type="submit"
          >
            Login
          </button>
        </div>
        <div class="flex mt-4 text-sm">
          <p class="mr-1">Not registered yet?</p>
          <router-link class="text-mypurple-300" :to="{ name: 'Register' }"
            >Create an Account</router-link
          >
        </div>
        <div class="flex mt-4 text-sm">
          <p class="mr-1">Forgot your password?</p>
          <router-link class="text-mypurple-300" :to="{ name: 'NewPassword' }"
            >Set new password</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "../axios";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      isValid1: true,
      isValid2: true,
    };
  },
  methods: {
    async login() {
      try {
        await axios
          .post("/auth/login", {
            username: this.username,
            password: this.password,
          })
          .then((response) => {
            if (response.data.accessToken) {
              localStorage.setItem("user", JSON.stringify(response.data));
              this.$router
                .push({ name: "Home" })
                .then(() => window.location.reload());
            }
          })
          .catch((err) => {
            this.$swal.fire({
            title: 'Error!',
            text: err.response.data.message,
            icon: 'error',
            confirmButtonText: 'ok'
            })
            
          });
      } catch (error) {
        console.log(error);
      }
    },
    validateInputLength: function(input) {
      if (input.length < 4) {
        return false;
      }
      return true;
    },
    validateInputLength2: function(input) {
      if (input.length < 6) {
        return false;
      }
      return true;
    },
  },
  watch: {
    username: function(newVal) {
      this.isValid1 = this.validateInputLength(newVal);
    },
    password: function(newVal) {
      this.isValid2 = this.validateInputLength2(newVal);
    }
  }
};
</script>

<style scoped></style>
