var db = require('./db.js');


module.exports.handleSignup = (email, password)=>{
  //Check if email exists
  //Save user to db
  db.saveUser({email,password});
  //Send welcome email
}
