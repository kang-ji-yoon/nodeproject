const MusicModel = require("../../models/music")
const mongoose = require("mongoose");
const express = require('express');
var app = express();

var cookieParser = require('cookie-parser');

app.use(cookieParser());

// id 유효성 체크
const checkId = (req, res, next) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).end();
    };

    next();
};

// 목록조회 (localhost:3000/music?limit=3)
// - 성공 : limit수만큼 music 객체를 담은 배열을 리턴 (100:OK)
// - 실패 : limit가 숫자형이 아닌 경우 오류(400:Bad Request)
const list = (req, res, next) => {
        const limit = parseInt(req.query.limit || 10, 10);
        if (Number.isNaN(limit)) {
            return res.status(400).end();
        }
    
        MusicModel.find((err, result) => {
            if (err) next(err);
            //res.json(result);
            res.render("music/list", { result });
        }).limit(limit);
};

// 상세조회 (music/:id)
// 성공 : id에 해당하는 music 객체를 리턴(200:OK)
// 실패 : id가 숫자가 아닐 경우 (400: Bad Request)
//        해당하는 id가 없는 경우 (404 : Not Found)
const detail = (req, res, next) => {
    const id = req.params.id;
    
    /*
    //1. findById()
    MusicModel.findById(id, (err, result) => {
        if (err) throw err;
        if (!result) return res.status(404).end();
        res.json(result);
    });
    */
    //2. findOne
    MusicModel.findOne({ _id: id }, (err, result) => {
        if (err) next(err);
        if (!result) return res.status(404).end();
        res.json(result);
    });
};

// 등록(localhost:3000/api/music)
// 성공 : id 채번, 등록한 music 객체를 리턴 (201: Created)
// 실패 : singer, title 값 누락 시 400 반환 (400: Bad Request)
const create = (req, res, next) => {
    const { singer, title } = req.body;
    if (!singer || !title) return res.status(400).end();
    
    // 1. Model의 객체인 Document 생성 후 save
    /*
    const music = new MusicModel({ singer, title });
    music.save((err, result) => {
        if (err) throw err;
        res.status(201).json(result);
    });*/

    // 2.
    MusicModel.create({ singer, title }, (err, result) => {
        if (err) next(err);
        res.status(201).json(result);
    });
    
};

// 수정 (/music/:id)
// 성공 : id에 해당하는 music 객체에 입력 데이터로 변경
//        해당 객체를 반환 (200:OK)
// 실패 : id가 숫자가 아닐 경우 (400: Bad Request)
//        해당하는 id가 없는 경우 (404: Not Found)
const update = (req, res, next) => {
    const id = req.params.id;

    const { singer, title } = req.body;

    MusicModel.findByIdAndUpdate(id, { singer, title }, { new: true}, (err, result) => {
        if (err) next(err);
        if (!result) return res.status(404).end();
        res.json(result);
    });
};

// 삭제 (localhost:3000/api/music/:id)
// 성공 : id에 해당하는 객체를 배열에서 삭제 후 결과 배열 리턴(200: OK)
// 실패 : id가 숫자가 아닌 경우(400: Bad Request)
//        해당하는 id가 없는 경우 (404: Not Found)
const remove = (req, res, next) =>{
    const id = req.params.id;
    
    MusicModel.findByIdAndDelete(id,(err,result)=>{
        if(err) return next(err);
        if(!result) return res.status(404).end();
        res.json(result);
    });
    
};

module.exports = { list, detail, create, update, remove, checkId };