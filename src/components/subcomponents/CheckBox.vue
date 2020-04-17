<template>
	<div class="sku-color">
			<div @click="selectSku" :class="{'checkboxa':status,'tag':true}">
				<label>{{value}}</label>
			</div>
	</div>
</template>

<script>
export default {
    data(){
        return{
		   status:false,
		   sku:{} //{商品id:{key:value}}
        }
    },
    methods:{
       selectSku(){
		  //1. 控制复选框的状态
		  this.status=!this.status;
		  //2. 选中，则将数据保存到vuex,未选中，则将数据从vuex删除
		  let d={};
		  var k=this.keya;
		  var id=this.goodsid;
		  d[k]=this.value;
		  this.sku[id]=d;
		  //alert(JSON.stringify(this.sku));
		  this.$store.commit('saveSku',this.sku);
       }
    },
    props:['goodsid','keya','value']
}
</script>

<style lang="scss" scoped>
    .sku-color{
   	.tag{
		font-size: 14px;
		background-color:rgb(211, 189, 189);
		height: 25px;
		width: 92px;
		border-radius: 5px;
		text-align: center;
        margin: 5px 5px;
	}
	.checkboxa{
		border:1px solid red;
		background-color:white;
	}
    }
</style>