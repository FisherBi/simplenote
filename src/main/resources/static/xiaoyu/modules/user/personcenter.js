var url = document.URL;
var userId = url.substring(url.lastIndexOf('/') + 1);

var $ajaxPromise1 = $.ajax({
	type : "get",
	async : true,
	url : '/api/v1/user/' + userId,
	success : function(data) {
		var obj = jQuery.parseJSON(data);
		if (obj.code == "0") {
			var $user = obj.data;
			if (!checkNull($user)) {
				setTitle($user.nickname + '-个人中心');
				var $userPanel = $(".panel-default");
				if (checkNull($user.avatar)) {
					$user.avatar = 'common/avatar.png';
				}
				$userPanel.find("img").attr("src", $user.avatar);
				$userPanel.find("img").attr("id", $user.userId);
				$userPanel.find(".nickname_panel").html($user.nickname);
				$userPanel.find(".des_panel").html($user.description);

			}
		} else {
			window.location.href = "/common/404";
		}

	}
});
var $ajaxPromise2 = $
		.ajax({
			type : "get",
			async : true,
			url : '/api/v1/article/list',
			data : {
				userId : userId
			},
			success : function(data) {
				var obj = jQuery.parseJSON(data);
				if (obj.code == '0') {
					var arHtml = "";
					if (obj.data != null || obj.data.len >= 0) {
						$
								.each(
										obj.data,
										function(index, ar) {
											arHtml += '<li class="list-group-item" style="cursor: pointer;"  id="'
													+ ar.articleId + '">';
											arHtml += '<label>' + '</label>';
											arHtml += '<p>' + ar.content
													+ '...' + '</p>';

											arHtml += '<div class="comment_bar"><div class="bar_part">';
											arHtml += '<i class="icon_like"></i><label style="margin: 2px;">点赞</label></div>';
											arHtml += '<div class="bar_part"><i class="icon_comment_alt"></i><label style="margin: 2px;">评论</label></div>';
											arHtml += '<div class="bar_part"><i class="icon_heart_alt"></i><label style="margin: 2px;">收藏</label></div>';
											arHtml += '</div>';
											arHtml += '</li>';

										});
						$(".list-group").html(arHtml);
					}
				}
				$("p").on("click", function() {
					var elem = $(this).parent();
					window.location.href = '/article/' + elem.attr("id");
				})
				addHeadForImg();
				return true;
			}
		});

$(document).ready(function() {
	$ajaxPromise1.promise().done(function() {

	});
	$ajaxPromise2.promise().done(function() {

	});
	if (!isPC()) {
		$(".main").css("width", "100%");
		$(".content").css("width", "100%");
		$(".content").css("display", "block");
		$(".content-left").css("width", "100%");
		$(".content-right").css("width", "100%");
	}
	$("#login").bind("click", function() {
		gotoLogin('/user/' + userId);
	});
	var $userInfo = jQuery.parseJSON($.session.get("user"));
	var $thisUserId = userId;
	if (!checkNull($userInfo)) {
		if ($userInfo.userId == $thisUserId) {
			$(".camera").css("display", "block");
		}
	}
});