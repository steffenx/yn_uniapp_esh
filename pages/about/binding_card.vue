<template>
	<view class="content">
		<view class="binding_body">
			<view class="empty"></view>
			<view class="header_ic">
			<view class="top_name">
			<text>{{top_name}}</text>
			</view>
			<view class="top_input">
					  <text class="blank">NO.</text><input class="uni-input" type="number" focus placeholder="请输入" />
			</view>
			</view>
			<view class="btn_bd">
				<button type="primary" class="btn_binding" @click="binding()">绑定</button>
			</view>
			<view>
				<text class="hint">{{hint}}</text>
				<text class="hint_info">{{hint_info1}}</text>
				<text class="hint_info">{{hint_info2}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				top_name:"请输入IC卡号",
				hint:"小提示：",
				hint_info1:"1.当您的卡丢失，请及时联系客服(028-87972089)挂失同时告诉客服对应的卡号，我们会帮您冻结原来的卡号，并且找回对应的环保值和余额",
				hint_info2:"2.绑定错误的用户请联系客服(028-87972089)我们将解除您原来的绑定！"
				}
				},
				methods: {
					//点击绑定
						binding:function(e) {
							
						},
					
				}
	}
</script>

<style>
	.content {
		background: #f6f6f6;
		height: 93vh;
		color: #828a88;
		font-size: 15px;
	}
	.binding_body{
		width: 94%;
		margin: 0 auto;
	}
	.empty{
		height: 10px;
	}
	.header_ic{
		background: #ffffff;
		border-radius: 10px;
		margin-bottom: 30rpx;
		width: 100%;
		height: 100%;
		border: 1px solid #f3f1f1;
		box-shadow:1px 1px 1px #f3f1f1;
	}
	.top_name{
		padding-left: 30rpx;
		padding-top: 30rpx;
	}
	.top_input{
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #b5b0b0;
		margin: 30rpx;
		margin-bottom: 50rpx;
	}
	.btn_bd{
		margin-bottom: 20px;
	}
	.btn_binding{
		border-radius: 20px;
	}
	.hint_info{
		display: block;
		margin-top: 15rpx;
		margin-bottom: 15rpx;
	}
	.blank{
		color: #333333;
	}
</style>
