//网络请求
export default class Request{
	/*
	*paramete 参数
	* data 参数值
	* method 请求方式
	*/
	http(paramete,data,method){
		//根地址
		let BASE_API="http://192.168.16.116";
		return new Promise((resolve,reject)=>{
			uni.request({
				// url:`${BASE_API}${paramete}`,
				url:`${paramete}`,
				data:data,
				method:method,
				header:{
					'token': 'hello',
					'content-type':'application/x-www-form-urlencoded'
				},
				success:(res)=>{
					resolve(res);
				},
				fail:(res)=>{
					resolve(0);
				}
			})
		});
	}
	/*
	*获取错误码
	* code res.statusCode错误码
	*/
	geterror(code){
		let errormeg={
				"400": "服务器不理解请求的语法",
				"401": "请求要求身份验证",
				"403": "服务器拒绝请求",
				"404": "服务器找不到请求的网页",
				"405": "禁用请求中指定的方法",
				"406": "无法使用请求的内容特性响应请求的网页",
				"407": "请求需要代理授权",
				"408": "服务器等候请求时发生超时",
				"409": "服务器在完成请求时发生冲突",
				"410": "请求的资源已永久删除",
				"411": "服务器不接受不含有效内容长度标头字段的请求",
				"412": "服务器未满足请求者在请求中设置的其中一个前提条件",
				"413": "服务器无法处理请求，因为请求实体过大，超出服务器的处理能力",
				"414": "请求的 URI（通常为网址）过长，服务器无法处理",
				"415": "请求的格式不受请求页面的支持",
				"416": "请求范围不符合要求",
				"417": "服务器未满足”期望”请求标头字段的要求",
				"500": "服务器遇到错误，无法完成请求",
				"501": "服务器不具备完成请求的功能",
				"502": "服务器作为网关或代理，从上游服务器收到无效响应",
				"503": "服务器目前无法使用",
				"504": "服务器作为网关或代理，但是没有及时从上游服务器收到请求",
				"505": "HTTP 版本不受支持",
				"0":"请检查网络连接",
			}
		if(errormeg[code]==null)
		{
			return "未知错误";
		}
		return errormeg[code];
	}
	
}
