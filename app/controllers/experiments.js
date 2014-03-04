/**
 * Module dependencies.
 */

/**
 * Find article by id
 */
exports.experiment = function(req, res, next, id) {
	Experiment.load(id, function(err, experiment) {
		if (err) return next(err);
		if (!experiment) return next(new Error('Failed to load experiment ' + id));
		req.experiment = experiment;
		next();
	});
};


/**
 * List of Experiments
 */
exports.all = function(req, res) {
	Experiment.find().sort('-EXPERIMENT_TYPE').populate('experiment', 'STUDY_NAME EXPERIMENT_TYPE').exec(function(err, experiments) {
		if (err) {
			res.render('error', {
				status: 500
			});
		} else {
			res.jsonp(experiments);
		}
	});
};


/**
 * List of Experiments types
 */
exports.gettypes = function(req, res) {

	Experiment.distinct('EXPERIMENT_TYPE').populate('experiment', 'EXPERIMENT_TYPE').exec(function(err, experimenttypes) {
		if (err) {
			res.render('error', {
				status: 500
			});
		} else {
			res.jsonp(experimenttypes);
		}
	});

};


/**
 * List of File types
 */
exports.getfiletypes = function(req, res) {

	Experiment.distinct('TYPE').populate('experiment', 'TYPE').exec(function(err, filetypes) {
		if (err) {
			res.render('error', {
				status: 500
			});
		} else {
			res.jsonp(filetypes);
		}
	});

};

/**
 * List of Institutions
 */
exports.getinstitutions = function(req, res) {

	Experiment.distinct('CENTER_NAME').populate('experiment', 'CENTER_NAME').exec(function(err, institutions) {
		if (err) {
			res.render('error', {
				status: 500
			});
		} else {
			res.jsonp(institutions);
		}
	});

};
