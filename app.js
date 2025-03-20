import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/mongodb_connection.js'
import { studentRouter } from './routes/student.routes.js'

dotenv.config()
const app = express()
app.use(express.static("public"))
app.set('view engine', 'ejs')

app.use("/students", studentRouter)


connectDB().then(() => {
    app.listen(process.env.PORT, (error) => {
        if (error) {
            console.log('Error starting server', error)
        }
        console.log('Server started at port: ', process.env.PORT)
    })
}).catch((error) => {
    console.log('Error connecting to MongoDB', error)
})