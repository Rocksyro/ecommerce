const controller = {
    create: (req, res) => {
        //res.sendFile(__dirname + '/views/users/register.html')
        res.send('Crear usuario')
    },
    login: (req, res) => {
        //res.sendFile(__dirname + '/views/users/login.html')
        res.send('Login de usuario')
    },
    profile: (req, res) => {
        //res.sendFile(__dirname + '/views/users/profile.html')
        res.send('Perfil de usuario')
    }
    /*update:
    delete:*/
}

module.exports = controller;