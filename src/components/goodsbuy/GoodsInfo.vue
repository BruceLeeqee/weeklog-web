<template>
    <div goodsinfo-container>
		<!-- 小球动画 -->
		<transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
		    <div class="bobble" v-show="flag" ref="bobbleRef"></div>
		</transition>
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<swiper :lunbotulist="goods.swipes" :isFull="false"></swiper>
				</div>
			</div>
		</div>
		<div class="goods-info">
            <div class="mui-card">
				<div class="mui-card-header">
					<h1 class="goods-name">{{goods.detail.goodsName}}</h1>
				</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<div class="goods-price">
                            <p>
								<span class="sell">销售价:￥{{goods.detail.sell}}</span>
								<span class="price">市场价:￥{{goods.detail.price}}</span>
							</p>
							<p class="buynums">
								<span>购买数量:</span>
								<numbox class="numbox" @func="getSelectedNum"></numbox>
							</p>
						</div>
					</div>
				</div>
				<div class="mui-card-footer">
					<mt-button type="primary" class="buy" v-if="type=='00'">立即购买</mt-button>
					<mt-button type="primary" class="buy" v-if="type=='11'">立即秒杀</mt-button>
					<mt-button type="danger" class="car" @click="doBobble">加入购物车</mt-button>
				</div>
		</div>
		
		<div class="mui-card">
				<div class="mui-card-header">
					<h3 class="goods-name">商品参数</h3>
				</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<div class="goods-sku">
                            <div>货号:&nbsp;&nbsp;&nbsp;&nbsp;{{goods.detail.id}}</div>
							<div class="color-container">
							   <div class="color-title">颜色: </div>
                               <radioBox :keya="'color'" :name=goods.detail.color :id="goods.detail.id" ></radioBox>
							</div>
							<div class="color-container">
							   <div class="color-title">配置: </div>
                               <radioBox :keya="'config'" :name=goods.detail.config :id="goods.detail.id" ></radioBox>
							</div>
						</div>
					</div>
			</div>
		</div>
		<div class="mui-card go-footer">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<div>
		                      <mt-button class="go-desc" @click="goDesc" type="primary" size="large" plain>图文介绍</mt-button>
		                      <mt-button class="gp-comment" @click="goComm" type="primary" size="large" plain>商品评论</mt-button>
		               </div>
					</div>
				</div>
		</div>
		
		<div class="miaosha" v-show="type==11">
			<div class="content">
				<span v-if="miaoshastatus==='00'" class="countDown">秒杀倒计时
					<br>
					&nbsp;&nbsp;&nbsp;&nbsp;<span class="countDown">{{remainSeconds|dataLengthFormat}}</span></span>
				<span v-if="miaoshastatus==='11'" class="countDown">秒杀进行中</span>
				<span v-if="miaoshastatus==='22'" class="countDown">秒杀已结束</span>
			</div>
		</div>
		</div>
    </div>
</template>

