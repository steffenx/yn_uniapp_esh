<!-- 忘记密码 -->
<template>
	<view class="content">
		<view class="header"></view>
		<view class="forgetpsd-from">
			<view class="from-title">
				<text class="title">修改密码</text>
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
				<view class="psd-input">
					<input type="text" v-model="newpsd" password="" placeholder="请输入新密码"/>
					<text class="icon" @click="delnewpsd(this)">&#xe63a;</text>
				</view>
				<view class="psd-input">
					<input type="text" v-model="psd" password="" placeholder="请再次输入密码"/>
					<text class="icon" @click="delpsd(this)">&#xe63a;</text>
				</view>
			</view>
		</view>
<!-- 		<view class="select-text">
			<text class="code" @click="account()">账号密码登录</text>
		</view> -->
		<view class="login-btn">
			<view class="btn">确定</view>
		</view>
	<!-- 	<view class="clause"> 
			<text class="read">登录及代表阅读并同意</text>
			<text class="agreement">服务条款</text>
		</view> -->
	</view>
</template>

<script>
	export default{
		data(){
			return{
				mobile:"",
				newpsd:"",
				psd:"",
				codetxt:"发送验证码",
				code:"",
				time:60,
				isclick:true
			}
		},
		methods:{
			delnewpsd:function(){
				this.newpsd="";
			},
			delpsd:function(){
				this.psd="";
			},
			postcode:function(){
				if(this.isclick){
					console.log("ddd")
					let reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
					if (this.mobile == '') {
						console.log("不能为空");
						return;
					}
					if (!reg.test(this.mobile)) {
						return
					} else {
						let value={
							mobile: this.mobile
						};
					   if(this.isclick){
							this.timer();
						}
					}
					//this.timer();
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
					this.codetxt="发送验证码";
					this.isclick=true;
				}
			}
		}
	}
</script>

<style>
</style>
