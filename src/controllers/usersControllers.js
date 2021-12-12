let users = [
    {id: '1', name: 'Jane'},
    {id: '2', name: 'Patterson'},
    {id: '3', name: 'Zapata'},
    {id: '4', name: 'RichDotCom'},
    {id: '5', name: 'Reade'},
    {id: '6', name: 'Kurt'}
];

const controller = {
    create: (req, res) => {
        res.render('users/register')
    },
    store: (req, res) => {
        let user = {
            name: req.body.name, //el nombre de la clave es el nombre del atributo name en cada input
            email: req.body.email,
            password: req.body.password,
        }
        res.redirect('/')
    },
    login: (req, res) => {
        res.render('users/login')
    },
    profile: (req, res) => {
        res.render('users/profile')
    },
    edit: (req, res) => {
        let id = req.params.id;
    
        let userToEdit = users[id];
        //res.send(userToEdit);
        res.render('users/editProfile', {user: userToEdit});
    }
    /*update:
    delete:*/
}
module.exports = controller;