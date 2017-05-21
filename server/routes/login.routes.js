'use strict'

const express = require('express');
const router = express.Router({
  mergeParams: true
});
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../models/User.model')
const bcrypt = require('bcrypt')

router.post('/signup', (req, res, next)=>{
  let reqUsername = req.body.user
  let reqPassword = req.body.pass
  User.findOne({username: reqUsername}).then((err, user)=>{
    if(err){
      console.log(err, "error");
      res.json(err)
      return
    }
    if(user){
      console.log(user, "no user");
      res.json({status: "You fucked up"})
      return
    }
    bcrypt.hash(reqPassword, 12, (err, hash)=>{
      User.create({username: reqUsername, password: hash, steamID: null}).then((usr)=>{
        res.json(usr)
      })
    })
  })

})

router.post('/login', (req, res, next)=>{
  let reqUsername = req.body.user
  let reqPassword = req.body.pass
  User.findOne({username: reqUsername}).then((user, err)=>{
    if(err){
      console.log(err, "error")
    }

    bcrypt.compare(reqPassword, user.password, (err, pass)=>{
      console.log(pass, "password verification")
    })
    
  })

})

module.exports = router
