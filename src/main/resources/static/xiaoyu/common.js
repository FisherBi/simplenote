
var confirmjBox;
$(document).ready(function() {
	confirmjBox = new jBox('Confirm',{
		confirmButton:'确认',
		cancelButton:'取消'
	});	
});
/**
 * 更新信息
 * 
 * @param item
 */
function update(item) {// 传入action
	$.ajax({
		cache : true,
		type : "POST",
		url : item,
		data : $('#xyForm').serialize(),
		async : false,
		error : function(data) {
			new jBox('Notice', {
				color : 'red',
				animation: 'tada',
				content : '服务器错误!'
			});
			return false;
		},
		success : function(data) {
			if (data == 'success') {
				new jBox('Notice', {
					color : 'red',
					animation: 'tada',
					content : '更新成功!'
				});
				confirmjBox.close();
			} else {
				new jBox('Notice', {
					color : 'red',
					animation: 'tada',
					content : '更新失败!'
				});
			}
			return true;
		}
	});
};
/**
 * 提交表单
 * 
 * @param item
 */
function postForm(item) {
	$.ajax({
		cache : true,
		type : "POST",
		url : item,
		data : $('#xyForm').serialize(),
		async : false,
		error : function(data) {
			new jBox('Notice', {
				color : 'red',
				animation: 'tada',
				content : '服务器错误!'
			});
			return false;
		},
		success : function(data) {
			if (data == 'success') {
				new jBox('Notice', {
					color : 'red',
					animation: 'tada',
					content : '添加成功!'
				});
			} else {
				new jBox('Notice', {
					color : 'red',
					animation: 'tada',
					content : '添加失败!'
				});
			}
			return true;
		}
	});
}

/**
 * 根据id查看详情
 * 
 * @param item
 */
function getDetail(action, item) {
		 new jBox('Modal', {
			width:700,
			height:600,
			title:"详细信息",
			closeButton:'title',
			closeOnClick:false,
			draggable:"title",
			ajax: {
				url: action,
				data: 'id='+item,
				reload: true
			}
		}).open();
}
var myModal;//定义全局变量,用作弹出窗口上传后,关闭弹出框
function uploadFile() {
	if(myModal != null) {//判断是否前一次的没有清除
		myModal.destroy();		
	}
	myModal = new jBox('Modal', {
		height : 350,
		width : 350,
		animation: 'flip',
		closeButton:'title',
		closeOnClick:false,
		draggable : "title",
		title : "上传图片",
		ajax : {
			url : "/html/back/uploadFile.html",
			reload : true
		},
		onCloseComplete: function(e) {
			myModal.destroy();	
		},	
	});
	myModal.open();
}
/**
 *login 
 * */
function login(item) {
	if($("#password").val()==''||$("#loginName").val()=='') {
		$('.tooltip').jBox('Tooltip',{
			content:'姓名和密码都不能为空（*＾-＾*）',
			attach:$("#xyForm"),
			closeOnClick:'body',
			color:'red',
			target:$("#xyForm")
		}).open();
		return;
	}
	$.ajax({
		cache : false,
		type : "POST",
		url : item,
		data : $('#xyForm').serialize(),
		async : false,
		error : function(data) {
			new jBox('Notice', {
				color : 'red',
				animation: 'tada',
				content :'服务器错误'
			});
			return false;
		},
		success : function(data) {
			var jsonObj = jQuery.parseJSON(data);
			if (jsonObj.message == 'success') {
				//$.session.set('user',jsonObj.user,false);
				$.session.set('user',JSON.stringify(jsonObj.user),false);
				window.location.href="/html/app/userDetail.html";
				return true;
			} else {
				new jBox('Notice', {
					color : 'red',
					animation: 'tada',
					content :  jsonObj.message
				});
				return false;
			}
		}
	});
};
//tool function

/**时间转化
 * @param time
 * @returns {String}
 */
function D2Str(time){
    var datetime = new Date();
    datetime.setTime(time);
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
    var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
    var hour = datetime.getHours()< 10 ? "0" + datetime.getHours() : datetime.getHours();
    var minute = datetime.getMinutes()< 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
    var second = datetime.getSeconds()< 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
    return year + "-" + month + "-" + date+" "+hour+":"+minute+":"+second;
}