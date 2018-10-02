var squareVue = new Vue({
	el: "#square",
	data(){
		return{
			dated:0,
			persons: []
		}
	},
	mounted:function(){
		this.getDated();
		this.getPersons();
	},
	methods:{
		getDated(){
			this.dated = 2
		},
		getPersons(){
			this.persons = [
			{nickname:"名字1", age:20, motto:"签名1", university:"大学1", gender:"男", tel:"123"},
			{nickname:"名字2", age:21, motto:"签名2", university:"大学2", gender:"女",tel:"456"},
			{nickname:"名字3", age:22, motto:"签名3", university:"大学3", gender:"男",tel:"789"}
			]
		},
		toDetail(tel){
			console.log(tel);
		}
		
	}
})

var messageVue = new Vue({
	el: "#message",
	data(){
		return{
			dated:0,
		}
	}
})

var homepageVue = new Vue({
	el: "#homepage",
	data(){
		return{
			dated:0,
			
		}
	}
})