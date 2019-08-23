const routes = require('express').Router();
const UserService = require('./user.service').UserService;
const userService = new UserService();
const UserConstants = require('./utils').UserConstants;

routes.get('/status',(rq,rs)=>{
    rs.status(200).json({
        message : UserConstants.messages.userServiceStatus
    });
});

routes.get('/',(rq,rs)=>{
    userService.fetchUsers((users)=>{
        rs.status(200).json({
            users 
        })
    });    
});

routes.get('/newstate',(rq,rs)=>{
    userService.NewState(()=>{
        rs.status(200).json({
            users : "sorry"
        })
    });    
});
// add a new user
routes.post('/add',(rq,rs)=>{
    userService.add(rq.body,(err,result)=>{
        if(err){
            rs.status(400).json({
                message : 'Unable to process the request'
            });
        }else{
            rs.status(200).json({
                message : 'User created Successfully',
                result : result
            });
        }
    });
});

module.exports = {
    userRoutes : routes
}