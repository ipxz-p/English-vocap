<template>
  <div id="app" class="">
    <section class="sec1 flex min-h-full">
      <div class="sec1-left">
        <h1
          class="text-5xl font-bold mx-9 my-5 animate-fade-up animate-once animate-delay-1000 animate-ease-linear text-mystone-700"
        >
          Do you <span class="text-mypurple-400 text-6xl">speak english</span>
          <span class="text-6xl"> ?</span>
        </h1>
        <p
          class="text-base mx-9 animate-fade-left animate-ease-in-out text-mystone-700"
        >
          If you want to speak English <br />
          Vocabulary memorization is one of the parts that you will be able to
          speak English. <br />
          You can use flash cards and guessing games to memorize words.
        </p>
        <div
          class="mx-9 my-6 animate-fade-down animate-once animate-delay-1000 animate-ease-in-out animate-alternate"
        >
          <!-- <a href="http://127.0.0.1:5173
            /play" class="text-center bg-mypink-300 text-white py-3 px-7
                    rounded text-xl hover:bg-mypink-400 transition-all">Let Play</a> -->
          <a
            href="http://127.0.0.1:5173/chooseword"
            class="inline-flex items-center gap-2 py-4 px-6 bg-mypink-300 text-white text-xl rounded-2xl hover:bg-opacity-80 h4 group"
          >
            Let Play
            <img
              src="../assets/img/arrow-right-white.svg"
              class="w-6 group-hover:translate-x-1 transition"
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="sec1-right">
        <div class="cartoon1 animate-fade-left animate-ease-in-out">
          <img src="../assets/img/cartoon1.png" alt="" class="cartoon1" />
        </div>
      </div>
    </section>

    <!-- SECTION 2 TITLE DEMO GAME -->
    <section class="sec2 flex bg-gradient-to-b from-mystone-200">
      <div class="sec2-top p-5 pl-10">
        <div class="w-16 drop-shadow mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#FF8298" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M274.9 34.3c-28.1-28.1-73.7-28.1-101.8 0L34.3 173.1c-28.1 28.1-28.1 73.7 0 101.8L173.1 413.7c28.1 28.1 73.7 28.1 101.8 0L413.7 274.9c28.1-28.1 28.1-73.7 0-101.8L274.9 34.3zM200 224a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM96 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 376a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM352 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 120a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm96 328c0 35.3 28.7 64 64 64H576c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H461.7c11.6 36 3.1 77-25.4 105.5L320 413.8V448zM480 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
        </div>
        <h2 class="text-xl font-bold text-gray-900">Game Mode</h2>
        <h2 class="text-4xl font-bold my-3 text-gray-900">
          Fun and Effective Ways to<br />
          Learn<span class="text-mypurple-400"> English Vocabulary</span>
        </h2>
        <p class="text-l">
          Don't give up just yet. Today we're going to look at 2 fun ways <br />
          to learn vocabulary words… effectively!
        </p>
        <div class="flex items-center justify-center">
          <button v-on:click="showFlashCard" >
            <div v-bind:class="{ 'is-showtrue': showCard }"
            class="my-4 block min-w-lg max-w-lg p-6 border-2 border-mystone-500 rounded-lg shadow  mr-5 bg-mystone-100"
          >
            <h5 v-bind:class="{ 'is-showtrue': showCard }"
              class="mb-2 text-2xl font-bold tracking-tight text-mystone-600 dark:text-white"
            >
              Flash Card Game
            </h5>
            <p class="font-normal text-mystone-600" v-bind:class="{ 'is-showtrue': showCard }">
              Flash cards are powerful mnemonic tools that can help anyone
              quickly learn new material.
            </p>
          </div>
          </button>
          
          <button v-on:click="showGuessing">
            <div v-bind:class="{ 'is-showtrue': showGuess }"
            class="my-4 block max-w-lg min-w-lg p-6   border-2 border-mystone-500 rounded-lg shadow bg-mystone-100"
          >
            <h5 v-bind:class="{ 'is-showtrue': showGuess }"
              class="mb-2 text-2xl font-bold tracking-tight text-mystone-600 dark:text-white"
            >
              Guessing Game
            </h5>
            <p class="font-normal text-mystone-600" v-bind:class="{ 'is-showtrue': showGuess }">
              Guessing games make memorizing words fun and useful that can help
              anyone quickly learn new material.
            </p>
          </div>
          </button>
          
        </div>
      </div>
    </section>


    <!-- SECTION DEMO FLASHCARD DEMO GUESSING-->
      <section class=" bg-svg  py-8">
          <!-- DEMO FLASHCARD -->
      <div v-if="showCard" class="h-96 relative flex">
