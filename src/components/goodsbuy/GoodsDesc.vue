<template>
    <div>
        <h3>{{desc.content}}</h3>

        <hr>

        <div class="content" v-html="desc.content"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            desc:{title:"这是图文介绍页面，谢谢观看",content:"这是商品详情页"}
        }
    },
    methods:{
        
    }
}
</script>

<style lang="scss" scoped>
    
</style>