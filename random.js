gulayArray = [
    'ginataan.jpg', 'kangkong.jpg',
    'monggo.jpg','nilaga.jpg', 'sayote.jpg', 'sinigang.jpg',
    'tahong.jpg', 'tinola.jpg', 'togue.jpg'
]

soupArray = [
    'lomi.jpg',
    'miswa.jpg',
    'sopas.jpg'
]

sauceArray = [
    'adobo.jpg','beefsteak.jpg', 'bicolexpress.jpg',
    'burger.jpg', 'giniling.jpg', 'menudo.jpg',
]

friedArray = [
    'chicken.jpg', 'eggs.jpg', 'ham.jpg', 'hotdog.jpg',
    'longganisa.jpg', 'lumpia.jpg', 'patty.jpg', 'siomai.jpg',
    'tortangtalong.jpg',
]

function randomFood(){

     random = Math.floor(Math.random() * gulayArray.length);

     selectGulay = gulayArray[random]
    
     if(selectGulay === gulayArray[0]){
        alert("Ulam for today is GINATAAN");
        }
    else if(selectGulay === gulayArray[1]){
       alert("Ulam for today is GINISANG KANGKONG");
        }
    else if(selectGulay === gulayArray[2]){
       alert("Ulam for today is MONGGO");
        }
    else if(selectGulay === gulayArray[3]){
       alert("Ulam for today is NILAGANG BABOY");
        }
    else if(selectGulay === gulayArray[4]){
       alert("Ulam for today is GINISANG SAYOTE");
        }
    else if(selectGulay === gulayArray[5]){
       alert("Ulam for today is SINIGANG");
        }
    else if(selectGulay === gulayArray[6]){
       alert("Ulam for today is TINOLANG TAHONG");
        }
    else if(selectGulay === gulayArray[7]){
       alert("Ulam for today is TINOLANG MANOK");
        }
 
    else{
       alert("Ulam for today is GINISANG TOGUE");
         }
    document.getElementById('gulay').src = `./Foods/Gulay/${selectGulay}`;

}

function randomFoodSoup(){
    random = Math.floor(Math.random() * soupArray.length);

    selectSoup = soupArray[random]

    if(selectSoup === soupArray[0])
    {
        alert("Ulam for today is LOMI");
    }
    else if(selectSoup === soupArray[1])
    {
        alert("Ulam for today is MISWA");
    }
    else{
        alert("Ulam for today is SOPAS");
    }
    document.getElementById('soup').src = `./Foods/Soup/${selectSoup}`;
}

function randomFoodSauce(){
    random = Math.floor(Math.random() * sauceArray.length);

    selectSauce = sauceArray[random]
    
    if(selectSauce  === sauceArray[0])
    {
        alert("Ulam for today is ADOBO");
    }
    else if(selectSauce  === sauceArray[1])
    {
        alert("Ulam for today is BEEFSTEAK");
    }
    else if(selectSauce  === sauceArray[2])
    {
        alert("Ulam for today is BICOLEXPRESS");
    }
    else if(selectSauce  === sauceArray[3])
    {
        alert("Ulam for today is BURGER STEAK");
    }
    else if(selectSauce  === sauceArray[4])
    {
        alert("Ulam for today is PORK GINILING");
    }
    else{
        alert("Ulam for today is MENUDO");
    }


    document.getElementById('sauce').src = `./Foods/Sauce Food/${selectSauce}`;
}


function randomFoodFried(){
    random = Math.floor(Math.random() * friedArray.length);

    selectFried = friedArray[random]

    if(selectFried === friedArray[0])
    {
        alert("Ulam for today is FRIED CHICKEN");
    }
    else if(selectFried === friedArray[1])
    {
        alert("Ulam for today is FRIED EGG");
    }
    else if(selectFried === friedArray[2])
    {
        alert("Ulam for today is HAM");
    }
    else if(selectFried === friedArray[3])
    {
        alert("Ulam for today is HOTDOG");
    }
    else if(selectFried === friedArray[4])
    {
        alert("Ulam for today is LONGGANISA");
    }
    else if(selectFried === friedArray[5])
    {
        alert("Ulam for today is LUMPIA");
    }
    else if(selectFried === friedArray[6])
    {
        alert("Ulam for today is BURGER PATTY");
    }
    else if(selectFried === friedArray[7])
    {
        alert("Ulam for today is SIOMAI");
    }
    else{
        alert("Ulam for today is TORTANG TALONG");
    }
    document.getElementById('fried').src = `./Foods/Fried/${selectFried}`;
}