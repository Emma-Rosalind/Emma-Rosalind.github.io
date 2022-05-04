var talk = 0;
var hp = 150;
var mp = 50;
var hp2 = 200;

var pp = [15,5,2];
var help = [false,false,false,false];

var talkStartText = ["*Wakes up*", "Where am I&#63; What&#39;s happening to me&#63;", "You have been summoned here to aid ghosts in transcending to the afterlife."," You will help them by recovering lost items that they will need on their journey.", "Now go forth and and assist three lost souls&#33; &#42;disappears&#42;","Hmm... I guess I&#39;ll go look around for ghosts..."];
var talkStartName = ["Brill", "Brill", "Sergeant", "Sergeant","Sergeant","Brill"];

//simons lines
var talkSimonText = [" *crying*", "Hello... Um... Are you alright?", "  My son Simon...  He never loved me...  Only that monster...", " I don&#39;t even remember his face anymore...  Maybe I am the real monster..."];
var talkSimonName = ["Simon", "Brill", "Simon", "Simon"];

var talkSimon2Text = ["*Sobs*","Maybe I am the real monster..."];
var talkSimon2Name = ["Simon","Simon"];

var talkSimon3Text = [" *looks at familly picture*  Carter family...  That looks like the crying ghost.", "Here&#44; I think I&#39;ve found a picture of Simon.", "Oh...","I&#39;m sorry Simon..","I&#39;m so sorry...    &#42;ascends&#42;"];
var talkSimon3Name = ["Brill", "Brill", "Simon", "Simon", "Simon"];

//barbs lines
var talkBarbText = ["Hello, who are you&#63;", "Oh, I&#39;m just a barber...", "I lived for my trade&#44; but died because I refused to stain it with blood."," I don&#39;t mean to be rude, but you are quite... ","Stained with it...","Yes... Could I ask a favour of you&#63;","I&#39;d like a relic to remind me of my old life, for when time tries to take my memories from me."];
var talkBarbName = ["Brill", "Barber", "Barber", "Brill" ,"Brill", "Barber","Barber"];

var talkBarb2Text = ["Have you found it yet&#63;", "...No&#63;", "Please help me find it..."];
var talkBarb2Name = ["Barber", "Barber", "Barber"];

var talkBarb3Text = [" Oh&#33; My blade...", "Just the way I remember it.", "Thank you. &#42;ascends&#42;"];
var talkBarb3Name = ["Barber", "Barber", "Barber"];

//pauls lines
var talkPaulText = ["Do you know&#63;", " Excuse me&#63;", "Do you know&#63;","Know what&#63;","The name.","I hope you&#39;re feeling lucky, because you&#39;re going to tell me the name."];
var talkPaulName = ["Paul", "Brill", "Paul","Brill","Paul","Paul"];

var talkPaul2Text = ["Do you know now&#63;", "I hope you&#39;re feeling lucky, because you&#39;re going to tell me the name."];
var talkPaul2Name = ["Paul", "Paul"];

var talkSatanText = ["Do you think you can escape my domain&#63;", "What&#63; Who&#39;s there&#63;", "You&#39;ll see..."];
var talkSatanName = ["Voice","Brill","Voice"];


var tool = false;
var pic = false;

var item = [false,false];
var talked = [false,false,false];
var please = 0;
//change to visibility of ID
function changeVisibility(divID) {
    var element = document.getElementById(divID);

	// if element exists, it is considered true
	if(element) {
		element.className = (element.className == "hidden") ? "unhidden" : "hidden";
	}//if
}//changeVisibility

//change to visibility of ID
function unhideTwo(divID1, divID2) {
    changeVisibility(divID1);
	changeVisibility(divID2);
}//changeVisibility


function talkStart(){

   if(talk == 0 ){
     changeVisibility("talkstart");
   }

   if(talkStartText.length == talk || talkStartText.length < talk ){
     changeVisibility("talkstart");
     changeVisibility("nametag");
     changeVisibility(talkStartName[talk - 1]);
     document.getElementById("textbox").innerHTML = "...";
     talk = 0;
   }else{

     if(talk > 0){
       changeVisibility(talkStartName[talk]);
       changeVisibility(talkStartName[talk - 1]);
     }else{
       changeVisibility(talkStartName[talk]);
     }

     document.getElementById("textbox").innerHTML = talkStartText[talk];
     document.getElementById("nametag").innerHTML = talkStartName [talk];

     talk++;
   }

}//talk start

