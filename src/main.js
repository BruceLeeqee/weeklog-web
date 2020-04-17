//导入Vue
import Vue from 'vue';
//导入vue-router
import VueRouter from 'vue-router';
Vue.use(VueRouter);
/**
 * 重写路由的push方法
 * 在VUE项目中点击两次路由切换是不被允许的
 */
Vue.config.productionTip = false
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
//导入Vuex
import Vuex from 'vuex';
Vue.use(Vuex);
//导入MintUI
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

//导入axios
import qs from 'qs'
const Base64 = require('js-base64').Base64
Vue.use(qs)
import axios from 'axios'
axios.defaults.baseURL = 'http://192.168.43.30:80';
axios.defaults.withCredentials=true;
Vue.prototype.$axios=axios

//发起请求前进行相应处理
axios.interceptors.request.use(
   config => {
      // var obj="weeklog:weeklogsecret";
      // var auth=Base64.encode(obj);
      // //如果是登陆页面，则请求token
      // if(config.url=="/user/login"){
      //    config.headers = {
      //       'Content-Type':'application/x-www-form-urlencoded',
      //    }
      //    config.headers.Authorization="Basic "+auth;
      // }
      
      if(config.url=="/user/login"){
         config.auth={
            username:'weeklog',
            password:'weeklogsecret'
         }
      }else{
         config.headers = {
            'Content-Type':'application/json;charset=UTF-8',
         };
         config.headers.Authorization="bearer "+sessionStorage.getItem("access_token");
      }
      // alert(sessionStorage.getItem("access_token"));
      return config; 
});
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// import {post,fetch,patch,put} from "./http.js";
// Vue.prototype.$axios=axios;
// Vue.prototype.$post=post;
// Vue.prototype.$fetch=fetch;
// Vue.prototype.$patch=patch;
// Vue.prototype.$put=put;

import "./assets/css/mui.css";
import "./assets/css/icons-extra.css";

//按需导入组件
import { Header,Swipe, SwipeItem,Button,Lazyload,Field,Checklist } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Checklist.name, Checklist);
Vue.use(Lazyload);
Vue.component(Field.name, Field);

import router from './router.js';
Vue.use(router);

//导入组件
import App from './App.vue';
import { Alert } from 'element-ui';

Vue.filter('dataFormat',function(dataStr,pattern=""){
     var dat=new Date(dataStr);
     var year=dat.getFullYear();
     var month=dat.getMonth();
     var day=dat.getDay();
     if(pattern.toLowerCase() === 'yyyy-mm-dd'){
        return year+"-"+month+"-"+day;
     }else if(pattern.toLowerCase() === 'hh:mm:ss'){
         var hours=dat.getHours();
         var minute=dat.getMinutes();
         var second=dat.getSeconds();
         return hours+":"+minute+":"+second;
     }else{
        var hours=dat.getHours();
        var minute=dat.getMinutes();
        var second=dat.getSeconds();
        return year+"-"+month+"-"+day+" "+hours+":"+minute+":"+second;
     }
});

Vue.filter('dataLengthFormat',function(dataStr){
      var hours=parseInt(dataStr/3600);
      var minutes=parseInt(dataStr%3600/60);
      var seconds=parseInt(dataStr%3600%60);
      return hours+":"+minutes+":"+seconds;
});

var init=JSON.parse(localStorage.getItem('cars') || '[]');

//跨组件共享数据
const store = new Vuex.Store({
     state:{
        skus:[], //保存选中多个商品的多种参数{'商品id':{color:'',config:''}}
        cars:init,  //保存多个商品
        map:{}, //{商品id:购买数量}
        map2:{}, //存储{商品id:选中状态参数}
     },
     mutations:{
        /** 若有相同商品，则替换为新key值 */
        saveSku(state,sku){
            state.skus.forEach(function(item,index,arr){
               //删除商品id和配置相同的 数据
               if(item.id == sku.id && item.keya == sku.keya){
                   arr.splice(index,1);
               }
            });
           state.skus.push(sku);
         //   alert(JSON.stringify(state.skus));
        },
        /** 1. 若购物车有该商品，累加数量即可
         *  2. 若购物车没有该商品，则save进去即可
         *  3. 购物车重新刷新页面应该都在，故应该本地持久化
         *  4. 刚进入网站时，应该将本地存储存入vuex中(内存) 
         */
        saveToCar(state,good){
            var tag=false; //默认购物车没有该商品
            state.cars.some(item=>{
               if(item.id == good.id && item.color == good.color && item.config == good.config){
                     tag=true;
                     item.count += good.count;
                     return true;  //停止遍历
               }
            });
            if(!tag){
               state.cars.push(good);
            }
            localStorage.setItem('cars',JSON.stringify(state.cars));
            // alert(JSON.stringify(state.cars));
        },
        updateGoodsCount(state,obj){
         //   alert(JSON.stringify(obj))
            state.cars.forEach(item=>{
               if(item.id==obj.id && item.color==obj.color && item.config==obj.config){
                  item.count=obj.count;
               }
            });
            // alert(JSON.stringify(state.cars))
            localStorage.setItem('cars',JSON.stringify(state.cars));
        },
        updateGoodsSelected(state,obj){
         state.cars.forEach(item=>{
            if(item.id==obj.id && item.color==obj.color && item.config==obj.config){
               item.selected=!item.selected;
            }
         });
         // alert(JSON.stringify(state.cars))
         localStorage.setItem('cars',JSON.stringify(state.cars));
        }
     },
     getters:{
       //需要动态更新的数据
       //计算购物车徽标个数时
       getGoodsCount(state){
          var sum=0;
          state.cars.forEach(item=>{
             sum+=parseInt(item.count);
          });
          return sum;
       },
       //计算商品购买数量的对应关系  标签直接使用
       getGoodsMap(state){
         state.cars.forEach(item=>{
            state.map[item.id+item.color+item.config]=item.count;
         });
         return state.map;
       },
       //计算商品选中状态的对应关系
       getGoodsMap2(state){
         state.cars.forEach(item=>{
            state.map2[item.id+item.color+item.config]=item.selected;
         });
         return state.map2;
       },
       //计算选中商品总价和个数
       selectedGoodsSum(state){
         var settle={
            sum:0,
            totalPrice:0,
            goods:[]
         };
         state.cars.forEach(item=>{
             if(item.selected){
                settle.sum+=parseInt(item.count);
                settle.totalPrice+=(parseInt(item.sell)*parseInt(item.count));
                settle.goods.push(item);
             }
         })
         // alert(JSON.stringify(state.cars));
         return settle;
       }
     }
})

var vue=new Vue({
    el:"#app",
    render:c=>c(App),
    router,        //vue-router
    store:store,   //vuex             同样可缩写成store
})