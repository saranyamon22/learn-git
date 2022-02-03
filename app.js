const express  = require("express");

const app = express()

const mongoose = require('mongoose');
const ProductModel = require("./models/product");

const Product = require('./models/product')

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/mydbs', { useNewUrlParser: true }).then(()=>{
    console.log("connect success")
})

//สร้าง database schema
const cat = mongoose.model('dog',{name: String,age:Number},'dognaja')

//สร้าง instance จาก model
const mamon = new cat({name : 'mamon',age:12})

console.log(mamon)

//save ลง database (return เป็น promise)
mamon.save().then(() =>console.log('meow'))




/*const port = 3000

app.listen(port,()=>{
    console.log(`start http://localhost:${port}`)
})

app.get('/home',(req,res) =>{
    res.send('Hello Home page')
})

app.post('/house',(req,res) => {
    res.send('Hello House Page')
}) */

// mock data
const products = [
    {
      id: '1001',
      name: 'Node.js for Beginners',
      category: 'Node',
      price: 990
    },
    {
      id: '1002',
      name: 'React 101',
      category: 'React',
      price: 3990
    },
    {
      id: '1003',
      name: 'Getting started with MongoDB',
      category: 'MongoDB',
      price: 1990
    }
  ]
  
  app.get('/products',async (req, res) => {
    const product = await Product.find({})
    res.json(product)
  })
  
  app.get('/products/:name',async (req, res) => {
    const { name } = req.params
   const product = await Product.findOne({name:name})
    res.json(product)
  })
  
  app.post('/products', async (req, res) => {
    const payload = req.body
    const product = new Product(payload)
    await product.save()
    res.status(201).end()
  })
  
  app.put('/products/:id', (req, res) => {
    const { id } = req.params
    res.json({ id })
  })
  
  app.delete('/products/:id', (req, res) => {
    const { id } = req.params
    res.json({ id })
  })
  
  app.listen(9000, () => {
    console.log('Application is running on port 9000')
  })


app.post('/updateProduct',async function(req,res){
    const {id ,data} = req.body

    const product = await Product.updateOne({_id:id},{$set : data})
    res.json(product)
})

app.get('/deleteProductById',async function (req,res){
    const id = req.query.id

    const product = await Product.deleteOne({_id:id})
    res.json(product)
})