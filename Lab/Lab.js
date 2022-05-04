//general variables
var timerStart = 0;
var max = 0; //- max of current box
var min = 99;
var average = 0;
var SetDone = false;
var n = [3,5,9,25];
var cur = 0;
var repeats = 4;   //can change at will
var repeatDone = 0;
var trials = [];
var trial = {};
var id = "";

//Sets up on go press
function Start(){
    //set id
    id = Date.now().toString().substring(8); 
 
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
        /*var value = Math.random() * 0xFF | 0;
        var grayscale = (value << 16) | (value << 8) | value;
        var randomColor = '#' + grayscale.toString(16);
        while(randomColor.length < 7){
            randomColor = randomColor + "0";
        }*/
        const randomColor = "#dddddd";
        raw += " <tr ><td onclick='submitGraph("+ arr[i] +")' style='--size:0."+arr[i]+"; background:" + randomColor + "; outline: 1px solid black; '></td></tr> ";
        values += `${arr[i].toString()},`;
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
    }

    const repetition = "n" + n.toString() + "-" + repeatDone;

    trial["id"] = id;
    trial["repetition"] = repetition;
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

    //calculate error
    const error = calculateError(num, max, min, max);

    //collect data
    trial["method"] = "graph";
    trial["correct answer"] = max;
    trial["selected"] = num;
    trial["error"] = error;
    trial["time (ms)"] = time;

    //do stuff
    document.getElementById("bar-body").innerHTML="";
    repeatDone++;
    max = 0;
    min = 99;
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

function calculateError(selected, correct, min, max){
    return (Math.abs(correct - selected)/(max - min)).toFixed(5);
}

// print something to user
function Done(){
    document.getElementById("numbox").classList.add("hidden");
    document.getElementById("box").classList.add("hidden");
    var content = document.getElementById("left-col");
    
    let raw = "<div><table border='1'><tr>";
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
    raw += "</table></div>";
    content.innerHTML = raw;
    document.getElementById("inst").classList.remove("d-flex");
    document.getElementById("inst").classList.remove("justify-content-center");

    var text = `<div >Your ID is ${id} please complete our survey. <br> <button class="btn btn-light" onclick="openSurvey()">Survey</button> </div> <br>`
    text += "<div '>Then copy the data below and paste it (right click > paste special > values only) <br> in the next available row of the linked spreadsheet. <br> <button class='btn btn-light' onclick='openSpreadsheet()'>Spreadsheet</button> </div>"
    document.getElementById("inst").innerHTML = text;
}

function openSurvey() {
    window.open(
      "https://forms.gle/GzMayYFnBEfzc1X17", "_blank");
}

function openSpreadsheet() {
    window.open(
      "https://docs.google.com/spreadsheets/d/14UTh4oD4H6qyE2y6nXBJnJ-ydEif6HWxcGzEmNFnS-g/edit#gid=0", "_blank");
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
        //content.classList.add("medNum");  
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
        if(arr[i] < min){
            min = arr[i];
        }
    }

    const repetition = "n" + n.toString() + "-" + repeatDone;

    trial["id"] = id;
    trial["repetition"] = repetition;
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

    //calculate error
    const error = calculateError(num, max, min, max);

    //collect data
    trial["method"] = "numbers";
    trial["correct answer"] = max;
    trial["selected"] = num;
    trial["error"] = error;
    trial["time (ms)"] = time;

    //do stuff
    document.getElementById("numbox").innerHTML="";
    repeatDone++;
    max = 0;
    min = 99;
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
