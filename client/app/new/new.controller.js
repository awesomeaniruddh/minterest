'use strict';

angular.module('minterestApp')
  .controller('NewCtrl', function ($scope, $http, Auth, $location) {
    $scope.mint = { user: Auth.getCurrentUser().name };

    $scope.submitMint = function() {
        $http.post('/api/mints', $scope.mint).
        then(function(response) {
            $location.path('/');
        });
    }
  });
