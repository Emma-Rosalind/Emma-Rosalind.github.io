//general variables
var timerStart = 0;
var max = 0; //- max of current box
var average = 0;
var SetDone = false;
var n = [3,5,9,25];
var cur = 0;
var repeats = 2;   //can change at will
var repeatDone = 0;
var trials = [];
var trial = {};

//Sets up on go press
function Start(){
    document.getElementById("go").classList.add("hidden");
    //see what they are starting
    
    var start = Math.floor(Math.random() * 10); 
    if(start < 5){                     
        setNumbers(n[cur]);
        document.getElementById("numbox").classList.remove("hidden");
    }else{
        setGraph(n[cur]);
        document.getElementById("bar-chart").classList.remove("hidden");
    }
  
}

//puts a graph in the box
// n - number of colums
function setGraph(n){
    var content = document.getElementById("bar-body");
    var raw = "";

    //add bars - unique random numbers
    var arr = [];
    while(arr.length < n){
        var r = Math.floor(Math.random() * 99) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }

    var values = ``;
    for(var i = 0; i < n ; i++){
        raw += " <tr ><td onclick='submitGraph("+ arr[i] +")' style='--size:0."+arr[i]+";'></td></tr> ";
        values += `${arr[i].toString()},`;
        if(arr[i] > max){
            max = arr[i];
        }
    }
    trial["repetition"] = repeatDone;
    trial["# values"] = n;
    trial["values"] = values;
    content.innerHTML = raw;
    timerStart = Date.now();
}

//puts a graph in the box
// n - number of colums
function submitGraph(num){
    //stop timer and save
    var time = Date.now() - timerStart;
    if(num == max){
        console.log("correct");
    }else{                          //TODO: do something with this info
        console.log("wrong");
    }

    //collect data
    trial["method"] = "graph";
    trial["correct answer"] = max;
    trial["answer"] = num;
    trial["time (ms)"] = time;

    //do stuff
    document.getElementById("bar-body").innerHTML="";
    repeatDone++;
    max = 0;
    //check and call next graph
    if(repeatDone == repeats){
        cur++;
        repeatDone = 0;
    }
    trials.push(trial);
    trial = [];
    //are we done all graphs
    if(cur == n.length){
        if(SetDone){
            Done();
        }else{
            SetDone = true;
            cur = 0;
            document.getElementById("box").classList.add("hidden");
            document.getElementById("numbox").classList.remove("hidden");
            setNumbers(n[cur]);
        }
    }else{
        setGraph(n[cur]);
    }
}

// print something to user
function Done(){
    document.getElementById("numbox").classList.add("hidden");
    var content = document.getElementById("left-col");
    
    let raw = "<table border='1'><tr>";
    for(const key in trials[0]){
        raw += "<th border='1'>"+key+"</th>";
    }
    raw += "</tr>";
   // raw = " <tr><td style='--size:0.""'></td></tr> ";
    for(let trialIndex=0; trialIndex<trials.length; trialIndex++){
        trial = trials[trialIndex];
        raw += "<tr border='1'>";
        for(const key in trial){
            raw += "<td border='1'>"+trial[key].toString()+"</td>";
        }
        raw += "</tr>";
    }
    raw += "</table>";
    content.innerHTML = raw;
    alert("both rounds done");
}

//puts numbers in the box
// n - number of numbers
function setNumbers(n){
    var content = document.getElementById("numbox");
    var raw = "";
    var margin = 0;

    //set margin based on # to print
    if(n == 3){
        content.classList.add("smallNum");
    }else if (n == 5){
        //content.classList.add("medNum");  //needs more work for formatting
    }else if (n == 25){
        content.classList.add("largeNum");
        content.classList.remove("smallNum");
    }


    //unique random numbers
    var arr = [];
    while(arr.length < n){
        var r = Math.floor(Math.random() * 99) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }

    var values = ``;
    for(var i = 0; i < n ; i++){
        raw += "<span class='nums' onclick='submitNums("+ arr[i] +")'> "+ arr[i]+"</span> ";
        values += `${arr[i].toString()},`;
        if(arr[i] > max){
            max = arr[i];
        }
    }
    trial["repetition"] = repeatDone;
    trial["# values"] = n;
    trial["values"] = values;
    content.innerHTML = raw;
    timerStart = Date.now();
}

//puts a graph in the box
// n - number of colums
function submitNums(num){
    //stop timer and save
    var time = Date.now() - timerStart;
    if(num == max){
        console.log("correct");
    }else{                          //TODO: do something with this info
        console.log("wrong");
    }

    //collect data
    trial["method"] = "numbers";
    trial["correct answer"] = max;
    trial["answer"] = num;
    trial["time (ms)"] = time;

    //do stuff
    document.getElementById("numbox").innerHTML="";
    repeatDone++;
    max = 0;
    //check and call next graph
    if(repeatDone == repeats){
        cur++;
        repeatDone = 0;
    }
    trials.push(trial);
    trial = [];
    //are we done all graphs
    if(cur == n.length){
        if(SetDone){
            Done();
        }else{
            SetDone = true;
            cur = 0;
            document.getElementById("box").classList.remove("hidden");
            document.getElementById("bar-chart").classList.remove("hidden");
            document.getElementById("numbox").classList.add("hidden");
            setGraph(n[cur]);
        }
    }else{
        setNumbers(n[cur]);
    }
}
