const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const { Client } = require('pg')

const client = new Client({
 user: 'postgres',
 host: 'localhost',
 password: '8681',
 database: 'TP5'
})

client.connect()

const users = []

router.post('/login', async (req, res) =>
{
    const email = req.body.email
    const email2 = email.trim()
    const password = req.body.password

    const result = await client.query({
        text: 'SELECT * FROM public.users WHERE email=$1',
        values: [email2.trim()]
    })

    console.log(result.rows)

    if (result.rows.length === 0)
    {
        res.status(401).json({
            message: 'user does not exist'
        })
        return
    }

    const user = result.rows[0]

    if(await bcrypt.compare(password, user.password))
    {
        if(req.session.userId == user.id)
        {
            res.status(401).json({message: 'already authenticated'})
            return
        }

        else{
            req.session.userId = user.id
            res.json({
              id: user.id,
              email: user.email
            })
        }
    }

    else 
    {
        res.status(400).json({message: 'wrong password'})
        return
    }
})

router.post('/register', async (req,res) =>
{
    const email = req.body.email
    const email2 = email.trim()
    const password = req.body.password
    //const firstName = req.body.firstName
    //const lastName = req.body.lastName

    const sql = 'SELECT email FROM public.users WHERE email=$1'
    const result = await client.query(sql,[email2])
    console.log(email2)
    console.log(result.rows)
    console.log(result.rows.length)

    if(result.rows.length != 0){
        res.status(400).json({ message: 'user already exist' })
        return
    }

    else{
        const hash = await bcrypt.hash(password, 10)
        const sql = 'INSERT INTO public.users (email, password) VALUES ($1, $2) RETURNING *;'
        const result = await client.query(sql, [email2, hash])
        res.json(result.rows)
        console.log(result.rows)
      }
})

router.get('/me', async (req,res)=>{
    const email = req.body.email
    const email2 = email.trim()
  
    const sql = 'SELECT * FROM public.users WHERE email=$1'
    const result = await client.query(sql,[email2])
  
    if(req.session.userId == result.rows[0].id){
      res.status(401).json({message: 'already authenticated'})
      return
    }
  
    else{
      req.session.userId = result.rows[0].id
      res.json(result.rows[0].id)
      return
      }
  })

  router.post('/Home', async(req,res)=>{
    const title = req.body.title
    const message = req.body.message
    const sql = 'SELECT * FROM public.users WHERE id=$1'
    const result = await client.query(sql,id)
    user = result.rows[0].email

    if(result.rows.length == 0){
        res.status(400).json({ message: 'user not exist' })
        return
    }

    
    


  })

module.exports = router