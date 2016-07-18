angular.module('starter.controllers', [])

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('RestoCtrl', function($scope) {
    $scope.liste = [
        {id: 1, nom: 'Resto 1', adresse: 'Adresse 1, 75001'},
        {id: 2, nom: 'Resto 2', adresse: 'Adresse 2, 75002'},
        {id: 3, nom: 'Resto 3', adresse: 'Adresse 3, 75003'},
        {id: 4, nom: 'Resto 4', adresse: 'Adresse 4, 75004'},
        {id: 5, nom: 'Resto 5', adresse: 'Adresse 5, 75005'},
        {id: 6, nom: 'Resto 6', adresse: 'Adresse 6, 75006'}
    ];
})

.controller('HistoriqueCtrl', function($scope) {
    $scope.liste = [
        {id: 1, date: '11/08', heure: '22:01', resto: 'Resto 1', prix: '11€'},
        {id: 2, date: '12/08', heure: '22:02', resto: 'Resto 2', prix: '12€'},
        {id: 3, date: '13/08', heure: '22:03', resto: 'Resto 3', prix: '13€'},
        {id: 4, date: '14/08', heure: '22:04', resto: 'Resto 4', prix: '14€'},
        {id: 5, date: '15/08', heure: '22:05', resto: 'Resto 5', prix: '15€'},
        {id: 6, date: '16/08', heure: '22:06', resto: 'Resto 6', prix: '16€'}
    ];
})

.controller('BarmanCtrl', function($scope) {})

.controller('CompteCtrl', function($scope) {
    $scope.localisation = { checked: true};
    $scope.activationLocalisation = function() {
        console.log('Push Notification Change', $scope.activationLocalisation.checked);
    };
});

