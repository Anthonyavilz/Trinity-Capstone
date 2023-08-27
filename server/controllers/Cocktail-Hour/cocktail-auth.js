require('dotenv').config()

const { CocktailUser } = require('../../models/Cocktail-Hour-Models/cocktailModels')
const bcrypt = require('bcryptjs')

module.exports = {
    cocktailRegister: async (req, res) => {
        try {
            const {username, password} = req.body
            const foundUser = await CocktailUser.findOne({where: {username: username}})
            if (foundUser) {
                res.status(400).send('User already exist')
            } else {
                const salt = bcrypt.genSaltSync(10)
                const hash = bcrypt.hashSync(password, salt)
                const newUser = await User.create({username: username, password: hash})

                req.session.user = {
                    userId: newUser.dataValues.id,
                    username: newUser.dataValues.username
                }

                console.log('user created', req.session.user)
                res.status(200).send(req.session.user)
            }
            
        } catch (err) {
            console.log('Register Error')
            res.status(400).send(err)
        }
    },

    cocktailLogin: async (req, res) => {
        try {
            const {username, password} = req.body
            const foundUser = await CocktailUser.findOne({where: {username: username}})
            if (foundUser) {
                const isAuthenticated = bcrypt.compareSync(password, foundUser.password)
                
                if (isAuthenticated) {
                    req.session.user = {
                        userId: foundUser.dataValues.id,
                        username: foundUser.dataValues.username
                    }
    
                    console.log('user created', req.session.user)
                    res.status(200).send(req.session.user)
                } else {
                    res.status(400).send('Password incorrect')
                }
            } else {
                res.status(400).send('User does not exist')
            }
        } catch (err) {
            console.log('Login failed')
            res.status(400).send(err)
        }
    },

    checkUser: (req, res) => {
        console.log('checked user', req.session)
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.status(400).send('No user found')
        }
    }
}