<!-- TEST -->











<!-- All card -->
<div class="card-ing2 p-5">
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
            <input type="checkbox" class="ing-input" />
            <div class="flip-card ">
              <div class="front text-white relative">
                <h1 class="">
                  <div class="px-5 in-index">{{index + 1}}</div>
                </h1>
                <div class="in-cardf">
                  <!-- ลำโพงง -->
                  <button  @click="speak(items.question)" class="z-40">
                    
          <svg width="36" viewBox="0 0 107 89" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.6313 10.1469L23.2336 26.5409H4.42334C1.97944 26.5409 0 28.5203 0 30.9642V57.5042C0 59.9463 1.97944 61.9276 4.42334 61.9276H23.2336L39.6313 78.3216C42.4014 81.0917 47.1823 79.1454 47.1823 75.1939V13.2745C47.1823 9.31935 42.3977 7.38045 39.6313 10.1469ZM82.6335 0.732548C80.5748 -0.618413 77.8083 -0.0489082 76.4574 2.01347C75.1046 4.07217 75.6796 6.8386 77.7383 8.18956C89.9522 16.205 97.2415 29.6796 97.2415 44.2361C97.2415 58.7925 89.9522 72.2671 77.7383 80.2826C75.6796 81.6317 75.1046 84.4 76.4574 86.4568C77.7549 88.4307 80.4992 89.1403 82.6335 87.7377C97.3632 78.0691 106.16 61.8041 106.16 44.2342C106.16 26.6644 97.3632 10.4012 82.6335 0.732548ZM88.4667 44.2342C88.4667 32.5253 82.5579 21.76 72.6588 15.4383C70.5965 14.1224 67.8614 14.7343 66.5546 16.8132C65.2479 18.8922 65.858 21.6439 67.9203 22.9617C75.2465 27.6412 79.6201 35.5921 79.6201 44.2342C79.6201 52.8763 75.2465 60.8273 67.9203 65.5068C65.858 66.8227 65.2479 69.5744 66.5546 71.6552C67.7545 73.5646 70.4472 74.4456 72.6588 73.0301C82.5579 66.7085 88.4667 55.945 88.4667 44.2342ZM62.3377 30.0666C60.2035 28.9 57.5107 29.6685 56.3275 31.8083C55.1498 33.9481 55.9294 36.6371 58.0692 37.8185C60.4486 39.1253 61.9267 41.5857 61.9267 44.2342C61.9267 46.8845 60.4486 49.3432 58.071 50.6499C55.9312 51.8313 55.1516 54.5203 56.3294 56.6601C57.5144 58.8091 60.209 59.5721 62.3396 58.4018C67.5425 55.5358 70.7752 50.108 70.7752 44.2324C70.7752 38.3567 67.5425 32.9308 62.3377 30.0666Z" fill="white"/>
          </svg>


                </button>
              <h2>{{items.question}}</h2>
                <b class="">
                  <span class="px-3 py-2 in-type ">{{items.type}}</span>
                </b>
                <p class="click inset-x-0 bottom-0 ">Tap to see definition</p>
                </div>
                
                
              </div>

              <div class="back front text-white relative">
                <h1 class="">
                  <div class="px-5 in-index">{{index + 1}}</div>
                </h1>
                <div class="in-cardb">
                  <h2>{{items.answer}}</h2>
                
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










        <!-- bg -->
        <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 inset-y-32 right-0 absolute blur-2xl z-0"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 left-2/4 top-32 absolute blur-2xl z-0"></div>
        <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 inset-y-32 right-0 absolute blur-2xl z-0"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 left-2/4 top-32 absolute blur-2xl z-0"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45  bg-gradient-to-b from-mypink-200 via-mypink-200 to-mypurple-300 left-3/4 top-32 absolute blur-2xl z-0"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 inset-y-32 right-0 absolute blur-2xl z-0"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45  bg-gradient-to-b from-mypink-200 via-mypink-200 to-mypurple-300 inset-y-32 right-64 absolute blur-2xl z-0"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 left-1/4 top-32 absolute blur-2xl z-0"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45  bg-gradient-to-b from-mypink-200 via-mypink-200 to-mypurple-300 left-100% top-32 absolute blur-2xl z-0"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 left-1/4 top-10 absolute blur-2xl z-10"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45  bg-gradient-to-b from-mypink-200 via-mypink-200 to-mypurple-300 left-100% top-10 absolute blur-2xl z-10"></div>
    
        <!-- bg -->
      </div>

      <!-- DEMO GUESSING -->
      <div v-if="showGuess" class="h-96 relative">
        

