
import bcrypt from 'bcryptjs'

const users =[

{
    name: 'Admin user',
    email : 'admin@examples.com',
    password : bcrypt.hashSync('123456', 10),
    isAdmin : true
},

{
    name: 'Scarlet Johanson',
    email : 'scarlet@examples.com',
    password : bcrypt.hashSync('123456', 10),

},

{
    name: 'St Peter ',
    email : 'peter@examples.com',
    password : bcrypt.hashSync('123456', 10),

},



]

export default users