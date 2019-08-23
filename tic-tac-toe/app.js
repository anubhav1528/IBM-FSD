
const express = require('express');
const server = express();
const parser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./users').userRoutes;
const PORT = 6670;
server.use(parser.json());
server.use(cors());

server.get('/status',(rq,rs)=>{
    rs.status(200).json({
        message : UserConstants.messages.mainStatus
    });
});

// bind user routes
server.use('/api/users',userRoutes);
 
server.listen(PORT,()=>{
    console.log(`Server Started at ${PORT}`);
});