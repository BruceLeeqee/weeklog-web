<template>
    <div>
        <mt-swipe :auto="4000">
            <swiper :lunbotulist="swipes" :isFull="true"></swiper>
        </mt-swipe>
						<ul class="mui-table-view mui-grid-view mui-grid-9">
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<router-link to="/home/newsList">
									<span class="mui-icon"><img :src="grids[0].img" alt=""></span>
									<div class="mui-media-body">日常笔记</div>
								</router-link>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<router-link to="/home/weekLog">
									<span class="mui-icon"><img :src="grids[1].img" alt=""></span>
									<div class="mui-media-body">周志复盘 </div>
								</router-link>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<router-link to="/home/photoList">
									<span class="mui-icon"><img :src="grids[2].img" alt=""></span>
									<div class="mui-media-body">图片日志</div>
								</router-link>
							</li>
                            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<router-link to="">
									<span class="mui-icon"><img :src="grids[5].img" alt=""></span>
									<div class="mui-media-body">视频中心</div>
								</router-link>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<router-link to="/home/goodsList">
									<span class="mui-icon"><img :src="grids[3].img" alt=""></span>
									<div class="mui-media-body" @click="doPlay">商品购买</div>
								</router-link>
							</li>
							<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
								<router-link to="">
									<span class="mui-icon"><img :src="grids[4].img" alt=""></span>
									<div class="mui-media-body">订单中心</div>
								</router-link>
							</li>
						</ul>
					</div>
</template>

<script>
import swiper from '../subcomponents/Swiper.vue';
export default {
    data(){
        return {
            swipes:[
                {url:'1',img:require('../../assets/imgs/3D签到墙.jpg')},
                {url:'2',img:require('../../assets/imgs/地球.jpg')},
                {url:'3',img:require('../../assets/imgs/立体代码.jpg')},
                {url:'4',img:require('../../assets/imgs/立体地图.jpg')}
            ],
            grids:[
                {url:'1',img:require('../../assets/imgs/edit.png')},
                {url:'2',img:require('../../assets/imgs/time.png')},
                {url:'3',img:require('../../assets/imgs/image.png')},
                {url:'4',img:require('../../assets/imgs/cart_empty.png')},
                {url:'5',img:require('../../assets/imgs/order.png')},
                {url:'6',img:require('../../assets/imgs/play.png')},
            ]
        }
    },
    components:{
        swiper
    },
    methods:{
        doPlay(){
            document.getElementById('video').play();
        }
    }
}
</script>

<style lang="scss" scoped>
    .mint-swipe{
        height: 200px;

        .mint-swipe-item{
             background-color:burlywood;
        }
    }
    img{
        width: 100%;
        height: 100%;
    }
    .mui-grid-9{
        background-color: white;
        border: none;
        padding:0px;
    }
    .mui-grid-9 .mui-col-sm-3{
        border: none;
        margin: 0px;
        padding:0px;
        .mui-media-body{
            font-size: 16px;
        }
    }
</style>