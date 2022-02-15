
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
require('./src/db/mongoose')
const userRouter = require('./src/routes/users')
const diaryRouter = require('./src/routes/diary')

app.use(express.json())
app.use(userRouter)
app.use(diaryRouter)
app.listen(port, ()=>{console.log('running on http://localhost:'+port)});
