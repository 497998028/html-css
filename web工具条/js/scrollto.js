/**
 * 移动滚动条到指定位置
 * # 使用了面向对象方式
 */
define(['jquery'], function(){
	/**
	 * 构造函数
	 * @param {Object} opts
	 */
	function ScrollTo(opts){
		this.opts = $.extend({}, ScrollTo.defaults, opts);
		this.$el = $('html, body'); //多次获取的值，缓存起来
	};
	// 默认值  写在构造函数之内，每次使用都会占用；
	// 静态属性
	ScrollTo.defaults = {
		dest: 0,
		speed: 800
	};
	
	/**
	 * 运动到顶部
	 */
	ScrollTo.prototype.move = function(){
		var opts = this.opts; //局部变量，会比直接引用对象来得快点。
		// 限定当前滚动条不等于指定位置 并且 不在运动
		if($(window).scrollTop() != opts.dest && !this.$el.is(':animated')){
			console.log(this.$el);//调试信息
			this.$el.animate({
				scrollTop: opts.dest,
			}, opts.speed);
		}
		
	};
	/**
	 * 瞬间返回顶部
	 */
	ScrollTo.prototype.go = function(){
		var dest = this.opts.dest;
		if($(window).scrollTop() != dest){
			this.$el.scrollTop(dest);
		}
	};
	
	return {
		ScrollTo: ScrollTo
	}
});