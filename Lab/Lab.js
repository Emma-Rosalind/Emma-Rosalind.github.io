var timerStart = 0;
var max = 0; //- max of current box
var average = 0;
var SetDone = false;
var n = [3,5,9,25];
var cur = 0;
var repeats = 2;   //can change at will
var repeatDone = 0;

//Sets up on go press
function Start(){
    document.getElementById("go").classList.add("hidden");
   /* //see what they are starting
    
    var start = Math.floor(Math.random() * 10); 
    if(start < 5){                     change when implimenting #s
        setNumbers(n[cur]);
    }else{
        setGraph(n[cur]);
    }*/
  
    console.log(n);
    setGraph(n[cur]);

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
        raw += " <tr onclick='submitGraph("+ arr[i] +")'><td style='--size:0."+arr[i]+";'></td></tr> ";
        
        if(arr[i] > max){
            max = arr[i];
        }
    }
    content.innerHTML = raw;
    timerStart = new Date().getTime;
}

//puts a graph in the box
// n - number of colums
function submitGraph(num){
    //stop timer and save
    var time = new Date().getTime - timerStart;
    if(num == max){
        console.log("correct");
    }else{                          //TODO: do something with this info
        console.log("wrong");
    }

    //do stuff
    document.getElementById("bar-body").innerHTML="";
    repeatDone++;
    max = 0;
    console.log("rep: " + repeatDone);
    //check and call next graph
    if(repeatDone == repeats){
        console.log("upping");
        cur++;
        repeatDone = 0;
    }
    //are we done all graphs
    if(cur == n.length){
        if(SetDone){
            Done();
        }else{
            SetDone = true;
            cur = 0;
            setNumbers(n[cur]);
        }
    }else{
        setGraph(n[cur]);
    }
}

//puts numbers in the box
// n - number of numbers
function setNumbers(n){
    alert("setNumbers called");

}


// print something to user
function Done(){
    document.getElementById("box").innerHTML = "DONE";
}