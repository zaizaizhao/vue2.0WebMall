<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <HomeSwiper :banner="banner"></HomeSwiper>
    <RecommendView :recommend="recommend"></RecommendView>
    <FeatherView></FeatherView>
    <TabControl class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></TabControl>
    <goods-list :goods="showGoods"/>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul> 
  </div>
</template>

<script>
  import {getHomeMultidata, getHomeGoods} from 'network/home'
  
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './homeChild/HomeSwiper'
  import RecommendView from './homeChild/RecommendView.vue' 
  import FeatherView from './homeChild/FeatherView' 
  import TabControl from 'components/common/TabControl/TabControl'
  import {GoodsList, GoodsListItem} from 'components/content/goods/index'

	export default {
    name: "Home",
    data() {
      return {
        result:null,
        banner:[],
        recommend:[],
        goods:{
          "pop":{page:0,list:[]},
          "new":{page:0,list:[]},
          "sell":{page:0,list:[]},
        },
        CurrentType:"pop",
        saveY:0
      }
    },
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatherView,
      TabControl,
      GoodsList,
      GoodsListItem
    },
    computed:{
      showGoods(){
        return this.goods[this.CurrentType].list
      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoods('sell')
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      // console.log(this.$router);
    },
    destroyed(){
      console.log("销毁了");
      
    },
    activated(){
      console.log("activated");
      
    },
    deactivated(){
      console.log("deactivated");
      
    },
    methods:{
      tabClick(key){
        console.log(key);
        switch(key){
          case 0:
            this.CurrentType="pop"
            break
          case 1:
            this.CurrentType = "new"
            break
          case 2:
            this.CurrentType = "sell"
            break
        }
      },
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          // console.log(res)
          this.banner = res.data.banner.list
          this.recommend = res.data.recommend.list
          console.log(this.recommend);
          
          // this.recommend = res.data.recommend.list
        //不应该在这里进行处理，应该存在data里面
        })
        
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1 
        getHomeGoods(type,page).then(res=> {
          console.log(res);
          
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
        })
      }
      
    }
	}
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }
  .home-nav {
    color: aliceblue;
    background-color: var(--color-tint);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 2;
  }
</style>