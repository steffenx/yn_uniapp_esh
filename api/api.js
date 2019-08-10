import Request from "../static/js/request.js"
//创建Request对象
let request=new Request();

export default{
	/*
	*用户密码登录
	*data 参数值
	*/
	user_login:function(data){
		console.log(data);
		return request.http('/api/user/login',data,'POST');
	},
	
	/*
	*手机验证码
	*data 参数值
	*/
	get_vcode:function(data){
		console.log(data);
		return request.http('/api/sms/send',data,'GET');
	},
	
	/*
	*注册
	*data 参数值
	*/
	user_register:function(data){
		console.log(data);
		return request.http('/api/user/register',data,'POST');
	},
	/*
	*错误码返回
	*/
	error:function(code){
		return request.geterror(code);
	}
}
