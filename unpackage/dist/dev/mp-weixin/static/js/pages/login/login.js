import api from '@/api/api.js';
import Decide from '../../utils/decide.js';

export default {
	/*
	*_this:全局this
	* data:数据(参数)
	* callback:回掉
	*/
	login: function(_this, data,callback) {
		//请求
		api.user_login(data).then((res) => {
			//回掉
			Decide.res_decide(_this, res, (revert) => {
				
				if (revert != null) {
					console.log(revert);
					//保存本地
					uni.setStorage({
						key: 'token',
						data: revert.userInfo.token,
						success: function() {
							console.log('保存token成功');
						}
					});
					uni.setStorage({
						key: 'loginjson',
						data: revert.userInfo,
						success: function() {
							console.log('保存loginjson成功');
						}
					});
					//保存vuex
					let obj = {};
					obj.id = revert.userInfo.id;
					obj.token = revert.userInfo.token;
					obj.mobile = revert.userInfo.mobile;
					_this.$store.commit('commituserinfo', obj);
					callback(true);//回掉
				}
			});
			// //失败的回掉
			// if(res==0){
			// 	console.log("请检查网络连接");
			// 	revert.type="err";
			// 	revert.content="请检查网络连接";
			// }
			// //成功的回掉
			// if(res.data.code==0){
			// 	console.log(res.data.msg);
			// 	revert.type="warn";
			// 	revert.content=res.data.msg;
			// }
			// else if(res.data.code==1){
			// 	revert.type="success";
			// 	revert.content=res.data.msg;
			// 	console.log(res.data);
			// 	if(res.data.data!=null){
			// 		revert.json=res.data.data;
			// 		console.log(revert.json);
			// 		uni.setStorage({
			// 			key: 'token',
			// 			data: res.data.data.userInfo.token,
			// 			success: function () {
			// 				console.log('保存token成功');
			// 			}
			// 		});
			// 		uni.setStorage({
			// 			key: 'loginjson',
			// 			data: res.data.data.userInfo,
			// 			success: function () {
			// 				console.log('保存loginjson成功');
			// 			}
			// 		});
			// 		let obj={};
			// 		obj.id=this.listArr.userInfo.id;
			// 		obj.token=this.listArr.userInfo.token;
			// 		obj.mobile=this.listArr.userInfo.mobile;
			// 		_this.$store.commit('commituserinfo',obj);		
			// 	}else{
			// 		console.log("无数据");
			// 	}
			// }
			// else{
			// 	console.log(api.error(res.statusCode));
			// 	revert.type="err";
			// 	revert.content=api.error(res.statusCode);
			// }
			// callback(revert);
		});
	},
	/*
	*发送验证码
	* _this:全局this
	* data:数据(参数)
	*/
	vcode:function(_this, data){
		api.get_vcode(data).then((res)=>{
			Decide.res_decide(_this, res, (revert) => {
				console.log(revert);
			});
		})
	},
	
	registe:function(_this, data,callback){
		api.user_register(data).then((res)=>{
			Decide.res_decide(_this, res, (revert) => {
				console.log(revert);
				if (revert != null) {
					console.log(revert);
				}
			});
		})
	}
}
