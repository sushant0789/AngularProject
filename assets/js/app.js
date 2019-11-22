var app = angular.module('angularTable', ['angularUtils.directives.dirPagination']);
app.controller('listdata',function($scope, $http){
	$scope.products = []; //declare an empty array
	$http.get("assets/js/demodata.json").success(function(response){ 
		$scope.products = response;  //ajax request to fetch data into $scope.		
	});
});


$(".search").focus(function(e){
	$(".top-div").css("border-color", "#48C3DD");	
})

$(".show-more-a, .search-criteria-a").click(function(e) {
	$(this).children("i").toggleClass('sprite-plus sprite-minus');
})

$(document).on("click",".product-box-wish",function() {
	$(this).children("i").toggleClass('sprite-wish sprite-wish-added');
})

$(".filters").click(function(e) {
    $(".main-left-block").addClass('active');
    $(".background-for-filter").fadeIn();
})

$(".background-for-filter, .close").click(function(e) {
    $(".main-left-block").removeClass('active');
    $(".background-for-filter").fadeOut();
})

$(".product-box-wish").click(function(e) {
    $(this).find("i").toggleClass('.sprite-wish2');
})