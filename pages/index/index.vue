<!-- 主页 -->
<template>
	<view class="content" @touchstart="refreshStart" @touchmove="refreshMove" @touchend="refreshEnd" @click="conClick">
		<refresh ref="refresh" @isRefresh='isRefresh'></refresh>
		<clickCircle ref="clickCircle"></clickCircle>
		<!-- <view class="l-placeholder">成都市易农科技</view> -->
		<view class="l-body">
		<view class="header">	
		<swiper class="l-swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500" indicator-color="grey"
		 indicator-active-color="#41bdb2" circular >
			<swiper-item v-for="(item,index) in images" :key="index">
				<view class="l-swiper-item">
					<image class="l-carousel-img" :src="item.img" mode="scaleToFill"></image>
				</view>
			</swiper-item>
		</swiper>
		</view>
		
		<view class="l-body-tab">
		<view class="navTab" v-for="(d,n) in navTab" :key="n">
			<view class="navTabimg" :class="d.background" @click="nav_guide(d.id)">
				<image class="img_guide" :src="d.img_guide" mode="aspectFit"></image>
			</view>
			<view class="navTabItem">{{d.tab_value}}</view>
		</view>
		</view>
		<view class="swiper_box">
			<view class="circle_box">
				<view class="circle_top">{{score}}</view>
				<view class="circle_bottom">总积分</view>
			</view>
			<view class="text_box">
				<view>投递次数：{{num}}</view>
				<view>上次积分：{{fen}}</view>
			</view>
		</view>
		<view class="distribution" v-for="(m,i) in distribution" :key="i" @click="map_distance(m.id)">
			<view class="distance_name">	
				 <view class="local_left">
							<image class="img_position" src="../../static/images/icon_location_point.png" mode="aspectFit"></image>
							<text class="text_position">{{m.position}}</text>	
				</view> 
				<view class="local_right">
					<text class="distance">约{{m.distance}}</text>
					<uni-icon type="map" size="20"></uni-icon>
				</view>
			</view>
           <view class="distance_icon">
			   <view v-for="(d,txt) in icons" :key="txt" class="icon_bottom">
				   <image v-if="d.state==1"  class="icon_state"></image>
				   <image v-if="d.state==2" src="../../static/images/tag_2_wh.png" class="icon_state"></image>
				   <image v-if="d.state==3" src="../../static/images/tag_2_zm.png" class="icon_state"></image>
				   <image class="icon_img" :src="d.icon_img" mode="scaleToFill"></image>
				   <view>
				   	{{d.icon_name}}
				   </view>
			   </view>
		   </view>
		</view>
		</view>
	</view>
</template>

