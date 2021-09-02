<template>
 <div class="tab-control">
   <div class="tab-control-item" v-for="(item,key) in titles" :key="key"
        :class="{active:currentIndex === key}"
        @click="tabClick(key)">
     <span>{{item}}</span>
   </div>
 </div>
</template>

<script>
 export default {
   name: "TabControl",
   components: {

   },
   props:{
     titles:{
       type:Array,
       default(){
         return []
       }
     }
   },
   data () {
     return {
       currentIndex:0
     }
   },
   computed: {},
   filters: {},
   watch: {},
   created() {

   },
   methods: {
     tabClick(key){
       this.currentIndex = key
       this.$emit('tabClick',key)
     }
   }
 }
</script>

<style scoped>
  .tab-control {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: #fff;
  }
  .tab-control-item {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
  }
  .tab-control-item span {
    padding: 5px;
  }
  .active span {
    
    border-bottom: 3px solid var(--color-tint);
  }
 
</style>
