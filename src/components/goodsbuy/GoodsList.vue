<template>
    <div>
       <div class="goods-title">
         <div class="player">
            <video width="300" id="video"
                src="../../assets/imgs/wormhole.mp4" class="video" controls autoplay loop></video>
         </div>
        <div style="padding: 10px 10px;">
				<div id="segmentedControl" class="mui-segmented-control">
					<a class="mui-control-item mui-active" href="#item1">商品购买</a>
					<a class="mui-control-item" href="#item2">商品抢购</a>
				</div>
		</div>
       </div>
       <div id="item1" class="mui-control-content mui-active">
            <div id="scroll" class="mui-scroll-wrapper">
                <div class="mui-scroll">
                    <div class="goods-list">
                        <div class="goods-item" v-for="item in goodsLists" :key="item.url" @click="toGoodsInfo(item.id,'00')">
                            <img :src="item.url">
                            <div class="goods-info">
                                <h4 class="goods-name">{{item.goodsname}}</h4>
                                <p class="goodsprice">
                                    <span class="new">￥{{item.newprice}}</span>
                                    <del class="old">￥{{item.oldprice}}</del>
                                </p>
                                <p class="goodsstock">
                                    <span>热卖中</span>
                                    <span>热卖{{item.stock}}件</span>
                                </p>
                            </div>
                        </div>
                        <mt-button type="primary" size="large" plain>加载更多</mt-button>
                    </div>
				</div>
			</div>
		</div>
		<div id="item2" class="mui-control-content">
			<div class="goods-list">
                <div class="goods-item" v-for="item in miaoshaLists" :key="item.url" @click="toGoodsInfo(item.id,'11')">
                    <img :src="item.url">
                    <div class="goods-info">
                        <h4 class="goods-name">{{item.goodsname}}</h4>
                        <p class="goodsprice">
                            <span class="new">￥{{item.newprice}}</span>
                            <del class="old">￥{{item.oldprice}}</del>
                        </p>
                        <p class="goodsstock">
                            <span>抢购中</span>
                            <span>剩余{{item.stock}}件</span>
                        </p>
                    </div>
                </div>
                <mt-button type="primary" size="large" plain>加载更多</mt-button>
            </div>
		</div>
    </div>
    
</template>

<script>
import $ from 'jquery';

export default {
    data(){
        return {
           goodsLists:[
               {id:'1',url:require('../../assets/imgs/phone01.jpg'),goodsname:'手机',newprice:1000,oldprice:2000,stock:60},
               {id:'2',url:require('../../assets/imgs/phone02.jpg'),goodsname:'手机',newprice:1000,oldprice:2000,stock:60},
               {id:'3',url:require('../../assets/imgs/phone03.jpg'),goodsname:'手机',newprice:1000,oldprice:2000,stock:60},
               {id:'4',url:require('../../assets/imgs/phone04.jpg'),goodsname:'手机',newprice:1000,oldprice:2000,stock:60},
               {id:'5',url:require('../../assets/imgs/phone05.jpg'),goodsname:'手机',newprice:1000,oldprice:2000,stock:60},
               {id:'6',url:require('../../assets/imgs/oppo01.jpg'),goodsname:'手机',newprice:1000,oldprice:2000,stock:60},
               {id:'7',url:require('../../assets/imgs/oppo02.jpg'),goodsname:'手机',newprice:1000,oldprice:2000,stock:60},
               {id:'8',url:require('../../assets/imgs/oppo03.jpg'),goodsname:'手机',newprice:1000,oldprice:2000,stock:60},
               {id:'9',url:require('../../assets/imgs/oppo04.jpg'),goodsname:'手机',newprice:1000,oldprice:2000,stock:60},
           ],
           miaoshaLists:[
            {id:'1',url:require('../../assets/imgs/phone01.jpg'),goodsname:'手机',newprice:1000,oldprice:2000,stock:60},
               {id:'2',url:require('../../assets/imgs/phone02.jpg'),goodsname:'手机',newprice:1000,oldprice:2000,stock:60},
               {id:'3',url:require('../../assets/imgs/phone03.jpg'),goodsname:'手机',newprice:1000,oldprice:2000,stock:60},
               {id:'4',url:require('../../assets/imgs/phone04.jpg'),goodsname:'手机',newprice:1000,oldprice:2000,stock:60},
               {id:'5',url:require('../../assets/imgs/phone05.jpg'),goodsname:'手机',newprice:1000,oldprice:2000,stock:60},
               {id:'6',url:require('../../assets/imgs/oppo01.jpg'),goodsname:'手机',newprice:1000,oldprice:2000,stock:60},
               {id:'7',url:require('../../assets/imgs/oppo02.jpg'),goodsname:'手机',newprice:1000,oldprice:2000,stock:60},
               {id:'8',url:require('../../assets/imgs/oppo03.jpg'),goodsname:'手机',newprice:1000,oldprice:2000,stock:60},
               {id:'9',url:require('../../assets/imgs/oppo04.jpg'),goodsname:'手机',newprice:1000,oldprice:2000,stock:60},
           ]
        }
    },
    methods:{
        toGoodsInfo(id,type){
            this.$router.push("/home/goodsInfo"+id+type);
        }
    },
    mounted(){
        
    }
}
</script>

<style lang="scss" scoped>
    *{
        // 任何触摸事件都不会产生默认行为，但是 touch 事件照样触发
        touch-action: none; 
        margin: 1px;
        padding:0px;
    }
    .mui-card .mui-control-content {
        padding: 10px;
    }
    .mui-control-content {
        height: 1500px;
    }
    .goods-title{
        height: 190px;   
        .player-title{
           text-align: center;
        }
        .player{
            width: 300px;
            height: 130px;
            margin-left: 30px;
            border: 1px solid greenyellow;
        }
    }
    
    .goods-list{
        display: flex;
        flex-wrap: wrap;
        font-size: 12px;
        padding: 0px; //贴边对齐步骤1
        justify-content: space-between; ///贴边对齐步骤2
        margin-bottom: 10px; //上下缝隙2
        .goods-name{
            font-size: 16px;
        }
        .goods-item{
            border: 1px solid #ccc;
            width: 49%;
            margin-bottom: 4px;//上下缝隙1
            padding: 2px;
            // box-shadow:0 0 8px #999;
            display: flex;          //上下顶住1
            flex-direction: column; //上下顶住2
            justify-content: space-between; //上下顶住3
            min-height: 189px; //撑出一个框，使得小图片也有一个大框
            img{
                 width: 100%;
                 //height: 100%; //会将外盒子其余部门挤出去
            }
            .goods-info{
                margin: 0px; //外部边缘为0
                p{
                    margin-bottom: 0px;
                }
               .goodsstock{
                   display: flex;
                   justify-content: space-between;
                }
                .goodsprice{
                   font-weight: bold;
                   .new{
                      color:red;
                      font-size: bold;
                    }
                   .old{
                      margin-left: 5px;
                      font-size: 10px;
                    }
                }
            }
        }
    }
</style>