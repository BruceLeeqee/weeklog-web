<template>
    <div class="newinfo-container">
        <!-- <h2>{{id}}这是新闻明细组件</h2> -->
        <h3 class="newtitle">{{newobject.title}}</h3>
        <p class="newcontent">
            <span>发表时间:{{newobject.cdate | dataFormat}}</span>
            <span>点击次数:{{newobject.dtimes}}</span>
        </p>

        <hr>

        <div class="content" v-html="newobject.content"></div>

        <comment-box></comment-box>
    </div>
</template>

<script>
import comment from '../subcomponents/Comment.vue';

export default {
    data(){
        return{
            //将路由传递过来的数据暂存到data中，方便以后调用
            id : this.$route.params.id,
            newobject:{},
            news:[
                {
                 id:"1",
                 content:"这是新闻详情页面1<br><br><br><br><br><br>",
                 title:"苏莱曼尼之死",
                 cdate: Date.now(),
                 dtimes:123
                },{
                 id:"2",
                 content:"这是新闻详情页面2<br><br><br><br><br><br>",
                 title:"战争还可能扩大",
                 cdate: Date.now(),
                 dtimes:666 
                }
            ],
        }
    },
    created(){
        this.getNew();
    },
    methods:{
        getNew(){
            this.news.forEach(ele => {
                if(ele.id === this.id){
                    this.newobject=ele;
                }
            });
        }
    },
    components:{
        'comment-box':comment
    }
}
</script>

<style lang="scss" scoped>
    .newtitle{
        text-align: center;
        font-size: 16px;
        color: red;
    }
    .newcontent{
        display: flex;
        justify-content: space-between;
        margin: 0px;
        padding: 0px;
        color: aqua
    }
    .newinfo-container{
        margin: 0px;
        padding: 8px;
    }
</style>