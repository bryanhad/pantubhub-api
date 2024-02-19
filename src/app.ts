import express from 'express'

const app = express()

const PORT = 5000

app.get('/', (req, res) => {
    res.send('<h1 style="color:red;">My Slash Route</h1>')
})

app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`)
})