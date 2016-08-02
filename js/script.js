$(document).ready(function(){

	var activeTab = "auroria";

	//solves a bug in bootstrap when using .fade on tabs
	$('#myTabs a:last').tab("show");
	setTimeout(function(){
		$('#myTabs a:first').tab("show");
	},150);

	$('#myTabs a').click(function (e) {
		activeTab = $(this).attr("aria-controls");
	});

	$(".thumbContainer button").click(function (e){
		var animationTime = 300,
		pre = "img/"+activeTab+"/", pos= "-md.png",
		elt = "#"+activeTab+"BigPic",
		path = pre+this.id+pos;

		$(elt).fadeOut(animationTime);
		setTimeout(function(){
			$(elt).attr("src", path);
			$(elt).fadeIn(animationTime);	
		},animationTime);
	})

});