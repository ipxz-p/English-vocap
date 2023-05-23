<template>
    <div class="m-5">
        <!-- <div v-for="item in wordset">
            {{ item.name }}
            
        </div> -->
        <div class="grid gap-4 mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            <CardWordSet v-for="item in wordset" :key="item.wordSet_id" :id="item.wordSet_id" :username="item.username"
                :name="item.name" :description="item.description" :total_word="item.total_word"
                :total_play="item.total_play" :toName="'Play'" />
        </div>
        <div v-if="wordset.length < 1">
            <div class="flex flex-col justify-center items-center mt-32">
                <div class="">
                    <img src="../assets/img/Easter balloon _Monochromatic.svg" alt="">
                </div>
                <div class="font-medium text-lg text-gray-500">No Information</div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '../axios';
import CardWordSet from "../components/CardWordSet.vue";
export default {
    data(){
        return {
            wordset: '',
            testja: 'qwe',
            q: this.$route.params.keyword
        }
    },
    components: {
        CardWordSet,
    },
    methods: {
        async querySearch(){
            await axios.post('/wordset/getWordSetByKeyword', {
                keyword: this.$route.params.keyword
            })
            .then((res) => {
                this.wordset = res.data
            })
            .catch((err) => {
                
            })
        }
    },
    created(){
        this.querySearch()
        this.$watch(
        () => this.$route.params,
            async (toParams, previousParams) => {
                // react to route changes...
                this.querySearch()
            }
        )
    }
}
</script>

<style scoped>

</style>