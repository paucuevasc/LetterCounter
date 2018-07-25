

var mapa=new Map();


function arrayAct(letter){  
    if (mapa.has(letter)!=true){
        mapa.set(letter, 1);
    }
    else{
        var b=mapa.get(letter);
        mapa.set(letter, ++b); 
    }
    }

function noNumbers(letter){
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
    
   var i=0;
    var nameArray=name.split("");
    while (i<nameLength) {

       var letter=nameArray[i];
        var a=0;
        var classificatorId=false;
        while ((a<vocals.length)&&(classificatorId==false)){
            if (isNaN(letter)!=true){
                noNumbers(letter); 
                classificatorId=true;        
            }
            else if (letter==vocals[a]) {   
                classificatorId=true;
                  
            }  
            a++;
        }
        if (classificatorId==false) {
            console.log(letter+" es una consonant");  
        } else {
              console.log(letter+" es una vocal");
        }
        arrayAct(letter);
        i++;
        a=0;
    }    
        console.log(nameArray);
        console.log(mapa);    
}

