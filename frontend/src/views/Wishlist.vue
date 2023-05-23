<template>
    <div class="m-5">
        <div class="flex flex-col gap-4">
            <span class="animate-flash text-3xl font-extrabold text-mypink-400 mt-2">Wishlist</span>
        </div>
        <div v-if="wishlistArr.length > 0"
            class="grid gap-4 mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            <CardWordSet v-for="item in wishlistArr" :key="item.wordSet_id" :id="item.wordSet_id" :username="item.username"
                :name="item.name" :description="item.description" :total_word="item.total_word"
                :total_play="item.total_play" :toName="'Play'" :wishlist_id="item.wishlist_id" />
        </div>
        <div v-else-if="wishlistArr.length == 0 && checkNodata" class="mt-24">
            <div class="flex flex-col justify-center items-center">
                <div class="">
                    <img src="../assets/img/Easter balloon _Monochromatic.svg" alt="">
                </div>
                <div class="font-medium text-lg text-gray-500">No Wishlist</div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from '../axios'
    import CardWordSet from '../components/CardWordSet.vue'
    export default {
        data() {
            return {
                wishlistArr: [],
                checkNodata: false
            }
        },
        components:{
            CardWordSet
        },
        methods: {
            async reList(){
                await axios.post('/wishlist/showWishlistByusername', {
                username: this.$store.getters.userName.username
                })
                .then((res) => {
                    this.wishlistArr = res.data
                })
                .catch((err)=> {
                    
                })
            }
        },
        async created() {
            await axios.post('/wishlist/showWishlistByusername', {
                username: this.$store.getters.userName.username
            })
            .then((res) => {
                this.wishlistArr = res.data
                this.checkNodata = true
            })
            .catch((err)=> {
                
            })
        },
    }
</script>

<style scoped>

</style>