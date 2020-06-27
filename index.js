const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const methodOverride = require('method-override');

const { Pool } = require('pg');
// const { delete } = require('request');
var pool;
pool = new Pool({
  connectionString: process.env.DATABASE_URL
  // connectionString: '' // go to .env
})

var app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(methodOverride('_method')); 

// Function 
function getUser(req, res){
  pool.query('SELECT * FROM person', (err, res) => {
    if (err)
      throw err
    res.status(200).json(result.rows)
  })
}



// When 
app.get('/', (req, res) => res.render('pages/index'))
app.get('/database', (req, res) => {
  var getUsersQuery = `SELECT * FROM person ORDER BY id ASC`
  pool.query(getUsersQuery, (error, result) => {
    if (error)
      res.end(error)
    var results = {'rows': result.rows}
    res.render('pages/db', results)
  })
})

app.get('/everyone', (req, res) => {
  var getUsersQuery = `SELECT * FROM person ORDER BY id ASC`
  pool.query(getUsersQuery, (error, result) => {
    if (error)
      res.end(error)
    // res.status(200).json(results.rows)
    var results = {'rows': result.rows}
    res.render('pages/db', results)
  })
})

app.post('/addusers', (req, res) =>{
  console.log("post request for /adduser")
  const id = parseInt(req.body.id)
  const name = req.body.name
  const height = parseInt(req.body.height)
  const size = parseInt(req.body.size)
  const type = req.body.type

  const add = 'INSERT INTO person (id, name, height, size, type) VALUES ($1, $2, $3, $4, $5)'
  pool.query(add, [id, name, height, size, type], (err, results) => {
    if (err)
      throw err
    console.log("User added")
    // alert("user")
  })

  // var getUsersQuery = `SELECT * FROM person`
  // pool.query(getUsersQuery, (error, result) => {
  //   if (error)
  //     res.end(error)
  //   var results = {'rows': result.rows}
  //   res.render('pages/db', results)
  // })

})

app.post('/modifyname', (req, res) => {
  const id = parseInt(req.body.id)

  const name = req.body.name

  const height = parseInt(req.body.height)
  const size = parseInt(req.body.size)
  const type = req.body.type

  var modify = 'UPDATE person SET name = $1 WHERE id = $2'
  var arr = [name, id]  
  pool.query(modify, arr, (err,result)=>{
    if (err)
      throw err
    console.log('modified name')
    // alert('modified name')
  })
})

app.post('/modifyheight', (req, res)=>{
  const id = parseInt(req.body.id)

  const height = parseInt(req.body.height)

  var modify = 'UPDATE person SET height = $1 WHERE id = $2'
  var arr = [height, id]  
  pool.query(modify, arr, (err,result)=>{
    if (err)
      throw err
    console.log('modified height')
    // alert('modified height')
  })
})

app.post('/modifysize', (req, res) => {
  const id = parseInt(req.body.id)

  const size = parseInt(req.body.size)

  var modify = 'UPDATE person SET size = $1 WHERE id = $2'
  var arr = [size, id]  
  pool.query(modify, arr, (err,result)=>{
    if (err)
      throw err
    console.log('modified size')
    // alert('modified size')
  })
})

app.post('/modifytype', (req, res) => {
  const id = parseInt(rqe.body.id)

  const type = req.body.type

  var modify = 'UPDATE person SET type = $1 WHERE id = $2'
  var arr = [type, id]  
  pool.query(modify, arr, (err,result)=>{
    if (err)
      throw err
    console.log('modified type')
    // alert('modified type')
  })
})
  
app.post('/deleteusers', (req, res) => {
  const id = parseInt(req.body.id)
  // const name = req.body.name
  console.log(id)

  const deleteDB = 'DELETE FROM person WHERE id = $1'
  pool.query(deleteDB, [id], (err, result)=>{
    if (err)
      throw err
    console.log('user deleted')
    // response.status(200).send(`User deleted with ID: ${id}`)  
    // alert('user deleted')
  })

  var getUsersQuery = `SELECT * FROM person`
  pool.query(getUsersQuery, (error, result) => {
    if (error)
      res.end(error)
    var results = {'rows': result.rows}
    res.render('pages/db', results)
  })

})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
