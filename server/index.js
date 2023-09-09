require('dotenv').config()

const express = require('express')
const cors = require('cors')
const session = require('express-session')
const next = require('next')

// App Declarations
const narutoApp = express()
const totkApp = express()
const cocktailApp = express()
const dev = process.env.NODE_ENV != 'production'
const app = next({dev})

// App Middleware
app.prepare().then(() => {
    narutoApp.use(express.json())
    narutoApp.use(cors())

    cocktailApp.use(express.json())
    cocktailApp.use(cors())
    cocktailApp.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 48
        }
    }))

    totkApp.use(express.json())
    totkApp.use(cors())


    // Naruto Port, Functions & Endpoints
    const narutoPort = 1234

    const { createJu, getJu, modifyJu, deleteJu } = require('./controllers/Naruto/userJutsu')

    narutoApp.post('/naruto', createJu)
    narutoApp.get('/naruto', getJu)
    narutoApp.put('/naruto/:id', modifyJu)
    narutoApp.delete('/naruto/:id', deleteJu)


    // Cocktail Hour Port, Functions, Sequelize & Endpoints
    const cocktailPort = 5678
    const { cocktailSequelize } = require('./util/cocktailHourDB')

    const { CocktailUser, Cocktails } = require('./models/Cocktail-Hour-Models/cocktailModels')
    const { cocktailRegister, cocktailLogin, checkUser } = require('./controllers/Cocktail-Hour/cocktail-auth')
    const { addPost, getLocations, getUserPost, editUserPost, deleteUserPost } = require('./controllers/Cocktail-Hour/post')

        // Cocktail Auth
        cocktailApp.post('/cocktail-register', cocktailRegister)
        cocktailApp.post('/cocktail-login', cocktailLogin)
        cocktailApp.get('/cocktail-users', checkUser)

        // Cocktail User Functions
        cocktailApp.post('/cocktail-hour/newPost', addPost)
        cocktailApp.get('/cocktail-hour/loctions/:id', getLocations)
        cocktailApp.get('/cocktail-hour/userPosts/:id', getUserPost)
        cocktailApp.put('/cocktail-hour/post/:id', editUserPost)
        cocktailApp.delete('/cocktail/posts/:id', deleteUserPost)

    cocktailSequelize
        // .sync({force: true})
        // .then(() => {
        //     console.log('Tables sent')
        // })
        .sync()
        .then(() => {
            console.log('Tables sent')
        })
        .catch((err) => {
            console.log('Connection Error in Cocktail-Hour')
        })


    // ToTK Port, Functions, Seqeulize & Endpoints
    const totkPort = 8760
    const { totkSequelize } = require('./util/totkDB')

    const { TotkUser, Helm, Chest, Leg, ArmorSet, Favorites } = require('./models/ToTk-Models/totkModels')
    const { getHelms, getChestArmor, getLegArmor, getSelectedHelm, getSelectedChest, getSelectedLeg } = require('./controllers/ToTk/armor')
    const { addArmorSet, usersFavorite, getArmorSets, getUsersFavorite } = require('./controllers/ToTk/totk-user')
    const { totkRegister, totkLogin, userDatabase } = require('./controllers/ToTk/totk-auth')
    const seed = require('./util/totkSeed')

        // ToTK Auth
        totkApp.post('/totk-register', totkRegister)
        totkApp.post('/totk-login', totkLogin)
        totkApp.get('/totk-users', userDatabase)

        // ToTK Armor Options
        totkApp.get('/helms', getHelms)
        totkApp.get('/helms/:id', getSelectedHelm)

        totkApp.get('/chest', getChestArmor)
        totkApp.get('/chest/:id', getSelectedChest)

        totkApp.get('/leg', getLegArmor)
        totkApp.get('/leg/:id', getSelectedLeg)

        // ToTK User Functions
        totkApp.post('/armorset', addArmorSet)
        totkApp.get('/sets/:userId', getArmorSets)
        totkApp.post('/user-favorite', usersFavorite)
        totkApp.get('/user-favorite/:userId', getUsersFavorite)

    totkSequelize
        // .sync({force: true})
        // .then(() => {
        //     console.log('ToTK tables and data sent')
        //     seed()
        // })
        .sync()
        .then(() => {
            console.log('ToTK tables sent')
        })
        .catch((err) => {
            console.log('Connection error in ToTK')
        })



    // Port Listens
    narutoApp.listen(process.env.PORT || 3000, () => console.log(`Naruto running on port ${narutoPort}`));
    cocktailApp.listen(process.env.PORT || 3000, () => console.log(`Servings drinks on port ${cocktailPort}`))
    totkApp.listen(process.env.PORT || 3000, () => console.log(`Saving Zelda on port ${totkPort}`));
})

