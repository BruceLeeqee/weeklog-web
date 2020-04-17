//再次导入vue-router
import VueRouter from 'vue-router';

import Memeber from './components/home/Member.vue';
import Cart from './components/home/Cart.vue';
import Search from './components/home/Search.vue';
import Home from './components/home/Home.vue';
import NewsList from './components/news/NewsList.vue';
import NewsInfo from './components/news/NewsInfo.vue';
import PhotoList from './components/photos/PhotoList.vue';
import PhotoInfo from './components/photos/PhotoInfo.vue';
import GoodsList from './components/goodsbuy/GoodsList.vue';
import GoodsInfo from './components/goodsbuy/GoodsInfo.vue';
import GoodsDesc from './components/goodsbuy/GoodsDesc.vue';
import Calendar from './components/weeklog/Calendar.vue';
import WeekLog from './components/weeklog/WeekLog.vue';
import Login from './components/sysmanage/Login.vue';
import Register from './components/sysmanage/Register.vue';


var router=new VueRouter({
    routes: [
        {path:'/',redirect:'/home'},
        {path:'/home',component:Home},
        {path:'/member',component:Memeber},
        {path:'/cart',component:Cart},
        {path:'/search',component:Search},
        {path:'/home/newsList',component:NewsList},
        {path:'/home/newsInfo:id',component:NewsInfo},
        {path:'/home/photoList',component:PhotoList},
        {path:'/home/photoInfo:id',component:PhotoInfo},
        {path:'/home/goodsList',component:GoodsList},
        {path:'/home/goodsInfo:id:type',component:GoodsInfo},
        {path:'/home/goodsDesc:id',component:GoodsDesc,name:'goodsdesc'},
        {path:'/calendar',component:Calendar},
        {path:'/home/weekLog',component:WeekLog},
        {path:'/login',component:Login},
        {path:'/register',component:Register},
    ],
    linkActiveClass:'mui-active'
})

//将路由对象暴露出去
export default router