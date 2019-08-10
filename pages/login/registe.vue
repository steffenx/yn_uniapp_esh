<!-- 注册 -->
<template>
	<view class="content">
		<!-- <view class="">
			<form @submit="formSubmit" @reset="formReset" >
			<view class="top-bottom">
				<text class="title reg_title">账号注册</text>
			</view>
			
				<view class="reg_mobile flex-row top-bottom">
					<view class="yzm_title left">手机号</view>
					<view class="title center"><input type="text" v-model="mobile" focus  placeholder="请输入手机号" class="reg_input"/></view>
					<button type="primary" class="send_yzm" @click="sendcode()">{{codetxt}}</button>
				</view>
				<view class="flex-row top-bottom">
					<view class="yzm_title left">验证码</view>
					<view class="right"><input type="text" v-model="yzm" placeholder="请输入验证码" class="reg_input"/></view>
				</view>
				<view class="flex-row top-bottom">
					<view class="yzm_title left">账号密码</view>
					<view class="right"><input type="text" password v-model="pass" placeholder="请输入账号密码" class="reg_input"/></view>
				</view>
				<view class="flex-row top-bottom">
					<view class="yzm_title left">重复密码</view>
					<view class="right"><input type="text" password v-model="coppass" placeholder="请再次输入密码" class="reg_input"/></view>
				</view>
			</form>
		</view>
		<view class="login-btn">
			<view class="btn" @click="registe()">注&nbsp;&nbsp;&nbsp;册</view>
		</view>
		<view class="clause"> 
			<text class="read">注册及代表阅读并同意</text>
			<text class="agreement">服务条款</text>
		</view> -->
		<view class="header"></view>
		<view class="forgetpsd-from">
			<view class="from-title"><text class="title">注册</text></view>
			<view class="from-input">
				<view class="mobile-input">
					<input type="num" v-model="mobile" placeholder="请输入手机号" />
					<view class="post-code">
						<text class="post-text" @click="sendcode()">{{ codetxt }}</text>
					</view>
				</view>
				<view class="code-input"><input type="num" v-model="yzm" placeholder="请输入验证码" /></view>
				<view class="psd-input">
					<input type="text" v-model="pass" password="" placeholder="请输入密码" />
					<text class="icon" @click="delnewpsd(this)">&#xe63a;</text>
				</view>
				<view class="psd-input">
					<input type="text" v-model="coppass" password="" placeholder="请再次输入密码" />
					<text class="icon" @click="delpsd(this)">&#xe63a;</text>
				</view>
			</view>
		</view>
		<view class="login-btn">
			<view class="btn" @click="registe()">注册</view>
		</view>
		<view class="clause"> 
			<text class="read">注册及代表阅读并同意</text>
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
	components: {
		mpopup
	},
	data() {
		return {
			mobile: '',
			yzm: '',
			pass: '',
			coppass: '',
			codetxt: '发送验证码',
			time: 60,
			isclick: true,
			ispop: '',
			types: 'err',
			span: '这是一个土司',
			listArr: [],
			islogin: false,
			poptime: 2000
		};
	},
	methods: {
		delnewpsd:function(){
			this.pass="";
		},
		delpsd:function(){
			this.coppass="";
		},
		//手机验证发送验证码
		sendcode() {
			const reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
			if (this.mobile == '') {
				Popup.setPopup(this, 'warn', '不能为空', this.poptime);
				return;
			}
			if (!reg.test(this.mobile)) {
				Popup.setPopup(this, 'warn', '手机号不正确', this.poptime);
				return;
			} else {
				let value = {
					mobile: this.mobile,
					event: 'register'
				};
				if (this.isclick) {
					this.timer();
					//数据处理
					LoginP.vcode(this, value);
				}
			}
		},
		//发送验证码计时器60s
		timer: function() {
			if (this.time > 0) {
				this.isclick = false;
				this.time--;
				this.codetxt = this.time + 's后重试';
				setTimeout(this.timer, 1000);
			} else {
				this.codetxt = '获取验证码';
				this.isclick = true;
				this.time = 60;
			}
		},
		//注册按钮
		registe: function() {
			//不能连续点击注册
			if (this.islogin) {
				Popup.setPopup(this, 'warn', '点击太快了', this.poptime);
				return;
			}
			//判断是否为空
			if (!this.pass || !this.coppass) {
				console.log('密码不能为空');
				Popup.setPopup(this, 'warn', '密码不能为空', this.poptime);
				return;
			}
			//判断两次密码是否一致
			if (this.pass != this.coppass) {
				console.log('两次密码不一致');
				Popup.setPopup(this, 'warn', '两次密码不一致', this.poptime);
				return;
			}
			//判断密码是否大于6位
			if (this.pass.length < 6 || this.coppass.length < 6) {
				console.log('密码应大于6位');
				Popup.setPopup(this, 'warn', '密码应大于', this.poptime);
				return;
			}
			let value = {
				mobile: this.mobile,
				captcha: this.yzm,
				password: this.coppass
			};
			this.islogin = true;
			//数据处理并回调
			LoginP.registe(this, value, revert => {
				console.log(revert);
			});
			setTimeout(() => {
				this.islogin = false;
			}, 3000);
		}
	}
};
</script>
