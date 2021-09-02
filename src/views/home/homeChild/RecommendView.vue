<template>
<div class="recommend">
   <div v-for="(item,key) in recommend" :key="key" class="recommend-item">
   <a :href="item.link">
     <img :src="item.image" alt="">
     <div>{{item.title}}</div>
   </a>
 </div>
</div>
</template>

<script>
 export default {
   name: "RecommendView",
   components: {

   },
   props:{
     recommend:{
       type:Array,
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
  .recommend{
    display: flex;
    text-align: center;
    font-size: 13px;
    margin-top: 3px;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img{
    width: 65px;
    height: 65px;
    margin-bottom: 4px;
  }
  
</style>
