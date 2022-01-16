const { validationResult } = require('express-validator');

const controller = {
    create: (req, res) => {
        res.render('users/register')
    },
    store: (req, res) => {
        const resultValidation = validationResult(req);
        
        if (resultValidation.errors.length > 0) {
            return res.render('users/register', {
                errors: resultValidation.mapped()
        });
        }
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