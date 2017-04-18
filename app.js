var players =[ "Rachel","Alexis","Kushi",  "Caityln",  "Hannah", "Kushali",  "Kaylee", "Mahi",];
var poistion = 1;
var testArr =[1,2,3,4,5,6,7,8,9];
var amount = 6;

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

function displayOut(num){
  switch (num) {
    case "6":
    //hide
      $("#spot7").css("display", "none");
      $("#spot8").css("display", "none");
      $("#spot9").css("display", "none");
      $("#spot10").css("display", "none");
      break;
    case "7":
      //hide
      $("#spot8").css("display", "none");
      $("#spot9").css("display", "none");
      $("#spot10").css("display", "none");
      //show
      $("#spot7").css("display", "");
      break;
    case "8":
      //hide
      $("#spot9").css("display", "none");
      $("#spot10").css("display", "none");
      //show
      $("#spot7").css("display", "");
      $("#spot8").css("display", "");
      break;
    case "9":
      //hide
      $("#spot10").css("display", "none");
      //show
      $("#spot7").css("display", "");
      $("#spot8").css("display", "");
      $("#spot9").css("display", "");
      break;
    case "10":
      //show
      $("#spot7").css("display", "");
      $("#spot8").css("display", "");
      $("#spot9").css("display", "");
      $("#spot10").css("display", "");
      break;
    default:
      console.log("its a string not a number")
  }
}




$(document).ready(function(){
  amount = $("#amount").val()
  displayOut($("#amount").val())
  playerReady(players);
  $("#reverse").click(function(){
    reverse(players)
  })
  $("#forward").click(function(){
    forward(players)
  })

  $("#amount").change(function(){
    amount = $("#amount").val()
    displayOut($("#amount").val())
    $("#title").html($("#amount").val())

  })


})
