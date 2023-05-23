<template>
  <div class="m-5">
    <div class="flex flex-col gap-4">
            <span class="animate-flash text-3xl font-extrabold text-mypink-400 mt-2">Histrory</span>
        </div>
    <!-- card container -->
    <div
      class="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
    >
      <div
        v-if="words.length > 0"
        v-for="item in words"
        class="drop-shadow-md rounded-lg px-4 py-3 bg-gradient-to-l from-myyellow-200 to-mypink-200"
      >
        <p class="font-medium text-lg">{{ item.name }}</p>
        <p class="text-gray-700 truncate">{{ item.description }}</p>
        <div class="text-gray-700 truncate flex items-center mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gamepad-2 h-4 w-4 mr-1"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>
          <p>{{ item.type }}</p>
        </div>
        <div class="flex justify-between text-gray-600">
          
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 mr-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <p>{{ item.score }} / {{ item.max_score }}</p>
          </div>
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 mr-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <p>{{ new Date(item.date).getDate()+"/"+item.date.substring(5, 7)+"/"+new Date(item.date).getFullYear() }}</p>
          </div>
        </div>
        
      </div>
    </div>
      <div v-if="words.length == 0 && checkNodata" class="mt-24">
            <div class="flex flex-col justify-center items-center">
                <div class="">
                  <img src="../assets/img/Easter balloon _Monochromatic.svg" alt="">
                </div>
                <div class="font-medium text-lg text-gray-500">No Histrory</div>
            </div>
      </div>
  </div>
</template>

<script>
import { words } from "../data/word.js";
import axios from "../axios";
export default {
  data() {
    return {
      words: [],
      checkNodata: false
    };
  },
  async created() {  //ก่อนที่จะ render หน้าเว็บ
    await axios.post('/playHistory/showPlayHistoryByUsername', {
      username: this.$store.getters.userName.username
    })
    .then((res) => {
      this.words = res.data;
      this.checkNodata = true
    })
  },
};
</script>

<style></style>
