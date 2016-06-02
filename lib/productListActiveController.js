/**
 * Created by Administrator on 2016/6/2.
 */

angular.module("sportStore").
constant("productListActiveClass","btn-primary").
    controller("productListCtrl",function ($scope,$http,$filter,productListActiveClass) {
    var selectedCateory = null;
    // 依赖自己的服务器
    $http.get("http://localhost:2403/products").success(function (data) {
        console.log(data);
        $scope.data = {products:data};
    });   
    $scope.selectCategory = function(newCategory) {
        selectedCateory = newCategory;
        //console.log(selectedCateory);
    }
    $scope.getCategoryClass = function (category) {
       return  selectedCateory == category ? productListActiveClass : "";
    }
    $scope.categoryFilterFn = function (product) {
        return selectedCateory == null || product.category == selectedCateory;
    }
});