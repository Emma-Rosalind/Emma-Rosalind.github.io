var boxCount = 0;
var element;

function createImage(){
  
    g = document.createElement('div'); 
    g.setAttribute("class", "box makeMeDraggable ui-draggable");
    $('.makeMeDraggable').draggable(); 
    document.getElementById("board").append(g);
    init();
    boxCount++;

    g.append(element);
    document.getElementById("picField").value = "";

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

function changeBackground(){
    
}

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