function line(a){
document.getElementById(a).style.textDecoration = "underline";
}
function line2(a){
document.getElementById(a).style.textDecoration = "none";
}

function hover(a){
  if(a == "..."){
    window.setTimeout(hover2,1000);
  }else{
  document.getElementById("textbox").innerHTML = a;
  }
}//hover

function hover2(){
document.getElementById("textbox").innerHTML = "...";
}//hover2

function itemGet(a,b){
//hides item
changeVisibility(b);

//item == true
if(b == "item1"){
   item [0] = true;
  }else if (b == "item2"){
    item [1] = true;
  }else if (b == "heal2"){
    help [0] = true;
  }else if (b == "po2"){
    help [1] = true;
  }else if (b == "holy2"){
    help [2] = true;
  }else if (b == "sup2"){
    help [3] = true;
  }
  window.setTimeout(itemGet2(a),1000);
}//item get

//delayed for mouse out
function itemGet2(a){
 document.getElementById("textbox").innerHTML = a;
 window.setTimeout(itemGet3,2000);
}//item get2

function itemGet3(){
 document.getElementById("textbox").innerHTML = "...";
}//item get2

    function pressArrow(){
         changeVisibility("BackArrow");
         changeVisibility("TopArrow");
         changeVisibility("LeftArrow");
         changeVisibility("RightArrow");
         changeVisibility("mainarea");



}//pressArrow

    function enterRightRoom(){
        pressArrow();
        changeVisibility("rightarea");

}//enterRightRoom

    function enterLeftRoom(){
        pressArrow();
        changeVisibility("leftarea");

}//enterRightRoom

    function enterTopRoom(){
        pressArrow();
        changeVisibility("toparea");

}//enterRightRoom

    function returnMainArea(){
        pressArrow();
        var TopArea = document.getElementById("toparea");
        var LeftArea = document.getElementById("leftarea");
        var RightArea = document.getElementById("rightarea");
        TopArea.className = "hidden";
        LeftArea.className = "hidden";
        RightArea.className = "hidden";

}//enterRightRoom




function battleStart(){
  changeVisibility("battleGif");

  if(help [0] == true){
  changeVisibility("heal");
}
if(help [1] == true){
  changeVisibility("po");
}
 if(help [2] == true){
  changeVisibility("holy");
}
 if(help [3] == true){
  changeVisibility("sup");
}

  window.setTimeout(battleStartB,4700);
}//battle start

function battleStartB(){

changeVisibility("battleGif");
changeVisibility("battleArea");
}//battle start B

function over(a){

  if(a == "attack"){
    var element = document.getElementById("attack");
    var element2 = document.getElementById("item");
    element.className = "unhidden";
    element2.className = "hidden";
  }else{
     var element = document.getElementById("item");
     var element2 = document.getElementById("attack");
     element.className = "unhidden";
     element2.className = "hidden";
  }//else

}// over


