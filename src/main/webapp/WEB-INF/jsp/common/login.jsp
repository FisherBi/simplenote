<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta http-equiv="Expires" content="0">
<meta http-equiv="Cache-Control" content="no-cache">
<meta http-equiv="Cache-Control" content="no-store">
<link rel="icon" type="image/ico" href="/xiaoyu/img/favicon.ico">
<link href="/bootstrap-3.3.6-dist/css/bootstrap.min.css"
	rel="stylesheet">
<link href="/jBox-0.3.2/jBox.css" rel="stylesheet">
<link rel="stylesheet" href="/stephanwagner/97f7f8-00a5dd.css">
<script src="/jquery/jquery-1.12.2.min.js" type="text/javascript"></script>
<script src="/jBox-0.3.2/jBox.min.js" type="text/javascript"></script>
<script src="/bootstrap-3.3.6-dist/js/bootstrap.min.js"
	type="text/javascript"></script>
<script type="text/javascript" src="/xiaoyu/jquerysession.js"></script>
<script type="text/javascript" src="/xiaoyu/common.js"></script>

<title>login</title>
</head>
<script type="text/javascript">
	/* $(document).ready(function() {
	}); */

	function showPwd() {
		var pwd = $("#passsword");
		alert(pwd.attr("type"));
		if (pwd.attr("type") == "password") {
			pwd.attr("type", "text");
		} else {
			pwd.attr("type", "password");
		}

	};
</script>
<body>
	<div id="header">
		<h1>
			<a href="/xiaoyu/xiaoyu.me.html" class="xiaoyu_a">xiao yu</a> <img
				src="/xiaoyu/img/xiaoyu.png" class="img-circle" height="50px"
				width="50px" />
		</h1>
	</div>
	<div class="content"
		style="margin: 0px auto; background: activeborder; background-image: url('/xiaoyu/img/loginbackground.jpg');">
		<div class=""
			style=" padding: 10px 10px 10px;margin-bottom: 20px; border: 1px solid transparent; border-radius: 4px; -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05); box-shadow: 0 1px 1px rgba(0, 0, 0, .05);">
			<form id="xyForm" role="form" modelAttribute="user" action="/back/user/login" 
				method="post" style="width: 20%; margin: 0px auto;">

				<div class="input-group">
					<span class="input-group-addon">姓名</span> <input type="text" placeholder="Your LoginName"
						class="form-control" required="required" name="loginName" 
						id="loginName" maxlength="20">
				</div><br>

				<div class="input-group">
					<span class="input-group-addon">密码</span> <input type="password"
						placeholder="Your Password" class="form-control"
						required="required"  name="password" id="password" maxlength="20">
					<span class="input-group-addon" onclick="showPwd()">可见</span>
				</div><br>
				<ul class="list-group">
					<input type="submit" value="登录"
						class="btn btn-primary btn-large btn-block"
						 />
						<span class="tooltip"></span>
				</ul>
		</div>

		</form>
	</div>
	<div id="content-text">
		<div class="g-line" style="width: 400px; margin: 25px auto;"></div>
		<a href="mailto:1546428286@qq.com">1546428286@qq.com</a>
	</div>
</body>

</html>