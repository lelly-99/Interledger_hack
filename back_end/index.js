import express from 'express'

const app = express()


const PORT = process.env.PORT || 3007

app.listen(PORT, function {
    console.log("App started at:" PORT)
})