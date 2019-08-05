const MongoClient = require('mongodb').MongoClient;
const UserConstants = require('../utils/utils').UserConstants; 
const Email = require('./email.service').Email;
const emailService = new Email()
class UserService{
    fetchUser(_user,callback){
        MongoClient.connect(UserConstants.mongo.url,(err,conn)=>{
            conn.db(UserConstants.mongo.db).collection('users').find({email: _user}).toArray((err,response)=>{
                callback(err,response);
            });
        });
    }

    fetchUsers(callback){
        MongoClient.connect(UserConstants.mongo.url,(err,conn)=>{
            conn.db(UserConstants.mongo.db).collection('users').find({}).toArray((error,users)=>{
                if(!error){
                    console.log(users);
                    callback(users);
                }
            });
        });
    }
    
    add(_user,callback){
        MongoClient.connect(UserConstants.mongo.url,(err,conn)=>{
            conn.db(UserConstants.mongo.db).collection('users').insert(_user,(err,response)=>{
                callback(err,response);
            });
        });
    }
email(user){
    let userObj ={
        subject : "OTP GENERATION",
        body : user.CONTENT,
        from : null,
        to : user.email
    }
     return emailService.emailWithAttachment(userObj);
}}
module.exports.UserService = UserService;