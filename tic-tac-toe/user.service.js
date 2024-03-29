const MongoClient = require('mongodb').MongoClient;
const UserConstants = require('./utils').UserConstants;
class UserService {
    
    fetchUsers(callback){
        MongoClient.connect(UserConstants.mongo.url,(err,conn)=>{
            conn.db(UserConstants.mongo.db).collection('users').find({}).toArray((error,users)=>{
                if(!error){
                    //console.log(users);
                    callback(users);
                    
                }
            });
        });
    }
    NewState(callback){
        MongoClient.connect(UserConstants.mongo.url,(err,conn)=>{
            conn.db(UserConstants.mongo.db).collection('users').drop((err,response)=>{
                callback(err,response);
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
}
    module.exports = {
        UserService
    }