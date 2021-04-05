var boxCount = 0;
var element;

function createImage(){
  
    g = document.createElement('div'); 
    g.setAttribute("class", "box makeMeDraggable ui-draggable");
    g.setAttribute("style", "top: 0px;");
    

    $('.makeMeDraggable').draggable(); 
    document.getElementById("board").append(g);
    init();

    //photo
    g.append(element);
    element.setAttribute("onmouseover", "hover('toolBox"+ boxCount+"')");
    element.setAttribute("onmouseout", "hover('toolBox"+ boxCount+"')");
    document.getElementById("picField").value = "";

    //tools 
    var div = document.createElement('div');
    div.setAttribute("class", "toolBox hidden");
    div.setAttribute("id", "toolBox" + boxCount);
    div.innerHTML = "<img class= 'tool' src = 'images/can.png'>" + 
    "<img class= 'tool' src = 'images/chat.png'>" + "<img class= 'tool' src = 'images/size.png'>"+ "<img class= 'tool' src = 'images/like.png'>";
    g.append(div);

    boxCount++;

}

function hover(id){
    console.log("here");
    $( "#" + id ).toggleClass( "hidden");
}




//get url of uploaded file
$(document).ready(function(){
document.getElementById('picField').onchange = function (evt) {
    if (this.files && this.files[0]) {
        a = document.createElement('img');
        a.setAttribute("class", "image");
        a.src = URL.createObjectURL(this.files[0]); // set src to blob url
        element = a;
    }
}
});


function clear(){
    document.querySelectorAll('.box').forEach(e => e.remove());
}

function background(num){
    $("#board").removeClass();
    var back = document.getElementById("board");

    if(num == 0){
       
    }else if(num == 1){
        back.classList.add("grid");
    }else if(num == 2){
        back.classList.add("col3");
    }else if(num == 3){
        back.classList.add("col4");
    }else if(num == 4){
        back.classList.add("square");
    }else if(num == 5){

    }else{

    }
}

//get url of uploaded background
$(document).ready(function(){
    document.getElementById('picback').onchange = function (evt) {
        if (this.files && this.files[0]) {
            document.getElementById("backgroundImage").src = URL.createObjectURL(this.files[0]); // set src to blob url
        }
    }
    });

function _(selector) {
    return document.querySelector(selector);
}
// function setup(){
//     let canvas = createCanvas(650, 600);
//     canvas.parent("canvas-wrapper");
//     background(200);
// }
function mouseDragged(){
    // let canvas = document.getElementById("board");
    // var ctx = canvas.getContext("2d");
    // ctx.fillStyle = "#FF0000";
    // ctx.fillRect(0, 0, 150, 75);
    let type = _("#pen-pencil").checked?"pencil":"brush";
    let size = parseInt(_("#pen-size").value);
    let color = _("#pen-color").value;
    fill(color);
    stroke(color);
    if(type == "pencil"){
        line(pmouseX, pmouseY, mouseX, mouseY);
    } else {
        ellipse(mouseX, mouseY, size, size);
    }
}
