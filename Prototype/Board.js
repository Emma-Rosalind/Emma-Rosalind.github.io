var boxCount = 0;
var element;

function createImage(){
  
    g = document.createElement('div'); 
    g.setAttribute("class", "box makeMeDraggable ui-draggable");
    g.setAttribute("style", "top: 0px;");

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