$(function(){
	var sections = $('.section');
	$(".container").fullpage({
		resize:true,
		menu:true,
		anchors: ['page1', 'page2', 'page3', 'page4'],
		menu: '#menu',
		navigation:true,
		navigationPosition:"right",
		navigationTooltips:["登录百度舆情","领先：数据收集与处理","全面：舆情分析逻辑与架构","专业：专业数据可视化"],
		afterLoad:function(anchorlink,index){
			sections.removeAttr("id","active");
			sections.eq(index-1).attr("id","active");
		}
	});
	$('.button').click(function(){
		$.fn.fullpage.moveSectionDown();
	})
})