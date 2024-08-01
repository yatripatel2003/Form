const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const port = 3019

const app = express()
app.use(express.static(__dirname))
app.use(express.urlencoded({ extended: true }))

mongoose.connect('mongodb://127.0.0.1:27017/student')
const db = mongoose.connection
db.once('open', () => {
    console.log("Mongodb connection successful")
})

const UserSchema = new mongoose.Schema({

    regd_no: String,
    name: String,
    email: String,
    branch: String
})
const Users = mongoose.model("data", UserSchema)

app.get('/', (req, resp) => {
    resp.sendFile(path.join(__dirname, './form.html'))
})

app.post('/', async (req, resp) => {
    const { regd_no, name, email, branch } = req.body
    const user = new Users({
        regd_no,
        name,
        email,
        branch

    })
    await user.save();
    console.log(user);
    resp.send("Form submission successful ")
})

app.listen(port, () => {
    console.log("server started")
})
