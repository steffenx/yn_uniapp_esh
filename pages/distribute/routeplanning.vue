<template>
	<view class="route-warp">
		<view class="flex-style">
			<view class="flex-item active" bindtouchstart="goToCar">驾车</view>
			<view class="flex-item" bindtouchstart="goToWalk">步行</view>
			<view class="flex-item" bindtouchstart="goToBus">公交</view>
			<view class="flex-item" bindtouchstart="goToRide">骑行</view>
		</view>
		<view class="map_box"><map id="navi_map" :longitude="longitude" :latitude="latitude" scale="12" :markers="markers" :polyline="polyline"></map></view>
		<view class="text_box">
			<view class="text">{{ distance }}</view>
			<view class="text">{{ cost }}</view>
			<view class="detail_button" @click="aaa()">详情</view>
		</view>
	</view>
</template>

<script>
import amapFile from '@/static/js/amap-wx.js';
export default {
	data() {
		return {
			longitude: this.$store.state.location.spointx, //经度
			latitude: this.$store.state.location.spointy, //纬度
			markers: [
				{
					iconPath: '',
					id: 0,
					latitude: this.$store.state.location.spointy,
					longitude: this.$store.state.location.spointx,
					width: 23,
					height: 33
				},
				{
					iconPath: '',
					id: 0,
					latitude: this.$store.state.location.epointy,
					longitude: this.$store.state.location.epointx,
					width: 24,
					height: 34
				}
			],
			distance: '',
			cost: '',
			polyline: []
		};
	},
	onLoad: function() {
		var _this = this;
		this.longitude=this.$store.state.location.spointx;
		this.latitude=this.$store.state.location.spointy;
		console.log(this.longitude)
		var key = 'eb256fda12cc44683b0f75403b2592dd';
		var myAmapFun = new amapFile.AMapWX({ key: 'eb256fda12cc44683b0f75403b2592dd' });
		myAmapFun.getDrivingRoute({
			origin: '103.972087,30.7364',
			destination: '103.952,30.715',
			success: function(data) {
				console.log(data);
				var points = [];
				if (data.paths && data.paths[0] && data.paths[0].steps) {
					var steps = data.paths[0].steps;
					for (var i = 0; i < steps.length; i++) {
						var poLen = steps[i].polyline.split(';');
						for (var j = 0; j < poLen.length; j++) {
							points.push({
								longitude: parseFloat(poLen[j].split(',')[0]),
								latitude: parseFloat(poLen[j].split(',')[1])
							});
						}
					}
				}

				_this.polyline = [
					{
						points: points,
						color: '#0091ff',
						width: 6
					}
				];
				if (data.paths[0] && data.paths[0].distance) {
					_this.distance = data.paths[0].distance + '米';
				}
				if (data.taxi_cost) {
					_this.cost = '打车约' + parseInt(data.taxi_cost) + '元';
				}
			},
			fail: function(info) {
				console.log(info);
			}
		});
	},
	methods:{
		aaa(){
			uni.openLocation({
			    latitude: this.$store.state.location.epointy,
			    longitude: this.$store.state.location.epointx,
			    name: '僑碧儸',
			    address: '奶奶直播',
			    success: function () {
			        console.log('success');
			    }
			});
		}
	},
	
	goToCar: function (e) {
				wx.redirectTo({
				  url: '../navigation_car/navigation'
				})
	},
	goToBus: function (e) {
				wx.redirectTo({
				  url: '../navigation_bus/navigation'
				})
	},
	goToRide: function (e) {
				wx.redirectTo({
				  url: '../navigation_ride/navigation'
				})
	},
	goToWalk: function (e) {
				wx.redirectTo({
				  url: '../navigation_walk/navigation'
				})
	}
};
</script>

<style>
	.flex-style{
	  display: -webkit-box;
	  display: -webkit-flex;
	  display: flex;
	}
	.flex-item{
	  height: 35px; 
	  line-height: 35px;
	  text-align: center;
	  -webkit-box-flex: 1;
	  -webkit-flex: 1;
	  flex: 1
	}
	.flex-item.active{
	  color:#0091ff;
	}
	.map_box{
	  position:absolute;
	  top: 35px;
	  bottom: 90px;
	  left: 0px;
	  right: 0px;
	}
	#navi_map{
	  width: 100%;
	  height: 100%;
	}
	.text_box{
	  position:absolute;
	  height: 90px;
	  bottom: 0px;
	  left: 0px;
	  right: 0px;
	}
	.text_box .text{
	  margin: 15px;
	}
	.detail_button{
	  position:absolute;
	  bottom: 30px;
	  right: 10px;
	  padding: 3px 5px;
	  color: #fff;
	  background: #0091ff;
	  width:50px;
	  text-align:center;
	  border-radius:5px;
	}
</style>
