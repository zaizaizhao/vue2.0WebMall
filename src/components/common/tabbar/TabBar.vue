<template>
 <div>
  <div id="tab-bar">
    <slot></slot>
  </div>
 </div>
</template>

<script>
 export default {
   name: "TabBar",
   components: {

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
  #tab-bar {
    display: flex;
    height: 49px;
    background: #f6f6f6;
    position: fixed;
    text-align: center;
    right: 0;
    left: 0;
    bottom: 0;
    box-shadow: 0px -1px 1px rgba(100,100,100,.1);
  }
  .tab-bar-item {
    flex:1
  }
 
</style>
