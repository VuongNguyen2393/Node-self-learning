const express = require('express')
const app  = express()
const port = 3000

app.get('/', (req:any,res:any) => {
    res.send('Vuong dep trai')
})

app.listen(port,() => console.log(` Project đang chạy qua port ${port}`))