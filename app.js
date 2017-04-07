var players =["Mahi", "Rachel", "Alexis","Kalyee","Kushi","Caitlyn","Julianna","Kushali","Hannah"];
var poistion = 1;
var testArr =[1,2,3,4,5,6,7,8,9];

function playerReady(arr){
  for(var i = 0; i<arr.length; i++){
    $("#spot" + (i+1)).html(arr[i])
  }
}

function forward(arr){
  if(poistion === 9 ){
    poistion = 1;
  }
  else{
    poistion +=1;
  }
  var num = poistion;
  console.log(num)
  for (var i = 0; i < arr.length; i++) {
    if(num <= 9 ){
    $("#spot" + num).html(arr[i])
    num += 1
  }else{
    num = 1
    $("#spot" + num).html(arr[i])
    num += 1
  }
}
}

function reverse(arr){
  if(poistion <= 1){
    poistion = 9
  }else{
    poistion -= 1
  }
  var num = poistion
  console.log(num)
    for (var i = 0; i < arr.length; i++) {
      if(num <= 9 ){
      $("#spot" + num).html(arr[i])
      num += 1
    }else{
      num = 1
      $("#spot" + num).html(arr[i])
      num += 1
    }
  }





}






$(document).ready(function(){
  playerReady(players);
  $("#reverse").click(function(){
    reverse(players)
  })
  $("#forward").click(function(){
    forward(players)
  })


})
