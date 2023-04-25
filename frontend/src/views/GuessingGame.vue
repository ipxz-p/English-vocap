<template>
  <div class="#app">
    <nav class="bg-mypurple-400">
        <labell for="" class="text-2xl logo">Seravabi</labell>
        <ul class="text-white">
          <li class="mx-2 px-2 bg-mypurple-200 text-mypurple-500 rounded-md ">
            <div class="flex fill-purple-500">
              <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-7 mx-2">
                <path fill="#fff" d="M22.869 9.363l-7.314-1.064-3.282-6.616a.505.505 0 00-.91 0l-3.282 6.616-7.314 1.064a.503.503 0 00-.278.858l5.297 5.167-1.254 7.316a.502.502 0 00.729.53l6.548-3.455 6.548 3.455a.503.503 0 00.729-.53l-1.254-7.316 5.297-5.167a.503.503 0 00-.277-.858z"/>
              </svg> -->
              <img
              src="../assets/img/star-half-stroke-solid (1).svg"
              class="w-8 group-hover:translate-x-1 transition icon mr-2"
              alt=""
              />
              <h1 class="">{{ score }} / {{ datagame.length }}</h1>
            </div>
          </li>
          <li class="mx-2 px-2 bg-mypurple-200 text-mypurple-500 rounded-md">
            <div class="flex">
              <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 mx-2">
                <path fill="#fff" d="M4 8h16v2H4zm0 4h16v2H4zm0 4h16v2H4z"/>
              </svg> -->
              <img
              src="../assets/img/list-solid.svg"
              class="w-6 group-hover:translate-x-1 transition icon mr-2"
              alt=""
              />
              <!-- 10 คือจำนวนข้อ -->
              <p>{{ datagame.length }}</p>
            </div>
          </li>
          <button @click="setPopup('confirmExitGuessingGame')">
          <li class="mx-2 px-2 bg-mypurple-200 text-mypurple-500 hover:text-white rounded-md hover:bg-mypurple-300 transition duration-300 ease-in-out">
            
            <div class="flex" >
              <img
              src="../assets/img/right-from-bracket-solid.svg"
              class="w-6 group-hover:translate-x-1 transition icon mr-2"
              alt=""
              />
              <p class="">Exit</p>
            </div>
          </li>
        </button>
        </ul>
      </nav>




<!-- bg-gradient-to-r from-purple-500 to-pink-500 -->
    <div class="ing bg-mypurple-200">
      <section class="title_and_index">
        <!-- TITLE QUESTION -->
        
          <div class="px-6 py-4">
            <div class="font-bold text-4xl text-black"
            
            
            >{{index+1}}.</div>
            <div ref="textToSpeak" class="font-bold text-4xl text-black">{{datagame[index].english}}</div>
          </div>
          <button @click="speak" class="">
              <img
                    src="../assets/img/volume-high-solid.svg"
                    class="w-10 group-hover:translate-x-1 transition flex items-center justify-center"
                    alt=""
              />
          </button>

        
      </section>
      <!-- ANS 4 ข้อ   -->
      <section class="choose_answer w-full text-myystone-300 absolute inset-x-0 bottom-0">
        <div class="choose">
          <button
            class="buttom-word mx-1 my-1
             h-40 max-w-3xl overflow-hidden shadow-lg bg-myans-100"
            @click="choicechcek(numArr[0])">
            <div class="px-6 py-6">
              <div class="imgorigami mr-2">
                <img src="../assets/img/origami (1).png" alt="">
              </div>
              <div class="font-bold text-3xl text-white">{{datagame[numArr[0]].thai}}</div>
            </div>
          </button>
          <button
            class="buttom-word mx-1 my-1
             h-40 max-w-3xl overflow-hidden shadow-lg bg-myans-200"
            @click="choicechcek(numArr[1])" >
            <div class="px-6 py-6">
              <div class="imgorigami mr-2">
                <img src="../assets/img/origami (2).png" alt="">
              </div>
              <div class="font-bold text-3xl text-white">{{datagame[numArr[1]].thai}}</div>
            </div>
          </button>
        </div>
        <div class="choose">
          <button
            class="buttom-word mx-1 my-1
             h-40 max-w-3xl overflow-hidden shadow-lg bg-myans-300"
            @click="choicechcek(numArr[2])" >
            <div class="px-6 py-6">
              <div class="imgorigami mr-2">
                <img src="../assets/img/origami (3).png" alt="">
              </div>
              <div class="font-bold text-3xl text-white">{{datagame[numArr[2]].thai}}</div>
            </div>
          </button>
          <button
            class="buttom-word mx-1 my-1
             h-40 max-w-3xl overflow-hidden shadow-lg bg-myans-400"
            @click="choicechcek(numArr[3])" >
            <div class="px-6 py-6">
              <div class="imgorigami mr-2">
                <img src="../assets/img/origami (4).png" alt="">
              </div>
              <div class="font-bold text-3xl text-white">{{datagame[numArr[3]].thai}}</div>
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
        <div class="text-center p-4 text-2xl font-medium w-full">
          Congratulations
        </div>
        <div class="text-center w-full mt-2">
          {{ score }} point
        </div>
        <div class="flex">
          <button
            @click="exit('GuessingGame')"
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
      type="confirmExitGuessingGame"
      v-if="
      this.$store.state.showPopup &&
        this.$store.state.typePopup === 'confirmExitGuessingGame'
      "
    >
      <!-- prevent event onclick when click here (@click.stop) -->
      <div @click.stop="">
        <div class="text-center p-4 text-2xl font-medium">
          Are you sure you want to exit?
        </div>
        <div class="flex">
          <button
            @click="setPopup('confirmExitGuessingGame')"
            class="w-full py-2 mt-4 rounded-xl"
            type="submit"
          >
            Cancel
          </button>
          <button
            @click="exit('confirmExitGuessingGame')"
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
import { datagame } from "../data/word.js";
import Popup from "../components/Popup.vue";
import axios from "../axios";
export default {
  name: "GuessingGame",
  data(){
    return{
      datagame: datagame,
      index: 0,
      score: 0,
      numArr: [-1, -1, -1, -1]
    };
  },
  components:{
    Popup
  },
  methods:{
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
          alert(err.response.data.message)
        })
      }
      
    },
    choicechcek(check){
      
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
  background-color: #26128a;
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
  height: calc(100vh - 80px);
  width: 100vw;
  justify-content: center;
}

.title_and_index {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 40px;
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





</style>
