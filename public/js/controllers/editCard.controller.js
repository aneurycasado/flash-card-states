app.controller('EditCardController', function($scope, $http,$state, $stateParams,FlashCardsFactory) {
  $scope.newCard = {
    question: null,
    category: null,
    answers: [
        { text: null, correct: false },
        { text: null, correct: false },
        { text: null, correct: false }
    ]
  };
  $scope.getCard = function(id){
    $http.get('/card/'+$scope.id).then(function(card){
      console.log(card.data.question);
      console.log(card.data.category);
      console.log(card.data.answers);
      $scope.newCard.question = card.data.question;
      $scope.newCard.category = card.data.category;
      $scope.newCard.answers = card.data.answers;
      return;
    });
  };
  $scope.getCard();
  $scope.categories = FlashCardsFactory.categories;
  $scope.editCard = function () {
    $http.put('/cards/'+$scope.id,$scope.newCard).then(function(data){
      $state.go("allFlashCards")
    });
  };
});
