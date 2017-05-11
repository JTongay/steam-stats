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
  console.log(req.body);
  console.log(reqUsername);
  console.log(reqPassword);
  // let hashedPass = bcrypt.hashSync(reqPassword, 12)
  // console.log(hashedPass);
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
    User.create({username: reqUsername, password: reqPassword, steamID: null}).then((usr)=>{
      res.json(usr)
    })
  })

})

module.exports = router
