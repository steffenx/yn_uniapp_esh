<template>
	<view class="content">
		<view class="header_rz">
			<view class="header_info">{{header_info}}</view>
		</view>
		<view class="content_body"> 
			<view class="content_info">
				<view>
					<view class="real_name">
					<text>{{real_name}}</text>
					</view>
					<view class="real_input">
						<input class="font14"  focus placeholder="请输入您的真实姓名" />
					</view>
				</view>
				<view>
					<view class="card_name">
					<text>{{card_name}}</text>
					</view>
					<view class="real_input">
						<input class="font14" type="idcard"  placeholder="请输入您的身份证号码" />
					</view>
				</view>	
			</view>
			<view class="btn_click">
				<button type="primary" class="btn_rz" @click="approve()">立即认证</button>
			</view>
			<view class="footer">
				<view class="privacy">{{privacy_1}} <text class="privacy_name">{{privacy_name}}</text></view>
				<view class="privacy">{{privacy_2}}</view>
			</view>
		</view>
	</view>
</template>

<script>
		export default {
		data() {
			return {
				header_info:"为保障您的资金安全，更好的使用智能回收服务，需要您根据真实身份证件上的资料完成实名认证:",
				real_name:"真实姓名",
				card_name:"身份证号",
				privacy_1:"当您实名认证时，即视为您已同意",
				privacy_name:"<用户隐私保护协议>",
				privacy_2:"我们将按照协议来合法使用和保护您的个人信息"
				}
				},
				methods: {
					//点击认证
						approve:function(e) {
							
						},
					
				}
	}
</script>

<style>
	.content {
		background: #f6f6f6;
		height: 93vh;
		color: #828a88;
	}
	.header_rz{
		width: 100%;
		background: #eaeaea;
	}
	.header_info{
		width: 94%;
		margin: 0 auto;
		font-size: 13px;
		line-height: 20px;
		padding: 15px 0;
	}
	.content_body{
		width: 94%;
		margin: 0 auto;
	}
	.real_name,.card_name{
		color: #333333;
		font-weight: 700;
		line-height: 20px;
		padding-top: 30rpx;
	}
	.real_input{
		margin: 30rpx 0;
		padding-bottom: 15px;
		border-bottom: 1px solid #d6d6d6;
	}
	.font14{
		font-size: 14px;
	}
	.btn_rz{
		border-radius: 30px;
	}
	.footer{
		position: absolute;
		bottom: 0;
		font-size: 13px;
		width: 94%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content : center;
	}
	.privacy_name{
		color: #007aff;
	}
</style>
