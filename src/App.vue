<template>
    <div class="app-container">
        <!-- 首页头部 -->
        <mt-header fixed title="移动应用" class="title"></mt-header>
        <!-- 首页视图坑 -->
        <router-view></router-view>
        <!-- 底部导航 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/calendar">
				<span class="mui-icon mui-icon-spinner mui-spin"></span>
				<span class="mui-tab-label">WeekLog</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge" id="myBadge">{{this.$store.getters.getGoodsCount}}</span>
                </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
export default {
    data(){
        return{
            badgeCount:0
        }
    },
}
</script>

<style>
    /* 设置最大层级，其他元素不会覆盖掉 */
    .mint-header{ 
		z-index: 99;
	}
    body{
        background-color: white
    }
	/* 将容器的路由视图挤出header高的长度,tab高度 */
	.app-container{
		padding-top: 40px;
		padding-bottom: 50.4px;
	}
    .mui-bar-tab .mui-tab-item1.mui-active {
    color: #007aff;
    }
    .mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
    }
    .mui-bar-tab .mui-tab-item1.mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
    .mui-bar-tab .mui-tab-item1 .mui-icon~ .mui-tab-label{
        font-size: 13px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }  
</style>