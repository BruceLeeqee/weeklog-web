<template>
    <div comment-container>
        <h3>发表评论</h3>

        <hr>

        <textarea id="comment-content" placeholder="请输入评论的内容(最多吐槽120字)">
        </textarea>

        <mt-button type="primary" size="large" @click="commentAdd">发表评论</mt-button>
        <div class="cmt-list" v-for="item in comments" :key="item.id">
            <div class="cmt-item">
                <div class="cmt-title">
                       第{{item.id}}楼:&nbsp;&nbsp;用户:{{item.username}}&nbsp;&nbsp;发表时间:{{item.cdate | dataFormat}}
                </div>
            </div>
            <div class="cmt-body">
                {{item.content}}
            </div>
        </div>

        <mt-button class="cmt-more" type="primary" size="large" plain @click="loadMore">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return{
             comments:[
                 {id:"1",username:'琦琦',cdate:Date.now(),content:'你是沙雕,哈哈哈哈哈'},
                 {id:"2",username:'红红',cdate:Date.now(),content:'你是沙雕,哈哈哈哈哈'},
             ],
             comment:{id:"3",username:'红琦',cdate:Date.now(),content:'你是沙雕,哈哈哈哈哈'}
        }
    },
    methods:{
        commentAdd(){
            this.comments.push(this.comment);
        },
        loadMore(){
            this.comments.push(this.comment);
        }
    }
}
</script>

<style lang="scss" scoped>
    .cmt-list{
        font-size: 16px;
    }
    .cmt-title{
        background-color:darkgray;
        // margin: 5px 0px;
        // padding: 2px;
        line-height: 30p;
    }
    .comment-histry{
        display: flex;
        justify-content: space-between
    }
    .cmt-body{
        line-height: 60px;
        text-indent: 2em;
    }
    textarea{
        font-size: 16px;
        height: 100px;
    }
    .cmt-more{
        margin-bottom: 55px;
    }
</style>