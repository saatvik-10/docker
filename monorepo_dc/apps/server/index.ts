import express from 'express'
import { prismaClient } from 'db/client'

const app = express()

app.use(express.json())

app.get('/users', async (req, res) => {
    try {
        const users = await prismaClient.user.findMany()
        res.json({users})
    } catch (err) {
        res.status(500).json(err)
    }
})

app.post('/user', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400).json("Credentials are required")
        return
    }

    try {
        const user = await prismaClient.user.create({
            data: {
                username,
                password
            }
        })
        res.status(201).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
})

app.listen(8080)