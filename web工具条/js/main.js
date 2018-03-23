/**
 * requejs 主要关联文件
 * * paths 可以定义文件别名
 * * 
 */
requirejs.config({
	paths: {
		jquery: 'jquery-1.11.3.min'
	}
});

/**
 * 参数1.引入的模块
 * 参数2.执行函数。参数顺序为模块顺序。
 */
requirejs(['jquery', 'backtop'], function($, backtop){
	
//	new backtop.BackTop($('#backTop'), {
//		mode: 'go',
//		pos: 200,
//		speed:1000
//	});
	
	$('#backTop').backtop({
		mode: 'go'
	});
	
	
//	var scroll = new scrollto.ScrollTo({
//		dest: 0,
//		speed:800
//	});
//	
//	$('#backTop').on('click', $.proxy(scroll.move, scroll));





//	$(window).on('scroll', function(){
//		checkPosition($(window).height());
//	});
//	checkPosition($(window).height());
//	
//	// 以过渡方式返回顶部
//	function move(){
//		// 滚动条大部分位于 html上，但部分位于body上
//		$('html, body').animate({
//			scrollTop: 0
//		}, 800);
//	}
//	// 瞬间返回顶部
//	function go(){
//		$('html, body').scrollTop(0);
//	}
//	
//	function checkPosition(pos){
//		if($(window).scrollTop() > pos){
//			$('#backTop').fadeIn();
//		}else{
//			$('#backTop').fadeOut();
//		}
//	}
});