function attack(a){
   var damage = 0;

    changeVisibility("battletext");
   //find the damage you do
   

  if( a == 1){
    
   damage = Math.floor((Math.random() * 5) + 10);
   document.getElementById("battletext").innerHTML = "Fox uses Tackle";
   pp [0] -= 1;
   document.getElementById("p1").innerHTML = pp[0];

   if(pp [0] < 1){
      document.getElementById("a1").onclick = function() { return; };
      document.getElementById("a1").style.textDecoration = "line-through";
   }

  }else if (a == 2){

    damage = Math.floor((Math.random() * 15) + 10);
    document.getElementById("battletext").innerHTML = "Fox uses Light Ball";
     pp [1] -= 1;
     document.getElementById("p2").innerHTML = pp[1];

      if(pp [1] < 1){
         document.getElementById("a2").onclick = function() { return; };
         document.getElementById("a2").style.textDecoration = "line-through";
       }
  }else if (a == "3"){

    damage = Math.floor((Math.random() * 20) + 15);
    document.getElementById("battletext").innerHTML = "Fox uses Spirit Beam";
     pp [2] -= 1;
     document.getElementById("p3").innerHTML = pp[2];
     
      if(pp [2] < 1){
      document.getElementById("a3").onclick = function() { return; };
      document.getElementById("a3").style.textDecoration = "line-through";
    }
  }else if(a == "11"){
    document.getElementById("battletext").innerHTML = "Ms. Brill uses the Health Potion to regain 100 HP!";
    changeVisibility("heal");
    hp += 100;
    
    if(hp > 150){
     hp = 150;
    }
    damage = 0;
  }else if(a == "22"){
    document.getElementById("battletext").innerHTML = "Ms. Brill uses the poison deal 60 damage!";
    changeVisibility("po");
    damage = 60;
  }else if(a == "33"){
    document.getElementById("battletext").innerHTML = "Ms. Brill uses the holy water deal 100 damage!";
    changeVisibility("holy");
    damage = 100;
  }else if(a == "44"){
    document.getElementById("battletext").innerHTML = "Ms. Brill uses the Health Potion to regain 150 HP!";
    changeVisibility("sup");
    damage = 0;
    hp = 150;
  }

  //apply
   hp2 = (hp2 - damage);
     if(hp2 < 0){
     hp2 = 0;
   }
   document.getElementById("enemyhp").innerHTML = hp2 + " / 200";

  //animation
   document.getElementById("enemydamage").innerHTML = "-" + damage;
   changeVisibility("enemydamage");
   window.setTimeout(defend,1000);

}//attack

function defend(){
   var damage2 = 0;

   changeVisibility("enemydamage");

  //return if defeated
  if(hp2 < 0 || hp2 == 0){
     document.getElementById("endscreen").style.backgroundImage = "url('images/win.png')";
     changeVisibility("endscreen");
     return;
  }

 //get enemy damage
  damage2 = Math.floor((Math.random() * 10) + 30);
  
  //apply
   hp = (hp - damage2);  

   if(hp < 0){
     hp = 0;
   }
   document.getElementById("myhp").innerHTML = hp + " / 150";
    document.getElementById("battletext").innerHTML = "Satan attacks!";
   //animation
   document.getElementById("mydamage").innerHTML = "-" + damage2;
   changeVisibility("mydamage");
   window.setTimeout(defend2,1000);

} //defend


function defend2(){
  changeVisibility("mydamage");
  //return if defeated
  
   if(hp < 0 || hp == 0){
     document.getElementById("endscreen").style.backgroundImage = "url('images/die.png')";
     changeVisibility("endscreen");
     return;
  }
  
   changeVisibility("battletext");

} //defend2


