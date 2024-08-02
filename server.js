const express = require('express')
const app = express()
const PORT = process.env.PORT || 3002

app.use(express.static('public'))

app.get('/',(req, res)=>{
    res.render('index.ejs', {title:'codebase software | CodeBaseSoftware.com'})
})
app.listen(PORT,()=>{
    console.log(`Express Server Now Listening on port ${PORT}`);
})