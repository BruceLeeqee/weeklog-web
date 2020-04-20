<template>
    <div>
         <div class="mui-numbox">
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input class="mui-input-numbox" type="number" ref="num" @change="countChanged" :value="nums"/>
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
		 </div>
    </div>
</template>

<script>
import mui from '../../assets/js/mui.min.js';
// import '../../assets/js/mui.min.js';
export default {
    data(){
        return{//props:["num"]   //   num:parseInt('0') //不用此步骤
            
        }
    },
    methods:{
         countChanged(){
            //商品详情数目框，alert(JSON.stringify(this.$refs.num.value))
            this.$emit('func',parseInt(this.$refs.num.value));
            //购物车中数目框，更新vuex中商品数目，并更新本地存储
            var obj={};
            if(this.car != undefined){
                obj.id=this.car.id;
                obj.color=this.car.color;
                obj.config=this.car.config;
                obj.count=this.$refs.num.value;
                this.$store.commit('updateGoodsCount',obj);
            }
         }
    },
    mounted(){ //声明周期函数 函数的形式
      mui(".mui-numbox").numbox();
    },
    props:['nums','car']
}
</script>

<style lang="scss" scoped>
    .mui-numbox{
        height: 30px;
    }
</style>