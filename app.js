var poistion = 1;
var amount = 6;

var testTeam ={
  "player1":{
    "name": "Dan",
    "status": "in"
  },
  "player2":{
    "name": "Kevin",
    "status": "in"
  },
  "player3":{
    "name": "Chris",
    "status": "out"
  },
  "player4":{
    "name": "Joe",
    "status": "in"
  },
  "player5":{
    "name": "Neil",
    "status": "in"
  },
  "player6":{
    "name": "Kim",
    "status": "in"
  },
  "player7":{
    "name": "Dar",
    "status": "in"
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

//Fixed for 0.1.5


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
  var top = obj["top"] - 29;
  var left = obj["left"] + 220;

  $("#change-box").css({
    "top": top ,
    "left": left
  })

  $("#change-box").addClass("active");
}

function selectPlayer(obj){
    $("#changePlayer").append("<option class='player-option'></option>")
  for(var keys in obj){
    $("#changePlayer").append("<option class='player-option' value="+ obj[keys] + ">" + obj[keys] + "</option>")
  }
}

function teamCreate(val){
  for(var i = 0; i<val; i++){
    team["player" + (i+1)] = {
      "name": $("input[name=player"+ (i+1) +"]").val(),
      "status": $("input[name=player" + (i+1) + "-status]:checked").val()
    }
  }
  console.log(team)
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
  obj["player" + (Object.keys(obj).length + 1)] = {
    "name": $("input[name=add]").val(),
    "status": $("input[name=player-add-status]:checked").val()
  }
  console.log(team);

}

//Works as of 0.1.5
function LoopFoward(courtNum){
  var num = poistion
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
  console.log(arr)
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

function displayOut(num , tag){
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


//Needs to be looked at and changed 0.1.5
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
//Might need to be thrown out 0.1.5


$(document).ready(function(){

  // setting up the court
  amount = $("#amount").val()
  displayOut($("#amount").val(), "spot")
  playerReady(team);

  // controls player movement
  $("#reverse").click(function(){
    //reverse(team)
    loopReverse(amount)
  });
  $("#forward").click(function(){
    //forward(team)
    LoopFoward(amount)

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
  $(".player").on("click", function(){
    $(this).html("working");
    $(this).addClass("working");
    boxPosition($(this).offset());
    selectPlayer(exampleTeam);
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

})
