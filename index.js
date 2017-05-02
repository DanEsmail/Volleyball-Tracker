// version 0.6.3

var amount = 6;

var testTeam ={
  "player1":{
    "name": "Dan",
    "status": "in",
    "gender": "male"
  },
  "player2":{
    "name": "Kevin",
    "status": "in",
    "gender": "male"
  },
  "player3":{
    "name": "Chris",
    "status": "in",
    "gender": "male"
  },
  "player4":{
    "name": "Joe",
    "status": "in",
    "gender": "male"
  },
  "player5":{
    "name": "Dar",
    "status": "in",
    "gender": "female"
  },

  "player6":{
    "name": "Kim",
    "status": "in",
    "gender": "female"
  },
  "player7":{
    "name": "Neil",
    "status": "out",
    "gender": "male"
  },

}

var team = {}

var exampleTeam = {
  "player1": "Dan",
  "player2": "Kevin",
  "player3": "Joe",
  "player4": "Neil",
  "player5": "Chris",
  "player6": "Kim",
  "player7": "Dar"
}

//Fixed for 0.6.4
function changeRoation(value){
  console.log(value)
  for(var i = 0; i < 6; i++){
    $("#spot" + (i+1)).removeAttr("id")
    console.log($("#spot" + (i+1)).attr("id"))
  }
  switch (value) {
    case "front":
        $(".front-left").attr("id", "spot1")
        $(".front-middle").attr("id", "spot2")
        $(".front-right").attr("id", "spot3")
        $(".back-right").attr("id", "spot4")
        $(".back-middle").attr("id", "spot5")
        $(".back-left").attr("id", "spot6")
      break;
    case "back":
      $(".front-left").attr("id", "spot4")
      $(".front-middle").attr("id", "spot5")
      $(".front-right").attr("id", "spot6")
      $(".back-right").attr("id", "spot1")
      $(".back-middle").attr("id", "spot2")
      $(".back-left").attr("id", "spot3")
      break;
    case "serve":
      $(".front-left").attr("id", "spot3")
      $(".front-middle").attr("id", "spot4")
      $(".front-right").attr("id", "spot5")
      $(".back-right").attr("id", "spot6")
      $(".back-middle").attr("id", "spot1")
      $(".back-left").attr("id", "spot2")
      break;
  }
}

function lookUpPlayer(name, obj){

  for(var keys in obj){
    if(obj[keys]["name"].trim().toLowerCase() == name.trim().toLowerCase()){
      return keys
    }
  }
}

function foward(num, obj, genderState){
  var arr = []
  console.log(genderState)
   if(num > 6){
      if (genderState === "on"){
        var playerKey = lookUpPlayer($("#spot6").html(), team)
        for(var i = 0; i < (num-6); i++){
          var outKey = lookUpPlayer($("#spot" + (i+7)).html(), team)
          if(obj[playerKey]["gender"] == obj[outKey]["gender"]){
            console.log("found a match")
            var playerName = obj[playerKey]["name"]
            var outName = obj[outKey]["name"]
            for(var j = 1; j < 6; j++){
              arr.push($("#spot" + j).html())
            }
            for(var j = 0; j < arr.length; j++){
              $("#spot" + (j+2)).html(arr[j])
            }
            $("#spot" + (i+7)).html(playerName)
            $("#spot1").html(outName)
            return;
          }else{
            console.log("not a match")
            }
          }
          for(var j = 1; j < 7; j++){
            arr.push($("#spot" + j).html())
          }
          for(var j = 0; j< arr.length; j++){
            if(j+1 === 6){
              $("#spot1").html(arr[j])
            }else{
              $("#spot" + (j + 2)).html(arr[j])
            }

        }
      }else{
        loopFoward(amount)
      }
    }else{
      loopFoward(amount)
      }
    }

function reverse(num, obj, genderState){
  arr = []
  if(num > 6){
    if(genderState === "on"){
      var playerKey = lookUpPlayer($("#spot1").html(), team);
      for(var i = num; i > 6; i--){
        console.log(i)
        var outKey = lookUpPlayer($("#spot" + i).html(), team)
        console.log(obj[playerKey])
        console.log(obj[outKey])
        if(obj[playerKey]["gender"] == obj[outKey]["gender"]){
          console.log("found a match")
          var playerName = obj[playerKey]["name"]
          var outName = obj[outKey]["name"]
          for(var j = 2; j < 7; j++){
            arr.push($("#spot" + j).html())
          }
          for(var j = 0; j < arr.length; j++){
            $("#spot" + (j+1)).html(arr[j])
          }
          $("#spot" + (i)).html(playerName)
          $("#spot6").html(outName)
          return;
        }else{
          console.log("not a match")
          }
        }
        for(var j = 1; j < 7; j++){
          arr.push($("#spot" + j).html())
        }
        for(var j = 0; j< arr.length; j++){
          if(j === 0){
            $("#spot6").html(arr[j])
          }else{
            $("#spot" + j).html(arr[j])
          }
        }
      }else{
        loopReverse(amount)
      }
    }else{
      loopReverse(amount)
    }
  }

