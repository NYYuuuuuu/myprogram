import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/views/movie.vue'
import MovieDetall from '@/views/movieDetall.vue'
import Music from '@/views/music.vue'
import MusicList from '@/views/musicList.vue'
import Book from '@/views/book.vue'
import Photo from '@/views/photo.vue'
import PhotoDetail from '@/views/photoDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/movie",
      component:Movie
    },
    {
      path:"/movieDetall/:id",
      component:MovieDetall
    },
    {
      path:"/music",
      component:Music
    },
    {
      path:"/musicList",
      component:MusicList
    },
    {
      path:"/book",
      component:Book
    },
    {
      path:"/photo",
      component:Photo
    },
    {
      path:"/photoDetail/:index",
      component:PhotoDetail
    },
    {
      path:"/",
      redirect:"/movie"
    }
  ]
})
