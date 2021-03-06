﻿var setQuestion = new Vue({
	el: "#setQuestion",
	data(){
		return{
			nickname: null,
			questions:["","",""],
			num:3,
			remarks:""
		}
	},
	mounted:function(){
		this.getName();
	},
	methods:{
		getName: function(){
			this.nickname = "test"
		},
		sendQuestion(){
			for(let q in this.questions){
				console.log(this.questions[q])
			}
			let param = new FormData();
			param.append("questions", this.questions);
			param.append("remarks", this.remarks);
			urls = "http://escapecat.imwork.net:8080/step/postquestions"
			axios({
				headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
			  method: 'post',
			  url: urls,
			  data: param
			}).then((response) =>{
				window.location.href='./slide.html';
				console.log("pass")
			}).catch((response) =>{
				console.log(response)
				alert("发送失败")
			})
		},
		addQuestion(){
			if(this.num >= 10){
				alert("最多十个问题");
				return;
			}else{
			this.questions.push("");
			this.num++;
			}
		},
		removeQuestion(){
			if(this.num <= 3){
				alert("最少三个问题");
				return;
			}else{
			this.questions.pop();
			this.num--;
			}			
		}
		
	},
})