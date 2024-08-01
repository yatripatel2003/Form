const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const port = 3016;

const app = express();

app.use(express.static(__dirname));
app.use(express.urlencoded({ encoded: true }));

mongoose.connect('mongoose://127.0.0.1:27017/student2')
const db = mongoose.connection
db.once(open, () => {
    console.log("Database connected");
})

const UserSchema = mongoose.Schema()({
    regd_no: String,
    name: String,
    email: String,
    branch: String
})

const Users = mongoose.model("data2", UserSchema);

app.post("/", async (req, resp) => {
    const { regd_no, name, email, branch } = req.body;

    const user = new Users({
        regd_no,
        name,
        email,
        branch
    })
    await user.save();
    console.log(user);
    resp.send("form submitted");
})


app.get('/', (req, resp) => {
    resp.sendFile(path.join(__dirname, './form.html'));
})

app.listen(port, () => {
    console.log("Server connected");
})

