<template>
    <div class="photolist-container">
        <div id="slider" class="mui-slider photo-title">
		  <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
			<div class="mui-scroll">
				<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
					合照
				</a>
				<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
					红红
				</a>
				<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
					琦琦
				</a>
				<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
					风景
				</a>
				<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
					娱乐
				</a>
			</div>
		  </div>
        </div>
        <ul class="photo-list">
            <router-link v-for="item in photolists" :key="item.id" :to="'/home/photoInfo'+item.id" tag="li">
                <img v-lazy="item.url">
                <div class="info">
                    <h1 class="info-title">{{item.info_title}}</h1>
                    <div class="info-body">{{item.info_body}}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>

import mui from '../../assets/js/mui.min.js';
// import '../../assets/js/mui.min.js';
mui('.mui-scroll-wrapper').scroll({
    deceleration:0.0005
})

export default {
    data(){
        return{
            photolists:[
               {id:"1",url:require('../../assets/imgs/honghong.jpg'),info_title:"O(∩_∩)O",info_body:"红红,你好啊,红红,你好啊,红红,你好啊,红红,你好啊,红红,你好啊,红红,你好啊,"},
               {id:"2",url:require('../../assets/imgs/红红02.jpg'),info_title:"O(∩_∩)O",info_body:"红红,你好啊,红红,你好啊,红红,你好啊,红红,你好啊,红红,你好啊,红红,你好啊,"},
               {id:"3",url:require('../../assets/imgs/红红03.jpg'),info_title:"O(∩_∩)O",info_body:"红红,你好啊,红红,你好啊,红红,你好啊,红红,你好啊,红红,你好啊,红红,你好啊,"},
               {id:"4",url:require('../../assets/imgs/红红04.jpg'),info_title:"O(∩_∩)O",info_body:"红红,你好啊,红红,你好啊,红红,你好啊,红红,你好啊,红红,你好啊,红红,你好啊,"},
               {id:"5",url:require('../../assets/imgs/红红05.jpg'),info_title:"O(∩_∩)O",info_body:"红红,你好啊,红红,你好啊,红红,你好啊,红红,你好啊,红红,你好啊,红红,你好啊,"},
            ]
        }
    },
    mounted(){ //组件渲染好挂载到页面中
        mui('.mui-scroll-wrapper').scroll({  //初始化滚动条
        deceleration:0.0005
    })
    }
}
</script>

<style lang="scss" scoped>
    .photo-list{//先保证ul左右上下无缝连接
        list-style: none;
        background-color:white;
        margin: 0px;  //组件内设置margin为0px
        padding:10px; //组件内设置padding为10px
        padding-bottom: 0px; //强制设置最后一张照片得padding
        li{
           background-color: #999;
           text-align: center; //li居中显示，如果图片比较小，会显示到ul得左侧
           margin-bottom: 10px; //设置图片上下间隔，导致ul多了10像素
           box-shadow: 0 0 10px #999;
           position: relative;
        img{
           width: 100%;
           height: 100%;
           vertical-align:middle; //消除上下标签不兼容
        }
        img[lazy=loading] {
           width: 40px;
           height: 300px;
           margin: auto;
        }
        }
    }
    /**怎么设置文字显示到图片数上
    1. 设置ul相对定位
    2. 设置文字绝对定位 */
    /** 绝对定位不占位置完全浮动，相对定位占据位置
        子绝父相: 父元素占位置，子元素根据父元素定位
                  
        绝对定位:相对于最近已定位得祖先元素，与文件流无关
        因为与文件流无关，所以可以覆盖页面上其他元素
        设置z-index属性(标签到底在第几层)控制这些层得对方顺序
        特点：1. 不占用原来得位置，从浏览器出发
              2. 嵌套盒子，父盒子没有使用定位，子盒子决定定位，滋贺子从浏览器触发
              3. 嵌套盒子，父盒子使用定位，滋贺子绝对定位，滋贺子从父元素位置出发
        相对定位：相对元素在文档中初始位置
        特点：1. 位置从自身出发
              2. */
    .info{
        position: absolute;
        bottom: 0px;
        color: white;
        text-align: left;
        background-color: rgba(117, 35, 35, 0.4);
        max-height: 100px; //设置文字最大高度，超出就不显示了
        .info-title{
            font-size: 35px;
        }
        .info-body{
            font-size: 15px;
        }
    }

    *{
        touch-action:pan-y;  //用于指定浏览器某个区域如何响应用户操作
     }
    

</style>