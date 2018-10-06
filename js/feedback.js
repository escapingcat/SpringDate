var feedbackVM = new Vue({
	el: "#feedbackVM",
	data(){
		return{
			feedback:null,
		}
	},
	methods:{
		sendFeedback(){
			console.log(this.feedback);
		}
	}
})