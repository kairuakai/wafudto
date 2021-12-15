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
        // alert("Ulam for today is GINATAAN");
        Swal.fire(
            'Ulam for today is \n GINATAAN',
            '',
            'success'
          )
        }
    else if(selectGulay === gulayArray[1]){
    //    alert("Ulam for today is GINISANG KANGKONG");
        Swal.fire(
          
            'Ulam for today is \n GINISANG KANGKONG',
            '',   
            'success'
        )
    
        }
    else if(selectGulay === gulayArray[2]){
    //    alert("Ulam for today is MONGGO");
        Swal.fire(
            'Ulam for today is \n MONGGO',
            '',
            'success'
        )
        }
    else if(selectGulay === gulayArray[3]){
    //    alert("Ulam for today is NILAGANG BABOY");
        Swal.fire(
            'Ulam for today is \n NILAGANG BABOY',
            '',
            'success'
        )
        }
    else if(selectGulay === gulayArray[4]){
    //    alert("Ulam for today is GINISANG SAYOTE");
        Swal.fire(
            'Ulam for today is \n GINISANG SAYOTE',
            '',
            'success'
        )
        }
    else if(selectGulay === gulayArray[5]){
    //    alert("Ulam for today is SINIGANG");
        Swal.fire(
            'Ulam for today is \n SINIGANG',
            '',
            'success'
        )
        }
    else if(selectGulay === gulayArray[6]){
    //    alert("Ulam for today is TINOLANG TAHONG");
        Swal.fire(
            'Ulam for today is \n TINOLANG TAHONG',
            '',
            'success'
        )
        }
    else if(selectGulay === gulayArray[7]){
    //    alert("Ulam for today is TINOLANG MANOK");
        Swal.fire(
            'Ulam for today is \n TINOLANG MANOK',
            '',
            'success'
        )
        }
 
    else{
    //    alert("Ulam for today is GINISANG TOGUE");
        Swal.fire(
            'Ulam for today is \n GINISANG TOGUE',
            '',
            'success'
        )
         }
    document.getElementById('gulay').src = `./Foods/Gulay/${selectGulay}`;

}

function randomFoodSoup(){
    random = Math.floor(Math.random() * soupArray.length);

    selectSoup = soupArray[random]

    if(selectSoup === soupArray[0])
    {
        // alert("Ulam for today is LOMI");
        Swal.fire(
            'Ulam for today is \n LOMI',
            '',
            'success'
        )
    }
    else if(selectSoup === soupArray[1])
    {
        // alert("Ulam for today is MISWA");
        Swal.fire(
            'Ulam for today is \n MISWA',
            '',
            'success'
        )
    }
    else{
        // alert("Ulam for today is SOPAS");
        Swal.fire(
            'Ulam for today is \n SOPAS',
            '',
            'success'
        )
    }
    document.getElementById('soup').src = `./Foods/Soup/${selectSoup}`;
}

function randomFoodSauce(){
    random = Math.floor(Math.random() * sauceArray.length);

    selectSauce = sauceArray[random]
    
    if(selectSauce  === sauceArray[0])
    {
        // alert("Ulam for today is ADOBO");
        Swal.fire(
            'Ulam for today is \n ADOBO',
            '',
            'success'
        )
    }
    else if(selectSauce  === sauceArray[1])
    {
        // alert("Ulam for today is BEEFSTEAK");
        Swal.fire(
            'Ulam for today is \n BEEFSTEAK',
            '',
            'success'
        )
    }
    else if(selectSauce  === sauceArray[2])
    {
        // alert("Ulam for today is BICOLEXPRESS");
        Swal.fire(
            'Ulam for today is \n BICOL EXPRESS',
            '',
            'success'
        )
    }
    else if(selectSauce  === sauceArray[3])
    {
        // alert("Ulam for today is BURGER STEAK");
        Swal.fire(
            'Ulam for today is \n BURGER STEAK',
            '',
            'success'
        )
    }
    else if(selectSauce  === sauceArray[4])
    {
        // alert("Ulam for today is PORK GINILING");
        Swal.fire(
            'Ulam for today is \n PORK GINILING',
            '',
            'success'
        )
    }
    else{
        // alert("Ulam for today is MENUDO");
        Swal.fire(
            'Ulam for today is \n MENUDO',
            '',
            'success'
        )
    }


    document.getElementById('sauce').src = `./Foods/Sauce Food/${selectSauce}`;
}


function randomFoodFried(){
    random = Math.floor(Math.random() * friedArray.length);

    selectFried = friedArray[random]

    if(selectFried === friedArray[0])
    {
        // alert("Ulam for today is FRIED CHICKEN");
        Swal.fire(
            'Ulam for today is \n FRIED CHICKEN',
            '',
            'success'
        )
    }
    else if(selectFried === friedArray[1])
    {
        // alert("Ulam for today is FRIED EGG");
        Swal.fire(
            'Ulam for today is \n FRIED EGG',
            '',
            'success'
        )
    }
    else if(selectFried === friedArray[2])
    {
        // alert("Ulam for today is HAM");
        Swal.fire(
            'Ulam for today is \n HAM',
            '',
            'success'
        )
    }
    else if(selectFried === friedArray[3])
    {
        // alert("Ulam for today is HOTDOG");
        Swal.fire(
            'Ulam for today is \n HOTDOG',
            '',
            'success'
        )
    }
    else if(selectFried === friedArray[4])
    {
        // alert("Ulam for today is LONGGANISA");
        Swal.fire(
            'Ulam for today is \n LONGGANISA',
            '',
            'success'
        )
    }
    else if(selectFried === friedArray[5])
    {
        // alert("Ulam for today is LUMPIA");
        Swal.fire(
            'Ulam for today is \n LUMPIA',
            '',
            'success'
        )
    }
    else if(selectFried === friedArray[6])
    {
        // alert("Ulam for today is BURGER PATTY");
        Swal.fire(
            'Ulam for today is \n BURGER PATTY',
            '',
            'success'
        )
    }
    else if(selectFried === friedArray[7])
    {
        // alert("Ulam for today is SIOMAI");
        Swal.fire(
            'Ulam for today is \n SIOMAI',
            '',
            'success'
        )
    }
    else{
        // alert("Ulam for today is TORTANG TALONG");
        Swal.fire(
            'Ulam for today is \n TORTANG TALONG',
            '',
            'success'
        )
    }
    document.getElementById('fried').src = `./Foods/Fried/${selectFried}`;
}