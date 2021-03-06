// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var topLeftClicked = "no"
var turn = "player1"

function topLeft(){
  if (topLeftClicked == "no"){
    if(turn == "player1") {
  var canvas = document.getElementById("game-board")
  var circle = document.createElementNS(namespace,"circle")
  circle.setAttribute("cx",45)
  circle.setAttribute("cy",45)
  circle.setAttribute("r",30)
  circle.setAttribute("fill","purple")
  canvas.appendChild(circle)
  turn = "player2"
}else{
  var canvas = document.getElementById("game-board")
  var rect = document.createElementNS(namespace,"rect")
  rect.setAttribute("x",20)
  rect.setAttribute("y",20)
  rect.setAttribute("width",50)
  rect.setAttribute("height",50)
  rect.setAttribute("fill","purple")
  canvas.appendChild(rect)
  turn = "player1"
}
    topLeftClicked = "yes"
}
}

  var topMiddleClicked = "no"
  function topMiddle(){
    if (topMiddleClicked == "no" ){
      if (turn == "player1"){
        var canvas = document.getElementById("game-board")
        var circle = document.createElementNS(namespace,"circle")
        circle.setAttribute("cx",145)
        circle.setAttribute("cy",45)
        circle.setAttribute("r",30)
        circle.setAttribute("fill","purple")
        canvas.appendChild(circle)
      turn = "player2"
      }else{
        var canvas = document.getElementById("game-board")
        var rect = document.createElementNS(namespace,"rect")
        rect.setAttribute("x",120)
        rect.setAttribute("y",20)
        rect.setAttribute("width",50)
        rect.setAttribute("height",50)
        rect.setAttribute("fill","purple")
        canvas.appendChild(rect)
        turn = "player1"
}
    topMiddleClicked = "yes"
  }
}

  var topRightClicked = "no"
  function topRight(){
    if (topRightClicked == "no"){
    if (turn == "player1"){
      var canvas = document.getElementById("game-board")
      var circle = document.createElementNS(namespace,"circle")
      circle.setAttribute("cx",245)
      circle.setAttribute("cy",45)
      circle.setAttribute("r",30)
      circle.setAttribute("fill","purple")
      canvas.appendChild(circle)
      turn = "player2"
    }else{
      var canvas = document.getElementById("game-board")
      var rect = document.createElementNS(namespace,"rect")
      rect.setAttribute("x",220)
      rect.setAttribute("y",20)
      rect.setAttribute("width",50)
      rect.setAttribute("height",50)
      rect.setAttribute("fill","purple")
      canvas.appendChild(rect)
      turn = "player1"
    }
      topRightClicked = "yes"
  }
}
  var midLeftClicked = "no"
  function midLeft(){
    if (midLeftClicked == "no"){
      if (turn == "player1"){
      var canvas = document.getElementById("game-board")
      var circle = document.createElementNS(namespace,"circle")
      circle.setAttribute("cx",45)
      circle.setAttribute("cy",145)
      circle.setAttribute("r",30)
      circle.setAttribute("fill","purple")
      canvas.appendChild(circle)
      turn = "player2"
    }else{
      var canvas = document.getElementById("game-board")
      var rect = document.createElementNS(namespace,"rect")
      rect.setAttribute("x",20)
      rect.setAttribute("y",120)
      rect.setAttribute("width",50)
      rect.setAttribute("height",50)
      rect.setAttribute("fill","purple")
      canvas.appendChild(rect)
      turn = "player1"
}
      midLeftClicked = "yes"
  }
}
  var midMidClicked = "no"
  function midMid(){
    if (midMidClicked == "no"){
      if (turn == "player1"){
        var canvas = document.getElementById("game-board")
        var circle = document.createElementNS(namespace,"circle")
        circle.setAttribute("cx",145)
        circle.setAttribute("cy",145)
        circle.setAttribute("r",30)
        circle.setAttribute("fill","purple")
        canvas.appendChild(circle)
        turn = "player2"
      }else{
      var canvas = document.getElementById("game-board")
      var rect = document.createElementNS(namespace,"rect")
      rect.setAttribute("x",120)
      rect.setAttribute("y",120)
      rect.setAttribute("width",50)
      rect.setAttribute("height",50)
      rect.setAttribute("fill","purple")
      canvas.appendChild(rect)
      turn = "player1"
    }
        midMidClicked = "yes"
  }
}
  var midRightClicked = "no"
  function midRight(){
    if (midRightClicked == "no"){
      if (turn == "player1"){
        var canvas = document.getElementById("game-board")
        var circle = document.createElementNS(namespace,"circle")
        circle.setAttribute("cx",245)
        circle.setAttribute("cy",145)
        circle.setAttribute("r",30)
        circle.setAttribute("fill","purple")
        canvas.appendChild(circle)
        turn = "player2"
      }else{
      var canvas = document.getElementById("game-board")
      var rect = document.createElementNS(namespace,"rect")
      rect.setAttribute("x",220)
      rect.setAttribute("y",120)
      rect.setAttribute("width",50)
      rect.setAttribute("height",50)
      rect.setAttribute("fill","purple")
      canvas.appendChild(rect)
      turn = "player1"
    }
      midRightClicked = "yes"
  }
}
  var BottomLeftClicked = "no"
  function bottomLeft(){
    if (BottomLeftClicked == "no"){
      if (turn == "player1"){
        var canvas = document.getElementById("game-board")
        var circle = document.createElementNS(namespace,"circle")
    circle.setAttribute("cx",45)
    circle.setAttribute("cy",245)
    circle.setAttribute("r",30)
    circle.setAttribute("fill","purple")
    canvas.appendChild(circle)
    turn = "player2"
  }else{
    var canvas = document.getElementById("game-board")
    var rect = document.createElementNS(namespace,"rect")
      rect.setAttribute("x",20)
      rect.setAttribute("y",220)
      rect.setAttribute("width",50)
      rect.setAttribute("height",50)
      rect.setAttribute("fill","purple")
      canvas.appendChild(rect)
      turn = "player1"
    }
      BottomLeftClicked = "yes"
    }
  }

    var bottomMidClicked = "no"
    function bottomMid(){
      if (bottomMidClicked == "no"){
        if (turn == "player1"){
      var canvas = document.getElementById("game-board")
      var circle = document.createElementNS(namespace,"circle")
      circle.setAttribute("cx",145)
      circle.setAttribute("cy",245)
      circle.setAttribute("r",30)
      circle.setAttribute("fill","purple")
      canvas.appendChild(circle)
      turn = "player2"
    }else{
      var canvas = document.getElementById("game-board")
      var rect = document.createElementNS(namespace,"rect")
      rect.setAttribute("x",120)
      rect.setAttribute("y",220)
      rect.setAttribute("height",50)
      rect.setAttribute("width",50)
      rect.setAttribute("fill","purple")
      canvas.appendChild(rect)
      turn = "player1"
    }
      bottomMidClicked = "yes"
  }
}
  var bottomRightClicked ="no"
  function bottomRight(){
    if (bottomRightClicked == "no"){
      if (turn == "player1"){
      var canvas = document.getElementById("game-board")
      var circle = document.createElementNS(namespace,"circle")
      circle.setAttribute("cx",245)
      circle.setAttribute("cy",245)
      circle.setAttribute("r",30)
      circle.setAttribute("fill","purple")
      canvas.appendChild(circle)
      turn = "player2"
    }else{
      var canvas = document.getElementById("game-board")
      var rect = document.createElementNS(namespace,"rect")
      rect.setAttribute("x",220)
      rect.setAttribute("y",220)
      rect.setAttribute("width",50)
      rect.setAttribute("height",50)
      rect.setAttribute("fill","purple")
      canvas.appendChild(rect)
    }
      bottomRightClicked = "yes"
    }
  }
