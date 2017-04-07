var players =["Mahi", "Rachel", "Alexis","Kalyee","Kushi","Caitlyn","Julianna","Kushali","Hannah"];
var poistion = 2;


function playerReady(arr){
  for(var i = 0; i<arr.length; i++){
    $("#spot" + (i+1)).html(arr[i])
  }
}

function forward(arr){
  if(poistion >= 10 ){
    poistion = 1;
  }
  else{

  }
  var num = poistion;
  for(var i = 0; i < arr.length; i++){
    if(num < 9){
      $("#spot" + num).html(arr[i])
      console.log("#spot" + num)
      console.log(arr[i])
      num += 1

    }
    else{
      $("#spot" + num).html(arr[i])
      num = 1
      console.log("#spot" + num)
      console.log("over 9")
    }
  }
  if(poistion <= 10 ){
    poistion += 1;
  }
  else{
    poistion = 1;
  }
  console.log(poistion + "-----")
}





$(document).ready(function(){
  playerReady(players)
  $("#forward").click(function(){
    $("#title").html("it worked")
    forward(players)

  })
})
