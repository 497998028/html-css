/**
 * 验证模块
 * 内部是一个独立的空间，外部只能通过 return 才能访问到内部的内容。
 */
define(['jquery'], function($){
	function checkLength(){
		
	}
	
	return {
		isEmpty: function(){},
		isEqual: function(str1, str2){
			return str1 === str2;
		}
	}
});