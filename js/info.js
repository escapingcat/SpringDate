var options={
	fullscreenEl:false 
}
Vue.use(vuePhotoPreview,options)

var infoVM = new Vue({
	el: "#infoVM",
	data(){
		return{
			person:[],
			icon:null
		}
	},
	mounted:function(){
		this.getInfo(),
		this.$previewRefresh()
	},
	methods:{
		getInfo(){
			this.person = {nickname:"名字1", age:20, motto:"签名1", university:"大学1", gender:"男", tel:"123",major:"测试专业",hometown:"测试家乡",height:180,weight:60,education:"本科",birth:"1995-6-7",interest:"喵喵喵",icon:"./images/1.jpg",photos:["./images/1.jpg","./images/1.jpg"]};
		},
		directAnswer(){
			console.log("pass")
		},
	}
})