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
    "status": "in"
  },

}

var team = {}

function playerReady(obj){
  var num = 1;
  if(Object.keys(obj).length > 0){
    for(var keys in obj){
      $("#spot" + num).html(obj[keys])
      num += 1;
    }
  }
}

function loop(obj){
    var num = poistion;
    console.log(num)
    for(var keys in obj){
      if(num <= amount ){
        $("#spot" + num).html(obj[keys])
        num += 1
      }else{
        num = 1
        $("#spot" + num).html(obj[keys])
        num += 1
      }
    }
}

function forward(obj){
  if(poistion == amount ){
    poistion = 1;
  }
  else{
    poistion +=1;
  }
  loop(obj)
}

function reverse(obj){
  if(poistion <= 1){
    poistion = amount
  }else{
    poistion -= 1
  }
  loop(obj)
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

function teamCreate(val){
  for(var i = 0; i < val; i++){
    team["player" + (i+1)] = $("input[name=player"+ (i+1) +"]").val()
  }
  console.log(team)
}

function addPlayer(obj){
  obj["player" + (Object.keys(obj).length + 1)] = $("input[name=add]").val()
  console.log(team)
}

function cleanUp(obj){
  var arr = []
  for(var keys in obj){
    arr.push(obj[keys])
    delete obj[keys]
  }

  for(var i = 0; i < arr.length; i++){
    team["player" + (i + 1)] = arr[i];
  }
}

function removePlayer(obj,val){
  val = val.trim().toLowerCase()
  console.log(val)
  for(var keys in obj){
    if(val == obj[keys].trim().toLowerCase()){
      delete obj[keys]

    }

  }
  cleanUp(team)
}


$(document).ready(function(){
  console.log(testTeam)
  console.log(testTeam['player1']["name"])


  // setting up the court
  amount = $("#amount").val()
  displayOut($("#amount").val(), "spot")
  playerReady(team);
  // controls player movement
  $("#reverse").click(function(){
    reverse(team)
  });
  $("#forward").click(function(){
    forward(team)
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
    removePlayer(team,$("input[name=remove]").val());
    playerReady(team);
    console.log(team)
  })
  $("#remove-cancel").on("click", function(){
    $("#removePlayer").removeClass("active")
  })

  //changing players names by clicking
  $(".player").on("click", function(){
    $(this).html("working")
  })
})
