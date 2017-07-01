// 使用myApp这个模块
angular.module("myApp")
	.controller('HomeCtrl', ['$scope','UserService', function($scope,UserService){
		$scope.title = "我是主页"
		$scope.userList = UserService.getUserList
	}])
	.controller('CartCtrl', ['$scope','UserService', function($scope,UserService){
		$scope.title = "我是购物车页"
	}])
	.controller('MineCtrl', ['$scope','UserService', function($scope,UserService){
		$scope.title = "我是我的页"
	}])
	.controller('UserDetailCtrl',['$scope','UserService','$routeParams',function ($scope,UserService,$routeParams){

		$scope.title = "用户详情页"

		var id = $routeParams.id

		$scope.userInfo = UserService.getUserInfDetail(id)

	}])