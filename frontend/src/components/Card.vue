<template>
  <div class="#appp body">
    <div class="new-nav flex justify-end w-full ">
      <div class="nav-score flex bg-icon  pr-4 py-2">
        <div class="pl-2">
          <img src="../assets/img/star (1).png" alt="" class="img ml-1 mr-3">
        </div>
        <p class="flex items-center text-base px-8 text-white font-bold nav-bg2">{{ score_knew }}</p>
      </div>

      <div class="nav-number flex bg-icon  pr-4 py-2 ">
        <div class="pl-2">
          <img src="../assets/img/check-list.png" alt="" class="img ml-1 mr-3">
        </div>
        <p class="flex items-center text-base px-8 text-white font-bold nav-bg2">{{ datagame.length }}</p>
      </div>
      <button>
          <div @click="setPopups()" class="">
            <div class="flex bg-icon  pr-4 py-2" >
              <div class="pl-2">
          <img src="../assets/img/logout (1).png" alt="" class="img ml-1 mr-3">
        </div>
              <p class="flex items-center text-base px-8 text-white font-bold nav-bg2 ">Exit</p>
            </div>
          </div>
        </button>
    </div>
    <!-- All card -->
    <div class="card-ing2">
      <swiper
        
        :breakpoints="{ 720:{ slidesPerView:2 }, 1100:{ slidesPerView:3, }, 1600:{ slidesPerView:4, } }"
        :spaceBetween="30"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <!-- card -->
        <!-- <swiper-slide v-for="index in 10" :key="index" > -->
          <swiper-slide v-for="(items, index) in datagame" :key="index">
          <label >
            <input type="checkbox" class="ing-input" />
            <div class="flip-card ">
              <div class="front text-white relative">
                <h1 class="">
                  <div class="px-5 in-index">{{ index+1 }}</div>
                </h1>
                <div class="in-cardf">
                  <!-- ลำโพงง -->
                  <button  @click="speak(items.english)">
                    
          <svg width="36" viewBox="0 0 107 89" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.6313 10.1469L23.2336 26.5409H4.42334C1.97944 26.5409 0 28.5203 0 30.9642V57.5042C0 59.9463 1.97944 61.9276 4.42334 61.9276H23.2336L39.6313 78.3216C42.4014 81.0917 47.1823 79.1454 47.1823 75.1939V13.2745C47.1823 9.31935 42.3977 7.38045 39.6313 10.1469ZM82.6335 0.732548C80.5748 -0.618413 77.8083 -0.0489082 76.4574 2.01347C75.1046 4.07217 75.6796 6.8386 77.7383 8.18956C89.9522 16.205 97.2415 29.6796 97.2415 44.2361C97.2415 58.7925 89.9522 72.2671 77.7383 80.2826C75.6796 81.6317 75.1046 84.4 76.4574 86.4568C77.7549 88.4307 80.4992 89.1403 82.6335 87.7377C97.3632 78.0691 106.16 61.8041 106.16 44.2342C106.16 26.6644 97.3632 10.4012 82.6335 0.732548ZM88.4667 44.2342C88.4667 32.5253 82.5579 21.76 72.6588 15.4383C70.5965 14.1224 67.8614 14.7343 66.5546 16.8132C65.2479 18.8922 65.858 21.6439 67.9203 22.9617C75.2465 27.6412 79.6201 35.5921 79.6201 44.2342C79.6201 52.8763 75.2465 60.8273 67.9203 65.5068C65.858 66.8227 65.2479 69.5744 66.5546 71.6552C67.7545 73.5646 70.4472 74.4456 72.6588 73.0301C82.5579 66.7085 88.4667 55.945 88.4667 44.2342ZM62.3377 30.0666C60.2035 28.9 57.5107 29.6685 56.3275 31.8083C55.1498 33.9481 55.9294 36.6371 58.0692 37.8185C60.4486 39.1253 61.9267 41.5857 61.9267 44.2342C61.9267 46.8845 60.4486 49.3432 58.071 50.6499C55.9312 51.8313 55.1516 54.5203 56.3294 56.6601C57.5144 58.8091 60.209 59.5721 62.3396 58.4018C67.5425 55.5358 70.7752 50.108 70.7752 44.2324C70.7752 38.3567 67.5425 32.9308 62.3377 30.0666Z" fill="white"/>
          </svg>


                </button>
                <h2>{{items.english}}</h2>
                <b class="">
                  <span class="px-3 py-2 in-type ">{{items.type}}</span>
                </b>
                <p class="click inset-x-0 bottom-0 ">Tap to see definition</p>
                </div>
                
                
              </div>

              <div class="back front text-white relative">
                <h1 class="">
                  <div class="px-5 in-index">{{ index+1 }}</div>
                </h1>
                <div class="in-cardb">
                  <h2>{{items.thai}}</h2>
                
                <b></b>
                <div class="back-buttom">Tap to see definition</div>
                
                  <button :id="'card-r-' + index" class="font-bold button back-button-r back-button-r-color" @click="score_count2(index)"
                  >
                  didn't know it
                  </button>
                  <button :id="'card-l-' + index" class="font-bold button back-button-l back-button-l-color" @click="score_count1(index)"
                    >
                    knew it
                  </button>
                
                </div>
              </div>
            </div>
          </label>
        </swiper-slide>
      </swiper>
    </div>
    <!-- <p>score_knew: {{ score_knew }} score_dontknew: {{ score_dontknew }}</p> -->
    <!-- <div class="ocean">
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
</div> -->
<!-- Popup exit game -->
<Popup
      type="flashcardGame"
      v-if="
      this.$store.state.showPopup &&
        this.$store.state.typePopup === 'flashcardGame'
      "
    >
      <!-- prevent event onclick when click here (@click.stop) -->
      <div @click.stop="">
        <div class="text-center py-4 text-2xl font-medium">
          Congratulations
        </div>
        <div class="in-popup p-10">
          <div class="text-center m-20 text-lg text-2xl my-6">
          {{ score_knew }} / {{ datagame.length }} point
          </div>
        <div class="flex ">
          <button
            @click="setPopup('flashcardGame')"
            class="mx-1 w-full py-2 rounded m-1 text-lg bg-red-600 bt-popup1"
            type="submit"
          >
            Cancel
          </button>
          <button
            @click="exit('flashcardGame')"
            class="mx-1 w-full bg-red-600 text-white py-2flex items-center justify-center rounded m-1 text-lg bt-popup2"
            type="submit"
          >
          <p><span v-if="this.$store.getters.userName.username">save and </span> exit</p>
          </button>
        </div>
        </div>
        
      </div>
  </Popup>
  <!-- Popup confirm exit game -->
  <Popup
      type="confirmExitFlashcard"
      v-if="
      this.$store.state.showPopup &&
        this.$store.state.typePopup === 'confirmExitFlashcard' && this
      "
    >
      <!-- prevent event onclick when click here (@click.stop) -->
      <div @click.stop="" >
        <div class="text-center text-2xl font-medium font-bold py-2">
          WAIT!
        </div>


        <div class="in-popup mb-4">
          <div class="text-center text-xl py-6">
            {{ datagame.length - (score_knew + score_dontknew) }} questions remaining!
        </div>
        <div class="flex">
          <button
          @click="setPopup('confirmExitFlashcard')"
            class="mx-1 w-full bg-red-600 text-white py-2 mt-4 flex items-center justify-center rounded m-1 font-bold text-lg bt-popup1"
            type="submit"
          >
          continue
          </button>
          <button
            @click="exit('confirmExitFlashcard')"
            class="mx-1 flex justify-center items-center w-full bg-red-600 py-2 mt-4 text-lg rounded m-1 font-bold bt-popup2 "
            type="submit"
          >
          <p><span v-if="this.$store.getters.userName.username">save and </span> exit</p>
          </button>
        </div>
        </div>
        


      </div>
  </Popup>
  </div>
  
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import Popup from "../components/PupupGame.vue";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";
import { datagame } from "../data/word.js";
import axios from "../axios";
export default {
  data() {
    return {
      score_knew: 0,
      score_dontknew: 0,
      indexcheck: [],
      indexcheck2: [],
      datagame: [],
      isClicked: true,
      textToSpeak: '',
      id: this.$route.params.id,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    Popup
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  methods: {
    setPopups(){
      if(this.score_knew + this.score_dontknew == this.datagame.length){
          this.setPopup('flashcardGame')
      }
      else{
        this.setPopup('confirmExitFlashcard')
      }
    },
    setPopup(type) {
      (this.title = ""),
        (this.description = ""),
        this.$store.commit("setshowPopup", this.$store.state.showPopup);
      this.$store.commit("settypePopup", type);
    },
    score_count1(index) {
      if (
        !this.indexcheck.includes(index) &&
        !this.indexcheck2.includes(index)
      ) {
        this.indexcheck.push(index);
        this.score_knew += 1;
        document.getElementById(`card-r-${index}`).classList.remove('back-button-r-color');
        document.getElementById(`card-r-${index}`).classList.add('bg-gray-300');
        // setTimeout(function() {
        //     document.getElementById(`card-l-${index}`).classList.add('corsor');
        //     document.getElementById(`card-r-${index}`).classList.add('corsor');
        // }, 500);
        document.getElementById(`card-l-${index}`).classList.add('corsor');
        document.getElementById(`card-r-${index}`).classList.add('corsor');
        if(this.score_knew + this.score_dontknew == this.datagame.length){
          this.setPopup('flashcardGame')
        }
      }
    },
    score_count2(index) {
      if (
        !this.indexcheck.includes(index) &&
        !this.indexcheck2.includes(index)
      ) {
        this.indexcheck2.push(index);
        this.score_dontknew += 1;
        document.getElementById(`card-l-${index}`).classList.remove('back-button-l-color');
        document.getElementById(`card-l-${index}`).classList.add('bg-gray-300');
        // setTimeout(function() {
        //     document.getElementById(`card-l-${index}`).classList.add('corsor');
        //     document.getElementById(`card-r-${index}`).classList.add('corsor');
        // }, 500);
        document.getElementById(`card-l-${index}`).classList.add('corsor');
        document.getElementById(`card-r-${index}`).classList.add('corsor');
        if(this.score_knew + this.score_dontknew == this.datagame.length){
          this.setPopup('flashcardGame')
        }
      }
    },
    speak(word) {
      let utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    },
    async exit(type){
      if(this.$store.getters.userName.username){
        await axios.post('/playHistory/addPlayHistory', {
          score: this.score_knew,
          max_score: this.datagame.length,
          type: 'Flashcard',
          wordset_id: this.$route.params.id,
          username: this.$store.getters.userName.username
        })
        .then(()=> {
          this.setPopup(type)
          this.$router.push({ name: "Home" })
        })
        .catch((err) => {
          this.$swal.fire({
            title: 'Error!',
            text: err.response.data.message,
            icon: 'error',
            confirmButtonText: 'ok'
            })
        })
      }
      
    }
  },
  async created(){ //ก่อนที่จะ render หน้าเว็บ
    await axios.post("/word/getAllWord", {
      wordset_id: this.$route.params.id
    })
    .then((res) => {
      this.datagame = res.data //res กำหนดค่าตัวแปร
    })
    .catch((err) => {
      this.$swal.fire({
            title: 'Error!',
            text: err.response.data.message,
            icon: 'error',
            confirmButtonText: 'ok'
            })
    })
  }
};
</script>
<style scoped>
@import "./style.css";

</style>
