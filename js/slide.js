var options={
	fullscreenEl:false 
}
Vue.use(vuePhotoPreview,options)

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
		this.$previewRefresh();
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
			window.location.href='./info.html';
		}
	}
})

var messageVue = new Vue({
	el: "#message",
	data(){
		return{
			cp: [],
			records:[],	
			submitted:[]
		}
	},
	mounted:function(){
		this.getCP()
		this.getRecord()
		this.getSubmitted()
	},
	methods:{
		getCP(){
			this.cp = [{nickname:"名字1", age:20, motto:"签名1", university:"大学1", gender:"男", tel:"123",major:"测试专业",hometown:"测试家乡",height:180,weight:60,education:"本科",birth:"1995-6-7",interest:"喵喵喵",icon:"./images/1.jpg",photos:["./images/1.jpg","./images/test.jpg"]}];
		},
		getRecord(){
			this.records = [{nickname:"名字1",pic:"./images/test.jpg",tel:"123",cp:1},
			{nickname:"名字2",pic:"./images/test.jpg",tel:"456",cp:0}]
		},
		getSubmitted(){
			this.submitted = [{nickname:"名字1",pic:"./images/test.jpg",tel:"123",cp:1},
			{nickname:"名字2",pic:"./images/test.jpg",tel:"456",cp:0}]
		},
		directRecord(tel){
			console.log(tel)
		},
		directSubmmitted(tel){
			console.log(tel)
		},
		directDetail(tel){
			console.log(tel)
		}
	}
})

var homepageVue = new Vue({
	el: "#homepage",
	data(){
		return{
			person:[],
			photos:[]
		}
	},
	mounted:function(){
		this.getInfo()
	},
	methods:{
		getInfo(){
			this.person = {nickname:"名字1", age:20, motto:"签名1", university:"大学1", gender:"男", tel:"123",major:"测试专业",hometown:"测试家乡",height:180,weight:60,education:"本科",birth:"1995-6-7",interest:"喵喵喵",icon:"./images/1.jpg",photos:["./images/1.jpg","./images/test.jpg"]};
			this.photos = this.person.photos;
		},
		feedback(){
			console.log("feedback");
		},
		editPaper(){
			
		},
		add(){
            this.$refs.file.click()
		},
		onfilechange(e){
			console.log(this.photos);
			var files = e.target.files || e.dataTransfer.files;
			if (!files.length)return;
			var fr = new FileReader();
			let photos = this.photos;
			fr.onload = function () {
				photos.push(fr.result);
			};
			fr.readAsDataURL(files[0]);
			this.$previewRefresh()			
		},
		remove(index){
			alert(index);
		}
	}
})