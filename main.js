var num = 0;
var Photo = ["familyPhoto.webp", "dad.jpg", "mom.jpg", "girl1.jpg", "girl2.jpg"];
var relationship = ["", "Dad", "Mom", "Me", "Sister"];
var names = ["", "Mikhail", "Vera", "Catherine", "Nicole"];

function right(){
    if (num<4){
        num = num + 1;
    }
    else{
        num = 0;
    }
    document.getElementById("relationship").innerHTML=relationship[num];
    document.getElementById("name").innerHTML=names[num];
    document.getElementById("pic").src=Photo[num];
}

function left(){
    if (num>0){
        num = num - 1;
    }
    else{
        num = 4;
    }
    document.getElementById("relationship").innerHTML=relationship[num];
    document.getElementById("name").innerHTML=names[num];
    document.getElementById("pic").src=Photo[num];
}
