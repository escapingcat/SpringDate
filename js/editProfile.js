var options={
	fullscreenEl:false //关闭全屏按钮
}
Vue.use(vuePhotoPreview,options)

var editProfileVM = new Vue({
	el: "#editProfileVM",
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
				education:null,
				height:null,
				weight:null
			},
		}
	},
	mounted:function(){
		this.getPerson();
	},
	methods:{
		getPerson: function(){
			this.user = {nickname:"名字1", age:20, motto:"签名1", university:"大学1", gender:"男", tel:"123",major:"测试专业",hometown:"测试家乡",height:180,weight:60,education:"本科",birth:"1995-6-7",interest:"喵喵喵",icon:"./images/1.jpg",photos:["./images/1.jpg","./images/1.jpg"],birth:"1995-06-07"}
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
		editProfile(){
			console.log(this.user);
			urls = "http://escapecat.imwork.net:8080/step/testRegister"
			let user = this.user;
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
			})
		}
	}
})