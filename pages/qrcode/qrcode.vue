<!-- 我的二维码 -->
<template>
	<view class="qrcode-warp">
		<view class="card-warp">
			<view class="top-userinfo">
				<view class="head-pic">
					<image class="head-icon" src="../../static/images/tx.jpg"></image>
				</view>
				<view class="info">
					<text class="username">136****8776</text>
					<text class="integral">积分:256</text>
				</view>
			</view>
			
			<view class="qrcode-warp">
				<view class="qrimg">
					<tki-qrcode
					ref="qrcode"
					background="#fff"
					unit="px"
					:val="val"
					:loadingText="loadingText"
					:loadMake="loadMake"/>
				</view>
			</view>
			<view class="tips-warp">
				<text class="tips">对准垃圾箱上的二维码扫描器</text>
			</view>
		</view>
	</view>
</template>

<script>
	import tkiQrcode from "../../static/js/tki-qrcode/tki-qrcode.vue";
	export default {
		components: {tkiQrcode},
		data(){
			return{
				val:"https://www.cnblogs.com/Steffen-xuan/p/",
				loadingText:"正在生成中",
				loadMake:true
			}
		}
	}
</script>

<style>
</style>
