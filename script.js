
var lettersArray=[];
var letter;
var i;
var a;
var classificatorId;
var mapa=new Map();

function arrayAct(){  
    if (mapa.has(letter)!=true){
        mapa.set(letter, 1);
    }
    else{
        var b=mapa.get(letter);
       mapa.set(letter, ++b); 
    }
    lettersArray[i]=letter;
    i++; 
    }

function noNumbers(){
    if (letter==" "){
       console.log("Ups! A white space"); 
    }
    else {
    alert("YOU CAN'T PUT NUMBERS ON YOUR NAME, are you a robot?") 
    }
}
function nameCounter(){
var vocals=["a","e","i","o","u","A","E","I","O","U"];
var name = document.getElementById("nameInput").value;
console.log(name);   

var nameLength=name.length;
console.log(nameLength);
    
i=0;
  
while (i<nameLength) {

    letter=name.substr(i,1);
    a=0;
    classificatorId=false;
    while ((a<vocals.length)&&(classificatorId==false)){
        if (isNaN(letter)!=true){
             noNumbers(); 
            classificatorId=true;
     
            
        }
        else if (letter==vocals[a]) {   
            classificatorId=true;
                 console.log(letter+"es una vocal");
            
        }  
        else {

        
        } 
        a++;
       
    }
   if (classificatorId==false) {
      console.log(letter+"es una consonant");  
   }
    arrayAct();

    a=0;
}    
console.log(lettersArray);
console.log(mapa);    
}

