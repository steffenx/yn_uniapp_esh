import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
	userinfo:{
		id:0,
		token:'',
		mobile:''		
	},
	location:{
		spointx:0,//我的经度
		spointy:0,//我的纬度
		epointx:0,//目标经度
		epointy:0//目标纬度		
	}
}

const mutations={
	commituserinfo(state,data){
		state.userinfo=data;
	},
	commitlocation(state,data){
		state.location=data;
	}
}
export default new Vuex.Store({
	state:state,
	mutations:mutations
})