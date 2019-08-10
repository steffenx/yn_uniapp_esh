<template>
	<view class="content">
		<view class="contact">
			<view class="phone" @click="tel(phone_2)">
				<image class="contact_img " :src="phone_img"></image>
				<text class="contact_1 ">{{phone_1}}</text>
				<text class="contact_2 ">{{phone_2}}</text>
				<text class="phone_3 grey">{{phone_3}}</text>
			</view>
			<view class="web" @click="web(web_2)">
				<image class="contact_img " :src="web_img"></image>
				<text class="contact_1 ">{{web_1}}</text>
				<text class="contact_2 ">{{web_2}}</text>
			</view>
		</view>
		
		<view class="weixin">
			<view class="contact_left">
				<image class="icon_img" :src="weixin_icon"></image>
			</view>
			<view class="contact_right">
				<text class="title_name">{{weixin_info}}</text>
				<text class="content_info grey">{{weixin_1}}"<text class="label_weixin">{{tencent}}</text>"</text>
				<text class="content_info grey">{{weixin_2}}</text>
				<text class="content_info grey">{{weixin_3}}</text>
			</view>
		</view>
		
		<view class="address">
			<view class="contact_left">
				<image class="icon_img" :src="address_icon"></image>
			</view>
			<view class="contact_right">
			<text class="title_name">{{address_info}}</text>
			<text class="content_info grey">{{address_1}}</text>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone_img:`../../static/images/mobile.png`,
				web_img:`../../static/images/website.png`,
				weixin_icon:`../../static/images/wechat_icon.png`,
				address_icon:`../../static/images/address_icon.png`,
				phone_1:"联系电话",
				phone_2:"028-87972089",
				phone_3:"周一到周日9:00-18:30",
				web_1:"官方网站",
				web_2:"120.79.76.116:7900",
				weixin_info:"微信公众号",
				address_info:"联系地址",
				weixin_1:"1.微信搜索框输入",
				weixin_2:"2.点击搜一搜",
				weixin_3:"3.关注智慧农业与环境云平台公众号",
				tencent:"智慧农业与环境云平台",
				address_1:"成都市高新西区天辰路88号电子科大西区科技园6栋三单元"
				}
				},
				methods: {
					//点击终端名称跳转到终端设备详情
						tel:function(e) {
							uni.makePhoneCall({
							phoneNumber: e
						});
						},
					//点击终端名称跳转到终端设备详情
						web:function(e) {
							window.location.href = 'http://' + e;
						},	
				}
	}
</script>

<style>
	.content {
		background: #f6f6f6;
		height: 100vh;
		margin: 0;
	}
	.contact{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content : space-around;
		height: 420rpx ;
		width: 96%;
		margin: 0 auto;
		margin-bottom: 30rpx;
	}
	.phone,.web{
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 47%;
		height: 95%;
		margin: 10rpx 10rpx;
		border: 2px solid #f1f1f1;
	}
	.contact_img{
		width: 150rpx;
	    height: 150rpx;
		margin: 30rpx 0;
	}
	.contact_1{
		font-weight: 800;
		margin-bottom: 20rpx;
	}
	.contact_2{
		font-size: 30rpx;
		margin-bottom: 20rpx;
		text-decoration: underline;
	}
	.phone_3{
		font-size: 20rpx;
		margin-bottom: 20rpx;
	}
	.weixin,.address{
		width: 96%;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
	/* 	align-items: center; */
		justify-content : center;
	}
	.weixin{
		height: 300rpx;
	}
	.address{
		height: 200rpx;
	}
	.contact_left{
		width: 23%;
		text-align: center;
	}
	.contact_right{
		width: 74%;
	}
	.icon_img{
		width: 100rpx;
		height: 90rpx;
	}
	.title_name,.content_info{
		display: block;
		line-height:40rpx;
	}
	.title_name{
		font-weight: 800;
	}
	.content_info{
		font-size: 20rpx;
	}
	.label_weixin{
		color: #bdaa04;
	}
	.grey{
		color: #828a88;
	}
</style>
