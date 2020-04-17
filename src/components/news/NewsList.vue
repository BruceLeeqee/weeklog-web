<template>
    <div class="news-container">
        <ul v-for="item in information" :key="item.id">
            <router-link class="mui-table-view-cell mui-media" :to="'/home/newsInfo'+item.id" tag="li">
			    <img class="mui-media-object mui-pull-left" :src="item.imgurl">
					<h4>{{item.title}}</h4>
					<div class="mui-media-body">
                        	<span>发表时间:{{item.cdate | dataFormat}}</span>
                        	<span>点击次数:{{item.dtimes}}</span>
					</div>
	   		</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            information:[
                {
                 id:"1",
                 imgurl:"https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2838019971,3565088188&fm=173&app=49&f=JPEG?w=312&h=208&s=2220CDA5540210E250B888B003004003",
                 title:"我们中国人最能明白：苏莱曼尼之死，却是伊拉克之殇",
                 cdate: Date.now(),
                 dtimes:123
                },{
                 id:"2",
                 imgurl:"https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3507838993,3176122398&fm=173&app=49&f=JPEG?w=312&h=208&s=2520EDB5D4C3BEE34C09982303003061",
                 title:"真打起来了，伊朗向美军发射数十枚导弹！战争还可能扩大",
                 cdate:Date.now(),
                 dtimes:999   
                }
            ],
        };
    },
    methods:{
        
    }
}
</script>

<style lang="scss" scoped>
    ul{
       list-style: none;
       margin: 0px;
       padding: 0px;
    }
    img{
        width: 60px;
        height: 60px;
    }
    p{
         word-wrap:break-word;
    }
    .mui-media-body{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
    }
</style>