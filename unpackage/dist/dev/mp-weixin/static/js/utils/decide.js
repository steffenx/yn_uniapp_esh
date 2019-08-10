import Popup from '@/static/js/components/popup/popup.js';
import api from '@/api/api.js';

export default{
	/*
	*_this:全局this
	* res:服务器返回数据
	* callback:回掉
	*/
	res_decide:function(_this,res,callback){
		let timeoutsecond=2000;//结束时间
		let revert=null;//回掉数据
		//失败的回掉
		if(res==0){
			console.log("请检查网络连接");
			Popup.setPopup(_this,"err","请检查网络连接",timeoutsecond);
		}
		//成功的回掉
		else if(res.data.code==0){
			console.log(res.data.msg);
			Popup.setPopup(_this,"warn",res.data.msg,timeoutsecond);
		}
		else if(res.data.code==1){
			console.log(res.data);
			Popup.setPopup(_this,"success",res.data.msg,timeoutsecond);
			revert=res.data.data;
		}
		else{
			console.log(api.error(res.statusCode));
			Popup.setPopup(_this,"err",api.error(res.statusCode),timeoutsecond);
		}
		callback(revert);
	}
}