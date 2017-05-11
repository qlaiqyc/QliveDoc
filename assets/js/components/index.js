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
				  console.log(1213);
			};

			return Page;

		};

		return PageObj;
	}
});