var app = angular.module('flashCards', ['ui.router']);

app.config(function($stateProvider){
  $stateProvider
  .state('scoreBoard', {
    url: "/scoreBoard",
    templateUrl: "/js/directives/ui-view/scoreBoard.html"
  })
  .state('allFlashCards', {
    url: "/allFlashCards",
    templateUrl: "/js/directives/ui-view/allFlashCards.html",
  })
  .state('addNewFlashCard', {
    url: "/addNewFlashCard",
    templateUrl: "/js/directives/ui-view/addNewFlashCard.html"
  })
  .state('manageFlashCard', {
    url: '/manageFlashCard/:id',
    templateUrl: "/js/directives/ui-view/manage.html"
  })
  .state('manageFlashCard.edit',{
    url: "/edit",
    templateUrl: "/js/directives/ui-view/edit.html"
  })
  .state('manageFlashCard.delete',{
    url: "/delete",
    templateUrl: "/js/directives/ui-view/delete.html"

  });
});
