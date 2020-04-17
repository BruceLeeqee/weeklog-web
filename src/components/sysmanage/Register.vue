<template>
    <div class="login-container">
        <div class="mui-content mui-content-main">
	    <form class="mui-input-group3">
			<h3 class="title">注册页面</h3>
		</form>
		<form class="mui-input-group">
			<div class="mui-input-row">
				<label>昵称</label>
				<input  type="text" class="mui-input-clear mui-input" placeholder="请输入昵称" v-model="loginData.nickname">
			</div>
            <div class="mui-input-row">
				<label>手机号</label>
				<input  type="text" class="mui-input-clear mui-input" placeholder="请输入手机号" v-model="loginData.phone">
			</div>
			<div class="mui-input-row">
				<label>验证码</label>
				<input  type="password" class="mui-input-clear mui-input" placeholder="请输入验证码" v-model="loginData.password">
			</div>
		</form>
        <br>
        <br>
		<form class="mui-input-group">
			<mt-button type="primary" size="large" class="register" @click="doRegister">注册</mt-button>
		</form>
	</div>
	</div>
	
</template>

<script>
// 既然我们知道axios post方法默认使用application/json格式编码数据
//那么解决方案就有两种，一是后台改变接收参数的方法
//另一种则是将axios post方法的编码格式修改为application / x- WWW窗体-urlencoded，这样就不需要后台做什么修改了
import qs from 'qs'

const ax = require('axios');
const axios = ax.create({
   baseURL: 'http://192.168.43.30:80',
   timeout: 10000,
 });

export default {
    data(){
		return{
            loginData: {
                 nickname:'',
                 phone: '',
                 password: ''
            }
		}
	},
	methods:{
		doRegister(){
			var obj={
                nickname : this.loginData.nickname,
                phone : this.loginData.phone,
                password : this.loginData.password
			}
			axios({
             method:"post",
             url : "/user/register",
             data: qs.stringify(obj)
           }).then((response) => {
             alert(JSON.stringify(response.data));
             if(response.data.code == 200){
                 this.$router.push('/login')
             }else{
                 this.$router.push('/register')
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
        font-size: 16px;
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
		margin-top: 25px;
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