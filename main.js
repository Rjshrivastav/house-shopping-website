const express = require('express')
const path = require('path');
const app = express()
const port = 3000

// view engine setup 
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})