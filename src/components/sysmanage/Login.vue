<template>
    <div class="login-container">
        <div class="mui-content mui-content-main">
	    <form class="mui-input-group3">
			<h3 class="title">登陆页面</h3>
		</form>
		<form class="mui-input-group">
			<div class="mui-input-row">
				<label>手机号</label>
				<input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入账号" v-model="loginData.username">
			</div>
			<div class="mui-input-row">
				<label>密码</label>
				<input  type="password" class="mui-input-clear mui-input" placeholder="请输入密码" v-model="loginData.password">
			</div>
			<div class="mui-input-row image-code">
				<div class="image-code-title">
                    <label>验证码</label>
					<input  type="password" class="mui-input-clear mui-input img-input" placeholder="请输入验证码" v-model="loginData.imageCode">
				</div>
				<div class="image-code-body">
                       <img src="http://localhost:80/code/image?width=120">
				</div>
			</div>
		</form>
		<form class="mui-input-group2">
			<mt-button type="primary" size="large" class="login" @click="doLogin">登陆</mt-button>
			<div class="link-area"><a href="#/register" id='reg'>注册账号</a> <span class="spliter">|</span> <a id='forgetPassword'>忘记密码</a>
			</div>
		</form>
	</div>
	</div>
	
</template>

<script>
// 既然我们知道axios post方法默认使用application/json格式编码数据
//那么解决方案就有两种，一是后台改变接收参数的方法
//另一种则是将axios post方法的编码格式修改为application / x- WWW窗体-urlencoded，这样就不需要后台做什么修改了
import qs from 'qs'

export default {
    data(){
		return{
            loginData: {
                 username:'',
				 password: '',
				 imageCode:'',
            }
		}
	},
	//  this.$post("/login/password",qs.stringify(obj)).then(response=>{
	//      if(response.data.code == 200){
	//         this.$router.push('/member')
	//      }else{
	//         this.$router.push('/login')
	//      }
	// })
	methods:{
        doLogin(){
			var obj={
                username : this.loginData.username,	
				password : this.loginData.password,
				imageCode:this.loginData.imageCode
			}
			// if(this.loginData.imageCode ==null || this.loginData.imageCode.length == 0){
			// 	 alert("请输入验证码")
			// 	 return;
			// }
		    this.$axios({
					method:"post",
					url : "/user/login",
					data: qs.stringify(obj)
				}).then((response) => {
					this.loginData.imageCode ==null;
					if(response.data.code == 200){
						sessionStorage.setItem("access_token",response.data.data.access_token);
						sessionStorage.setItem("token_type",response.data.data.token_type);
						sessionStorage.setItem("refresh_token",response.data.data.refresh_token);
						sessionStorage.setItem("expires_in",response.data.data.expires_in);
						this.$router.push('/member')
					}else if(response.data.code == 500){
                        alert(response.data.msg)
					}else{
						this.$router.push('/login')
					}
			})
		}
	}
}
</script>

<style lang="scss" scoped>
    *{
		margin: 0px;
		padding: 0px;
	}
	.switch-container{
		display: inline-block;
		padding: 20px;
	    .switch-body{
		    width: 100px;
			height: 30px;
	    }
		.mui-checkbox{
			height: 100%;
		}
	}
	.image-code{
		display: flex;
		justify-content: space-between;
		.image-code-title{
			width: 300px;
		}
		img{
			width: 100%;
			height: 100%;
		}
		.image-code-body{
			width: 100px;
		}
		.img-input{
			display: inline-block;
			width: 145px;
		}
	}
    .title{
		text-align: center;
		font-size: 25px;
		font-weight: 500;
		// 此处值得注意
		line-height: 100px; 
	}
	.login-container{
		padding: 5px;
	}
	.mui-input-group2{
		margin-top: 50px;
		background-color: white;
	}
	.mui-input-group3{
		background-color: white;
		margin-bottom: 50px;
	}
	.mui-input-group1{
		margin-top: 50px;
		background-color: white;
	}
	.switch-container{
		display: flex;
		justify-content: space-between;
		padding: 10px;
	}
	.link-area{
		line-height: 50px;
		text-align: center;
	}
</style>