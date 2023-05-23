<template>
    <router-link :to="{name: toName, params: {id} }" class="cursor-pointer drop-shadow-md rounded-lg px-4 py-3 bg-gradient-to-l from-myyellow-200 to-mypink-200">
                <div class="flex justify-between items-center">
                    <h1 class="text-lg font-medium  truncate">{{ name }}</h1>
                    <Menu v-if="isWordsetOwner(username)" as="div" class="relative inline-block text-left">
                        <div>
                            <MenuButton
                            class="inline-flex w-full bg-yellow-500 justify-center rounded-md bg-opacity-20 p-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                            >
                                <div>
                                    <div class="h-1 w-1 mb-[0.1rem] bg-black rounded-full"></div>
                                    <div class="h-1 w-1 mb-[0.1rem] bg-black rounded-full"></div>
                                    <div class="h-1 w-1 bg-black rounded-full"></div>
                                </div>
                            </MenuButton>
                        </div>

                        <transition
                            enter-active-class="transition duration-100 ease-out"
                            enter-from-class="transform scale-95 opacity-0"
                            enter-to-class="transform scale-100 opacity-100"
                            leave-active-class="transition duration-75 ease-in"
                            leave-from-class="transform scale-100 opacity-100"
                            leave-to-class="transform scale-95 opacity-0"
                        >
                            <!-- menu item start here -->
                            <MenuItems
                            class="absolute right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                                <div @click.prevent="setPopup('editWordSet'), setIdPopup(id)" class="px-1 py-1">
                                    <MenuItem v-slot="{ active }">
                                    <button
                                        :class="[
                                        active ? 'bg-mypink-400 text-white' : 'text-gray-900',
                                        'group flex w-full items-center rounded-md px-2 py-2 text-sm ',
                                        ]"
                                        
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="2" x2="22" y2="6"></line><path d="M7.5 20.5 19 9l-4-4L3.5 16.5 2 22z"></path></svg>
                                        Edit
                                    </button>
                                    </MenuItem>
                                </div>
                                <div @click.prevent="setIdPopup(id), setPopup('deleteWordSet')" class="px-1 py-1">
                                    <MenuItem v-slot="{ active }">
                                    <button
                                        :class="[
                                        active ? 'bg-red-600 text-white' : 'text-gray-900',
                                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                        ]"
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>                              
                                    Delete
                                    </button>
                                    </MenuItem>
                                </div>
                            </MenuItems>
                        </transition>
                    </Menu>
                </div>
                <p class="text-gray-700 truncate">{{ description }}</p>
                <div class="flex justify-between items-center mt-3">
                    <div class="flex items-center">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                            <p>{{ total_word }} words</p>
                        </div>
                        <div class="h-1 w-1 rounded-full bg-black mx-2"></div>
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                            <p>{{ total_play }}</p>
                        </div>
                    </div>
                    <div v-if="isWordsetNotOwner(username) && this.$store.getters.userName.username" class="flex items-center">
                        <div :class="{'hidden' : !wishlist_id}" @click.prevent="removeTowishlist(id)" :id="id+'wish'">
                            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='red' stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart h-5 w-5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>                        
                        </div>
                        <div :class="{'hidden' : wishlist_id}"  @click.prevent="addTowishlist(id)" :id="id+'notwish'">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='none' stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart h-5 w-5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>                        
                        </div>
                    </div>
                </div>
    </router-link>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import axios from '../axios'
    export default {
        props: ['id', 'name', 'description', 'total_word', 'total_play', 'toName', 'username', 'wishlist_id'],
        components: {
            Menu,
            MenuButton,
            MenuItems,
            MenuItem
        },
        methods:{
            async addTowishlist(id){
                await axios.post('/wishlist/addWishlist', {
                    wordset_id: id,
                    username: this.$store.getters.userName.username
                })
                .then(()=>{
                    document.getElementById(id+'notwish').classList.add('hidden')
                    document.getElementById(id+'wish').classList.remove('hidden')
                })
                .catch((err) => {
                    // alert(err)
                })
            },
            async removeTowishlist(id){
                await axios.post('/wishlist/removeWishlist', {
                    wordset_id: id,
                    username: this.$store.getters.userName.username
                })
                .then(()=>{
                    this.$parent.reList()
                    document.getElementById(id+'notwish').classList.remove('hidden')
                    document.getElementById(id+'wish').classList.add('hidden')
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
            // set id for update wordset
            setIdPopup(id){
                this.$store.commit('setidWordSet', id)
            },
            setPopup(type){
                // $parent access data from parent to child
                this.$parent.title = this.name
                this.$parent.description = this.description
                this.$store.commit('setshowPopup', this.$store.state.showPopup)
                this.$store.commit('settypePopup', type)
            },
            isWordsetOwner(username){
                return username == this.$store.getters.userName.username || this.$store.getters.userName.role == 'admin'
            },
            isWordsetNotOwner(username){
                return username != this.$store.getters.userName.username
            }
        }
    }
</script>
