//Experiment service used for articles REST endpoint
dataportal.factory("Experiments", ['$resource', function($resource) {
    return $resource('experiments/:experimentId', {
        experimentId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);