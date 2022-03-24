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
