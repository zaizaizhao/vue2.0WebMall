<template>
  <swiper>
    <swiper-item v-for="(item,key) in banner" :key="key">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'
 export default {
   name: "HomeSwiper",
   components: {
     Swiper,
     SwiperItem
   },
   props:{
     banner:{
       type: Array,
       default(){
         return []
       }
     }
   },
   data () {
     return {

     }
   },
   computed: {},
   filters: {},
   watch: {},
   created() {

   },
   methods: {

   }
 }
</script>

<style scoped>

 
</style>
