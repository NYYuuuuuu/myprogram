<template>
    <div>
        <!-- 图片 -->
        <!-- <img :src="url"> -->
        <router-link to="/photo">
            <v-touch class="img-box" :style="{backgroundImage:'url('+url+')'}" @swipeleft="next()">
            </v-touch>
        </router-link>
    </div>
</template>
<script>
    import Vue from 'vue'
    import VueTouch from 'vue-touch'
    Vue.use(VueTouch, {name: 'v-touch'})
    export default {
       data() {
           return {
              idx:this.$router.params.index
           }
       },
       computed: {
           url(){
               return this.$store.state.photoData[this.$route.params.index].src
           }
       },
        methods: {
            next(){
               this.idx++;
               if(this.idx == this.$store.state.photoData.length){
                   this.idx = 0;
               } 
            }

        },
    }
</script>

<style scoped>
    .img-box{
        position: absolute;
        left: 0;
        top: 1rem;
        bottom: 1rem;
        right: 0;
        background: #000  0 center no-repeat;
        background-size:contain;
       
    }
    
</style>