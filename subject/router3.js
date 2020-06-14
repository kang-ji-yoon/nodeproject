var router = require('express').Router();

var {PythonShell} = require('python-shell');

var admin = require('firebase-admin');

var path = require('path');

var express = require('express');
var app = express();

const convert = require('xml-js');
const request = require('request');

var fs = require('fs');

var serviceAccount = require("./curtaincall-62a7f-firebase-adminsdk-0jpve-b7a64db8b9.json");
 
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://curtaincall-62a7f.firebaseio.com/"
});

var db = admin.database();

var ref = db.ref("/");

router.route('/fire').get((req, res)=>{
  res.render('firebase_js.html');
});

router.route('/ad').post((req, res)=>{
  console.log('com');

  var usersRef = ref.child("search")

  var persRef = ref.child("performance")

  usersRef.orderByChild("pn").once("value", function(data){
    console.log(data.val());
    console.log(data.val().pn);
    
    var id = {
      id : data.val().pn
    };

    console.log(id);

    usersRef.set({
      pn:'바보',
      signal:0
    });

    res.render('fireout.html', id);
  });

});

router.route('/menu4').get((req, res)=>{
  res.render('CurtainCall_Menu4.html');
});

router.route('/menu4_after').get((req, res)=>{
  res.render('Menu4_after.html');
});

router.route('/menu5_camera').get((req, res)=>{
  res.render('Menu5_camera.html');
});

router.route('/menu5_f').get((req, res)=>{
  res.render('Menu5_f.html');
});

router.route('/menu5_next').get((req, res)=>{
  res.render('Menu5_next.html');
});

router.route('/menu5').get((req, res)=>{
  res.render('Menu5.html');
});

router.route('/recom').get((req, res)=>{
  res.render('recommend.html');
});

router.route('/info').get((req, res)=>{
  res.render('infost.html');
});

router.route('/').get((req, res)=>{
  res.render('main.html');
});

router.route('/src2').get((req, res)=>{
  res.render('src2.html');
});

router.route('/src3').get((req, res)=>{
  res.render('src3.html');
});

router.route('/search').get((req, res)=>{
    res.render('search.html');
});

router.route('/search1').get((req, res)=>{
  res.render('search1.html');
});

router.route('/login').get((req, res)=>{
  res.render('CurtainCall_Login.html');
});

router.route('/menu1_1').get((req, res)=>{
  res.render('CurtainCall_Menu1_1.html');
});

router.route('/menu1_2').get((req, res)=>{
  res.render('CurtainCall_Menu1_2.html');
});

router.route('/menu3').get((req, res)=>{
  res.render('CurtainCall_Menu3.html');
});

router.route('/register').get((req, res)=>{
  res.render('CurtainCall_Register.html');
});

router.route('/show1').get((req, res)=>{
  res.render('CurtainCall_Show1.html');
});

router.route('/audio').get((req, res)=>{

  var mn = {
    musicname : 'music.mp3'
  }
  res.render('audio.html', mn);
});

router.route('/menu1_1').post((req, res)=>{

  console.log('output 처리함')

    var user = {
        id:req.body.id, 
        password:req.body.password
    }

    var usersRef = ref.child("users");

    usersRef.orderByChild("id").equalTo(user.id).once("value", function(data){
             
        if(data.val() == null){
            
        console.log('failoutput 처리함');

        res.render('failoutput.html');
        }
            
        else{
            var datapost = data.val();
            var code;
            for(var temp in datapost)
            code = temp;
            
            if(datapost[code].password == user.password){
                res.render('CurtainCall_Menu1_1.html'); 
            }
                
            else{
                console.log('failoutput 처리함');

                res.render('CurtainCall_Login.html');
            }
        }
    });
});

router.route('/login').post((req, res)=>{

  console.log('SignUpmartout 처리함')

  var user = {
    id:req.body.id, 
    password:req.body.password,
    age:req.body.age
  };

  console.log(user);
  
  res.render('CurtainCall_Login.html');
  
    var usersRef = ref.child("users")
  
    usersRef.child(req.body.id).set({
        id:req.body.id,
        password:req.body.password,
        age:req.body.age
    });
  
});

//example

router.route('/infoout').post((req, res)=> {

    const axios = require('axios');

    var pn = req.body.pn;
    
    axios.get('http://www.kopis.or.kr/openApi/restful/pblprfr', {
      params: {
        service : 'cbe7f1ac949d4beda13787da22bcff34',
        stdate : '20120101',
        eddate : '20190601',
        rows : '1',
        cpage : '1',
        shprfnm : pn
      }
    })
    .then((response) => {
      console.log(response.data);

      fs.writeFile('imfo.xml', response.data, 'utf8', function(error, data){
        if (error) {throw error};
        console.log("ASync Write Complete");
      });

      var xmlToJson = convert.xml2js(response.data, {compact: true, spaces: 4});

      console.log(xmlToJson.dbs.db[0].mt20id._text);

      var pid = xmlToJson.dbs.db[0].mt20id._text + '/';

      console.log(pid);
      
      axios.get('http://www.kopis.or.kr/openApi/restful/pblprfr/' + pid, {
        params: {
          service : 'cbe7f1ac949d4beda13787da22bcff34'
        }
      })
      .then((response) => {
        fs.writeFile('imfod.xml', response.data, 'utf8', function(error, data){
          if (error) {throw error};
          console.log("ASync Write Complete");
        });
      })
    })
    .catch((error) => {
      console.log(erorr);
    })

    res.render('infoout.html');
})

module.exports = router;