var timer = 0;
var max = 0; //- max of current box
var average = 0;
var SetDone = False;
var curentSet = 0; //- 0 = column
var n = [3,5,9,25];
var cur = 0;

//Sets up on go press
function Start(){
    document.getElementById("go").classList.add("hidden");
    //see what they are starting
    var start = Math.floor(Math.random() * 10); 
    if(start < 5){
        currentSet = 1;
        setNumbers(n[cur]);
    }else{
        setGraph(n[cur]);
    }

}

//puts a graph in the box
// n - number of colums
function setGraph(n){
    var chart = document.getElementById("bar-chart");
    var content = document.getElementById("bar-body");
    var raw = "";

    //change visabilty
    chart.classList.remove("hidden");

    //add bars - unique random numbers
    var arr = [];
    while(arr.length < n){
        var r = Math.floor(Math.random() * 99) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }

    for(var i = 0; i < n ; i++){
        raw += " <tr onclick='submitGraph(0."+ arr[i] +")'><td style='--size:0."+arr[i]+";'></td></tr> ";
        
        if(num > max){
            max =num;
        }
    }
    content.innerHTML = raw;
      
}

//puts a graph in the box
// n - number of colums
function submitGraph(num){
    document.getElementById("bar-body").innerHTML="";
    //stop timer

    //do stuff

    //check and call next graph
   
}

//puts numbers in the box
// n - number of numbers
function setNumbers(n){

}