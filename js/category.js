var CategorySlide = function() {

}

CategorySlide.prototype = {
    categoryLeft: function() {
        // 1. 初始化左侧
        var swiper1 = new Swiper('#categoryLeft', {
            direction: 'vertical',
            //如果有多个 <!-- 滑动内容的大容器 -->swiper-slide 就需要加这个参数
            slidesPerView: 'auto',
            //开启回弹效果
            freeMode: true,
            mousewheel: true,
        });
    },
    categoryRight: function() {
        // 2. 初始化右侧滑动
        var swiper2 = new Swiper('#categoryRight', {
            direction: 'vertical',
            //如果有多个 <!-- 滑动内容的大容器 -->swiper-slide 就需要加这个参数
            slidesPerView: 'auto',
            //开启回弹效果
            freeMode: true,
            //初始化滚动条  必须子元素的高度超过父元素
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            mousewheel: true,
        });
    }
}


window.addEventListener('load', function () {
	//创建分类滑动对象的实例
	var categorySlide = new CategorySlide();
	//分别调用左侧右侧滑动方法
	categorySlide.categoryLeft();
	categorySlide.categoryRight();
});