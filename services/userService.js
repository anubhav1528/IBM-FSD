const users = require('../db/users').users;
class UserService{
    constructor(){
        this.users = users;
    }
    _all(){
        return this.users;
    }
    _add(user){
        this.users.push(user);
        return this.users;
    }
    _nextId(){
        return this.users.length + 1;
    }
    _update(user){
        console.log('update called');
      let userFound =  users.find((u,i)=>{
            return u.ITEMNAME == user.ITEMNAME

        });
        userFound.SUBITEM.SUBITME1.QUANTITY=user.SUBITEM.SUBITME1.QUANTITY
        users[0]=userFound;
    }
}

module.exports.UserService = UserService;