<script>
import swiper from '../subcomponents/Swiper.vue';
import numbox from '../subcomponents/NumberBox.vue';
import checkBox from '../subcomponents/CheckBox.vue';
import radioBox from '../subcomponents/RadioBox.vue';
export default {
    data(){
		return{
			id: this.$route.params.id, //使用id来接收路由参数
			type:this.$route.params.type,
			flag:false, //控制按钮是否隐藏
			goods:{
			    swipes:[
                    {url:'1',img:require('../../assets/imgs/phone01.jpg')},
                    {url:'2',img:require('../../assets/imgs/phone02.jpg')},
                    {url:'3',img:require('../../assets/imgs/phone03.jpg')},
                    {url:'4',img:require('../../assets/imgs/phone04.jpg')}
				],
				detail:{
					id:'564564654654',
					goodsName:'华为mate30',
					sell:'5000',
					price:'6000',
					color:['红色','黑色','白色'],
					config:['8GB+64GB','16GB+128GB','32GB+256GB'],
					imgurl:require('../../assets/imgs/phone02.jpg'),
					startTime: '2020-2-5 18:30:00',
					endTime: '2020-2-30 12:23:00'
				}
			},
			count:1,
			miaoshastatus:'00',  //必须是单引号，因为是字符串模板，必须一致
			remainSeconds:0    //毫秒
		}
	},
	components:{//注册子组件
        swiper,numbox,checkBox,radioBox
	},
	methods:{
		goDesc(){
			this.$router.push("/home/goodsDesc"+this.id);
		},
		goComm(){
			alert("");
		},
		doBobble(flag){  
			//首先实现小球隐藏，显示，启动动画
			this.flag=!this.flag;
			//生成商品对象
			var good={};
			good.id=this.id;
			good.name=this.goods.detail.goodsName;
			good.sell=this.goods.detail.sell;
			good.imgurl=this.goods.detail.imgurl;
			good.selected=true; //默认选中
			var skus=this.$store.state.skus;
			if(skus!=null){
            skus.forEach(ele => {
				if(ele.keya =='color'){
                    good.color=ele.value;
				}else if(ele.keya =='config'){
                    good.config=ele.value;
				}
			});
			}
			good.count=this.count;
			//将商品对象存入vuex中，当作购物车数据
			this.$store.commit('saveToCar',good);
             
		},
		beforeEnter(el){ //el标识js原生对象s
            el.style.transform = "translate(0,0)"
		},
		enter(el,done){  //定义进入终点
			el.offsetWidth;
            //应该根据徽标和小球的位置
            const ballPosition=this.$refs.bobbleRef.getBoundingClientRect();
			const badgePosition=document.getElementById("myBadge").getBoundingClientRect();
			// alert(JSON.stringify(badgePosition));

			var xd=badgePosition.left-ballPosition.left;
			var yd=badgePosition.top-ballPosition.top;
			// alert(xd);
			// alert(yd);
			el.style.transform = `translate(${xd}px,${yd}px)`;
			el.style.transition = "all 1s ease";

			done(); //调用下面函数
		},
		afterEnter(el){
            this.flag=!this.flag; //将小球转为隐藏
		},
		getSelectedNum(count){ //子组件调用，将数据传递进来
            this.count=count;
		},
		countDown(){
		   var now = new Date().getTime();
		   var start = new Date(this.goods.detail.startTime).getTime();
           var end=new Date(this.goods.detail.endTime).getTime();
			this.remainSeconds=(start-now)/1000; //倒计时秒数
			if(parseInt(this.remainSeconds)>0){ //秒杀倒计时
			    this.miaoshastatus='00';
				setTimeout(() => {
					this.remainSeconds-=1;
					// console.log(this.remainSeconds);
                    this.countDown();
				}, 1000);
			}else if(now>=start && now <=end){ //秒杀进行中countDown
                this.miaoshastatus='11';
			}else{//
                this.miaoshastatus='22';
			}
		}
	},
	//Ps: 首先做一件事情的时候，不应该盲目的去做，应该首当其冲的去想，脑子里面出现大概的思路。
	// setTimeout延时一段时间执行
	mounted(){ 
		// alert(this.type);
		this.countDown();
	}
}
</script>

<style lang="scss" scoped>
    .goods-name{
		font-size: 16px;
	}
    .goods-info{
	   .mui-card-content-inner{
		 padding-bottom: 8px; 
		.price{
			font-size: 13px;
			margin-left: 10px;
			text-decoration: line-through;
		}
		.sell{
			color: red;
			font-weight: bold;
		}
		.buynums{
			display: flex;
            .numbox{
				margin-left: 10px;
			}
		}
    }
	// 找一个能把div撑开的地方，再进行定位
    .miaosha{
		position: absolute;
		width: 100px;
		height: 60px;
		top: 240px;
		right: 0px;
		font-size: 16px;
		font-weight: bold;
		color: grey;
	}

  	.mui-card-footer{
		    display: inline;
			.buy{
                height: 35px;
				font-size: 16px;
				margin: 12px 0px;
			}
			.car{
                height: 35px;
				font-size: 16px;
				margin: 12px 0px;
			}
     	}
	}
	//颜色和配置inline
    .color-container{
		display: flex;
	}
	.color-title{
		width: 60px;
	}

    .go-footer{
		margin: 10px;
		margin-bottom: 20px;
		.go-desc{
			height: 40px;
			margin-bottom: 10px;
		}
		.go-comment{
			height: 40px;
		}
	}

    //小球动画
    .bobble{
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background-color:red;
		position: absolute;
		left: 148px;
		top: 390px;
		z-index: 999;
	}

</style>