var app = angular.module('flashCards', ['ui.router']);

app.config(function($stateProvider){
  $stateProvider
  .state('scoreBoard', {
    url: "/#/scoreBoard",
    templateUrl: "/js/directives/ui-view/scoreBoard.html"
  })
  .state('allFlashCards', {
    url: "/#/allFlashCards",
    templateUrl: "/js/directives/ui-view/allFlashCards.html",
  })
  .state('addNewFlashCard', {
    url: "/#/addNewFlashCard",
    templateUrl: "/js/directives/ui-view/addNewFlashCard.html"
  })
});
