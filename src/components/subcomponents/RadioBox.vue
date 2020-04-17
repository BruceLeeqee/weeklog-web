<template>
	<div class="sku-color">
        <div class="radio-container" v-for="(item,index) in name" :key="index">
            <div @click="selectSku(index,item)" :class="{'radio-item':true,checkboxa:index==cindex}">
				<label>{{item}}</label>
			</div>
        </div>
	</div>
</template>

<script>
export default {
    data(){
        return{
		   status:false,
           cindex:'999'
        }
    },
    created(){
          
    },
    methods:{
       selectSku(index,data){
          this.cindex=index; 
          //{id:商品id,keya:color,value:颜色名称}  {id:{color:颜色}}
          var obj={};
          obj.id=this.id;
          obj.keya=this.keya;
          obj.value=data;
		  this.$store.commit('saveSku',obj);
       }
    },
    props:['keya','name','id']
}
</script>

<style lang="scss" scoped>
    .sku-color{
        display: flex;
        flex-wrap: wrap;
   	.radio-item{
		font-size: 14px;
		background-color:rgb(211, 189, 189);
		height: 25px;
		width: 95px;
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