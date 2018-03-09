//Change the Background of the Page Depending on the item clicked.  
var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $http) 
{
    $http.get('likes.json')
       .then(function(list){
        $scope.listoflikes = list.data;
        });         
});//end controller