//Setting up route
dataportal.config(function($stateProvider, $urlRouterProvider,$httpProvider) {


//Enable cross domain calls
  $httpProvider.defaults.useXDomain = true;

  //Remove the header used to identify ajax call  that would prevent CORS from working
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
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