function loopReverse(courtNum){
  var arr =[]
  for( var i = 0; i<courtNum ; i++){
    arr.push($("#spot"+(i+1)).html())
  }
  for( var i = 0; i<courtNum ; i++){
    if((i) == 0){
      $("#spot" + courtNum).html(arr[i])
    }
      $("#spot" + (i)).html(arr[i])
  }
  console.log(arr)
}

function loopFoward(courtNum){
      var arr =[]

      for( var i = 0; i<courtNum ; i++){
        arr.push($("#spot"+(i+1)).html())
      }
      for( var i = 0; i<courtNum ; i++){
        if((i+1) == courtNum){
          $("#spot1").html(arr[i])
        }
          $("#spot" + (i+2)).html(arr[i])

    }
  }

function teamCreate(val){
    if($("input[name=gender-matter]:checked").val() == "on"){
      console.log("here")
      for(var i = 0; i<val; i++){
        team["player" + (i+1)] = {
          "name": $("input[name=player"+ (i+1) +"]").val(),
          "status": $("input[name=player" + (i+1) + "-status]:checked").val(),
          "gender": $("input[name=player" + (i+1) + "-gender]:checked").val()
        }
      }
    }else{
      for(var i = 0; i<val; i++){
        team["player" + (i+1)] = {
          "name": $("input[name=player"+ (i+1) +"]").val(),
          "status": $("input[name=player" + (i+1) + "-status]:checked").val()
        }
      }
    }

    console.log(team)
  }

function editPlayer(obj){
  for(var keys in obj){
    $("#edit-choose").append("<option class='edit-list' id='" + obj[keys] + "' value='" + obj[keys]["name"] + "'> " + obj[keys]["name"] + " </option>")
  }
  edit(obj["player1"]["name"], team)
}

function edit(name, obj){
  var playerKey = lookUpPlayer(name, obj)
  console.log(obj[playerKey])
  $("input[name=edit-player-name]").val(obj[playerKey]["name"])
  if(obj[playerKey]["status"] == "in"){
    $("input[name=player-edit-status]input[value=in]").prop("checked", true)
  }else{
    $("input[name=player-edit-status]input[value=out]").prop("checked", true)
  }
  if($("input[name=gender-matter]:checked").val() == "on"){
    if(obj[playerKey]["gender"] === "male"){
      $("input[name=player-edit-gender]input[value=male]").prop("checked", true)
    }else{
      $("input[name=player-edit-gender]input[value=female]").prop("checked", true)
    }
  }
}

function editFinal(name, obj){
  var playerKey = lookUpPlayer(name, obj)
  obj[playerKey]["name"] = $("input[name=edit-player-name]").val()
  obj[playerKey]["status"] = $("input[name=player-edit-status]:checked").val()
  if($("input[name=gender-matter]:checked").val() == "on"){
    obj[playerKey]["gender"] = $("input[name=player-edit-gender]:checked").val()
  }
  console.log(team)
  cleanUpEdit()
}

function cleanUpEdit(){

  $("input[name=edit-player-name]").val("")
  $("input[name=player-edit-status]input[value=in]").prop("checked", false)
  $("input[name=player-edit-status]input[value=out]").prop("checked", false)
  $("input[name=player-edit-gender]input[value=female]").prop("checked", false)
  $("input[name=player-edit-gender]input[value=female]").prop("checked", false)

}

//Works as of 0.6.4

