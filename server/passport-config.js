const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const users = [{
    username: "Admin", //pwd: Admin
    password: "$2b$08$I4NM/x8k0IGL3hR6e/0B2.l4ASs.nvHN4RDS86IhzSgIp2IfLlOnK"
}];


function initialize(passport) {

    const authenticateUser = (username, password, done) => {
        // console.log(username, password);
        const user = users.find((user) => user.username === username);
        if(user == null) {
            return done(null, false, {message: 'Invalid username/password'});
        }
        try {
            if(bcrypt.compareSync(password, user.password)) {
                return done(null, user);
            } else {
                return done(null, false, {message: 'Invalid username/password'});
            }
        } catch (e) {
            return done(e);
        }
    }

    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    }, authenticateUser));
    passport.serializeUser((user, done) => done(null, user.username));
    passport.deserializeUser((username, done) => {
        const user = users.find((user) => user.username === username);
        return done(null, user);
    });
}

module.exports = initialize;