function talkSimon(){ 

   if(talked [0] == false){
       if(talk == 0 ){
         changeVisibility("talksimon");
         changeVisibility("nametag");
       }

       if(talkSimonText.length == talk || talkSimonText.length < talk ){
         changeVisibility("talksimon");
         changeVisibility("nametag");
         changeVisibility(talkSimonName[talk - 1]);
         document.getElementById("textbox").innerHTML = "...";
        talk = 0;
        talked [0] = true;
        }else{

         if(talk > 0){
          changeVisibility(talkSimonName[talk]);
           changeVisibility(talkSimonName[talk - 1]);
          }else{
             changeVisibility(talkSimonName[talk]);
          }//else

           document.getElementById("textbox").innerHTML = talkSimonText[talk];
          document.getElementById("nametag").innerHTML = talkSimonName [talk];

          talk++;
       }//else
       
       //if they have the item
    }else if ( item[0] == true){
        
         if(talk == 0 ){
         changeVisibility("talksimon");
         changeVisibility("nametag");
       }

       if(talkSimon3Text.length == talk || talkSimon3Text.length < talk ){
         changeVisibility("talksimon");
         changeVisibility("nametag");
         changeVisibility(talkSimon3Name[talk - 1]);
         document.getElementById("textbox").innerHTML = "...";
        talk = 0;
        talked [0] = true;
        
        //get rid of ghost
        changeVisibility("simonghost");
        please++;

        //add statment for satan to appear when please = 3
         if(please == 3){
            //show satan
            changeVisibility("clicker");
            
            //start text
            talkSatan();
         }//if

        }else{

         if(talk > 0){
          changeVisibility(talkSimon3Name[talk]);
           changeVisibility(talkSimon3Name[talk - 1]);
          }else{
             changeVisibility(talkSimon3Name[talk]);
          }//else

           document.getElementById("textbox").innerHTML = talkSimon3Text[talk];
          document.getElementById("nametag").innerHTML = talkSimon3Name [talk];

          talk++;
       }//else

    //no item
    }else{

        if(talk == 0 ){
         changeVisibility("talksimon");
         changeVisibility("nametag");
       }

       if(talkSimon2Text.length == talk || talkSimon2Text.length < talk ){
         changeVisibility("talksimon");
         changeVisibility("nametag");
         changeVisibility(talkSimon2Name[talk - 1]);
         document.getElementById("textbox").innerHTML = "...";
        talk = 0;
        talked [0] = true;
        }else{

         if(talk > 0){
          changeVisibility(talkSimon2Name[talk]);
           changeVisibility(talkSimon2Name[talk - 1]);
          }else{
             changeVisibility(talkSimon2Name[talk]);
          }//else

           document.getElementById("textbox").innerHTML = talkSimon2Text[talk];
          document.getElementById("nametag").innerHTML = talkSimon2Name [talk];

          talk++;
       }//else

    }//else

}//talk simon


function talkBarb(){

   if(talked [2] == false){
       if(talk == 0 ){
         changeVisibility("talkbarb");
         changeVisibility("nametag");
       }

       if(talkBarbText.length == talk || talkBarbText.length < talk ){
         changeVisibility("talkbarb");
         changeVisibility("nametag");
         changeVisibility(talkBarbName[talk - 1]);
         document.getElementById("textbox").innerHTML = "...";
        talk = 0;
        talked [2] = true;
        }else{

         if(talk > 0){
          changeVisibility(talkBarbName[talk]);
           changeVisibility(talkBarbName[talk - 1]);
          }else{
             changeVisibility(talkBarbName[talk]);
          }//else

           document.getElementById("textbox").innerHTML = talkBarbText[talk];
          document.getElementById("nametag").innerHTML = talkBarbName [talk];

          talk++;
       }//else
       
       //if they have the item
    }else if ( item[1] == true){
        
         if(talk == 0 ){
         changeVisibility("talkbarb");
         changeVisibility("nametag");
       }

       if(talkBarb3Text.length == talk || talkBarb3Text.length < talk ){
         changeVisibility("talkbarb");
         changeVisibility("nametag");
         changeVisibility(talkBarb3Name[talk - 1]);
         document.getElementById("textbox").innerHTML = "...";
        talk = 0;
        talked [2] = true;
        
        //get rid of ghost
        changeVisibility("barbghost");
        please++;

        //add statment for satan to appear when please = 3
         if(please == 3){
            //show satan
            changeVisibility("clicker");
            
            //start text
            talkSatan();
         }//if
        }else{

         if(talk > 0){
          changeVisibility(talkBarb3Name[talk]);
           changeVisibility(talkBarb3Name[talk - 1]);
          }else{
             changeVisibility(talkBarb3Name[talk]);
          }//else

           document.getElementById("textbox").innerHTML = talkBarb3Text[talk];
          document.getElementById("nametag").innerHTML = talkBarb3Name [talk];

          talk++;
       }//else

    //no item
    }else{

        if(talk == 0 ){
         changeVisibility("talkbarb");
         changeVisibility("nametag");
       }

       if(talkBarb2Text.length == talk || talkBarb2Text.length < talk ){
         changeVisibility("talkbarb");
         changeVisibility("nametag");
         changeVisibility(talkBarb2Name[talk - 1]);
         document.getElementById("textbox").innerHTML = "...";
        talk = 0;
        talked [2] = true;
        }else{

         if(talk > 0){
          changeVisibility(talkBarb2Name[talk]);
           changeVisibility(talkBarb2Name[talk - 1]);
          }else{
             changeVisibility(talkBarb2Name[talk]);
          }//else

           document.getElementById("textbox").innerHTML = talkBarb2Text[talk];
          document.getElementById("nametag").innerHTML = talkBarb2Name [talk];

          talk++;
       }//else

    }//else

}//talk barb

