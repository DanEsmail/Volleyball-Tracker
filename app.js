var players =["Mahi", "Rachel", "Alexis","Kalyee","Kushi","Caitlyn","Julianna","Kushali","Hannah"];

function playerReady(arr){
  for(var i = 0; i<arr.length; i++){
    $("#spot" + (i+1)).html(arr[i])
  }
}





$(document).ready(function(){
  playerReady(players)
  $("#switch").click(function(){
    $("#title").html("it worked")

  })
})
