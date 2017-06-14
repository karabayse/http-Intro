// 'myApp' is in quote because that is its name; it is not a variable
// declare our intentions to use an Angular module app
var myApp = angular.module('myApp', []);

// we get $http for free, but need to tell the Controller that we're using it
// inject it into function -----------------vvvvv
myApp.controller('HttpController', function($http) {
  console.log('NG');
  var vm = this;
  // temp start up function
  vm.startUpFunction = function() {
    console.log('I am here in startUpFunction');
    // get call to /songs
    $http({
      method: 'GET',
      url: '/songs',
    }).then(function(response) {
      console.log('back with:', response);
    }); // end http
  }; // end startUpFunction

  // this is a shorter, more compressed version of vm.startUpFunction
  vm.otherGet = function() {
    console.log('I am here using the other get syntax');
    $http.get('/songs').then(function(response) {
      console.log('back with:', response);
    });
  };
}); // end HttpController
