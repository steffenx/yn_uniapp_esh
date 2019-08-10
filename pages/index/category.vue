<template>
	<view>
        <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="button" active-color="#4cd964" class="nav_top"></uni-segmented-control>
        <view class="content">
            <view v-show="current === 0">
                <view>
                	<view class="padding"></view>
                	<view class="content">
                		<view class="nav">
                			<view class="nav-left">
                				<scroll-view scroll-y :style="'height:'+height+'px'">
                					<view class="nav-left-item" @click="categoryClickMain(item,index)" :key="index" :class="index==categoryActive?'active':''" v-for="(item,index) in categoryList">
                						<image class="category_img" :src="item.img" mode="scaleToFill"></image>
                						<view>
                							{{item.NAME}}
                						</view>
										
                					</view>
                				</scroll-view>
                			</view>
                			<view class="nav-right">
                				<scroll-view scroll-y :scroll-top="scrollTop" @scroll="scroll" :style="'height:'+height+'px'" scroll-with-animation >
                					<view :id="index==0?'first':''" class="nav-right-item" v-for="(item,index) in subCategoryList" :key="index">
                						<image :src="item.LOGO" />
                						<view>{{item.NAME}}</view>
                					</view>
                				</scroll-view>
                			</view>
                		</view>
                	</view>
                </view>
            </view>
            <view v-show="current === 1">
               <view>
               	<view class="padding"></view>
               	<view class="content">
               		<view class="nav">
               			<view class="nav-left">
               				<scroll-view scroll-y :style="'height:'+height+'px'">
               					<view class="nav-left-item" @click="category_denyClickMain(item,index)" :key="index" :class="index==category_denyActive?'active':''" v-for="(item,index) in category_deny">
               						<image class="category_img" :src="item.img" mode="scaleToFill"></image>
                						<view>
                							{{item.NAME}}
                						</view>
               					</view>
               				</scroll-view>
               			</view>
               			<view class="nav-right">
               				<scroll-view scroll-y :scroll-top="scrollTop" @scroll="scroll" :style="'height:'+height+'px'" scroll-with-animation >
               					<view :id="index==0?'first':''" class="nav-right-item" v-for="(item,index) in subCategory_deny" :key="index">
               						<image :src="item.LOGO" />
               						<view>{{item.NAME}}</view>
               					</view>
               				</scroll-view>
               			</view>
               		</view>
               	</view>
               </view>
            </view>
        </view>
    </view>
</template>

<script>
	import uniSegmentedControl from "@/components/uni-segmented-control.vue";
export default {
    components: {uniSegmentedControl},
    data() {
        return {
            items: ['可回收物','不回收物'],
            current: 0,
			categoryList:[],
			subCategoryList: [],
			category_deny:[],
			subCategory_deny:[],
			height:0,
			categoryActive:0,
			category_denyActive:0,
			scrollTop:0,
			scrollHeight:0
        }
    },
    methods: {
        onClickItem(index) {
            if (this.current !== index) {
                this.current = index;
            }
        },
		scroll(e){
			this.scrollHeight = e.detail.scrollHeight;
		},
		categoryClickMain(m, i) {
			this.categoryActive = i;
			this.subCategoryList = m.subCategoryList;
			this.scrollTop = -this.scrollHeight*i;
		},
		category_denyClickMain(m, i) {
			this.category_denyActive = i;
			this.subCategory_deny = m.subCategory_deny;
			this.scrollTop = -this.scrollHeight*i;
		},
		getCategory() {
			this.categoryList=[ {"NAME":"饮料瓶",img:`../../static/images/category_1.png`,"subCategoryList":[{"NAME":"果汁瓶","LOGO":"../../static/images/饮料瓶.png"},{"NAME":"矿泉水瓶","LOGO":""}]},
								{"NAME":"金属",img:`../../static/images/category_4.png`,"subCategoryList":[{"NAME":"电线","LOGO":""},{"NAME":"水龙头","LOGO":""}]},
								{"NAME":"塑料",img:`../../static/images/category_5.png`,"subCategoryList":[{"NAME":"水管","LOGO":""},{"NAME":"键盘","LOGO":""}]},
								{"NAME":"纸类",img:`../../static/images/category_2.png`,"subCategoryList":[{"NAME":"废报纸","LOGO":""},{"NAME":"纸盒","LOGO":""}]},
								{"NAME":"纺织物",img:`../../static/images/category_3.png`,"subCategoryList":[{"NAME":"围巾","LOGO":""},{"NAME":"鞋子","LOGO":""}]},
								{"NAME":"玻璃",img:`../../static/images/category_6.png`,"subCategoryList":[{"NAME":"镜子","LOGO":""},{"NAME":"酒杯","LOGO":""}]}];
			this.category_deny=[ {"NAME":"严禁投递物",img:`../../static/images/category_9.png`,"subCategory_deny":[{"NAME":"厨余垃圾","LOGO":""},{"NAME":"打火机","LOGO":""}]},
								{"NAME":"危险废弃物",img:`../../static/images/category_7.png`,"subCategory_deny":[{"NAME":"电池","LOGO":""},{"NAME":"灯泡","LOGO":""}]},
								{"NAME":"其他不回收",img:`../../static/images/category_8.png`,"subCategory_deny":[{"NAME":"篮球","LOGO":""},{"NAME":"皮带","LOGO":""}]}
								];					
			this.subCategoryList = this.categoryList[0].subCategoryList;
			this.subCategory_deny = this.category_deny[0].subCategory_deny;
		}
    },
		onLoad:function(){
		this.getCategory()
		uni.getSystemInfo({
			success: res => {
				this.height = res.screenHeight-90;
			}
		})
	}
}
</script>

<style>
	.nav_top{
		/* position: fixed;
		top: 45px;
		z-index: 999; */
	}
	.nav {
		display: flex;
		width: 100%;
	}
	
	.nav-left {
		width: 30%;
		background-color: #ececec;
	}
	
	.nav-left-item {
		height: 150rpx;
		/* border-right: solid 1px #E0E0E0; */
		border-bottom: solid 1px #E0E0E0;
		font-size: 30rpx;
		display: flex;
		flex-direction:column;
		align-items: center;
		justify-content: center;
	}
	.category_img{
		width: 90rpx;
		height: 90rpx;
	}
	.nav-right {
		width: 70%;
		padding-top: 22rpx;
	}
	
	.nav-right-item {
		width: 24%;
		height: 140rpx;
		float: left;
		text-align: center;
		padding: 11px;
		font-size: 28rpx;
	}
	.nav-right-item image{
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		background-color: #ececec;
	}
	.active {
		color: #7dc3f3;
		background-color: white;
		font-weight: 800;
	}
	
	.padding {
		height: var(--status-bar-height);
		width: 100%;
		top: 0;
		position: fixed;
		background-color: #F24544;
	}
	
	.content {
		padding-top: var(--status-bar-height);
		width: 100%;
		margin: 0;
	}
</style>