function talkPaul(){

   if(talked [1] == false){
       if(talk == 0 ){
         changeVisibility("talkpaul");
         changeVisibility("nametag");
       }

       if(talkPaulText.length == talk || talkPaulText.length < talk ){
         changeVisibility("talkpaul");
         changeVisibility("nametag");
         changeVisibility(talkPaulName[talk - 1]);
         document.getElementById("textbox").innerHTML = "Say:";
        talk = 0;
        talked [1] = true;
        
         //continue convo
        talkPaul2();

        }else{

         if(talk > 0){
          changeVisibility(talkPaulName[talk]);
           changeVisibility(talkPaulName[talk - 1]);
          }else{
             changeVisibility(talkPaulName[talk]);
          }//else

           document.getElementById("textbox").innerHTML = talkPaulText[talk];
          document.getElementById("nametag").innerHTML = talkPaulName [talk];

          talk++;
       }//else
       
       //if they have have talked
    }else{

        if(talk == 0 ){
         changeVisibility("talkpaul");
         changeVisibility("nametag");
       }

       if(talkPaul2Text.length == talk || talkPaul2Text.length < talk ){
         changeVisibility("talkpaul");
         changeVisibility("nametag");
         changeVisibility(talkPaul2Name[talk - 1]);
         document.getElementById("textbox").innerHTML = "Say:";
        talk = 0;
        talked [1] = true;

        //continue convo
        talkPaul2();

        }else{

         if(talk > 0){
          changeVisibility(talkPaul2Name[talk]);
           changeVisibility(talkPaul2Name[talk - 1]);
          }else{
             changeVisibility(talkPaul2Name[talk]);
          }//else

           document.getElementById("textbox").innerHTML = talkPaul2Text[talk];
          document.getElementById("nametag").innerHTML = talkPaul2Name [talk];

          talk++;
       }//else

    }//else

}//talk paul

function talkPaul2(){
    //unhides options
    changeVisibility("choo");
    changeVisibility("stoppaul");
}//talk paul 2

function endPaul(a){
    changeVisibility("Paul");
    changeVisibility("nametag");
    document.getElementById("nametag").innerHTML = "Paul";

    if(a == "true"){
     document.getElementById("textbox").innerHTML = "Yes, yes, yes&#33; YOU ARE LUCKY&#33;";
     please++;
    changeVisibility("paulghost");


    }else{
    document.getElementById("textbox").innerHTML = "Oh no... \n You&#39;re not lucky are you&#63;";
    }
    changeVisibility("choo");
    changeVisibility("stoppaul");
    changeVisibility("countpaul");

} //end paul

function endPaul2(){
  changeVisibility("Paul");
 changeVisibility("nametag");
 changeVisibility("countpaul");

  //check satan statis
      if(please == 3){
            //show satan
            changeVisibility("clicker");

            //start text
            talkSatan();
       }else{
         document.getElementById("textbox").innerHTML = "...";
       }

}//end paul 2

function talkSatan(){

if(talk == 0 ){
         changeVisibility("talksatan");
         changeVisibility("nametag");
       }

 if(talkSatanText.length == talk || talkSatanText.length < talk ){
         changeVisibility("talksatan");
         changeVisibility("nametag");
         changeVisibility(talkSatanName[talk - 1]);
         document.getElementById("textbox").innerHTML = "...";
        talk = 0;
        }else{

         if(talk > 0){
           if(changeVisibility(talkSatanName[talk])== "Brill" && changeVisibility(talkSatanName[talk - 1]) != "Brill"){

            changeVisibility("Brill");
           }else if(changeVisibility(talkSatanName[talk - 1])== "Brill" && changeVisibility(talkSatanName[talk]) != "Brill"){
             changeVisibility("Brill");
           }
          }

           document.getElementById("textbox").innerHTML = talkSatanText[talk];
          document.getElementById("nametag").innerHTML = talkSatanName [talk];

          talk++;
       }//else

}
