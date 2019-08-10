<!-- 我的界面 -->
<template>
	<view class="aboutme-warp">		
		<!-- 头部 -->
		<view class="header-warp">
			<view class="head-pic">
				<image class="head-icon" src="../../static/images/tx.jpg"></image>
			</view>
			<view class="about">
				<text class="mobile">136****8776</text>
				<view class="member">
					<text class="vip">大众会员</text>
				</view>
			</view>
		</view>
		
		<!-- 列表 -->
		<view class="list-warp">
			<view class="list-content" @click="delivery()">
				<view class="list-container">
					<view class="icon-warp">
						<image class="icon" src="../../static/images/integral.png"></image>
					</view>
					<text class="menu-content">我的投递</text>
				</view>
				<view class="right-btn">
					<text class="menu-info">投递垃圾记录<text class="jt">></text></text>
				</view>
			</view>
		</view>
		
		<!-- 列表 -->
		<view class="list-warp">
			<view class="list-content" @click="wallet()">
				<view class="list-container">
					<view class="icon-warp">
						<image class="icon" src="../../static/images/integral.png"></image>
					</view>
					<text class="menu-content">我的钱包</text>
				</view>
				<view class="right-btn">
					<text class="menu-info">鼓鼓的钱包分我一半<text class="jt">></text></text>
				</view>
			</view>
		</view>
		
		<view class="list-warp">
			<view class="list-content" @click="qrcode()">
				<view class="list-container">
					<view class="icon-warp">
						<image class="icon" src="../../static/images/twocode.png"></image>
					</view>
					<text class="menu-content">我的二维码</text>
				</view>
				<view class="right-btn">
					<text class="menu-info">展示二维码投递垃圾<text class="jt">></text></text>
				</view>
			</view>	
		</view>
		
		<view class="list-warp">
			<view class="list-content" @click="invitation()">
				<view class="list-container">
					<view class="icon-warp">
						<image class="icon" src="../../static/images/Invitation.png"></image>
					</view>
					<text class="menu-content">邀请好友</text>
				</view>
				<view class="right-btn">
					<text class="menu-info">邀请好友一起保护环境<text class="jt">></text></text>
				</view>
			</view>
			
			
			<view class="list-content">
				<view class="list-container" @click="aaa()">
					<view class="icon-warp">
						<image class="icon" src="../../static/images/gift.png"></image>
					</view>
					<text class="menu-content">积分兑换</text>
				</view>
				<view class="right-btn">
					<text class="menu-info">积分终于有用了<text class="jt">></text></text>
				</view>	
			</view>
			
			<view class="list-content">
				<view class="list-container" @click="binding()">
					<view class="icon-warp">
						<image class="icon" src="../../static/images/gift.png"></image>
					</view>
					<text class="menu-content">绑定IC卡</text>
				</view>
				<view class="right-btn">
					<text class="menu-info">刷卡投递、找回账号<text class="jt">></text></text>
				</view>	
			</view>
			
			<view class="list-content" @click="distribute()">
				<view class="list-container">
					<view class="icon-warp">
						<image class="icon" src="../../static/images/khs.png"></image>
					</view>
					<text class="menu-content">垃圾箱分布</text>
				</view>
				<view class="right-btn">
					<text class="menu-info">查看附近的垃圾箱<text class="jt">></text></text>
				</view>	
			</view>
			
			<view class="list-content" @click="idea()">
				<view class="list-container">
					<view class="icon-warp">
						<image class="icon" src="../../static/images/khs.png"></image>
					</view>
					<text class="menu-content">意见反馈</text>
				</view>
				<view class="right-btn">
					<text class="menu-info">说说我的意见<text class="jt">></text></text>
				</view>	
			</view>
			
			<view class="list-content" @click="about_us()">
				<view class="list-container">
					<view class="icon-warp">
						<image class="icon" src="../../static/images/about_us.png"></image>
					</view>
					<text class="menu-content">关于我们</text>
				</view>
				<view class="right-btn">
					<text class="menu-info">了解我们的信息<text class="jt">></text></text>
				</view>	
			</view>
			
			<view class="list-content" @click="certification()">
				<view class="list-container">
					<view class="icon-warp">
						<image class="icon" src="../../static/images/about_us.png"></image>
					</view>
					<text class="menu-content">实名认证</text>
				</view>
				<view class="right-btn">
					<text class="menu-info">个人信息实名认证<text class="jt">></text></text>
				</view>	
			</view>
			
			<view class="list-content" @click="loginn()">
				<view class="list-container">
					<view class="icon-warp">
						<image class="icon" src="../../static/images/khs.png"></image>
					</view>
					<text class="menu-content">登录</text>
				</view>
				<view class="right-btn">
					<text class="menu-info">登录界面<text class="jt">></text></text>
				</view>	
			</view>
			
			
		</view>
		
	</view>
	
</template>

<script>
	export default{
		methods:{
			qrcode:function(){
				uni.navigateTo({
					url:"../qrcode/qrcode"
				})
			},
			delivery:function(){
				uni.navigateTo({
					url:"delivery"
				})
			},
			distribute:function(){
				uni.navigateTo({
					url:"../distribute/distribute"
				})
			},
			invitation:function(){
				uni.navigateTo({
					url:"../settlement/settlement"
				})
			},
			about_us:function(){
				uni.navigateTo({
					url:"about_us"
				})
			},
			aaa:function(){
				uni.navigateTo({
					url:"updateme"
				})
			},
			binding:function(){
				uni.navigateTo({
					url:"binding_card"
				})
			},
			certification:function(){
				uni.navigateTo({
					url:"certification"
				})
			},
			idea:function(){
				uni.navigateTo({
					url:"idea"
				})
			},
			loginn:function(){
				uni.navigateTo({
					url:"../login/login"
				})
			},
			wallet:function(){
				uni.navigateTo({
					url:"walletme"
				})
			}
		}
	}
</script>

<style>
</style>
