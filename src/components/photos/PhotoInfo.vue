<template>
    <div class="photoinfo-container">
        <h3 style="text-align:center">标题</h3>
        <p class="subtitle">
            <span>发表时间:</span>
            <span>点击次数:</span>
        </p>

        <!-- 缩略图区域 -->
        <div class="small">
            <vue-preview :slides="photoList" @close="handleClose"></vue-preview>
        </div>
        <!-- 图片内容区域 -->
        <div class="content"></div>
        
        <!-- 评论子组件,把父组件得id数据传递/赋值到子组件中 -->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>

<script>
import Vue from 'vue';
import VuePreview from 'vue-preview';
Vue.use(VuePreview);
import Comment from '../subcomponents/Comment.vue';

export default {
    data(){
        return{
          id : this.$route.params.id,
          photoList : [
               {msrc:require('../../assets/imgs/honghong.jpg'),src:require('../../assets/imgs/honghong.jpg'),info_title:"O(∩_∩)O",w:800,h:1000},
               {msrc:require('../../assets/imgs/红红02.jpg'),src:require('../../assets/imgs/红红02.jpg'),info_title:"O(∩_∩)O",w:800,h:1000},
               {msrc:require('../../assets/imgs/红红03.jpg'),src:require('../../assets/imgs/红红03.jpg'),info_title:"O(∩_∩)O",w:800,h:1000},
               {msrc:require('../../assets/imgs/红红04.jpg'),src:require('../../assets/imgs/红红04.jpg'),info_title:"O(∩_∩)O",w:800,h:1000},
               {msrc:require('../../assets/imgs/红红05.jpg'),src:require('../../assets/imgs/红红05.jpg'),info_title:"O(∩_∩)O",w:800,h:1000},
          ]
        }
    },
    methods:{
        handleClose(){
            console.log("关闭")
        }
    },
    // 注册子组件
    components:{
        "cmt-box":Comment
    },
}
</script>

<style lang="scss" scoped>
    .subtitle{
        display: flex;
        justify-content: space-between;
    }
    .small{
            /deep/ .my-gallery{   //deep深层作用选择器
                display: flex;
                flex-wrap:wrap;//默认换行
                figure{
                    width: 20%;
                    margin: 5px;
                    img{
                        width: 100%;
                        box-shadow: 0 0 8px #999;
                        border-radius: 5px;
                    }
                }
            }
        }
</style>