<script>
	import refresh from '../../components/refresh.vue';
	import glance from '@/components/jm-glance.vue';
	import clickCircle from '@/components/clickCircle.vue';
	import uniIcon from "@/components/uni-icon.vue"
	export default {
		components: {refresh,glance,clickCircle,uniIcon},
		data() {
			return {
				tabClick: 0, //导航栏被点击
				toView:'',
				isLongWidth:0,
				num:0,
				fen:0,
				score:0,
				list:[],
				icons:[],
				navTab:[
					{img_guide:`../../static/images/category.png`,tab_value:"回收分类",background:"orange",id:1},
					{img_guide:`../../static/images/code.png`,tab_value:"开启箱门",background:"green",id:2},
					{img_guide:`../../static/images/shuoming.png`,tab_value:"使用指南",background:"blue",id:3},
					{img_guide:`../../static/images/user.png`,tab_value:"公益伙伴",background:"red",id:4},
				],
				icons:[
					{icon_img:`../../static/images/category_1.png`,icon_name:"饮料瓶",state:1},
					{icon_img:`../../static/images/category_2.png`,icon_name:"纸类",state:2},
					{icon_img:`../../static/images/category_3.png`,icon_name:"纺织物",state:1},
					{icon_img:`../../static/images/category_4.png`,icon_name:"金属",state:1},
					{icon_img:`../../static/images/category_5.png`,icon_name:"塑料",state:2},
					{icon_img:`../../static/images/category_6.png`,icon_name:"玻璃",state:3}
					],
				distribution:[
					{distance :"6.32km",position:"成都市郫都区",id:1}
				],
				images:[
					{img:`../../static/images/bg.jpg`},
					{img:`../../static/images/laji.jpg`},
					{img:`../../static/images/huishou.jpg`},
					{img:`../../static/images/category.jpg`},
				],
				tabTitle:[
					{	Tabimg:`../../static/images/home.png`,title:"榜单",id:'1',
						list:[
							{view_img:`../../static/images/home.png`,view_text:"法人"},
							{view_img:`../../static/images/home.png`,view_text:"法人"},
							{view_img:`../../static/images/home.png`,view_text:"法人"},
					]},
					{	Tabimg:`../../static/images/user.png`,title:"榜单",id:'2',
						list:[
							{view_img:`../../static/images/user.png`,view_text:"用户"},
							{view_img:`../../static/images/user.png`,view_text:"用户"},
							{view_img:`../../static/images/user.png`,view_text:"用户"},
					]},
					{Tabimg:`../../static/images/home.png`,title:"榜单",id:'3',
					list:[
							{view_img:`../../static/images/user.png`,view_text:"测试"},
							{view_img:`../../static/images/user.png`,view_text:"测试"},
							{view_img:`../../static/images/user.png`,view_text:"测试"},
					]},
					{Tabimg:`../../static/images/user.png`,title:"榜单",id:'4',
					list:[
							{view_img:`../../static/images/user.png`,view_text:"商场"},
							{view_img:`../../static/images/user.png`,view_text:"商场"},
							{view_img:`../../static/images/user.png`,view_text:"商场"},
							{view_img:`../../static/images/user.png`,view_text:"商场"},
							{view_img:`../../static/images/user.png`,view_text:"商场"},
					]},
					],
			}
		},
		onLoad() {
			var _this=this;
			var tabTitle=this.tabTitle;
			this.list=tabTitle[0].list;
			this.num=13;
			this.fen=53;
			this.score=359;
			uni.getLocation({
				type: 'wgs84',
				success: function(res) {
					console.log('当前位置的经度：' + res.longitude);
					console.log('当前位置的纬度：' + res.latitude);
					let obj = {};
					obj.spointx = res.longitude;
					obj.spointy = res.latitude;
					obj.epointx = 103.952;
					obj.epointy = 30.715;
					console.log(obj.spointy)
					_this.$store.commit('commitlocation', obj);
				},
				fail() {
					console.log('当前位置的纬度：');
				}
			});
			uni.getStorage({
				complete(e) {
					if(e.data==""){
						uni.navigateTo({
							url:"../login/login"
						})
					}
				}
			})
		},
		methods: {
			  clickKeyword(e) {
                // uni.showToast({
                //     title: '点击选项卡，id为：' + e.key + ',内容为：' + e.name,
                //     icon: 'none',
                //     duration: 2000
                // });
                this.list = [];
                var arr = e.list;
                this.list = arr;
            },
			refreshStart(e) {
					this.$refs.refresh.refreshStart(e);
				},
			refreshMove(e){
					this.$refs.refresh.refreshMove(e);
				},
			refreshEnd(e) {
					this.$refs.refresh.refreshEnd(e);
				},
			isRefresh(){
					setTimeout(() => {
						uni.showToast({
							icon: 'success',
							title: '刷新成功'
						})
						this.$refs.refresh.endAfter() //刷新结束调用
					}, 1000)
				},
			// 点击反馈事件
			conClick(e) {
				this.$refs.clickCircle.conClick(e);
			},
			//点击终端名称跳转到终端设备详情
				sort:function(e) {
					uni.navigateTo({
						url:"../index/sort?id="+e
					})
				},
			//地图展示	
				map_distance:function(e) {
					uni.navigateTo({
						// url:"../distribute/distribute?id="+e
						url:"../distribute/routeplanning"
					})
				},
			//中间导航跳转
				nav_guide:function(e) {
					if(e==1){
						uni.navigateTo({
							url:"../index/category"
						})
					}else if(e==2){
						uni.navigateTo({
							url:"../qrcode/qrcode"
						})
					}
					
				}
		}
	}
