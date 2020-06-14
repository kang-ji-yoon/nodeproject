const router = require('express').Router();
const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');

app.use(cookieParser());

const RegisterModel = require("../../models/register");


const login = (req, res)=>{
    res.render("login/login");
};

const loginout = (req, res) => {
    console.log(req.body);
    const { id, password } = req.body;
    RegisterModel.findOne({ id: id, password: password }, (err, result) => {
        if (err) next(err);
        if (!result) res.render("login/login");
        res.cookie("user", id , {
            expires: new Date(Date.now() + 900000),
            httpOnly: true
        });
        res.render("index");
    });
};

const register = (req, res)=>{
    res.render("register/register");
};

const rout = (req, res)=>{
    console.log("serd");
    console.log(req.body);
    const { id, password } = req.body;
    if (!id || !password) return res.status(400).end();
  
    RegisterModel.create({ password, id }, (err, result) => {
        if (err) next(err);
        res.render("login/login");
    });
};

module.exports = { login, loginout, register, rout };