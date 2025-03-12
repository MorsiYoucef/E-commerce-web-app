import {User} from '../models/User.js'


export const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const createUser = async (req, res) => {
    const { username, email, password, role } = req.body

    try {
        let user = await User.findOne({ email })
        if (user) return res.status(400).json({ message: 'User already exists' })
        user = new User({ username, email, password, role: role || "customer" })
        await user.save()
        res.status(201).json(user)
    }catch {
        res.status(500).json({ message: error.message })
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params
    const { username, email, role } = req.body

    try {
        const user = await User.findById(id)
        if (!user) return res.status(404).json({ message: 'User not found' })

        user.username = username || user.username
        user.email = email || user.email
        user.role = role || user.role

        const updatedUser = await user.save()
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const deleteUser = async (req, res) => {
    const { id } = req.params

    try {
        const user = await User.findById(id)
        if (!user) return res.status(404).json({ message: 'User not found' })

        await User.findByIdAndDelete(id)
        res.status(200).json({ message: 'User deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}