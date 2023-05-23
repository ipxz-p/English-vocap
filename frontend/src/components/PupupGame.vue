<template>
    <div class="bg-[rgba(0,0,0,.5)] fixed flex items-center justify-center inset-0 z-[100]">
        <div class=" bg-red-400 rounded-lg  max-w-[340px] w-full fixed z-[150] bg-gra">
            
                <slot>
                </slot>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        props: ['type'],
        methods: {
            setPopup(type){
                this.$store.commit('setshowPopup', this.$store.state.showPopup)
                this.$store.commit('settypePopup', type)
            }
        },
    }
</script>

<style scoped>
 .bg-gra{
    outline: 3px solid rgba(31, 29, 29, 0.2);
  border: 3px solid #0000;
  border-radius: 30px;
  background:
    linear-gradient(#7B40AC, #7B40AC) padding-box,
    linear-gradient(#7B40AC, #4F2B87) border-box;
    color: white;
 }
</style>