app.controller('DeleteCardController', function($scope, $http,$state, $stateParams,FlashCardsFactory) {
  $scope.deleteCard = function () {
    $http.delete('/cards/'+$scope.id).then(function(data){
      $state.go("allFlashCards");
    });
  };
});