function ManageSetUp(obj){
  for(var keys in obj){
    if(obj[keys]["status"] == "in"){
      $(".in").append("<br class='manageClass'><p class='" + obj[keys]["name"] + " manageClass'>" + obj[keys]["name"] + "</p>")
      $(".manageButtons").append(`
        <br class='manageClass'>
        <div>
          <button class="`  + obj[keys]["name"] +  ` plus manageClass">+</button>
          <button class="`  + obj[keys]["name"] +  ` minus manageClass">-</button>
        </div>`)
      $(".manage-out").append("<br class='manageClass'><p class='" + obj[keys]["name"] + " manageClass'>something</p>")
    }else{
      $(".manage-out").append("<br class='manageClass'><p class='" + obj[keys]["name"] + " manageClass'>" + obj[keys]["name"] + "</p>")
      $(".manageButtons").append(`
        <br class='manageClass'>
        <div>
          <button class="`  + obj[keys]["name"] +  ` plus manageClass">+</button>
          <button class="`  + obj[keys]["name"] +  ` minus manageClass">-</button>
        </div>`)
      $(".in").append("<br class='manageClass'><p class='" + obj[keys]["name"] + " manageClass'>something</p>")
    }
  }
}

function mangeSwitch(name, status, obj){
  var arr = name.split(" ")
  if(status === "in"){
    $(".in ." + arr[0]).html(arr[0])
    $(".manage-out ." + arr[0]).html("something")
    for(var keys in obj){
      if(obj[keys]["name"] === arr[0]){
        obj[keys]["status"] = "in"
        break
      }
    }
  }else{
    $(".in ." + arr[0]).html("something")
    $(".manage-out ." + arr[0]).html(arr[0])
    for(var keys in obj){
      if(obj[keys]["name"] === arr[0]){
        obj[keys]["status"] = "out"
        break
      }
    }
  }
}

function boxPosition(obj){
  var top;
  var left;
  if($(window).width() > 600){
    top = obj["top"] - 29;
    left = obj["left"] + 220;
  }else{
    top = 25;
    left = 25;
  }


  $("#change-box").css({
    "top": top ,
    "left": left
  })

  $("#change-box").addClass("active");
}

function selectPlayer(obj){
    $("#changePlayer").append("<option class='player-option'></option>")
  for(var keys in obj){
    $("#changePlayer").append("<option class='player-option' value="+ obj[keys]["name"] + ">" + obj[keys]["name"] + "</option>")
  }
}

function removePlayer(obj,val){
  val = val.trim().toLowerCase()

  for(var keys in obj){
    if(val == obj[keys]["name"].trim().toLowerCase()){
      delete obj[keys]
    }

  }
  return cleanUp(obj)
}

function cleanUp(obj){
  var newObj = {}
  var i = 1;
  for(var keys in obj){
    newObj["player" + i] = obj[keys];
    i += 1;
  }
  return newObj;

}

function addPlayer(obj){
  if($("input[name=gender-matter]:checked").val() == "on"){
    console.log($("input[name=player-add-gender]:checked").val())
    obj["player" + (Object.keys(obj).length + 1)] = {
      "name": $("input[name=add]").val(),
      "status": $("input[name=player-add-status]:checked").val(),
      "gender": $("input[name=player-add-gender]:checked").val()
    }
  }else{
    obj["player" + (Object.keys(obj).length + 1)] = {
      "name": $("input[name=add]").val(),
      "status": $("input[name=player-add-status]:checked").val()
    }
  }

  console.log(team);

}

function displayOut(num , tag){
  console.log(num)
  switch (num) {

    case "6":
    //hide
      $("#" + tag + "7").css("display", "none");
      $("#" + tag + "8").css("display", "none");
      $("#" + tag + "9").css("display", "none");
      $("#" + tag + "10").css("display", "none");
      break;
    case "7":
      //hide
      $("#" + tag + "8").css("display", "none");
      $("#" + tag + "9").css("display", "none");
      $("#" + tag + "10").css("display", "none");
      //show
      $("#" + tag + "7").css("display", "");
      break;
    case "8":
      //hide
      $("#" + tag + "9").css("display", "none");
      $("#" + tag + "10").css("display", "none");
      //show
      $("#" + tag + "7").css("display", "");
      $("#" + tag + "8").css("display", "");
      break;
    case "9":
      //hide
      $("#" + tag + "10").css("display", "none");
      //show
      $("#" + tag + "7").css("display", "");
      $("#" + tag + "8").css("display", "");
      $("#" + tag + "9").css("display", "");
      break;
    case "10":
      //show
      $("#" + tag + "7").css("display", "");
      $("#" + tag + "8").css("display", "");
      $("#" + tag + "9").css("display", "");
      $("#" + tag + "10").css("display", "");
      break;
    default:
      console.log("its a string not a number")
  }
}

