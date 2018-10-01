var options={
	fullscreenEl:false //关闭全屏按钮
}
Vue.use(vuePhotoPreview,options)

var registerVM = new Vue({
	el: "#registerVM",
	data(){
		return{
			user:{
				tel:null,
				photo:null,
				nikename:null,
				motto:null,
				gender:null,
				birth:null,
				hometown:null,
				university:null,
				major:null,
			},
		}
	},
	mounted:function(){
		this.getTel("tel");
	},
	methods:{
		getTel: function(name){
			let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
			let r = window.location.search.substr(1).match(reg);		
			 if (r!= null) {
				this.user.tel = unescape(r[2]);
				console.log(this.user.tel)
			 }else{
				alert("获取失败")
			 }
		},
		onfilechange: function(e){
			var files = e.target.files || e.dataTransfer.files;
			if (!files.length)return;
			this.user.photo = files[0];
			var fr = new FileReader();
			fr.onload = function () {
				document.getElementById('icon').src = fr.result;
			};
			fr.readAsDataURL(files[0]);
			console.log(this.user.photo);
		},
		test(){
			console.log(this.user.birth)
		},
		sendRegiser(){
			console.log(this.user);
			urls = "http://escapecat.imwork.net:8080/step/testRegister"
			let user = this.user;
			for(let item in user){
				if(user[item] == null){
					alert("请填写完整信息");
					console.log(item);
					return;
				}
				else{
					console.log(user[item]);
				}
			}
			let param = new FormData();
			for(let p in this.user){
				param.append(p, this.user[p])
			}
			axios({
				headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
			  method: 'post',
			  url: urls,
			  data: param
			}).then((response) =>{
				window.location.href='./setQuestion.html?nickname'+this.user.nickname;
				console.log("pass")
			}).catch((response) =>{
				console.log(response)
				alert("发送失败，请重试")
			})
		}
	}
})