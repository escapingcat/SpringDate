
var verifyVM = new Vue({
	el: "#verifyVM",
	data(){
		return{
			time:60,
			sendMsgDisabled: false,
			inputText:{},
		}
	},
	
	methods:{
		send(){
			let me = this;
			let reg= 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
			console.log(this.inputText.tel);
            if(me.tel==''){
                 alert("请输入手机号码");
            }else if(!reg.test(this.inputText.tel)){
                alert("手机格式不正确");
			}else{
			me.sendMsgDisabled = true;
			urls = "http://escapecat.imwork.net:8080/step/getcode"
			let param = new FormData();
			param.append('tel', me.inputText.tel)
			axios({
				headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
			  method: 'post',
			  url: urls,
			  data: param
			}).then((response) =>{
				
				console.log("pass")
				
			}).catch((response) =>{
				console.log(response)
				alert("发送失败，请重试")
			})
			
			let countDown = window.setInterval(function(){
				if((me.time--) <= 0){
					me.time = 60;
					me.sendMsgDisabled = false;
					window.clearInterval(countDown);
				}
			}, 1000);
			}
		},
		verify(){
			console.log(this.tel);
			let param = new FormData();
			for(let p in this.inputText){
				param.append(p, this.inputText[p])
			}
			urls = "http://escapecat.imwork.net:8080/step/login"
			axios({
				headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
			  method: 'post',
			  url: urls,
			  data: param
			}).then((response) =>{
				window.location.href='./register.html?tel=' + this.inputText.tel;
				console.log("pass")
			}).catch((response) =>{
				console.log(response)
				alert("发送失败，请重试")
			})
		},
	}
	
})