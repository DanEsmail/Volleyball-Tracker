var players =[ "Rachel","Alexis","Kushi",  "Caityln",  "Hannah", "Kushali",  "Kaylee", "Mahi",];
var poistion = 1;
var testArr =[1,2,3,4,5,6,7,8,9];
var amount = 6;

var team = {}

function playerReady(arr){
  for(var i = 0; i<arr.length; i++){
    $("#spot" + (i+1)).html(arr[i])
  }
}

function loop(arr){
    var num = poistion;
    console.log(num)
    for (var i = 0; i < arr.length; i++) {
      if(num <= amount ){
      $("#spot" + num).html(arr[i])
      num += 1
    }else{
      num = 1
      $("#spot" + num).html(arr[i])
      num += 1
    }
  }
}

function forward(arr){
  if(poistion == amount ){
    poistion = 1;
  }
  else{
    poistion +=1;
  }
  loop(arr)
}

function reverse(arr){
  if(poistion <= 1){
    poistion = amount
  }else{
    poistion -= 1
  }
  loop(arr)
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
    console.log(obj)
}

function removePlayer(obj,val){
  console.log(val)
  for(var keys in obj){
    if(val == obj[keys]){
      delete obj[keys]
      console.log("here")
    }
  }
}


$(document).ready(function(){
  amount = $("#amount").val()
  displayOut($("#amount").val(), "spot")
  playerReady(players);
  // controls player movement
  $("#reverse").click(function(){
    reverse(players)
  })
  $("#forward").click(function(){
    forward(players)
  })

  //Changes the amount of players
  $("#amount").change(function(){
    amount = $("#amount").val()
    displayOut($("#amount").val(), "spot")
  })

  //getting information for team creation form
  $('input[name=playerNumber]').on("change", function(){
    displayOut($('input[name=playerNumber]:checked').val(), "box")

  })

  //Creating a team
  $("#create").on("click", function(){
    $("#teamBox").addClass("active")
    displayOut($('input[name=playerNumber]:checked').val(), "box")
  })
  $("#create-finish").on("click", function(){
    $("#teamBox").removeClass("active")
    teamCreate($('input[name=playerNumber]:checked').val())
    console.log(team)
  })

  //adding Players
  $("#add").on("click", function(){
    $("#addPlayers").addClass("active")
  })
  $("#add-finish").on("click", function(){
    $("#addPlayers").removeClass("active")
    addPlayer(team)
  })

  //Removing Players
  $("#remove").on("click", function(){
    $("#removePlayer").addClass("active")
  })
  $("#remove-finish").on("click", function(){
    $("#removePlayer").removeClass("active")
    console.log(team)
    removePlayer(team,$("input[name=remove]").val())
    console.log(team)
  })

  //changing players names by clicking
  $(".player").on("click", function(){
    $(this).html("working")
  })
})
