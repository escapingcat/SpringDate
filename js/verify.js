
var verifyVM = new Vue({
	el: "#verifyVM",
	data(){
		return{
			time:60,
			sendMsgDisabled: false,
			tel:"",
			code:""
		}
	},
	
	methods:{
		send(){
			let me = this;
			let reg= 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
			console.log(this.tel);
            if(me.tel==''){
                 alert("请输入手机号码");
            }else if(!reg.test(this.tel)){
                alert("手机格式不正确");
			}else{
			me.sendMsgDisabled = true;
			urls = "/step/testSend"
			axios({
				headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
			  method: 'post',
			  url: urls,
			  data: this.transformRequest({
				  tel:this.tel,
			  })
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
			urls = "/step/testVerify"
			axios({
				headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
			  method: 'post',
			  url: urls,
			  data: this.transformRequest({
				  tel:this.tel,
				  code:this.code
			  })
			}).then((response) =>{
				window.location.href='./02.html';
				console.log("pass")
			}).catch((response) =>{
				console.log(response)
				alert("发送失败，请重试")
			})
		},
		transformRequest: function (data) {
			let ret = ''
			for (let it in data) {
			ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
				}
			return ret
		}

	}
	
})