function playerReady(obj){
  var i = 1;
  if(Object.keys(obj).length > 0){
    for(var keys in obj){
      if(obj[keys]["status"] === "in"){
        $("#spot" + i).html(obj[keys]["name"]);
        i += 1;
      }
    }
  }
}

//Needs to be looked at and changed 0.6.4


//Might need to be thrown out 0.6.4

$(document).ready(function(){

  // setting up the court
  amount = $("#amount").val()
  displayOut($("#amount").val(), "spot")
  playerReady(team);

  // controls player movement
  $("#reverse").click(function(){
    //reverse(team)
    reverse(amount, team, $("input[name=gender-matter]:checked").val())
  });
  $("#forward").click(function(){
    //forward(team)
    foward(amount, team, $("input[name=gender-matter]:checked").val())

  });

  //Changes the amount of players
  $("#amount").change(function(){
    amount = $("#amount").val()
    displayOut($("#amount").val(), "spot")
  });

  //getting information for team creation form
  $('input[name=playerNumber]').on("change", function(){
    displayOut($('input[name=playerNumber]:checked').val(), "box")
  });

  //Creating a team
  $("#create").on("click", function(){
    $("#teamBox").addClass("active")
    displayOut($('input[name=playerNumber]:checked').val(), "box")
  })
  $("#create-finish").on("click", function(){
    $("#teamBox").removeClass("active")
    teamCreate($('input[name=playerNumber]:checked').val())
    playerReady(team);
    console.log(team)
  })
  $("#create-cancel").on("click", function(){
    $("#teamBox").removeClass("active")

  })

  //adding Players
  $("#add").on("click", function(){
    $("#addPlayers").addClass("active")
  })
  $("#add-finish").on("click", function(){
    $("#addPlayers").removeClass("active")
    addPlayer(team)
    playerReady(team);

  });
  $("#add-cancel").on("click", function(){
    $("#addPlayers").removeClass("active")
  });

  //Removing Players
  $("#remove").on("click", function(){
    $("#removePlayer").addClass("active")
  })
  $("#remove-finish").on("click", function(){
    $("#removePlayer").removeClass("active")
    team = removePlayer(team,$("input[name=remove]").val());
    console.log(team)
    playerReady(team);
  })
  $("#remove-cancel").on("click", function(){
    $("#removePlayer").removeClass("active")
  })

  //changing players names by clicking
  $(".zone").on("click", function(){
    $(this).children(".player").html("working");
    $(this).children(".player").addClass("working");
    boxPosition($(this).children(".player").offset());
    selectPlayer(team);
    $("#changePlayer").on("change", function(){
      $(".working").html($("#changePlayer").val())
      $("#change-box").removeClass("active")
      $(".working").removeClass("working")
      $(".player-option").remove()
    })
  })

  //Managing the roaster
  $("#manage").on("click", function(){
    $("#manageRoaster").addClass("active")
    ManageSetUp(team);
  })
  $(document).on("click", ".minus", function(){
      mangeSwitch($(this).attr("class"), "out", team)
    })
  $(document).on("click", ".plus", function(){
      mangeSwitch($(this).attr("class"), "in", team)
    })
  $("#manage-finish").on("click", function(){
    $("#manageRoaster").removeClass("active")
    playerReady(team);
    $(".manageClass").remove()
  })
  $("#manage-cancel").on("click", function(){
    $("#manageRoaster").removeClass("active")
    $(".manageClass").remove()
  })

  //Settings
  $("#setting").on("click", function(){
    $("#Settings-box").addClass("active");
  })
  $("#settings-finish").on("click", function(){
    $("#Settings-box").removeClass("active");
    changeRoation($("input[name=rotation]:checked").val())
    if($("input[name=gender-matter]:checked").val() == "on"){
      $(".gender").addClass("active");
    }else{
      $(".gender").removeClass("active")
    }
  })
  $("#settings-cancel").on("click", function(){
    $("#Settings-box").removeClass("active");
  })

  //Edit player
  $("#edit").on("click", function(){
    $("#edit-player").addClass("active");
    editPlayer(team)

  })
  $("#edit-choose").on("change", function(){
    edit($("#edit-choose").val(), team)
  })
  $("#edit-finish").on("click", function(){
    editFinal($("#edit-choose").val(), team);
    $("#edit-player").removeClass("active");
    $(".edit-list").remove();
  })
  $("#edit-cancel").on("click", function(){
    $("#edit-player").removeClass("active")
    $(".edit-list").remove()
  })

$("input[type=radio]").on("click", function(){
  console.log(this)
})

})
