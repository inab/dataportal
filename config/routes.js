module.exports = function(app, passport, auth) {

	app.all('/', function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "X-Requested-With");
	  next();
	 });


    //User Routes
    var users = require('../app/controllers/users');
    app.get('/signin', users.signin);
    app.get('/signup', users.signup);
    app.get('/signout', users.signout);

    //Setting up the users api
    app.post('/users', users.create);

    app.post('/users/session', passport.authenticate('local', {
        failureRedirect: '/signin',
        failureFlash: 'Invalid email or password.'
    }), users.session);

    app.get('/users/me', users.me);

    //Setting the facebook oauth routes
    app.get('/auth/facebook', passport.authenticate('facebook', {
        scope: ['email', 'user_about_me'],
        failureRedirect: '/signin'
    }), users.signin);

    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/signin'
    }), users.authCallback);

    //Setting the github oauth routes
    app.get('/auth/github', passport.authenticate('github', {
        failureRedirect: '/signin'
    }), users.signin);

    app.get('/auth/github/callback', passport.authenticate('github', {
        failureRedirect: '/signin'
    }), users.authCallback);

    //Setting the twitter oauth routes
    app.get('/auth/twitter', passport.authenticate('twitter', {
        failureRedirect: '/signin'
    }), users.signin);

    app.get('/auth/twitter/callback', passport.authenticate('twitter', {
        failureRedirect: '/signin'
    }), users.authCallback);

    //Setting the google oauth routes
    app.get('/auth/google', passport.authenticate('google', {
        failureRedirect: '/signin',
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ]
    }), users.signin);

    app.get('/auth/google/callback', passport.authenticate('google', {
        failureRedirect: '/signin'
    }), users.authCallback);

    //Finish with setting up the userId param
    app.param('userId', users.user);

    //Experiments Routes
    var experiments = require('../app/controllers/experiments');
    app.get('/experiments', experiments.all);
    app.get('/experiments/gettypes', experiments.gettypes);
    app.get('/experiments/getfiletypes', experiments.getfiletypes);
    app.get('/experiments/getinstitutions', experiments.getinstitutions);
    
    
    
/*
    app.post('/experiments', auth.requiresLogin, experiments.create);
    app.get('/experiments/:experimentId', experiments.show);
    app.put('/experiments/:experimentId', auth.requiresLogin, auth.experiments.hasAuthorization, experiments.update);
    app.del('/experiments/:experimentId', auth.requiresLogin, auth.experiments.hasAuthorization, experiments.destroy);
*/

    //Finish with setting up the experimentId param
    app.param('experimentId', experiments.experiment);

    //Home route
    var index = require('../app/controllers/index');
    app.get('/', index.render);

};
