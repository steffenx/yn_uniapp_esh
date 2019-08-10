<template>
	<view class="content" @touchstart="refreshStart" @touchmove="refreshMove" @touchend="refreshEnd" @click="conClick">
		<refresh ref="refresh" @isRefresh='isRefresh'></refresh>
		<clickCircle ref="clickCircle"></clickCircle>
		<view class="l-body-tab">
					<glance v-on:clickKeyword='clickKeyword' :data='tabTitle'></glance>
						<view class="l-tab-item" v-for="(m,i) in list" :key="i">
							<image class="l-tab-item-img l-tab-item-img-1" :src="m.view_img" mode=""></image>
							<view class="l-tab-item-value">
								{{m.view_text}}
							</view>
						</view>
		</view>
		</view>
</template>

<script>
	import refresh from '../../components/refresh.vue';
	import glance from '../../components/jm-glance.vue';
	import clickCircle from '../../components/clickCircle.vue';
	export default {
		components: {refresh,glance,clickCircle},
		data() {
			return {
				tabClick: 0, //导航栏被点击
				toView:'',
				isLongWidth:0,
				num:0,
				fen:0,
				score:0,
				list:[],
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
			this.list=this.tabTitle[0].list;
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
			}	
		}
	}
</script>

<style>
	/* l-body-tab */
	
	.l-body-tab {
		height:170rpx;
		width: 100%;
	}
	.l-tab-item{
		width: 25%;
		float: left;
		text-align: center;
	}
	.l-tab-item-img{
		width: 170rpx;
		height: 170rpx;
	}
	.l-tab-item-value{
		height: 50rpx;
	}
</style>
