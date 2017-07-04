// 重置html的font-size
function resetFontSize(){
	// 获取屏幕的宽度
	var windowW = document.documentElement.clientWidth
	// 是以iphone5作为参考
	var scale = windowW/320
	var newSize = 10*scale
	document.getElementsByTagName("html")[0].style.fontSize=newSize+"px"
}
window.addEventListener("resize", resetFontSize, false)
resetFontSize()

angular.module("myApp",["ngRoute"])
	.config(['$routeProvider',function ($routeProvider){

		$routeProvider
			.when('/',{
				templateUrl: './views/home.html',
				controller: 'HomeCtrl'
			})
			.when("/category",{
				templateUrl: './views/category.html',
				controller: 'CategoryCtrl'
			})
	}])
	// 当angular初始化完成会运行run
	.run(["$rootScope",function ($rootScope){
		$rootScope.navActiveIndex = 0
	}])
	// 控制器配置
	.controller("HomeCtrl",["$scope","$http",function ($scope,$http){

		// 轮播图
		$scope.slide = []

		// 菜单
		$scope.menu = []


		// 获取轮播图和菜单
		$http.get("http://h5.yztctech.net/api/axf/apihome.php").success(function (data){
			console.log(data)
			$scope.slide = data.data.slide.filter((item,index)=>index!=0&&index!=data.data.slide.length-1)
			$scope.menu = data.data.menu
			
			var imgNum = 0
			for (var i=0; i<$scope.slide.length; i++){

				var imgObj = new Image()
				imgObj.src = $scope.slide[i].activity.img
				imgObj.onload = function (){

					imgNum++
					if (imgNum == $scope.slide.length){
						// 初始化swiper
						var mySwiper = new Swiper ('.swiper-container', {
						    loop: true,
						    
						    // 如果需要分页器
						    pagination: '.swiper-pagination'
						}) 
					}
				}
			}
		})

		// 获取热卖数据
		$scope.homehot = []

		$http.get("http://h5.yztctech.net/api/axf/apihomehot.php").success(function (data){
			$scope.homehot = data.data.slice(0,5)
		})
	}])
	.controller("CategoryCtrl",["$scope","$http",function ($scope,$http){

		$scope.allCategories = false
		$scope.ranking = false

		$scope.changeCategorieBol = function (){
			$scope.ranking = false
			$scope.allCategories = !$scope.allCategories
		}
		$scope.changeRankingBol = function (){
			$scope.allCategories = false
			$scope.ranking = !$scope.ranking
		}

		// 列表项
		$scope.btnList = ["热销榜","天天特价","优选水果","牛奶面包"]

		// 激活的分类下标
		$scope.activeCategoriesIndex = 0
		$scope.categoriesItems = []

		// 初始获取热销榜的数据
		function getData(){
			var url = "http://h5.yztctech.net/api/axf/apicategory.php?category="+$scope.btnList[$scope.activeCategoriesIndex]
			$http.get(url).success(function (data){
				var data = data.data

				for (var i=0; i<data.length; i++){
					// 购买数量
					data[i].num = 1
				}
				$scope.categoriesItems = data
			})
		}
		getData()

		$scope.changeCategoriesIndex = function (index){
			$scope.activeCategoriesIndex = index

			getData()
		}
	}])












