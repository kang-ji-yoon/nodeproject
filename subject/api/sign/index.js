const express = require('express');
const router = express.Router();
const ctrl = require("./sign.ctrl");

router.get("/login", ctrl.login);
router.post("/loginout", ctrl.loginout);
router.get("/register", ctrl.register);
router.post("/rout", ctrl.rout);

module.exports = router;