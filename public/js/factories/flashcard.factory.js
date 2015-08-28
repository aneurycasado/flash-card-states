app.factory('FlashCardsFactory', function($http) {
  var categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node'
  ];
  function getFlashCards (category) {
    var config = {};
    if (category) config.params = { category: category };
    return $http.get('/cards/', config).then(function(response){
      return response.data;
    });
  }
  function addFlashCard(flashCardObj) {
    return $http.post('/cards/', flashCardObj)
  }
  return {
    getFlashCards: getFlashCards,
    categories: categories,
    addFlashCard: addFlashCard,
  };
});
