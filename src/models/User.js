//Guardar al usuario en la DB
//Buscar al usuario que se quiere loguear por su email
//Buscar al usuario por su id
//Editar la info del usuario
//Eliminar a un usuario de la DB
const fs = require('fs');

const User = {
    filename: 'src/database/users.json',

    getData: function () {
        return JSON.parse(fs.readFileSync(this.filename, 'utf-8'));
    },

    findAll: function () {
        return this.getData();
    },

    findByPk: function (id){
        let allUsers = this.findAll();
        let userFound = allUsers.find( oneUser => oneUser.id === id ); //Itero el array de usuarios y busco el que tenga el id que me pasan por parametro
        return userFound;
    },

    create: function (userData){
        let allUsers = this.findAll();
        allUsers.push(userData);
        fs.writeFileSync(this.filename, JSON.stringify(allUsers, null, ' '));
        return true;
    }

}

console.log(User.create({ name: , email:}));

