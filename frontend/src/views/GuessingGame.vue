<template>
  <div class="#app">
      <div class="new-nav flex justify-end w-full">
      <div class="nav-score flex bg-icon p-2 pr-4">
        <div class="">
          <img src="../assets/img/star (1).png" alt="" class="img ml-1 mr-3 ">
        </div>
        <p class="flex items-center text-base px-8 text-white font-bold nav-bg2">{{ score }}</p>
      </div>

      <div class="nav-number flex bg-icon p-2 pr-4">
        <div class="">
          <img src="../assets/img/check-list.png" alt="" class="img ml-1 mr-3 ">
        </div>
        <p class="flex items-center text-base px-8 text-white font-bold nav-bg2">{{ datagame.length }}</p>
      </div>
      <button>
          <div @click="setPopups()" class="">
            <div class="flex bg-icon p-2 pr-4" >
              <div class="">
          <img src="../assets/img/logout (1).png" alt="" class="img ml-1 mr-3 ">
        </div>
              <p class="flex items-center text-base px-8 text-white font-bold nav-bg2">Exit</p>
            </div>
          </div>
        </button>
    </div>



<!-- bg-gradient-to-r from-purple-500 to-pink-500 -->
    <div class="ing">
      <section class="title_and_index">
        <!-- TITLE QUESTION -->
        
          <div class="px-6 py-4 text-white">
            <div class="font-bold text-4xl"
            
            
            >{{index+1}}.</div>
            <div ref="textToSpeak" class="font-bold text-4xl"> {{datagame[index].english}}</div>
          </div>
          <button @click="speak()" class="">
            <svg width="36" viewBox="0 0 107 89" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.6313 10.1469L23.2336 26.5409H4.42334C1.97944 26.5409 0 28.5203 0 30.9642V57.5042C0 59.9463 1.97944 61.9276 4.42334 61.9276H23.2336L39.6313 78.3216C42.4014 81.0917 47.1823 79.1454 47.1823 75.1939V13.2745C47.1823 9.31935 42.3977 7.38045 39.6313 10.1469ZM82.6335 0.732548C80.5748 -0.618413 77.8083 -0.0489082 76.4574 2.01347C75.1046 4.07217 75.6796 6.8386 77.7383 8.18956C89.9522 16.205 97.2415 29.6796 97.2415 44.2361C97.2415 58.7925 89.9522 72.2671 77.7383 80.2826C75.6796 81.6317 75.1046 84.4 76.4574 86.4568C77.7549 88.4307 80.4992 89.1403 82.6335 87.7377C97.3632 78.0691 106.16 61.8041 106.16 44.2342C106.16 26.6644 97.3632 10.4012 82.6335 0.732548ZM88.4667 44.2342C88.4667 32.5253 82.5579 21.76 72.6588 15.4383C70.5965 14.1224 67.8614 14.7343 66.5546 16.8132C65.2479 18.8922 65.858 21.6439 67.9203 22.9617C75.2465 27.6412 79.6201 35.5921 79.6201 44.2342C79.6201 52.8763 75.2465 60.8273 67.9203 65.5068C65.858 66.8227 65.2479 69.5744 66.5546 71.6552C67.7545 73.5646 70.4472 74.4456 72.6588 73.0301C82.5579 66.7085 88.4667 55.945 88.4667 44.2342ZM62.3377 30.0666C60.2035 28.9 57.5107 29.6685 56.3275 31.8083C55.1498 33.9481 55.9294 36.6371 58.0692 37.8185C60.4486 39.1253 61.9267 41.5857 61.9267 44.2342C61.9267 46.8845 60.4486 49.3432 58.071 50.6499C55.9312 51.8313 55.1516 54.5203 56.3294 56.6601C57.5144 58.8091 60.209 59.5721 62.3396 58.4018C67.5425 55.5358 70.7752 50.108 70.7752 44.2324C70.7752 38.3567 67.5425 32.9308 62.3377 30.0666Z" fill="white"/>
          </svg>
          </button>

        
      </section>
      <!-- ANS 4 ข้อ   -->
      <section class="choose_answer w-full text-myystone-300 absolute inset-x-0 bottom-0">
        <div class="choose">
          <button
            class="buttom-word buttom-word1 mx-1 my-1
            h-28 md:h-40 max-w-3xl overflow-hidden shadow-lg bg-myans-100"
            @click="choicechcek(numArr[0])">
            <div class="px-6 py-6">
              <div class="font-bold text-xl md:text-2xl text-white">{{datagame[numArr[0]]?.thai}}</div>
            </div>
          </button>
          <button
            class="buttom-word buttom-word2 mx-1 my-1
            h-28 md:h-40 max-w-3xl overflow-hidden shadow-lg bg-myans-200"
            @click="choicechcek(numArr[1])" >
            <div class="px-6 py-6">
              <div class="font-bold text-xl md:text-2xl text-white">{{datagame[numArr[1]]?.thai}}</div>
            </div>
          </button>
        </div>
        <div class="choose">
          <button
            class="buttom-word buttom-word3 mx-1 my-1
            h-28 md:h-40 max-w-3xl overflow-hidden shadow-lg bg-myans-300"
            @click="choicechcek(numArr[2])" >
            <div class="px-6 py-6">
              <div class="font-bold text-xl md:text-2xl text-white">{{datagame[numArr[2]]?.thai}}</div>
            </div>
          </button>
          <button
            class="buttom-word buttom-word4 mx-1 my-1
            h-28 md:h-40 max-w-3xl overflow-hidden shadow-lg bg-myans-400"
            @click="choicechcek(numArr[3])" >
            <div class="px-6 py-6">
              <div class="font-bold text-xl md:text-2xl text-white">{{datagame[numArr[3]]?.thai}}</div>
            </div>
          </button>
        </div>
      </section>
    </div>
  </div>
  <!-- Popup exit game -->
  <Popup
      type="GuessingGame"
      v-if="
      this.$store.state.showPopup &&
        this.$store.state.typePopup === 'GuessingGame'
      "
    >
      <!-- prevent event onclick when click here (@click.stop) -->
      <div class="w-full" @click.stop="">
        <div class="text-center p-4 text-2xl font-medium w-full text-cong">
          Congratulations
        </div>
        <div class="in-popup mb-4 w-full">
          <div class="text-center p-4 text-lg text-2xl w-full point">
          {{ score }} / {{ datagame.length }} point
          </div>
        <div class="flex">
          <button
            @click="setPopup('GuessingGame')"
            class="w-full py-2 mt-4 rounded m-1 text-lg bg-red-600 bt-popup1 mx-1"
            type="submit"
          >
            Cancel
          </button>
          <button
            @click="exit('GuessingGame')"
            class="w-full bg-red-600 text-white py-2 mt-4 flex mx-1 items-center justify-center rounded m-1 text-lg bt-popup2"
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
      type="confirmExitGuessingGame"
      v-if="
      this.$store.state.showPopup &&
        this.$store.state.typePopup === 'confirmExitGuessingGame' && this
      "
    >
      <!-- prevent event onclick when click here (@click.stop) -->
      <div @click.stop="" class="w-full">
        <div class="text-center text-2xl font-medium font-bold py-2 w-full">
          WAIT!
        </div>


        <div class=" mb-4 w-full in-popup">
          <div class="text-center text-xl py-6 w-full">
            {{ datagame.length - count }} questions remaining!
        </div>
        <div class="flex">
          <button
          @click="setPopup('confirmExitGuessingGame')"
            class="w-full bg-red-600 text-white py-2 mt-4 mx-1 flex items-center justify-center rounded font-bold text-lg bt-popup1"
            type="submit"
          >
          continue
          </button>
          <button
            @click="exit('confirmExitGuessingGame')"
            class="w-full bg-red-600 py-2 mt-4 rounded mx-1 font-bold text-base bt-popup2"
            type="submit"
          >
          <p v-if="this.$store.getters.userName.username">save and </p> exit
          </button>
        </div>
        </div>
      </div>
  </Popup>
