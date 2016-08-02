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
		var pre = "img/"+activeTab+"/", pos= "-md.png";
		var elt = "#"+activeTab+"BigPic";
		console.log(elt)
		$(elt).attr("src", pre+this.id+pos);
	})

});