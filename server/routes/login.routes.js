'use strict'

const express = require('express');
const router = express.Router({
  mergeParams: true
});
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../models/User.model')
const scrypt = require('scrypt')

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
    scrypt.kdf(reqPassword, {N: 1, r:1, p:1}, (err, result)=>{
      console.log(result.toString("base64"));
      User.create({username: reqUsername, password: result, steamID: null}).then((usr)=>{
        res.json(usr)
      })
    });
  })

})

router.post('/login', (req, res, next)=>{
  let reqUsername = req.body.user
  let reqPassword = req.body.pass
  let scryptParams = scrypt.paramsSync(0.1)
  let kdfResult = scrypt.kdfSync(reqPassword, scryptParams)
  console.log("scryptParams", scryptParams);
  console.log("kdfResult", kdfResult);
  User.findOne({username: reqUsername}).then((err, user)=>{

    // if(err){
    //   console.log(err, "error")
    //   res.json(err)
    //   return
    // }

    if(user){
      console.log("user fuck up", user);
      res.json({status: "You fucked up"})
      return
    }

    console.log(user)

    scrypt.verifyKdf(kdfResult, reqPassword).then((res)=>{
        console.log("Passwords Match", res);

    },(err)=>{
        console.log("Passwords Don't Match", err);
    })

  })

})

module.exports = router