<!-- test -->
<section class="choose_answer w-full text-myystone-300 absolute inset-x-0 bottom-0 z-20">
  <div class="flex items-center justify-center h-28 font-bold text-3xl text-mystone-700">{{index+1}}.<span ref="textToSpeak2">{{ datagame[index].question }}</span></div>
          <button @click="speak()" class="z-30 mb-13 w-full flex items-center justify-center">
            <svg width="36" viewBox="0 0 107 89" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.6313 10.1469L23.2336 26.5409H4.42334C1.97944 26.5409 0 28.5203 0 30.9642V57.5042C0 59.9463 1.97944 61.9276 4.42334 61.9276H23.2336L39.6313 78.3216C42.4014 81.0917 47.1823 79.1454 47.1823 75.1939V13.2745C47.1823 9.31935 42.3977 7.38045 39.6313 10.1469ZM82.6335 0.732548C80.5748 -0.618413 77.8083 -0.0489082 76.4574 2.01347C75.1046 4.07217 75.6796 6.8386 77.7383 8.18956C89.9522 16.205 97.2415 29.6796 97.2415 44.2361C97.2415
            58.7925 89.9522 72.2671 77.7383 80.2826C75.6796 81.6317 75.1046 84.4 76.4574 86.4568C77.7549 88.4307 80.4992 89.1403 82.6335 87.7377C97.3632 78.0691 106.16 61.8041 106.16 44.2342C106.16 26.6644 97.3632 10.4012 82.6335 0.732548ZM88.4667 44.2342C88.4667 32.5253 82.5579 21.76 72.6588 15.4383C70.5965 14.1224 67.8614 14.7343 66.5546 16.8132C65.2479 18.8922 65.858 21.6439 67.9203 22.9617C75.2465 27.6412 79.6201 35.5921 79.6201 44.2342C79.6201
            52.8763 75.2465 60.8273 67.9203 65.5068C65.858 66.8227 65.2479 69.5744 66.5546 71.6552C67.7545 73.5646 70.4472 74.4456 72.6588 73.0301C82.5579 66.7085 88.4667 55.945 88.4667 44.2342ZM62.3377 30.0666C60.2035 28.9 57.5107 29.6685 56.3275 31.8083C55.1498 33.9481 55.9294 36.6371 58.0692 37.8185C60.4486 39.1253 61.9267 41.5857 61.9267 44.2342C61.9267 46.8845 60.4486 49.3432 58.071 50.6499C55.9312 51.8313 55.1516 54.5203 56.3294 56.6601C57.5144
            58.8091 60.209 59.5721 62.3396 58.4018C67.5425 55.5358 70.7752 50.108 70.7752 44.2324C70.7752 38.3567 67.5425 32.9308 62.3377 30.0666Z" fill="#3f3f46"/>
          </svg>
          </button>
        <div class="choose">
          <button
            class="buttom-word buttom-word1 mx-1 my-1
             h-28 max-w-3xl overflow-hidden shadow-lg bg-myans-100">
            <div class="" @click="choicechcek()">
              <div class="font-bold text-2xl text-white">{{ datagame[index].choice1 }}</div>
            </div>
          </button>
          <button
            class="buttom-word buttom-word2 mx-1 my-1
             h-28 max-w-3xl overflow-hidden shadow-lg bg-myans-200">
            <div class="" @click="choicechcek()">
              <div class="font-bold text-2xl text-white">{{ datagame[index].choice2 }}</div>
            </div>
          </button>
        </div>
        <div class="choose">
          <button
            class="buttom-word buttom-word3 mx-1 my-1
             h-28 max-w-3xl overflow-hidden shadow-lg bg-myans-300" >
            <div class="" @click="choicechcek()">
              <div class="font-bold text-2xl text-white">{{ datagame[index].choice3 }}</div>
            </div>
          </button>
          <button
            class="buttom-word buttom-word4 mx-1 my-1
             h-28 max-w-3xl overflow-hidden shadow-lg bg-myans-400" >
            <div class="" @click="choicechcek()">
              <div class="font-bold text-2xl text-white">{{ datagame[index].choice4 }}</div>
            </div>
          </button>
        </div>
      </section>
























        <!-- bg -->
        <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 inset-y-32 right-0 absolute blur-2xl z-0"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 left-2/4 top-32 absolute blur-2xl z-0"></div>
        <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 inset-y-32 right-0 absolute blur-2xl z-0"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 left-2/4 top-32 absolute blur-2xl z-0"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45  bg-gradient-to-b from-mypink-200 via-mypink-200 to-mypurple-300 left-3/4 top-32 absolute blur-2xl z-0"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 inset-y-32 right-0 absolute blur-2xl z-0"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45  bg-gradient-to-b from-mypink-200 via-mypink-200 to-mypurple-300 inset-y-32 right-64 absolute blur-2xl z-0"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 left-1/4 top-32 absolute blur-2xl z-0"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45  bg-gradient-to-b from-mypink-200 via-mypink-200 to-mypurple-300 left-100% top-32 absolute blur-2xl z-0"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 left-1/4 top-10 absolute blur-2xl z-10"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45  bg-gradient-to-b from-mypink-200 via-mypink-200 to-mypurple-300 left-100% top-10 absolute blur-2xl z-10"></div>
    
        <!-- bg -->
      </div>
      </section>
        


