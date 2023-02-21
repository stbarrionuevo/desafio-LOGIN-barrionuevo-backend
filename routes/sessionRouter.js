const express = require('express')

const { Router } = express   
const sessionRouter = Router() 

sessionRouter.post('/login', async (req, res) => {
  const user = req.body.user
  req.session.name = user
  res.status(200).send({ description: user })
})



sessionRouter.post('/logout', async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send(`Something terrible just happened!!!`)
    } else {
      res.redirect('/')
    }
  })
})


module.exports = sessionRouter