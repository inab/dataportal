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
  $urlRouterProvider.otherwise("/home");
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "partials/home.html"
    })
    .state('donors', {
      url: "/search/donors",
      templateUrl: "partials/donors.html",
      controller: "DonorsResultsCtrl"
    })
    .state('donors_view', {
      url: "/search/donors/view",
      templateUrl: "partials/donors_view.html",
      controller: "DonorsResultsCtrl"
    })
    .state('donors_view.donor_report', {
      url: "/donor_report/:donorId",
      templateUrl: "partials/donors_view.donor_report.html",
      controller: "DonorsResultsCtrl"
    })
    .state('experiments', {
      url: "/search/experiments",
      templateUrl: "partials/experiments.html",
      controller: "ExperimentsCtrl"
    })
    .state('analyses', {
      url: "/search/analyses",
      templateUrl: "partials/analyses.html",
      controller: "AnalysesCtrl"
    })
    .state('analyses_view', {
      url: "/search/analyses/view",
      templateUrl: "partials/analyses_view.html",
      controller: "AnalysesCtrl"
    })
    .state('analyses_view.dnaseq_reads_generation', {
      url: "/dnaseq_reads_generation/:analysisId",
      templateUrl: "partials/analysis_view.dnaseq_reads_generation.html",
      controller: "AnalysesCtrl"
    })
    .state('analyses_view.dnaseq_variants_annotations', {
      url: "/dnaseq_variants_annotations/:analysisId",
      templateUrl: "partials/analysis_view.dnaseq_variants_annotations.html",
      controller: "AnalysesCtrl"
    })
    .state('samples', {
      url: "/search/samples",
      templateUrl: "partials/samples.html",
      controller: "DonorsResultsCtrl"
    })
});