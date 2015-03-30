window.addEventListener("load",function() {
	setTimeout(function(){
		window.scrollTo(0, 1);
	}, 0);
});

(function(){
  var app = angular.module('AngCalc',[]);
  app.controller('CalcCtrl', function($scope){
    $scope.cVal = {
      quant: '',
      itemCost: '',
      soldPrice: '',
      shipping: ''
    };
    $scope.gross =
        ($scope.cVal.quant * $scope.cVal.soldPrice) *
        ($scope.cVal.quant * $scope.cVal.itemCost);
  });
  $(".fa-info").on('click', function(event){
    event.preventDefault();
    alert("A simple profit calulator.\n\nDownload this as an app by adding to your homescreen.\n\nMore features coming soon.\n\nCopyright 2015 Chip Eyler\nAll Rights Reserved.");

  });
})();
