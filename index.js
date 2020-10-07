const express = require('express')
const helmet = require('helmet')
const server = express()

server.use(helmet())
server.use(express.json())

const port = process.env.port || 8000
server.listen(port, () => {
    console.log(`server listening on ${port}`)
})

server.get('/', (req,res) => {
    res.status(200).json({
        message: `your server is running on port ${port}`
    })
})