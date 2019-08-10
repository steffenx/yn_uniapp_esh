<!-- 登录 -->
<template>
	<view class="content">
		<view class="header"><text @click="reg()" class="right-text">注册</text></view>
		<view class="login-from">
			<view class="from-title">
				<text class="title">账号密码登录</text>
			</view>
			<view class="from-input">
				<view class="account-input">
					<input type="text" v-model="from.account" placeholder="请输入账号"/>
					<text class="icon" @click="delaccount(this)">&#xe63a;</text>
				</view>
				<view class="psd-input">
					<input type="text" v-model="from.password" password="" placeholder="请输入密码"/>
					<text class="icon" @click="delpsd(this)">&#xe63a;</text>
				</view>
			</view>
		</view>
		<view class="select-text">
			<text class="code" @click="vcode()">手机验证码登录</text>
			<text class="forgect" @click="forget()">忘记密码</text>
		</view>
		<view class="login-btn">
			<view class="btn" @click="login()">登录</view>
		</view>
		<view class="clause"> 
			<text class="read">登录及代表阅读并同意</text>
			<text class="agreement">服务条款</text>
		</view>
		<mpopup :show="ispop" :types="types" :span="span"></mpopup>	
	</view>
</template>

<script>
	import mpopup from '../../components/popup/popup.vue';
	import LoginP from '../../static/js/pages/login/login.js';
	import Popup from '@/static/js/components/popup/popup.js';
	
	export default {
		onNavigationBarButtonTap(val) {
			uni.navigateTo({
				url:"../login/registe"
			})
			console.log(val);
		},
		onNavigationBarSearchInputChanged (val) {
			console.log(val)
		},
		data(){
			return{
				ispop:"",//是否显示弹窗
				types:"err",//弹窗类型
				span:"这是一个土司",//弹窗内容
				appid:"wx1b7465e3f7d2e958",
				islogin:false,//是否在登录
				poptime:2000,
				from:{
					loginType:"1",
					loginWay:"2",
					account:"",
					password:"",
				},
				listArr: []
			}
		},
		components:{
			mpopup
		},
		methods: {
			//输入框清空按钮
			delaccount:function(e){
				this.from.account="";
			},
			delpsd:function(e){
				this.from.password="";
			},
			//验证码登录
			vcode:function(){
				uni.navigateTo({
					url:"../login/vcodeLogin"
				})
			},
			//忘记密码
			forget:function(){
				uni.navigateTo({
					url:"../login/forgetpsd"
				})
			},
			//注册
			reg:function(){
				uni.navigateTo({
					url:"../login/registe"
				})
			},
			//登录按钮
			login:function(){
				//是否正登录
				if(this.islogin) {
					Popup.setPopup(this,"warn","点击太快了",this.poptime);
					return;
				}
				//判断是否为空
				if(!this.from.account||!this.from.password){
					console.log("账号密码不能为空");
					Popup.setPopup(this,"warn","账号密码不能为空",this.poptime);
					return;
				}
				this.islogin=true;//在登录
				//传入p层处理
				LoginP.login(this,this.from,(revert)=>{
					if(revert){
						uni.switchTab({
							url:"pages/index/index"
						})
					}
				});
				//4s后可登录
				setTimeout(()=> {
					this.islogin=false;
				}, 4000);
			}
		}
	}
</script>

<style scoped>
	body{
		overflow: hidden;
	}
</style>







