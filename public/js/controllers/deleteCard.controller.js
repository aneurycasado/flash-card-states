app.controller('DeleteCardController', function($scope, $http,$state, $stateParams,FlashCardsFactory) {
  console.log($scope.id);
  $scope.deleteCard = function () {
    console.log("We hit delete card");
    $http.delete('/cards/'+$scope.id).then(function(data){
      console.log("Delete Success");
      $state.go("allFlashCards");
    });
  };
});
