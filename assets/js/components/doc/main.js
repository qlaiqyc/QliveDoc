PageInfo.register({
	"type": "Obj",
	"info": function() {

		var PageObj = {};

		PageObj.require = {
			"$": "jquery",
			"layui": "layui"
		};

		PageObj.page = function() {

			var FunUtil = {};
			var HtmUtil = {};
			var Page 	= {};

			Page.show = function() {

				console.log("123");

			};

			return Page;

		};

		return PageObj;
	}
});