</template>

<script>
import { datagame } from "../data/word.js";
import Popup from "../components/PupupGame.vue";
import axios from "../axios";
export default {
  name: "GuessingGame",
  data(){
    return{
      score_knew: 0,
      score_dontknew: 0,
      datagame: datagame,
      index: 0,
      score: 0,
      numArr: [-1, -1, -1, -1],
      count: 0,
    };
  },
  components:{
    Popup
  },
  methods:{
    setPopups(){
      if(this.count == this.datagame.length){ //palmmmmmmmmmmmm
          this.setPopup('GuessingGame')
      }
      else{
        this.setPopup('confirmExitGuessingGame')
      }
    },
    setPopup(type) {
      (this.title = ""),
        (this.description = ""),
        this.$store.commit("setshowPopup", this.$store.state.showPopup);
      this.$store.commit("settypePopup", type);
    },
    changeArr(){
      let newValue = 0
      let indexNumber = Math.floor(Math.random() * 4);
      this.numArr[indexNumber] = this.index;
      for (let i=0; i<4; i++){
        if(i !== indexNumber){
          newValue = Math.floor(Math.random() * this.datagame.length)
          while(this.numArr.includes(newValue)){
            newValue = Math.floor(Math.random() * this.datagame.length)
          }
          this.numArr[i] = newValue
        }
      }
      
    },
    async exit(type){
      if(this.$store.getters.userName.username){
        await axios.post('/playHistory/addPlayHistory', {
          score: this.score,
          max_score: this.datagame.length,
          type: 'GuessingGame',
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
      else{
        this.setPopup(type)
        this.$router.push({ name: "Home" })
      }
      
    },
    choicechcek(check){
      this.count++
      if(check == this.index){
        this.score++;
      }
      if(this.index+1 < this.datagame.length){
        this.index++;
        this.changeArr()
      }else{
        this.setPopup('GuessingGame');
      }
    },
    speak() {
      let utterance = new SpeechSynthesisUtterance(this.$refs.textToSpeak.innerText);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    },
  },
  async created(){
    await axios.post("/word/getAllWord", {
      wordset_id: this.$route.params.id
    })
    .then((res) => {
      this.datagame = res.data
      this.changeArr()
    })
    
  }
};
</script>

<style scoped>
/* bodybodybodybodybodybodybodybodybody */
body {
  color: #000;
  margin: 0;
  padding: 0;
}

/* navvvvvvvvvvvvvvvvv */
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
  display: inline-block;
}
.flex {
    display: flex !important;
}
nav {
  height: 80px;
  width: 100%;
  background-color: #6A5BE2;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
labell.logo {
  line-height: 80px;
  padding: 0 50px;
  color: #fff;
}
nav ul {
  margin-right: 30px;
}
nav ul li {
  display: inline-block;
  line-height: 50px;
}
nav ul li a {
  color: white;
}

.ing {
  height: calc(100vh); /*ค่อยมาแก้*/
  width: 100vw;
  justify-content: center;
  background-image: url(../assets/img/bg2.png);
}

.title_and_index {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 120px;
  padding: 10px;
}

.choose_answer {
  display: flex;
  justify-content: center;
  flex-direction: column;
}


.card-title {
  border-radius: 0px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.buttom-word{
  width: calc(50% - 0.50rem);
}

.imgorigami img{
  width: 30px;
}

/* nav icons */
.img{
  width: 37px;
}

.bg-icon{
  outline: 2px solid rgba(31, 29, 29, 0.2);
  border: 2px solid #0000;
  border-radius: 40px;
  background:
    linear-gradient(#8901FF, #9202FE) padding-box,
    linear-gradient(#C102FF,#6700FF) border-box;
    margin: 10px;
    padding: 8px;
}

.nav-bg2{
  border: 5px solid #0000;
  border-radius: 20px;
  background:
    linear-gradient(rgb(57, 56, 56), rgb(17, 16, 16)) padding-box,
    linear-gradient(#6700FF,#C102FF) border-box;
}

.new-nav{
  position: absolute;
  
}


/* POP UP */
/* POP UP */
/* POP UP */
/* POP UP */
.bt-popup1{
  border: 4px solid #0000;
  border-radius: 30px;
  background:
    linear-gradient(#2C6CD0, #419EEE) padding-box,
    linear-gradient(#419EEE,#3174df) border-box;
}
.bt-popup2{
  border: 4px solid #0000;
  border-radius: 30px;
  background:
    linear-gradient(#BF3135,#EE4A52) padding-box,
    linear-gradient(#EE4A52,#D84A50) border-box;
}

.in-popup{
  background-image: linear-gradient(#4F2B87, #7B40AC);
  overflow: hidden;
  border-style: solid;
}



/* ANSWER */
.buttom-word1{
  outline: 2px solid rgba(31, 29, 29, 0.2);
  border: 14px solid #0000;
  border-radius: 4px;
  background:
    linear-gradient(#623BE3, #9c54fa) padding-box,
    linear-gradient(#9352e9,#7b57f4) border-box;
    margin: 10px;
    padding: 8px;
}
.buttom-word2{
  outline: 2px solid rgba(31, 29, 29, 0.2);
  border: 14px solid #0000;
  border-radius: 4px;
  background:
    linear-gradient(#E55ABF, #F36FE0) padding-box,
    linear-gradient(#F36FE0,#f668d0) border-box;
    margin: 10px;
    padding: 8px;
}
.buttom-word3{
  outline: 2px solid rgba(31, 29, 29, 0.2);
  border: 14px solid #0000;
  border-radius: 4px;
  background:
    linear-gradient(#D48C2F, #e7c724) padding-box,
    linear-gradient(#ebcc36,#cf8e38) border-box;
    margin: 10px;
    padding: 8px;
}
.buttom-word4{
  outline: 2px solid rgba(31, 29, 29, 0.2);
  border: 14px solid #0000;
  border-radius: 4px;
  background:
    linear-gradient(#3480D9, #4FB8F9) padding-box,
    linear-gradient(#3caaef,#3480D9) border-box;
    margin: 10px;
    padding: 8px;
}
.point, .text-cong{
  padding: 1rem;
}
</style>
