<template>
  <div class="#appp">
    <div class="card-ing1">
      <nav class="bg-mypurple-400">
        <labell for="" class="text-2xl logo">Seravabi</labell>
        <ul class="text-white">
          <li class="bg-mypurple-200 pr-2 text-mypurple-500 rounded-md ">
            <div class="flex fill-purple-500">
              <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-7 mx-2">
                <path fill="#fff" d="M22.869 9.363l-7.314-1.064-3.282-6.616a.505.505 0 00-.91 0l-3.282 6.616-7.314 1.064a.503.503 0 00-.278.858l5.297 5.167-1.254 7.316a.502.502 0 00.729.53l6.548-3.455 6.548 3.455a.503.503 0 00.729-.53l-1.254-7.316 5.297-5.167a.503.503 0 00-.277-.858z"/>
              </svg> -->
              <img
              src="../assets/img/star-half-stroke-solid (1).svg"
              class="w-8 group-hover:translate-x-1 transition icon m-2"
              alt=""
              />
              <h1 class="">{{ score_knew }} / {{ datagame.length }}</h1>
            </div>
          </li>
          <li class="bg-mypurple-200 pr-2 text-mypurple-500 rounded-md">
            <div class="flex">
              <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 mx-2">
                <path fill="#fff" d="M4 8h16v2H4zm0 4h16v2H4zm0 4h16v2H4z"/>
              </svg> -->
              <img
              src="../assets/img/list-solid.svg"
              class="w-6 group-hover:translate-x-1 transition icon m-2"
              alt=""
              />
              <!-- 10 คือจำนวนข้อ -->
              <p>{{ datagame.length }}</p>
            </div>
          </li>
          <button>
          <li @click="setPopup('confirmExitFlashcard')" class="bg-mypurple-200 pr-2 text-mypurple-500 hover:text-white rounded-md hover:bg-mypurple-300 transition duration-300 ease-in-out">
            
            <div class="flex" >
              <img
              src="../assets/img/right-from-bracket-solid.svg"
              class="w-6 group-hover:translate-x-1 transition icon m-2"
              alt=""
              />
              <p class="">Exit</p>
            </div>
          </li>
        </button>
        </ul>
      </nav>
    </div>
    
    <!-- All card -->
    <div class="card-ing2">
      <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <!-- card -->
        <!-- <swiper-slide v-for="index in 10" :key="index" > -->
          <swiper-slide v-for="(items, index) in datagame" :key="index">
          <label >
            <input type="checkbox" />
            <div class="flip-card ">
              <div class="front text-gray-700 relative">
                <h1 class="">
                  <div class="bg-myyellow-200 px-5 in-index">{{ index+1 }}</div>
                </h1>
                <!-- ลำโพงง -->
                <button  @click="speak(items.english)">
                  <img
                    src="../assets/img/volume-high-solid.svg"
                    class="w-8 group-hover:translate-x-1 transition"
                    alt=""
                  />
                </button>
                <h2>{{items.english}}</h2>
                <b class="">
                  <span class="bg-myyellow-200 px-3 py-2 in-type ">{{items.type}}</span>
                </b>
                <p class="click inset-x-0 bottom-0 ">Tap to see definition</p>
                
              </div>

              <div class="back front text-gray-700 relative">
                <h1 class="">
                  <div class="bg-myyellow-200 px-5 in-index">{{ index+1 }}</div>
                </h1>
                <h2>{{items.	thai}}</h2>
                
                <b></b>
                <div class="click">
                  <div class="back-buttom">Tap to see definition</div>
                  <button :id="'card-r-' + index" class="button back-button-r back-button-r-color" @click="score_count2(index)"
                  >
                  didn't know it
                  </button>
                  <button :id="'card-l-' + index" class="button back-button-l back-button-l-color" @click="score_count1(index)"
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
  </div>
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
        <div class="text-center p-4 text-2xl font-medium">
          Congratulations
        </div>
        <div class="text-center p-4 text-lg">
          {{ score_knew }} point
        </div>
        <div class="flex">
          <button
            @click="setPopup('flashcardGame')"
            class="w-full py-2 mt-4 rounded-xl"
            type="submit"
          >
            Cancel
          </button>
          <button
            @click="exit('flashcardGame')"
            class="w-full bg-red-600 text-white py-2 mt-4 flex items-center justify-center rounded-xl"
            type="submit"
          >
            <p>Exit</p>
          </button>
        </div>
      </div>
  </Popup>
  <!-- Popup confirm exit game -->
  <Popup
      type="confirmExitFlashcard"
      v-if="
      this.$store.state.showPopup &&
        this.$store.state.typePopup === 'confirmExitFlashcard'
      "
    >
      <!-- prevent event onclick when click here (@click.stop) -->
      <div @click.stop="">
        <div class="text-center p-4 text-2xl font-medium">
          Are you sure you want to exit?
        </div>
        <div class="flex">
          <button
            @click="setPopup('confirmExitFlashcard')"
            class="w-full py-2 mt-4 rounded-xl"
            type="submit"
          >
            Cancel
          </button>
          <button
            @click="exit('confirmExitFlashcard')"
            class="w-full bg-red-600 text-white py-2 mt-4 flex items-center justify-center rounded-xl"
            type="submit"
          >
            <p>Exit</p>
          </button>
        </div>
      </div>
  </Popup>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import Popup from "../components/Popup.vue";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

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
      id: this.$route.params.id
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
          alert(err.response.data.message)
        })
      }
      
    }
  },
  async created(){
    await axios.post("/word/getAllWord", {
      wordset_id: this.$route.params.id
    })
    .then((res) => {
      this.datagame = res.data
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
  }
};
</script>
