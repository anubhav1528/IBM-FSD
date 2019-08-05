const server = require('express').Router();
const UService = require('../services/userService').UserService;
const userService = new UService();
server.post('/email',(req,res)=>{
    res.end(JSON.stringify({
        users : userService.email(req.body)
    }));
});
server.get('/',(rq,rs)=>{
    userService.fetchUsers((users)=>{
        rs.status(200).json({
            message : 'Users Fetched',
            users : users
        })
    });    
});
// add a new user
server.post('/add',(rq,rs)=>{
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
server.post('/find',(rq,rs)=>{
    if(rq.body.email == undefined){
        rs.status(401).json({
            message: 'Please specify valid credentials'
        });
    }else{
        userService.fetchUser(rq.body.email,(err,res)=>{
            if(err){
                rs.status(401).json({
                    message: 'Please specify valid credentials'
                });
            }else{
                rs.status(200).json({
                    message : 'User found Successfully',
                    result : res
                });
            }})}});
module.exports.userRoutes = server;