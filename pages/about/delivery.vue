<!-- 我的投递界面 -->
<template>
	<view class="delivery-warp">
		<view class="list-warp" v-for="(item,index) of delivery_obj">
			<view class="info-wrap">
				<view class="time-content">
					<text class="time">{{item.delivery_time}}</text>
					<text class="line"> | </text>
					<text class="type">{{item.delivery_type}}</text>
				</view>
				<view class="type">
					<view class="delivery-pic">
						<image class="icon" src="../../static/images/delivery.png"></image>
					</view>
					<text class="delivery-text">{{item.delivery_text}}</text>
				</view>
			</view>
			<view class="integral-wrap">
				<text class="integral">{{item.delivery_integral}}</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				delivery_obj:[
					{
						delivery_integral:"250积分",
						delivery_time:"今天 08:33",
						delivery_type:"纸张",
						delivery_text:"总重量:250"
					},
					{
						delivery_integral:"249积分",
						delivery_time:"今天 07:33",
						delivery_type:"聚乙烯",
						delivery_text:"总重量:249"
					},
					{
						delivery_integral:"239积分",
						delivery_time:"今天 6:33",
						delivery_type:"矿泉水瓶子",
						delivery_text:"总重量:248"
					},
										{
						delivery_integral:"239积分",
						delivery_time:"今天 6:33",
						delivery_type:"矿泉水瓶子",
						delivery_text:"总重量:248"
					},
										{
						delivery_integral:"239积分",
						delivery_time:"今天 6:33",
						delivery_type:"矿泉水瓶子",
						delivery_text:"总重量:248"
					},
										{
						delivery_integral:"239积分",
						delivery_time:"今天 6:33",
						delivery_type:"丙烯腈─丁二烯─苯乙烯共聚合物",
						delivery_text:"总重量:248"
					},

				]
				
			}
		}
	}
</script>

<style>
</style>
