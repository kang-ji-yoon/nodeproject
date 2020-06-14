const express = require('express');
const router = express.Router();
const ctrl = require("./movie.ctrl");

// 라우팅 설정
router.get("/",ctrl.list); //목록조희 /movie
router.get("/:id", ctrl.checkId, ctrl.detail);//상세조회 /movie/:id
router.post("/", ctrl.create); // 등록 (/movie)
router.put("/:id", ctrl.checkId, ctrl.update); //수정 (/movie/:id)
router.delete("/:id", ctrl.checkId, ctrl.remove); // 삭제 (/movie/:id)

module.exports = router;