<template>
    <div>
        <mt-swipe :auto="4000">
                <mt-swipe-item v-for="item in lunbotulist" :key="item.url">
                    <img :src="item.img" alt="" :class="{'full':isFull}">
                </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    props:['lunbotulist','isFull'],
    methods:{

    }
}
</script>

<style lang="scss" scoped>
    .mint-swipe{
		height: 200px;
		text-align: center;
		img{
			// width: 100%;  //取消适配宽度，根据参数进行不同配置
            height: 100%;
		    margin: 0px;
		    padding: 0px;
		}
	}
    .full{
        width: 100%;
    }
</style>