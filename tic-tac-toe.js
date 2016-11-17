// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var topLeftClicked = "no"
function topLeft(){
  if (topLeftClicked == "no"){
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace,"circle")
  circle.setAttribute("cx",45)
  circle.setAttribute("cy",45)
  circle.setAttribute("r",30)
  circle.setAttribute("fill","purple")
  canvas.appendChild(circle)
  }
    topLeftClicked = "yes"
}

  var topMiddleClicked = "no"
  function topMiddle(){
    if (topMiddleClicked == "no" ){
    var canvas = document.getElementById("game-board")
    var circle = document.createElementNS(namespace,"circle")
    circle.setAttribute("cx",145)
    circle.setAttribute("cy",45)
    circle.setAttribute("r",30)
    circle.setAttribute("fill","purple")
    canvas.appendChild(circle)}
    topMiddleClicked = "yes"
  }
  var topRightClicked = "no"
  function topRight(){
    if (topRightClicked == "no"){
      var canvas = document.getElementById("game-board")
      var rect = document.createElementNS(namespace,"rect")
      rect.setAttribute("x",220)
      rect.setAttribute("y",25)
      rect.setAttribute("width",50)
      rect.setAttribute("height",50)
      rect.setAttribute("fill","purple")
      canvas.appendChild(rect)
    }
      topRightClicked = "yes"
  }
  var midLeftClicked = "no"
  function midLeft(){
    if (midLeftClicked == "no"){
      var canvas = document.getElementById("game-board")
      var circle = document.createElementNS(namespace,"circle")
      circle.setAttribute("cx",45)
      circle.setAttribute("cy",145)
      circle.setAttribute("r",30)
      circle.setAttribute("fill","purple")
      canvas.appendChild(circle)}
      midLeftClicked = "yes"
  }
  var midMidClicked = "no"
  function midMid(){
    if (midMidClicked == "no"){
      var canvas = document.getElementById("game-board")
      var rect = document.createElementNS(namespace,"rect")
      rect.setAttribute("x",120)
      rect.setAttribute("y",120)
      rect.setAttribute("width",50)
      rect.setAttribute("height",50)
      rect.setAttribute("fill","purple")
      canvas.appendChild(rect)}
      midMidClicked = "yes"
  }
  var midRightClicked = "no"
  function midRight(){
    if (midRightClicked == "no"){
      var canvas = document.getElementById("game-board")
      var rect = document.createElementNS(namespace,"rect")
      rect.setAttribute("x",220)
      rect.setAttribute("y",120)
      rect.setAttribute("width",50)
      rect.setAttribute("height",50)
      rect.setAttribute("fill","purple")
      canvas.appendChild(rect)}
      midRightClicked = "yes"
  }
  var BottomLeftClicked = "no"
  function bottomLeft(){
    if (BottomLeftClicked == "no"){
      var canvas = document.getElementById("game-board")
      var rect = document.createElementNS(namespace,"rect")
      rect.setAttribute("x",290)
      rect.setAttribute("y",)
    }
  }
