const { AuthAdminRepo } = require('../repositories')
const { secretKey } = require('../config')
const { compareSync, hashSync } = require("bcrypt");
const { sign } = require('jsonwebtoken');

const authAdmin = async (email, password) => {
    if(!email && !password) {
        throw new Error(400)
    }

    const checkEmail = await AuthAdminRepo.getAdminByEmail(email)
    if(!checkEmail) {
        throw new Error(401)
    }

    const checkPass = await compareSync(password, checkEmail.dataValues.password)
    if(!checkPass) {
        throw new Error(401)
    }

    const auth = { id : checkEmail.dataValues.id, role : checkEmail.dataValues.role }
    const token = await sign(auth, secretKey, { expiresIn : '12h' })
    return token
}

const createAdmin = async (data) => {
    const { email, password } = data
    const { name, gender, phone_number } = data
    if ((!email && !password) || (!name && !gender && !phone_number)) {
        throw new Error(400);
    }

    const checkEmail = await AuthAdminRepo.getAdminByEmail(email)
    if (checkEmail) {
        throw new Error(401)
    }

    const hashPass = await hashSync(password, 10)
    const add = AuthAdminRepo.addAdmin({
        email : email,
        password : hashPass,
        name : name,
        gender : gender,
        phone_number : phone_number
    })

    if(!add) {
        throw new Error(500)
    }
    return add
}

module.exports = {
    authAdmin,
    createAdmin
}