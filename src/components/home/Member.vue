<template>
    <div class="container">
		<div class="mui-card mui-card1">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div class="card-content">
                         <div class="img-container" @click="goLogin">
                               <img :src="user.head_img" alt="">
							   <p class="img-title" v-if="! isSuccess">点击登陆</p>
							   <p class="img-title" v-if="isSuccess">{{user.nickname}}</p>
						 </div>
					</div>
				</div>
			</div>
		</div>

		<div class="mui-card2">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<mt-cell title="我的爱好" to="/test" is-link> </mt-cell>
					<mt-cell title="我的信息" to="/login" is-link> </mt-cell>
					<mt-cell title="浏览历史" to="/login" is-link> </mt-cell>
				</div>
			</div>
		</div>
        <br>
		<br>
		<br>
		<br>
		<div class="mui-card2">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<mt-cell title="设置" to="/login" is-link> </mt-cell>
					<mt-cell title="问题反馈" to="/login" is-link> </mt-cell>
				</div>
			</div>
		</div>
		
    </div>
</template>

<script>
import qs from 'qs'
export default {
    data(){
        return{
			 isSuccess:false,
			 user:{
				 head_img:"../../assets/imgs/grey.jpg",
				 nickname:""
			 }
        }
	},
	methods:{
	    goLogin(){
			this.$router.push("/login");
		},
		getMe(){
            this.$axios({
				method:"GET",
				url : "/user/me",
				param:{

				}
			}).then((response) => {
				if(response.data.code == 200){
					this.isSuccess=true;
					this.user.nickname=response.data.data.nickname;
					if(response.data.data.headImg != null){
                         this.user.head_img=response.data.data.headImg;
					}
					this.$router.push('/member')
				}else{
					this.$router.push('/login')
				}
			})
		}
	},
	mounted(){
		// alert(JSON.stringify(sessionStorage.getItem("access_token")));
	    this.getMe();
	}
}
</script>

<style lang="scss" scoped>
     *{
		 margin: 0px;
		 padding: 0px;
	 }
     .mui-card1{
		 height: 220px;
		 background-image: url("../../assets/imgs/flower.jpg");
		 position: relative;
		 .card-content{
			width: 98%;
			height: 210px;
			position: absolute;
			top: 5px;
			left: 5px;
			// opacity: 0.5;
			background: rgba(124, 122, 122, 0.5);
		 }
		 .img-container{
		    position: absolute;
            width: 100px;
			height: 100px;
			background-position: center center;
			z-index: 99;
			top: 50%;
			margin-top: -60px;
			left: 50%;
			margin-left: -50px;
			img{
				width: 100%;
				height: 100%;
			    border-radius: 50%;
			}
			.img-title{
				font-size: 16px;
				font-weight: bold;
				text-align: center;
				color: black;
			}
		 }
	 }
	 .mui-card2{
		 background-color:grey;
		 height: 100%;
	 }
     

</style>