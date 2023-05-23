<template>
    <div class="m-5">
        <div class="flex items-center justify-between font-semibold">
            <p class="text-3xl">{{ title }}</p>
            <button v-if="owner" @click="setPopup('addWord'), setWordAdd()" class="px-4 py-2 bg-mypink-300 rounded-lg text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <p>Add</p>
            </button>
        </div>
        <div v-if="Words.length < 10 && checkWordsMoreThanTen" class="mt-2 bg-red-400 text-white p-2 rounded">
            You must have 10 or more words to be able to play.
        </div>
        <!-- table container -->
        <v-data-table v-if="Words.length > 0" :headers="headers" :items="Words" item-value="name" class="elevation-1 mt-4">
            <template v-slot:item.type="{ item }">
                <div class="flex justify-between items-center">
                    <div class="p-2 bg-yellow-100 text-yellow-600 rounded-xl inline-block mr-2">
                        {{ item.raw.type }}
                    </div>
                </div>
            </template>
            <template v-if="owner" v-slot:item.actions="{ item }">
                <div class="flex gap-3">
                    <div class="mr-2 cursor-pointer" @click="setPopup('editWord'), setWord(item)">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                        </svg>
                    </div>
                    <div class="cursor-pointer" @click="setPopup('deleteWord'), setWord(item)">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                    </div>
                </div>
            </template>
        </v-data-table>
        
        <!-- popup add word -->
        <Popup type="addWord" v-if="this.$store.state.showPopup && this.$store.state.typePopup === 'addWord'">
            <!-- prevent event onclick when click here (@click.stop) -->
            <div @click.stop="">
                <div class="font-medium text-2xl flex justify-between items-center">
                    <p>Add word</p>
                    <svg @click="setPopup('addWord')" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
                <div class="mt-4">
                    <h1 class="text-lg">Thai word</h1>
                    <div class="px-3 mt-1 border-2 border-gray-300 w-full rounded-xl h-10">
                        <input v-model="thai" class="outline-0 w-full h-full" type="text" name=""
                            placeholder="Title of word set">
                    </div>
                </div>
                <div class="mt-2">
                    <h1 class="text-lg">English word</h1>
                    <div class="px-3 mt-1 border-2 border-gray-300 w-full rounded-xl h-10">
                        <input v-model="eng" class="outline-0 w-full h-full" type="text" name=""
                            placeholder="Add description">
                    </div>
                </div>
                <div class="mt-2">
                    <h1 class="text-lg">Type</h1>
                    <!-- <div class="px-3 mt-1 border-2 border-gray-300 w-full rounded-xl h-10">
                            <input v-model="type" class="outline-0 w-full h-full" type="text" name="" placeholder="Add type of word" >
                        </div> -->
                    <Listbox v-model="selectedType">
                        <div class="relative mt-1 h-10 border-2 border-gray-300 rounded-xl">
                            <ListboxButton
                                class="relative h-full w-full cursor-default px-3 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span class="block truncate text-base ">{{ selectedType.name }}</span>
                                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </ListboxButton>

                            <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                                leave-to-class="opacity-0">
                                <ListboxOptions
                                    class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    <ListboxOption v-slot="{ active, selected }" v-for="person in types" :key="person.name"
                                        :value="person" as="template">
                                        <li :class="[
                                            active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                                            'relative cursor-default select-none py-2 pl-10 pr-4',
                                        ]">
                                            <span :class="[
                                                selected ? 'font-medium' : 'font-normal',
                                                'block truncate',
                                            ]">{{ person.name }}</span>
                                            <span v-if="selected"
                                                class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        </li>
                                    </ListboxOption>
                                </ListboxOptions>
                            </transition>
                        </div>
                    </Listbox>
                </div>
                <button @click="addWord()" class="w-full bg-mypink-300 text-white py-2 mt-4 rounded-xl"
                    type="submit">Add</button>
            </div>
        </Popup>
        <!-- popup edit word -->
        <Popup type="editWord" v-if="this.$store.state.showPopup && this.$store.state.typePopup === 'editWord'">
            <!-- prevent event onclick when click here (@click.stop) -->
            <div @click.stop="">
                <div class="font-medium text-2xl flex justify-between items-center">
                    <p>Edit word</p>
                    <svg @click="setPopup('addWord')" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
                <div class="mt-4">
                    <h1 class="text-lg">Thai word</h1>
                    <div class="px-3 mt-1 border-2 border-gray-300 w-full rounded-xl h-10">
                        <input v-model="thai" class="outline-0 w-full h-full" type="text" name=""
                            placeholder="Title of word set">
                    </div>
                </div>
                <div class="mt-2">
                    <h1 class="text-lg">English word</h1>
                    <div class="px-3 mt-1 border-2 border-gray-300 w-full rounded-xl h-10">
                        <input v-model="eng" class="outline-0 w-full h-full" type="text" name=""
                            placeholder="Add description">
                    </div>
                </div>
                <div class="mt-2">
                    <h1 class="text-lg">Type</h1>
                    <!-- <div class="px-3 mt-1 border-2 border-gray-300 w-full rounded-xl h-10">
                        <input v-model="type" class="outline-0 w-full h-full" type="text" name=""
                            placeholder="Add type of word">
                    </div> -->
                    <Listbox v-model="selectedType">
                        <div class="relative mt-1 h-10 border-2 border-gray-300 rounded-xl">
                            <ListboxButton
                                class="relative h-full w-full cursor-default px-3 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span class="block truncate text-base ">{{ selectedType.name }}</span>
                                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </ListboxButton>

                            <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                                leave-to-class="opacity-0">
                                <ListboxOptions
                                    class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    <ListboxOption v-slot="{ active, selected }" v-for="person in types" :key="person.name"
                                        :value="person" as="template">
                                        <li :class="[
                                            active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                                            'relative cursor-default select-none py-2 pl-10 pr-4',
                                        ]">
                                            <span :class="[
                                                selected ? 'font-medium' : 'font-normal',
                                                'block truncate',
                                            ]">{{ person.name }}</span>
                                            <span v-if="selected"
                                                class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        </li>
                                    </ListboxOption>
                                </ListboxOptions>
                            </transition>
                        </div>
                    </Listbox>
                </div>
                <button @click="editWord()" class="w-full bg-mypink-300 text-white py-2 mt-4 rounded-xl"
                    type="submit">Edit</button>
            </div>
        </Popup>
        <!-- Popup comfirm before delete wordset -->
        <Popup type="deleteWord" v-if="this.$store.state.showPopup && this.$store.state.typePopup === 'deleteWord'">
            <!-- prevent event onclick when click here (@click.stop) -->
            <div @click.stop="">
                <div class="text-center p-4 text-2xl font-medium">
                    Are you sure you want to delete this word
                </div>
                <div class="flex">
                    <button @click="setPopup('deleteWord')" class="w-full py-2 mt-4 rounded-xl"
                        type="submit">Cancel</button>
                    <button @click="deleteWord()"
                        class="w-full bg-red-600 text-white py-2 mt-4 flex items-center justify-center rounded-xl"
                        type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                        <p>Delete</p>
                    </button>
                </div>
            </div>
        </Popup>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import {
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

// const types = [
//     { name: 'noun' },
//     { name: 'verb' },
//     { name: 'adj' },
//     { name: 'adv' },

// ]
// const selectedType = ref(types[0])

// alert(selectedType);

</script>
<script>
import Popup from '../components/Popup.vue';
import axios from '../axios';
export default {
    data () {
        return{
            headers: this.owner ? [
                    { title: 'No.', key: 'index', width: '0%' },
                    { title: 'Thai', key: 'thai' },
                    { title: 'English', key: 'english' },
                    { title: 'Type', key: 'type' },
                    { title: 'Actions', key: 'actions', sortable: false, width: '0%' }] :
                [
                    { title: 'No.', key: 'index', width: '0%' },
                    { title: 'Thai', key: 'thai' },
                    { title: 'English', key: 'english' },
                    { title: 'Type', key: 'type' }
                ]
            ,
            Words: [],
            thai: '',
            eng: '',
            idWord: null,
            index: 1,
            title: '',
            types: [
                { name: 'noun' },
                { name: 'verb' },
                { name: 'adj' },
                { name: 'adv' },
            ],
            selectedType: {name: 'noun'},
            checkWordsMoreThanTen: false,
            owner: true
        }
    },
    methods: {
        
        setWordAdd(){
            this.thai = ''
            this.eng = ''
            this.selectedType.name = 'noun'
            this.idWord = null
            this.types = [
                { name: 'noun' },
                { name: 'verb' },
                { name: 'adj' },
                { name: 'adv' }
            ]
        },
        setWord(item) {
            // access proxy object
            this.thai = Object.assign({}, item.raw).thai
            this.eng = Object.assign({}, item.raw).english
            this.selectedType.name = Object.assign({}, item.raw).type
            this.idWord = Object.assign({}, item.raw).id
        },
        setPopup(type) {
            this.thai = '',
                this.eng = '',
                this.type = '',
                this.$store.commit('setshowPopup', this.$store.state.showPopup)
            this.$store.commit('settypePopup', type)
        },
        addWord: async function addWord() {
            await axios.put("/word/addWord", {
                thai: this.thai,
                english: this.eng,
                type: this.selectedType.name,
                wordset_id: this.$route.params.id
            })
                .then(async (res) => {
                    await axios.post("/word/getAllWord", {
                        wordset_id: this.$route.params.id
                    })
                        .then((res) => {
                            this.Words = res.data
                            this.setPopup("addWord")
                        })
                        .catch((err) => {
                            this.$swal.fire({
                            title: 'Error!',
                            text: err.response.data.message,
                            icon: 'error',
                            confirmButtonText: 'ok'
                            })
                        })

                })
                .catch((err) => {
                    this.$swal.fire({
                    title: 'Error!',
                    text: err.response.data.message,
                    icon: 'error',
                    confirmButtonText: 'ok'
                    })
                })
        },
        async editWord() {
            await axios.put("/word/editWord", {
                thai: this.thai,
                english: this.eng,
                type: this.selectedType.name,
                wordId: this.idWord
            })
                .then(async (res) => {
                    await axios.post("/word/getAllWord", {
                        wordset_id: this.$route.params.id
                    })
                        .then((res) => {
                            this.Words = res.data
                            this.thai = '',
                                this.eng = '',
                                this.type = '',
                                this.setPopup()
                        })
                        .catch((err) => {
                            this.$swal.fire({
            title: 'Error!',
            text: err.response.data.message,
            icon: 'error',
            confirmButtonText: 'ok'
            })
                        })
                })
                .catch((err) => {
                    this.$swal.fire({
            title: 'Error!',
            text: err.response.data.message,
            icon: 'error',
            confirmButtonText: 'ok'
            })
                })
        },
        async deleteWord() {
            await axios.delete("/word/deleteWord", {
                data: { wordId: this.idWord }
            })
                .then(async (res) => {
                    await axios.post("/word/getAllWord", {
                        wordset_id: this.$route.params.id
                    })
                        .then((res) => {
                            this.Words = res.data
                            this.thai = '',
                                this.eng = '',
                                this.type = '',
                                this.setPopup()
                        })
                        .catch((err) => {
                            this.$swal.fire({
            title: 'Error!',
            text: err.response.data.message,
            icon: 'error',
            confirmButtonText: 'ok'
            })
                        })
                })
                .catch((err) => {
                    this.$swal.fire({
            title: 'Error!',
            text: err.response.data.message,
            icon: 'error',
            confirmButtonText: 'ok'
            })
                })
        },
    },
    components: {
        Popup
    },
    async created() {
        await axios.post("/word/getAllWord", {
            wordset_id: this.$route.params.id
        })
            .then((res) => {
                this.Words = res.data
                this.checkWordsMoreThanTen = true
            })
        await axios.post("/wordset/getWordSetById", {
            id: this.$route.params.id
        })
            .then((res) => {
                this.title = res.data.name
                if((res.data.username == this.$store.getters.userName.username) || this.$store.getters.userName.role == 'admin'){
                    this.headers = [
                    { title: 'No.', key: 'index', width: '0%' },
                    { title: 'Thai', key: 'thai' },
                    { title: 'English', key: 'english' },
                    { title: 'Type', key: 'type' },
                    { title: 'Actions', key: 'actions', sortable: false, width: '0%' }]
                }else{
                    this.headers = [
                    { title: 'No.', key: 'index', width: '0%' },
                    { title: 'Thai', key: 'thai' },
                    { title: 'English', key: 'english' },
                    { title: 'Type', key: 'type' }
                    ]
                    this.owner = false
                }
            })
    },
}
</script>

<style lang="scss"></style>