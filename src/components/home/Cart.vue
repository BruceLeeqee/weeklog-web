<template>
      <div >
            <div class="mui-card">
				<form class="mui-input-group">
					<div class="mui-input-row mui-checkbox mui-left" v-for="car in cars" :key="car.id+car.color+car.config">
                                    <div class="car-container">
                                         <div class="car-left">
                                              <input class="btn" name="checkbox" type="checkbox" 
                                                     v-model="$store.getters.getGoodsMap2[car.id+car.color+car.config]"
                                                     @click="doCheckBox(car)">
                                              <img :src="car.imgurl">
                                         </div>
                                         <div class="car-right">
                                              <div class="car-title">
                                                   <h3 class="title">{{car.name}}</h3>
                                              </div>
                                              <div class="car-body">
                                                    <span class="sell">￥{{car.sell}}</span>
                                                    <span>
                                                    <numbox class="numbox" :car="car" :nums="$store.getters.getGoodsMap[car.id+car.color+car.config]" @func="getSelectedNum"></numbox>
                                                    </span>
                                                    <a href="#" class="del">删除</a>
                                              </div>
                                         </div>
                                    </div>
					</div>
				</form>
		</div>

            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner buy">
						<div class="buy-left">
                                          <div buy-title>
                                          总计(不含运费)
                                          </div>
                                          <br>
                                          <div buy-body>
                                          已勾选商品{{$store.getters.selectedGoodsSum.sum}}件，总价￥{{$store.getters.selectedGoodsSum.totalPrice}}
                                          </div>
                                    </div>
                                    <mt-button class="order-class" type=danger>去结算</mt-button>
					</div>
				</div>
		</div>
      </div>
</template>

<script>
import numbox from '../subcomponents/NumberBox.vue';

export default {
    data(){
          return{
              count:'',
              cars:[], //存储商品
              settle:{}
          }
    },
    created(){
      this.getAllGoods();
    },
    methods:{
          getSelectedNum(count){
               this.count=count;
          },
          getAllGoods(){
               this.cars=this.$store.state.cars;
            //    this.cars.forEach(item=>{
            //          alert(item.count);
            //    })
            //    alert(JSON.stringify(this.$store.getters.getGoodsMap));
          },
          doCheckBox(car){
                this.$store.commit('updateGoodsSelected',car);
          }
    },
    components:{//注册子组件
        numbox
   },
}
</script>


<style lang="scss" scoped>
      .mui-card{
            .mui-input-row{
                  height: 70px;
            }
            
      }
      .car-container{
            display: flex;
            justify-content: inline;
            .car-left{
                .btn{
                  margin-top: 15px;
                }
                img{
                    width: 50px;
                    height: 50px;
                    margin-left: 50px;
                    margin-top:10px;
                  }
            }
            .car-right{
                 .title{
                       font-size: 12px;
                       font-weight: bold;
                 }
                 .car-body{
                       display: flex;
                       margin-top: 15px;
                       .sell{
                             margin-top: 5px;
                       }
                       .del{
                             line-height: 30px;
                             margin-left: 10px;
                       }
                 }
            }
      }
      .buy{
            display: flex;
            justify-content: space-between;
            height: 100px;
            .buy-left{
                  margin: 0px;
                  padding:0px;
            }
            .order-class{
                 margin-top: 20px;
            }
      }
</style>