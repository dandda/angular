// 使用myApp这个模块
angular.module("myApp")
	.controller('HomeCtrl', ['$scope','UserService','$rootScope', function($scope,UserService,$rootScope){
		$rootScope.name = '主页'
		$scope.title = "我是主页"
		$scope.userList = UserService.getUserList
		console.log($scope.userList)
	}])
	.controller('CartCtrl', ['$scope','UserService','$rootScope', function($scope,UserService,$rootScope){
		console.log($rootScope.name)
		$scope.title = "我是购物车页"
	}])
	.controller('MineCtrl', ['$scope','UserService','$rootScope', function($scope,UserService,$rootScope){
		$rootScope.name = "我的页"
		$scope.title = "我是我的页"
	}])
	.controller('UserDetailCtrl',['$scope','UserService','$routeParams','$window',function ($scope,UserService,$routeParams,$window){
		// console.log($window.history)
		$scope.title = "用户详情页"
		// console.log($routeParams)
		var id = $routeParams.zhangsan

		$scope.userInfo = UserService.getUserInfDetail(id)

		$scope.back = function (){

			// 只返回一步
			$window.history.back()
		}

	}])