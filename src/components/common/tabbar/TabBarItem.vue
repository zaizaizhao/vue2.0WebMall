<template>
  <div class="tab-bar-item" @click="clickItem">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{active:isActive}"><slot name="item-text"></slot></div>

  </div>
</template>

<script>
 export default {
   name: "TabBarItem",
   components: {

   },
   props: {
     link: {
      type:String,
      required: true
      }
   },
   data () {
     return{
      //  isActive: true
     }
   },
   computed: {
     isActive(){
       return !this.$route.path.indexOf(this.link)
     }
   },
   filters: {},
   watch: {},
   created() {

   },
   methods: {
    clickItem(){
      console.log("click");
      this.$router.replace(this.link)
      
    }
   }
 }
</script>

<style scoped>
  .tab-bar-item img {
    margin-top: 1px;
    width: 24px;
    height: 24px;
    vertical-align: center;
  }
  .active {
    color: red;
  }
 
</style>
