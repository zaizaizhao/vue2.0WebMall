<template>
 <div>
  {{iid}}
 </div>
</template>

<script>
 export default {
   name: "Detail",
   components: {

   },
   data () {
     return {
       iid:null
     }
   },

   computed: {},
   filters: {},
   watch: {},
   created() {
     this.iid = this.$route.params.iid
   },
   methods: {

   }
 }
</script>

<style scoped>

 
</style>
