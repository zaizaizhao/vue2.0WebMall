<template>
  <tab-bar>
      <tab-bar-item link="/home">
        <img slot="item-icon" src="~assets/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/tabbar/home_active.svg" alt="">
        <div slot="item-text">主页</div>
      </tab-bar-item>
      <tab-bar-item link="/category">
        <img slot="item-icon" src="~assets/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/shopcart">
        <img slot="item-icon" src="~assets/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="~assets/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile">
        <img slot="item-icon" src="~assets/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
 export default {
   name: "MainTabBar",
   components: {
     TabBar,
     TabBarItem
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
