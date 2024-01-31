const authService = require("../service/auth-service")

const loginUser = async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await authService.getUserByUsername(username)

        if (!user || user.password !== password) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' })
        }

        res.status(200).json({ success: true, user: user })
    } catch (error) {
        console.error(error)
        res.status(500).json({ success: false, message: 'Error during login' })
    }
}

const registerUser = async (req, res) => {
    const { username, password, employeeId, role } = req.body

    try {
        const user = await authService.registerUser({ username, password, employeeId, role })

        res.status(201).json({ success: true, message: 'User is registered', data: user })
    } catch (error) {
        console.error(error)
        res.status(500).json({ success: false, message: 'Error during registration' })
    }
}

module.exports = {
    loginUser,
    registerUser
}