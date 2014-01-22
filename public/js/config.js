//Setting up route
dataportal.config(function($stateProvider, $urlRouterProvider,$httpProvider) {
  //
  // For any unmatched url, redirect to /state1
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "partials/home.html"
    })
    .state('experiments', {
      url: "/search/experiments",
      templateUrl: "partials/experiments.html",
      controller: "ExperimentsCtrl"
    })
});