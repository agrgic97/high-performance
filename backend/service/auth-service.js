const userRepository = require("../repository/user-repository")

const getUserByUsername = async (username) => {
    return await userRepository.findUserByUsername(username)
}

const registerUser = async (user) => {
    return await userRepository.createUser(user)
}

module.exports = {
    getUserByUsername,
    registerUser
}