const express = require('express');
const server = express();
const parser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./apis/users').userRoutes;
// apply json parser
server.use(parser.json());
// apply cors
server.use(cors());
server.use('/users',userRoutes);
server.listen(1269,()=>{
    console.log('Server started at 1269');
});