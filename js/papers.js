var answerVM = new Vue({
	el: "#papersVM",
	data(){
		return{
			person:[],
			me:[],
			papers:[],
			answers:[]
		}
	},
	mounted:function(){
		this.getPerson(),
		this.getMe(),
		this.getPapers()
	},
	methods:{
		getPerson(){
			this.person = {nickname:"名字1", age:20, motto:"签名1", university:"大学1", gender:"男", tel:"123",major:"测试专业",hometown:"测试家乡",height:180,weight:60,education:"本科",birth:"1995-6-7",interest:"喵喵喵",icon:"./images/1.jpg",photos:["./images/1.jpg","./images/1.jpg"]}
		},
		getMe(){
			this.me = {nickname:"名字2", age:20, motto:"签名2", university:"大学2", gender:"女", tel:"123",major:"测试专业",hometown:"测试家乡",height:180,weight:60,education:"本科",birth:"1995-6-7",interest:"喵喵喵",icon:"./images/1.jpg",photos:["./images/1.jpg","./images/1.jpg"]}
		},
		getPapers(){
			this.papers = ["问题1", "问题2", "问题3"],
			this.answers = {answer:["回答1","回答2","回答3"],remarks:"备注"}
		},
		sendAnswer(){
			console.log(this.answer);
			console.log(this.remarks)
		}
	}
})