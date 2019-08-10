<!-- 手机验证码注册 -->
<template>
	<view class="content">
		<view class="header"></view>
		<view class="vcodelogin-from">
			<view class="from-title">
				<text class="title">手机验证码登录</text>
			</view>
			<view class="from-input">
				<view class="mobile-input">
					<input type="text" v-model="mobile" placeholder="请输入手机号"/>
					<view class="post-code">
						<text class="post-text" @click="postcode()">{{codetxt}}</text>
					</view>
				</view>
				<view class="code-input">
					<input type="text" v-model="code" placeholder="请输入验证码"/>
				</view>
			</view>
		</view>
		<view class="select-text">
			<text class="code" @click="account()">账号密码登录</text>

		</view>
		<view class="login-btn">
			<view class="btn" @click="codelogin()">登录</view>
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
		components:{
			mpopup
		},
		data(){
			return{
				mobile:"",
				codetxt:"发送验证码",
				code:"",
				time:60,//验证码倒计时
				isclick:true,//是否可以点击发送验证码
				ispop:"",//是否显示弹窗
				types:"err",//弹窗类型
				span:"这是一个土司",//弹窗内容
				islogin:false,//是否在登录
				poptime:2000,
				listArr: []
			}
		},
		methods:{
			//用户名密码登录
			account:function(){
				uni.navigateTo({	
					url:"../login/login"
				})
			},
			//发送验证码
			postcode:function(){
				if(this.isclick){
					let reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
					if (this.mobile == '') {
						Popup.setPopup(this,"warn","不能为空",this.poptime);
						return;
					}
					if (!reg.test(this.mobile)) {
						Popup.setPopup(this,"warn","手机号不正确",this.poptime);
						return
					} else {
						let value={
							mobile: this.mobile,
							event:"login"
						};
					   if(this.isclick){
							this.timer();
							LoginP.vcode(this,value);
						}
					}
				}
			},
			timer:function(){
				if(this.time>0){
					this.isclick=false;
					this.time--;
					this.codetxt=this.time+"s后重试";
					setTimeout(this.timer,1000);
				}
				else{
					this.isclick=true;
					this.time=4;
					this.codetxt="发送验证码";
				}
			},
			codelogin:function(){
				//获取vuex中的数据
				//console.log(this.$store.state.userinfo.token);
				//不能连续点击登录
				if(this.islogin) {
					Popup.setPopup(this,"warn","点击太快了",this.poptime);
					return;
				}
				//判断是否为空
				if(!this.code||!this.mobile){
					console.log("手机号验证码不能为空");
					Popup.setPopup(this,"warn","手机号验证码不能为空",this.poptime);
					return;
				}
				let value={
					loginType:"2",
					loginWay:"2",
					mobile: this.mobile,
					captcha:this.code
				};
				this.islogin=true;
				LoginP.login(this,value,(revert)=>{
					if(revert){
						uni.switchTab({
							url:"pages/index/index"
						});
					}
				});
				setTimeout(()=> {
					this.islogin=false;
				}, 3000);
			},
		}
	}
</script>

<style>
	body{
		overflow: hidden;
	}
</style>
