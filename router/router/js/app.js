// 声明依赖，依赖ngRoute模块
var app = angular.module("myApp",["ngRoute"])

// 对router进行配置
app.config(['$routeProvider',function ($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl: './views/home.html',
			controller: 'HomeCtrl'
		})
		.when('/cart',{
			templateUrl: './views/cart.html',
			controller: 'CartCtrl'
		})
		.when('/mine',{
			templateUrl: './views/mine.html',
			controller: 'MineCtrl'
		})
		.when('/userDetail/:id',{
			templateUrl: './views/userDetail.html',
			controller: 'UserDetailCtrl'
		})
		.when('/404',{
			templateUrl: './views/404.html'
		})
		// 默认的（或者上面都没匹配上）的地址
		.otherwise({
			redirectTo: '/404'
		})
}])

// 声明一个之定义服务，实现共享数据和方法
// 第一个参数为自定义服务的名称，第二参数为服务的内容
app.factory("UserService",[function (){

	// 源数据
	var userList = [
			{ 'userId' : 1001, userName : '李达康', userAge : 18},
			{ 'userId' : 1002, userName : '高玉良', userAge : 20},
			{ 'userId' : 1003, userName : '祁同伟', userAge : 16},
			{ 'userId' : 1004, userName : '侯亮平', userAge : 22},
			{ 'userId' : 1005, userName : '白百何', userAge : 33}
		];

	return {
		getUserList: userList,
		// 根据id返回对应的数据
		getUserInfDetail: function (id){

			for (var i=0; i<userList.length; i++){
				if (userList[i].userId == id){
					return userList[i]
				}
			}
			return false
		}
	}
}])







