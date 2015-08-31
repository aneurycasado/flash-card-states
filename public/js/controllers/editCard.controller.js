app.controller('EditCardController', function($scope, $http,$state, $stateParams,FlashCardsFactory) {
  // $scope.getCard = function(id){
  //   $http.get('/card/'+$scope.id).then(function(newCard){
  //     return newCard;
  //   })
  // }
  $scope.newCard = {
    question: null,
    category: null,
    answers: [
        { text: null, correct: false },
        { text: null, correct: false },
        { text: null, correct: false }
    ]
  };
  $scope.categories = FlashCardsFactory.categories;
  $scope.editCard = function () {
    console.log("We hit edit card",$scope.newCard);
    $http.put('/cards/'+$scope.id,$scope.newCard).then(function(data){
      console.log("Data ", data);
      $state.go("allFlashCards")
    });
  };
});
