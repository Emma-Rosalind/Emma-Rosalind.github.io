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
        a.src = URL.createObjectURL(this.files[0]); // set src to blob url
        element = a;
    }
}
});