<!-- SECTION 3 TITLE The Word set and Histrory          bg-mystone-100-->
<section class="sec3 flex bg-gradient-to-b from-mystone-200 z-20">
      <div class="sec3-top p-5 pl-10 ">
        <div class="w-10 drop-shadow mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#FF8298"  viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M464 6.1c9.5-8.5 24-8.1 33 .9l8 8c9 9 9.4 23.5 .9 33l-85.8 95.9c-2.6 2.9-4.1 6.7-4.1 10.7V176c0 8.8-7.2 16-16 16H384.2c-4.6 0-8.9 1.9-11.9 5.3L100.7 500.9C94.3 508 85.3 512 75.8 512c-8.8 0-17.3-3.5-23.5-9.8L9.7 459.7C3.5 453.4 0 445 0 436.2c0-9.5 4-18.5 11.1-24.8l111.6-99.8c3.4-3 5.3-7.4 5.3-11.9V272c0-8.8 7.2-16 16-16h34.6c3.9 0 7.7-1.5 10.7-4.1L464 6.1zM432 288c3.6 0 6.7 2.4 7.7 5.8l14.8 51.7 51.7 14.8c3.4 1 5.8 4.1 5.8 7.7s-2.4 6.7-5.8 7.7l-51.7 14.8-14.8 51.7c-1 3.4-4.1 5.8-7.7 5.8s-6.7-2.4-7.7-5.8l-14.8-51.7-51.7-14.8c-3.4-1-5.8-4.1-5.8-7.7s2.4-6.7 5.8-7.7l51.7-14.8 14.8-51.7c1-3.4 4.1-5.8 7.7-5.8zM87.7 69.8l14.8 51.7 51.7 14.8c3.4 1 5.8 4.1 5.8 7.7s-2.4 6.7-5.8 7.7l-51.7 14.8L87.7 218.2c-1 3.4-4.1 5.8-7.7 5.8s-6.7-2.4-7.7-5.8L57.5 166.5 5.8 151.7c-3.4-1-5.8-4.1-5.8-7.7s2.4-6.7 5.8-7.7l51.7-14.8L72.3 69.8c1-3.4 4.1-5.8 7.7-5.8s6.7 2.4 7.7 5.8zM208 0c3.7 0 6.9 2.5 7.8 6.1l6.8 27.3 27.3 6.8c3.6 .9 6.1 4.1 6.1 7.8s-2.5 6.9-6.1 7.8l-27.3 6.8-6.8 27.3c-.9 3.6-4.1 6.1-7.8 6.1s-6.9-2.5-7.8-6.1l-6.8-27.3-27.3-6.8c-3.6-.9-6.1-4.1-6.1-7.8s2.5-6.9 6.1-7.8l27.3-6.8 6.8-27.3c.9-3.6 4.1-6.1 7.8-6.1z"/></svg>
        </div>
        <h2 class="text-xl font-bold text-gray-900">Feature</h2>
        <h2 class="text-4xl font-bold my-3 text-gray-900">
          Memorize the words you want <br />
          and<span class="text-mypurple-400"> keep a history of playing</span>
        </h2>
        <p class="text-l">
          Our website can create word packs and can play games. <br>
          When the game is finished, it will be saved in the game history.
        </p>
        <div class="flex items-center justify-center">
          <button v-on:click="showWordSet" >
            <div v-bind:class="{ 'is-showtrue': showWord }"
            class="my-4 block min-w-lg max-w-lg p-6   border-2 border-mystone-500 rounded-lg shadow  mr-5 bg-mystone-100"
          >
            <h5 v-bind:class="{ 'is-showtrue': showWord }"
              class="mb-2 text-2xl font-bold tracking-tight text-mystone-600 dark:text-white"
            >
            The word set
            </h5>
            <p class="font-normal text-mystone-600" v-bind:class="{ 'is-showtrue': showWord }">
              On the web, we can create our own word set as we want. and can access to read other people's word sets
            </p>
          </div>
          </button>
          
          <button v-on:click="showHistrory">
            <div v-bind:class="{ 'is-showtrue': showHis }"
            class="my-4 block max-w-lg min-w-lg p-6 border-2 border-mystone-500 rounded-lg shadow bg-mystone-100"
          >
            <h5 v-bind:class="{ 'is-showtrue': showHis }"
              class="mb-2 text-2xl font-bold tracking-tight text-mystone-600 dark:text-white"
            >
              Histrory
            </h5>
            <p class="font-normal text-mystone-600" v-bind:class="{ 'is-showtrue': showHis }">
              When we finished playing the game It will be saved to the game history. and show your score
            </p>
          </div>
          </button>
          
        </div>
      </div>
    </section>

