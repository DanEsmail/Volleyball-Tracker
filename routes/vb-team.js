var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require('mongoose')

var Team = require("../models/teamModel.js")


app.set('view engine', 'pug');
app.set('views','./views');

Team.find(function(err, Teams){
  console.log(Teams[2]["Players"])
})




function createObj(num, req){
  var arr=[]
  if(req.body["player1-gender"] === undefined){
    for(var i = 0; i < num; i++){
      var obj = {}
      obj["player" + (i+1)] = {}
      obj["player" + (i+1)]["name"] = req.body["player" + (i+1)]
      obj["player" + (i+1)]["status"] = req.body["player" + (i+1) + "-status"]
      arr.push(obj["player" + (i+1)])
    }
  }else{
    for(var i = 0; i < num; i++){
      var obj = {}
      obj["player" + (i+1)] = {}
      obj["player" + (i+1)]["name"] = req.body["player" + (i+1)]
      obj["player" + (i+1)]["status"] = req.body["player" + (i+1) + "-status"]
      obj["player" + (i+1)]["gneder"] = req.body["player" + (i+1) + "-gender"]
      arr.push(obj["player" + (i+1)])
    }
  }
  return arr;
}

function createTeam(name, arr){
  var newTeam = new Team({
    teamName: name,
    Players: arr
  });
  newTeam.save(function(err){
    console.log("team saved")
  })
}

router.route('/')
.get(function(req, res){
    res.render('volleyballTraker');
  })
.post(function(req, res, next){

  switch(req.body["playerNumber"]){
    case '6':
      var testObj = createObj(6, req);
      createTeam(req.body["team-name"],testObj)
      break;
    case '7':
      var testObj = createObj(7, req);
      createTeam(req.body["team-name"],testObj)
      break;
    case '8':
      var testObj = createObj(8, req);
      createTeam(req.body["team-name"],testObj)
      break;
    case '9':
      var testObj = createObj(9, req);
      createTeam(req.body["team-name"],testObj)
      break;
    case '10':
      var testObj = createObj(10, req);
      createTeam(req.body["team-name"],testObj)
      break;
  }



  next()
},
function(req, res){
  console.log('done')
  res.redirect('back')
})

module.exports = router;
