define(['jquery', 'scrollto'], function($, scrollto){
	
	function BackTop(el, opts){
		this.opts = $.extend({}, BackTop.defaults, opts);
		this.$el = $(el);//转化为jquery对象
		this.scroll = new scrollto.ScrollTo({
			dest:0,
			speed:this.opts.speed
		});
		
		if(this.opts.mode == 'move'){
			this.$el.on('click', $.proxy(this._move, this));
		}else{
			this.$el.on('click', $.proxy(this._go, this));
		}
		$(Window).on('scroll', $.proxy(this._checkPosition, this));
	};
	BackTop.defaults = {
		mode: 'move',
		pos: $(window).height(),
		speed:800
	};
	
	BackTop.prototype._move = function(){
		this.scroll.move();
	};
	BackTop.prototype._go = function(){
		this.scroll.go();
	};
	BackTop.prototype._checkPosition = function(){
		var $el = this.$el;
		
		if($(window).scrollTop() > this.opts.pos){
			$el.fadeIn();
		}else{
			$el.fadeOut();
		}
	};
	
	// 注册为jquery插件
	$.fn.extend({
		backtop: function(opts){
			// 如果是多个元素进来 each 就能体现作用了。
			return this.each(function(){
				new BackTop(this, opts);
			});
		}
	})
	
	
	return {
		BackTop: BackTop
	}
});