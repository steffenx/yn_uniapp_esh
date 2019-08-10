<template>
	<view class="idea-warp">
		<view class="opinion-container">
			<view class="opinion-title">
				<text class="title">问题类型</text>
				<view class="radio-type">
					<radio-group class="group" @change="radioChange">
						<label class="label"  v-for="(item, index) in items" :key="item.value">
							<view><radio :value="item.value" :checked="index === current" /></view>
							<view>{{ item.name }}</view>
						</label>
					</radio-group>
				</view>
			</view>
			<view class="opinion-content">
				<text class="title">反馈内容</text>
				<view class="opinion">
					<view class="uni-textarea"><textarea focus auto-height placeholder-style="color:#9c9c9c" placeholder="输入反馈内容,我们将为您不断改进" /></view>
				</view>
				<muploadImage></muploadImage>
			</view>
		</view>
		<view class="mobile-content">
			<text class="title">电话号码</text>
			<view class="mobile">
                <input class="uni-input"  placeholder="13669998776" />
            </view>
		</view>
		<button class="btn-sub" :loading="isload">{{button_text}}</button>
	</view>
</template>

<script>
	import muploadImage from '../../components/upload/uploadimage.vue';
	export default {
		data() {
			return {
				items: [
					{
						value: 'emmm',
						name: '咨询'
					},
					{
						value: 'idea',
						name: '建议',
						checked: 'true'
					},
					{
						value: 'ou',
						name: '吐槽'
					},
					{
						value: 'bar',
						name: '夸赞'
					},
					{
						value: 'other',
						name: '其他'
					},

				],
				current: 0,
				isload:false,
				button_text:"提交反馈"
			};
		},
		components:{
			muploadImage
		},
		methods: {
			radioChange: function(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
			},
			//选择图片
			chooseImage: async function() {
				uni.chooseImage({
					sourceType: sourceType[this.sourceTypeIndex],
					// #ifdef MP-WEIXIN
					sizeType: sizeType[this.sizeTypeIndex],
					// #endif
					count: this.imageLength - this.imageList.length,
					success: res => {
						this.imageList = this.imageList.concat(res.tempFilePaths);
						this.urlTobase64(res.tempFilePaths);
						console.log(res.tempFilePaths);
					}
				});
			},
			//预览图片
			previewImage: function(e) {
				var current = e.target.dataset.src;
				uni.previewImage({
					current: current,
					urls: this.imageList
				});
			},
			//删除图片
			deleteImage: function(e) {
				var index = e.target.dataset.index;
				var that = this;
				var images = that.imageList;
				images.splice(index, 1);
				that.imageList = images;
			}
		}
	};
</script>

<style>
body,
html {
	height: 100%;
	background: #f4f4f4;
}
</style>
