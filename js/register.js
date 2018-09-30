var options={
	fullscreenEl:false //关闭全屏按钮
}
Vue.use(vuePhotoPreview,options)

var registerVM = new Vue({
	el: "#registerVM",
	data(){
		return{
			user:{
				photo:null,
				name:null,
				motto:null,
				gender:null,
				birth:null,
				home:null,
				school:null,
				major:null,
				interest:null,
			},
		}
	},
	methods:{
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
			urls = "/step/testRegister"
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
			axios({
				headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
			  method: 'post',
			  url: urls,
			  data: this.transformRequest(user)
			}).then((response) =>{
				window.location.href='./03.html';
				console.log("pass")
			}).catch((response) =>{
				console.log(response)
				alert("发送失败，请重试")
			})
		}
	}
})