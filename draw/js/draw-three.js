$(function () {
	'use strict';
	var status = 0; // 表示没有旋转
	var set;
	var nume = 5;


	$(".coin").on("click", function () {
		if (nume > 0) {
			nume--;
			spin();
			$(".number").text(nume);
		} else {
			alert("每天只允许抽奖5次");
		}

	})

	function spin() {
		var angle = parseInt(Math.random() * 360 + 360);
		var i = 0;
		var w_h = $(window).height();
		if (status == 0) {
			set = setInterval(function () {
				if (i < angle) {
					i++;
					status = 1;
				} else {
					clearInterval(set);
					status = 0;
				}

				$(".circle").css({
					"transform": "rotateZ(" + i + "deg)"
				});
				$(".shade").show();
				if (i > 382.5 && i < 427.5 || i > 562.5 && i < 607.5) {
					alert(4);
					$(".clip").attr("src", "imges/04.png");
				} else if (i > 427.5 && i < 472.5 || i > 607.5 && i < 652.5) {
					alert(2);
					$(".clip").attr("src", "imges/02.png");

				} else if (i > 472.5 && i < 517.5 || i > 652.5 && i < 697.5) {
					alert(3);
					$(".clip").attr("src", "imges/03.png");

				} else {
					alert(1);
					$(".clip").attr("src", "imges/01.png");
				};
				//				if (i > 22.5 && i < 67.5 || i > 202.5 && i < 247.5) {
				//					alert(4);
				//					$(".clip").attr("src", "imges/04.png");
				//				} else if (i > 67.5 && i < 112.5 || i > 247.5 && i < 292.5) {
				//					alert(2);
				//					$(".clip").attr("src", "imges/02.png");
				//
				//				} else if (i > 112.5 && i < 157.5 || i > 292.5 && i < 337.5) {
				//					alert(3);
				//					$(".clip").attr("src", "imges/03.png");
				//
				//				} else {
				//					alert(1);
				//					$(".clip").attr("src", "imges/01.png");
				//				};
				$(".praise").stop(true).animate({
					"top": w_h / 2 - 250
				})
			}, 100 / 10000);
		}
	}


	$(".rule").on("click", function () {
		var w_h = $(window).height();
		$(".cover").show();
		$(".regulation").stop(true).animate({
			"top": w_h / 2 - 250
		})
	})
	$(".x").on("click", function () {
		$(".cover").hide();
		$(".regulation").stop(true).animate({
			"top": -480
		})
	})

	$(".false,.but").on("click", function () {
		$(".shade").hide();
		$(".praise").stop(true).animate({
			"top": -480
		})
	})
})
