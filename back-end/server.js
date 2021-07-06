const express = require("express")
const mongoose = require("mongoose")
const moviesRoutes = require("./routes/moviesRoutes")
const authRoutes = require("./routes/authRoutes")
const usersRoutes = require("./routes/usersRoutes")

const cors = require("cors")



mongoose.connect("mongodb+srv://soul:movietime@cluster0.425d9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const port = 8000

const app = express()
app.use(cors())

app.use(express.json())

app.use("/movies", moviesRoutes)
app.use("/auth", authRoutes)
app.use("/users", usersRoutes)

app.listen(port, () => {
    console.log("The server is waiting for requests")
})