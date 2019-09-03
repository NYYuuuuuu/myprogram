<template>
    <div>
        <img  v-for="(obj,index) in  musicList" :key="index" :src="obj.bg" @click="goList()"/>
    </div>
</template>

<script>
import axios from "axios"
    export default {
        data() {
            return {
                musicList:[]
            }
        },
        created() {
            axios.get('/data/musiclist.json')
            .then((result)=>{
                this.musicList = result.data.albums;
            })
        },
        methods: {
            goList(){
                this.$router.push('/musicList')
            }
        },
    }
</script>

<style  scoped>
    img{
        width: 50%;
    }
</style>