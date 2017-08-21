/*
* @Author: Administrator
* @Date:   2017-08-21 15:34:33
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-21 17:13:32
*/
'use strict;'
$(function() {
	toggleShowLocation();
	changeCity();
	carousel();
})

// 鼠标划入地理位置图标，下拉框显示
function toggleShowLocation() {
	$('#location').hover(function() {
		$(this).addClass('location-wrap');
	}, function() {
		$(this).removeClass('location-wrap');
	})
}

// 鼠标点击具体的省市进行切换
function changeCity() {
	$('.location-list > li > a').click(function() {
		$(this).addClass('selected').parent().siblings().children('a').removeClass('selected');
		$('#location .cur-city').html($(this).html());
		$('#location').removeClass('location-wrap');
	})
}

// 轮播图
function carousel() {
	var iNow = 0;
	var timer;
	$('.carousel-btn > li').click(function() {
		var _this = $(this);
		iNow = _this.index();		
		tab();
	})

	function tab() {
		$('.carousel-wrap > li').stop().animate({opacity:0},500).eq(iNow).stop().animate({opacity:1},500);
		$('.carousel-btn > li').removeClass('active').eq(iNow).addClass('active');
	}

	next = function() {
		iNow ++;
		if(iNow == $('.carousel-wrap > li').length) {
			iNow = 0;
		}
		tab();
	}
	prev = function() {
		iNow --;
		if(iNow < 0) {
			iNow = $('.carousel-wrap > li').length-1;
		}
		tab();
	}

	timer = setInterval(next, 1500);

	$('.cars-info-center').hover(function() {
		clearInterval(timer);
		$('.center-btn').show();
	}, function() {
		timer = setInterval(next, 1500);
		$('.center-btn').hide();
	})
}
