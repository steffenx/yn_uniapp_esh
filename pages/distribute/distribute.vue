<!-- 地图分布界面 -->
<template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map
					id="155"
					style="width: 100%; height: 90vh"
					@markertap="tap"
					show-location="true"
					:polyline="polyline"
					:latitude="latitude"
					:longitude="longitude"
					:markers="covers"
				></map>
			</view>
		</view>
		<button @click="aaa()">5635</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'map',
			latitude: 32.909, //定位
			longitude: 116.39742, //定位
			covers: [
				{
					//点位
					id: 1,
					latitude: 30.735,
					longitude: 103.972,
					iconPath: '../../static/images/location.png',
					width: 50,
					height: 50,
					callout: {
						//弹出框设置
						content: '垃圾箱',
						display: 'BYCLICK',
						color: '#000',
						bgColor: '#fff',
						textAlign: 'center',
						fontSize: 16,
						padding: 10,
						borderRadius: 10
					}
				},
				{
					id: 2,
					latitude: 30.734,
					longitude: 103.971,
					iconPath: '../../static/images/location.png',
					width: 50,
					height: 50,
					callout: {
						//弹出框设置
						content: '垃圾箱',
						display: 'BYCLICK',
						color: '#000',
						bgColor: '#fff',
						textAlign: 'center',
						fontSize: 16,
						padding: 10,
						borderRadius: 10
					}
				}
			],
			polyline: [
				{
					//指定一系列坐标点，从数组第一项连线至最后一项
					points: [{ latitude: 30.735, longitude: 103.972 }, { latitude: 30.734, longitude: 103.971 }],
					color: '#0000AA', //线的颜色
					width: 2, //线的宽度
					dottedLine: true, //是否虚线
					arrowLine: true //带箭头的线 开发者工具暂不支持该属性
				}
			]
		};
	},
	mounted() {
		this.getLocation(this);
	},
	methods: {
		getLocation: function(mythis) {
			uni.getLocation({
				type: 'wgs84',
				success: function(res) {
					console.log('当前位置的经度：' + res.longitude);
					console.log('当前位置的纬度：' + res.latitude);
					mythis.latitude = res.latitude;
					mythis.longitude = res.longitude;
					let obj = {};
					obj.spointx = res.longitude;
					obj.spointy = res.latitude;
					obj.epointx = 30.735;
					obj.epointy = 103.972;
					mythis.$store.commit('commitlocation', obj);
				},
				fail() {
					console.log('当前位置的纬度：');
				}
			});
			//打开本机地图
			// uni.getLocation({
			// 	type: 'gcj02', //返回可以用于uni.openLocation的经纬度
			// 	success: function (res) {
			// 		const latitude = res.latitude;
			// 		const longitude = res.longitude;
			// 		uni.openLocation({
			// 			latitude: latitude,
			// 			longitude: longitude,
			// 			success: function () {
			// 				console.log('success');
			// 			}
			// 		});
			// 	}
			// });
		},
		tap(e) {
			uni.showToast({
				title: 'sd',
				mask: false,
				duration: 1500
			});
		},
		aaa() {
			uni.navigateTo({
				url:'routeplanning1'
			})
			// 打开本机地图
			// uni.getLocation({
			// 	type: 'gcj02', //返回可以用于uni.openLocation的经纬度
			// 	success: function (res) {
			// 		const latitude = res.latitude;
			// 		const longitude = res.longitude;
			// 		uni.openLocation({
			// 			latitude: latitude,
			// 			longitude: longitude,
			// 			success: function () {
			// 				console.log('success');
			// 			}
			// 		});
			// 	}
			// });
			// uni.openLocation({
			// 	latitude: 28.193688,
			// 	longitude: 113.010925,
			// 	success: function() {
			// 		console.log('success');
			// 	}
			// });
		}
	}
};
</script>

<style></style>
