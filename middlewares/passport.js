const passport = require('passport')
const GitHubStrategy = require('passport-github2').Strategy
const config = require('config')

try {
  passport.use(
    new GitHubStrategy({
      clientID: config.get('githubOauth.clientId'),
      clientSecret: config.get('githubOauth.clientSecret'),
      callbackURL: `${config.get('services.rdsApi.baseUrl')}/auth/github/callback`
    }, (accessToken, refreshToken, profile, done) => {
      return done(null, accessToken, profile)
    }
    ))
}
catch(e) {
  console.error(e)
}