function showName() {
    let yourName = document.getElementById('your-name');
    document.getElementById("result").innerHTML = document.getElementById('your-name').value; 
    document.getElementById("res-name").value = document.getElementById('your-name').value;
}

let sum = () => {
    document.getElementById("calculator__result").value = 
    Number(document.getElementById("calculator__first-num").value) + 
    Number(document.getElementById("calculator__second-num").value);
}

let mult = () => {
    document.getElementById("calculator__result").value = 
    Number(document.getElementById("calculator__first-num").value) *
    Number(document.getElementById("calculator__second-num").value);

}
let division = () => {
    document.getElementById("calculator__result").value = 
    Number(document.getElementById("calculator__first-num").value) /
    Number(document.getElementById("calculator__second-num").value);

};
let subtr = () => {
    document.getElementById("calculator__result").value = 
    Number(document.getElementById("calculator__first-num").value) -
    Number(document.getElementById("calculator__second-num").value);

};

let clearCalc = () => {
    document.getElementById("calculator__result").value = "";
    document.getElementById("calculator__first-num").value = "";
    document.getElementById("calculator__second-num").value = "";  
}

// блок демонстрации смены фонов дивов

function changeBckg( ind ) {
    let colors = [ 'red', 'green', 'blue', 'yellow'];
    let list = document.getElementsByClassName("change-background__block");
    let colorPosNext = ( colors.indexOf(list[ind].style.background) + 1 > 3) ? 0 : colors.indexOf(list[ind].style.background) + 1;
    list[ind].style.background = colors[Number(colorPosNext)];
}


// блок галерея

let galleryItems = document.getElementsByClassName("simple-gallery__item");
console.log(galleryItems);
for( let i = 1; i < galleryItems.length; i++ ) {
    galleryItems[i].style.display = "none";
}

function showNextPicture(n) {
    let galleryItems = document.getElementsByClassName("simple-gallery__item");
    let i = 0;
    for ( ; i < galleryItems.length; i++ ) {
        if ( galleryItems[i].style.display == "none" ) {
            continue;
        }
        let nextInd = i+n;
        switch (nextInd) {
            case -1:
              nextInd = galleryItems.length - 1;
              break;
            case galleryItems.length:
              nextInd = 0;
              break;
            default:
              //
          }
        console.log("next ind " + nextInd);
        galleryItems[i].style.display = "none";
        galleryItems[nextInd].style.display = "";
        break;
    }

}