PageInfo.register({"type":"Start","info":function(){
 	
	/**
	 * 所有对象通过初始化进入 Start
	 * 
	 * require: 需要哪些 外部引用
	 * 
	 * Pub: 公共方法对象
	 * Global: 此模块下全局遍历对象
	 * Router : 路由对象 
	 * */
	
	var Start = {};
	
	Start.require = {
		"$":"jquery"
	};
	Start.Router ={
	 	flag:"hash",
	 	list:{
	 		 "index"		:"/assets/js/components/index",
			}
	 };
	
	Start.Global = {
		"id":"qlive-body",  //所有 主DIV
		"name":"QliveDoc"       //项目名称
	};
	 
	Start.Pub = {
	};
 	
 	return Start;
	
}});



