const User = require("../schemas/UserSchema")

const findUserByUsername = async (username) => {
    return User.findOne({ "username": username })
}

const createUser = async (user) => {
    return User.create(user)
}

module.exports = {
    findUserByUsername,
    createUser
}