</script>

<style lang="scss">
	.content {
		background: #f6f6f6;
		height: 100vh;
		margin: 0;
	}
	/* 顶部标题 */
	.l-placeholder{
		width: 100%;
		height: 80rpx;
		text-align: center;
		color: #7dc3f3;
		font-weight: 800;
		line-height: 80rpx;
		font-size: 25px;
	}
	/* l-swiper */
	
	.l-body{
		padding: 0 var(--pad-lr);
		width: 95%;
		margin: 0 auto;
	}
	.header{
		height: 15%;
	}
	.l-swiper{
		// margin: 10rpx 0 0;
		// height: 300rpx;
	}
	
	.l-swiper-item{
		height: 100%;
		overflow: hidden;
		border-radius: 26rpx;
	}
	
	.l-carousel-img{
		height:100%;
		width: 100%;
	}
	/* l-body-tab */
	/* 中间图标跳转选项 */
	.l-body-tab {
		// height:170rpx;
		height:15%;
		width: 100%;
		margin-top: 3%;
		color: #5f5d5d;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.navTab {
		width: 25%;
		height: 100%;
		text-align: center;
		
	}
	.navTabimg{
		margin: 10rpx auto;
		width: 110rpx;
		height: 110rpx;
		border-radius:50% ;
		position: relative;
	}
	.img_guide{
		width: 60%;
		height: 60%;
		position: absolute;
        left:0;
        right:0;
        top: 0;
        bottom: 0;
        margin: auto;
	}
	.img_position{
		width: 30rpx;
		height: 30rpx;
	}
	.text_position{
		padding-left: 8rpx;
	}
	.navTabItem{
		width: 100%;
		font-size: 28upx;
		height: 50rpx;
	}
	.orange{
		background-color: #ffd07e;
	}
	.green{
		background-color: #1ce429;
	}
	.blue{
		background-color: #7dc3f3;
	}
	.red{
		background-color: #ff9e9e;
	}
	/* 积分 */
	.swiper_box{
		height: 160rpx;
		margin-top: 1%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		.circle_box,.text_box{
			width: 48%;
			height: 100%;
			border: 2px solid #f1f1f1;
			box-shadow: 1px 1px 1px #f1f1f1;
			color: #393b3e;
			border-radius: 5px;
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}
	.circle_top{
		font-size: 50rpx;
	}
	.text_box{
		margin-left: 2%;
	}
	/* 位置信息 */
	.distribution{
		width: 99%;
		height: 30%;
		border: 1px solid #f3f1f1;
		border-radius: 10rpx;
		margin-top: 1%;
		background: url("../../static/images/bg_index_location.png");
		background-size: cover;
		display: flex;
		flex-direction: column;
		// align-items: center;
		// justify-content: center;
		.distance_name{
			display: flex;
			flex-direction: row;
			height: 35%;
			justify-content: center;
			line-height: 45px;
			.local_left{
				width: 60%;
				font-size: 30rpx;
			}
			.local_right{
				width: 39%;
				text-align: right;
				font-weight:800; 
			}
		}
		.distance_icon{
			height: 50%;
			width: 95%;
			padding: 2% 0 3% 0;
			margin: 0 auto;
			display: flex;
			flex-direction:row;
			justify-content : space-between;
			text-align: center;
			.icon_bottom{
				height: 100%;
				font-size: 25rpx;
				color: #5f5d5d;
				.icon_img{
					width: 80rpx;
					height: 80rpx;
				}
			}
			.icon_state{
				width: 80rpx;
				height: 20px;
				bottom: -5px;
			}
		}
	}
	
</style>
