class User{
    constructor(id, name, email, online){
        this.id = id;
        this.name = name;
        this.email = email;
        this.online = false;
    }
    isLoggedIn(){
        return this.online = true;
    }
}

const idGenerator = (id) => {
    return id = Math.floor(Math.random() * 1000);
    ;
}
const user1 = new User(idGenerator(), 'John', 'johndoe@email.com');
const user2 = new User(idGenerator(),'Jane', 'jane@eemail.com');

console.log( user1)
user1.isLoggedIn();
console.log( user1)
console.log(user2)