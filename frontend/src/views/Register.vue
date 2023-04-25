<template>
  <div class="flex">
    <div
      class="h-screen flex max_login:w-full min_login:basis-[500px] min_login:shrink-0 justify-center items-center px-6 min_login:px-10"
    >
      <div class="w-full py-4">
        <div class="">
          <h1 class="text-4xl">Create Account</h1>
          <div class="mt-8">
            <h1>Username</h1>
            <div
              class="px-3 mt-1 border-2 border-gray-300 w-full rounded-xl h-10"
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
                name=""
                placeholder="Min 6 character"
              />
            </div>
            <p v-if="!isValid2" class="text-red-500">Please enter your password correctly.</p>
          </div>
          <div class="mt-2">
            <h1>Confirm password</h1>
            <div
              class="px-3 mt-1 border-2 border-gray-300 w-full rounded-xl h-10"
              v-bind:class="{'border-red-400': !(isSameInput)}"
            >
              <input
                v-model="checkPassword"
                class="outline-0 w-full h-full"
                type="password"
                name=""
                placeholder="Min 6 character"
              />
            </div>
            <p v-if="!(isSameInput)" class="text-red-500">Password and confirm password don't match.</p>
          </div>
          <button
            class="w-full bg-mypink-300 text-white py-2 mt-8 rounded-xl"
            @click="register()"
            type="submit"
          >
            Create Account
          </button>
        </div>
        <div class="flex mt-4 text-sm">
          <p class="mr-1">Already have an account?</p>
          <router-link class="text-mypurple-300" :to="{ name: 'Login' }"
            >Login</router-link
          >
        </div>
      </div>
    </div>
    <div
      class="bg-mypurple-400 h-screen flex items-center justify-center w-full max_login:hidden"
    >
      <img src="../assets/img/rocket1.png" alt="" class="w-1/3" />
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
      checkPassword: "",
      isValid1: true,
      isValid2: true,
      isSameInput: true,
    };
  },
  methods: {
    async register() {
      try {
        await axios
          .post("/auth/reg", {
            username: this.username,
            password: this.password,
            checkPassword: this.checkPassword,
          })
          .then((response) => {
            alert(response.data.message);
            this.$router.push({ name: "Login" });
          })
          .catch((err) => {
            alert(err.response.data.message);
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
    },
    checkPassword: function(newVal) {
      this.isSameInput = (newVal === this.password);
    },
  }
};
</script>

<style scoped></style>