<!-- SECTION3 The Word set and Histrory-->
<section class="bg-svg pt-6 pb-10 px-5 ">
          <!-- The word set           flex items-center justify-items-center flex-col-->
      <div v-if="showWord" class="h-80 relative"> <!-- h-96 overflow-scroll -->
        <!-- card container -->
    <div
      class="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 relative z-20 pt-7"
    >
      <div
        v-for="item in words"
        class="drop-shadow-md rounded-lg px-4 py-3  bg-gradient-to-l from-myyellow-200 to-mypink-200"
      >
        <p class="font-medium text-lg">{{ item.name }}</p>
        <p class="text-gray-900 truncate">{{ item.des }}</p>
        <div class="mt-4 flex justify-between text-gray-900">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
            <p >{{ item.word }} words</p>
            <div class="h-1 w-1 rounded-full bg-black mx-2"></div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                        
            <p>{{ item.play }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- End card container -->
    
      <!-- Cloud  -->
      <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 inset-y-32 right-0 absolute blur-2xl z-0"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 left-2/4 top-32 absolute blur-2xl z-0"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 left-2/4 top-10 absolute blur-2xl z-10"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 inset-y-10 right-0 absolute blur-2xl z-10"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45  bg-gradient-to-b from-mypink-200 via-mypink-200 to-mypurple-300 inset-y-10 right-64 absolute blur-2xl z-10"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 left-1/4 top-10 absolute blur-2xl z-10"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45  bg-gradient-to-b from-mypink-200 via-mypink-200 to-mypurple-300 left-100% top-10 absolute blur-2xl z-10"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 left-1/4 top-10 absolute blur-2xl z-10"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45  bg-gradient-to-b from-mypink-200 via-mypink-200 to-mypurple-300 left-100% top-10 absolute blur-2xl z-10"></div>
    </div>



      <!-- Histrory -->
      <div v-if="showHis" class="h-80 relative">
        <!-- card container -->
        <div 
      class="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
    >
      <div
        v-for="item in words"
        class="drop-shadow-md rounded-lg px-4 py-3 bg-gradient-to-l from-myyellow-200 to-mypink-200 relative z-20"
      >
        <p class="font-medium text-lg">{{ item.name }}</p>
        <p class="text-gray-900 truncate">{{ item.des }}</p>
        <div class="text-gray-900 truncate flex items-center mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gamepad-2 h-4 w-4 mr-1"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>
          <p>{{ item.game }}</p>
        </div>
        <div class="flex justify-between text-gray-900">
          
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
            <p>{{ item.score }}</p>
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
            <p>{{ item.date }}</p>
          </div>
        </div>
        
      </div>
    </div>
    <!-- End card container -->
    <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 inset-y-32 right-0 absolute blur-2xl z-0"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 left-2/4 top-32 absolute blur-2xl z-0"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 left-2/4 top-10 absolute blur-2xl z-10"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 inset-y-10 right-0 absolute blur-2xl z-10"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45  bg-gradient-to-b from-mypink-200 via-mypink-200 to-mypurple-300 inset-y-10 right-64 absolute blur-2xl z-10"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 left-1/4 top-10 absolute blur-2xl z-10"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45  bg-gradient-to-b from-mypink-200 via-mypink-200 to-mypurple-300 left-100% top-10 absolute blur-2xl z-10"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 left-1/4 top-10 absolute blur-2xl z-10"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45  bg-gradient-to-b from-mypink-200 via-mypink-200 to-mypurple-300 left-100% top-10 absolute blur-2xl z-10"></div>
      </div>
      </section>


<!-- SECTION DEVELOPER -->
<!-- SECTION DEVELOPER -->
<!-- SECTION DEVELOPER -->
<!-- SECTION DEVELOPER -->
<!-- SECTION 3 TITLE DEVELOPER-->
<section class="sec flex bg-gradient-to-b from-mystone-200 z-20">
      <div class="sec4-top p-5 pl-10 ">
        <div class="w-14 drop-shadow mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#FF8298" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg>
        </div>
        <h2 class="text-xl font-bold text-gray-900">Developer</h2>
        <h2 class="text-3xl font-bold my-3 text-gray-900">
          06016322	Web
          <span class="text-mypurple-400">  Programming </span>
        </h2>
      </div>
    </section>

<!-- SECTION3 palm-->
<section class="bg-svg pt-6 pb-10 px-5 ">
          <!-- The word set           flex items-center justify-items-center flex-col-->
      <div class="h-80 relative"> <!-- h-96 overflow-scroll -->
<!-- all card ing palm -->
<div class="flex items-center justify-center">
  <!-- card ing-->
  <div class="m-5 card relative z-30 w-96 drop-shadow-md rounded-lg px-4 py-3 bg-gradient-to-b from-myyellow-101 text-gray-900 front-medium from-myyellow-200">
      <div class="flex items-center">
        <div class="w-20 m-2">
          <img src="../assets/img/inging.png" alt="" class="rounded-full">
        </div>
        <div class="">
          <h2 class="font-semibold text-lg">Ingfah</h2>
          <p>Frontend Developer</p>
        </div>
        
      </div>
      <p class="px-4 pb-4">64070255 <br> Anthicha Prapasrikavin </p>
    </div>
    <!-- end card ing-->

<!-- card palm -->
<div class="m-5 card relative z-30 w-96 drop-shadow-md rounded-lg px-4 py-3 bg-gradient-to-b from-myyellow-101 text-gray-900 front-medium from-myyellow-200">
      <div class="flex items-center">
        <div class="w-20 m-2">
          <img src="../assets/img/palmpalm.png" alt="" class="rounded-full">
        </div>
        <div class="">
          <h2 class="font-semibold text-lg">Palm</h2>
          <p>Backend Developer</p>
        </div>
        
      </div>
      <p class="px-4 pb-4">64070193 <br> Pongsiri suwannasilp </p>
    </div>
    <!-- end card palm-->
</div>
    


    
      <!-- Cloud  -->
      <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 inset-y-32 right-0 absolute blur-2xl z-0"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 left-2/4 top-32 absolute blur-2xl z-0"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 left-2/4 top-10 absolute blur-2xl z-10"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 inset-y-10 right-0 absolute blur-2xl z-10"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45  bg-gradient-to-b from-mypink-200 via-mypink-200 to-mypurple-300 inset-y-10 right-64 absolute blur-2xl z-10"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 left-1/4 top-10 absolute blur-2xl z-10"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45  bg-gradient-to-b from-mypink-200 via-mypink-200 to-mypurple-300 left-100% top-10 absolute blur-2xl z-10"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45 p-4  bg-gradient-to-r from-mypink-100 via-mypink-200 to-myyellow-200 left-1/4 top-10 absolute blur-2xl z-10"></div>
      <div class="box-border h-5 w-75 origin-bottom -rotate-45  bg-gradient-to-b from-mypink-200 via-mypink-200 to-mypurple-300 left-100% top-10 absolute blur-2xl z-10"></div>
    </div>
      </section>













    <!-- SECTION FOOTER -->
      <footer class="bg-mypurple-300 text-center text-white z-20">
        <div class="container px-6 pt-6">
          <div class="mb-6 flex justify-center">
            <a
              href="#!"
              type="button"
              class="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                />
              </svg>
            </a>

            <a
              href="#!"
              type="button"
              class="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                />
              </svg>
            </a>

            <a
              href="#!"
              type="button"
              class="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                />
              </svg>
            </a>

            <a
              href="#!"
              type="button"
              class="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>

            <a
              href="#!"
              type="button"
              class="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                />
              </svg>
            </a>

            <a
              href="#!"
              type="button"
              class="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div class="p-4 text-center">
          © 2023 SeravabiTeam:
          <a class="text-whitehite" href="https://tailwind-elements.com/"
            >Palm Ingfah</a
          >
        </div>
      </footer>
  </div>
</template>

<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";
import { datagame } from "../data/word.js";
import axios from "../axios";
// import { words } from "../data/word.js";
export default {
  data() {
    return {
      showCard: true,
      showGuess: false,
      showWord: true,
      showHis: false,
      score_knew: 0,
      score_dontknew: 0,
      index: 0,
      indexcheck: [],
      indexcheck2: [],
      isClicked: true,
      textToSpeak: '',
      textToSpeak2: '',
      id: this.$route.params.id,
      words: [
  {
    name: "English FE1",
    des: "Unit1-2",
    word: 12,
    score: "12/12",
    play: 92,
    date: "12/01/2023",
    game: "GuessingGame",
  },
  {
    name: "9 saman",
    des: "!fight!",
    word: 20,
    score: "17/20",
    play: 845,
    date: "14/01/2023",
    game: "Flashcard",
  },
  {
    name: "KruSomsri",
    des: "page 1-2",
    word: 55,
    score: "10/55",
    play: 2,
    date: "22/01/2023",
    game: "Flashcard",
  },
  {
    name: "inturn",
    des: "For education",
    word: 0,
    score: "0/0",
    play: 0,
    date: "01/02/2023",
    game: "GuessingGame",
  },
  {
    name: "Gat Pat !",
    des: "For education",
    word: 12,
    score: "12/12",
    play: 92,
    date: "12/01/2023",
    game: "Flashcard",
  },
  {
    name: "toeic",
    des: "toeic 66",
    word: 20,
    score: "17/20",
    play: 845,
    date: "14/01/2023",
    game: "GuessingGame",
  },
  {
    name: "word oxford",
    des: "Page 1",
    word: 55,
    score: "10/55",
    play: 2,
    date: "22/01/2023",
    game: "Flashcard",
  },
  {
    name: "Eng Commu",
    des: "Final 2023",
    word: 0,
    score: "0/0",
    play: 0,
    date: "01/02/2023",
    game: "Flashcard",
  },
],
datagame: [
  {
    question: "arrange",
    type: "Verb",
    answer: "จัดแจง",
    choice1: "กระดาน",
    choice2: "เมืองหลวง",
    choice3: "จัดแจง",
    choice4: "ช่างตัดผม",
  },
  {
    question: "barber",
    type: "Noun",
    answer: "ช่างตัดผม",
    choice1: "ช่างตัดผม",
    choice2: "จัดแจง",
    choice3: "เมืองหลวง",
    choice4: "ทวีป",
  },
  {
    question: "board",
    type: "Noun",
    answer: "กระดาน",
    choice1: "หนัก",
    choice2: "กระดาน",
    choice3: "ช่างตัดผม",
    choice4: "จัดแจง",
  },
  {
    question: "capital",
    type: "Noun",
    answer: "เมืองหลวง",
    choice1: "จัดแจง",
    choice2: "ช่างตัดผม",
    choice3: "ทวีป",
    choice4: "เมืองหลวง",
  },
  {
    question: "continent",
    type: "Noun",
    answer: "ทวีป",
    choice1: "โดยเฉพาะ",
    choice2: "กระดาน",
    choice3: "ทวีป",
    choice4: "หนัก",
  }
],
    };
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  methods: {
    choicechcek(){
      if(this.index == 4){
        this.index = -1
      }
      this.index++
    },
    showFlashCard() {
      this.showCard = true;
      this.showGuess = false;
    },
    showGuessing() {
      this.showGuess = true;
      this.showCard = false;
    },
    showWordSet() {
      this.showWord = true;
      this.showHis = false;
    },
    showHistrory() {
      this.showHis = true;
      this.showWord = false;
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
    speak() {
      let utterance = new SpeechSynthesisUtterance(this.$refs.textToSpeak2.innerText);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    },
    speak2() {
      let utterance = new SpeechSynthesisUtterance(this.$refs.textToSpeak2.innerText);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    },
  },
};
</script>

<style scoped>
@import "../components/style_index.css";
.inggggggggg{
  background-color: red;
}
#app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}
.sec1-right {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.sec1-left {
  width: 60%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.cartoon1 {
  margin: 20px;
  width: 380px;
}

.sec2-top, .sec3-top {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 450px;
  justify-content: center;
  z-index: 30;
}
.sec4-top {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: center;
  z-index: 30;
}
.test{
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 450px;
  justify-content: center;
  background-color: red;
}

/* back pattern */
.bg-svg {
  background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.02), #E7EBF0),
  url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='20.5' height='20.5' patternTransform='scale(1) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='M10-6V6M10 14v12M26 10H14M6 10H-6' transform='translate(0.25,0)' stroke-linejoin='round' stroke-linecap='round' stroke-width='0.5' stroke='hsla(0,0%,75%,1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
  background-size: cover;
  background-position: center;
}
.is-showtrue{
  border-color: #fa728b;
  color: #fa728b;
  background-color: #FFE5EA;
}
</style>
