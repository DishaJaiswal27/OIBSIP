
let fromInput = document.getElementById("from");
let toInput = document.getElementById("to");
let enterData = document.getElementById("num");
 

function case1(convertFrom,convertTo,data){
    let flag = false;
    if(convertFrom == convertTo ){
        alert("⚠️ BOTH UNITS ARE SAME ‼")
       flag = true;
    }
    if(data == ""){
        alert(" ⚠️ ENTER DATA ‼");
        flag = true;
    }
    return flag;
}

function roundoff(value){
    value = Math.round((value*100))/100;
    return value;
}

function renderMsg(value){
    let element = document.getElementById("my-para");
    element.innerHTML = value;
}

function converter(convertFrom,convertTo,data){
    if(convertFrom == "celcius"){
        if(convertTo == "kelvin"){
            output = data + 273.15;
        }
        else{
            output = (data * (9/5))+32;
        }
    }
    else if(convertFrom == "kelvin"){
        if(convertTo == "celcius"){
            output = data - 273.15;
        }
        else{
            output = 1.8*(data - 273) + 32;
        }
    }
    else{
        if(convertTo == "kelvin"){
            output = (data + 459.67) *(5/9);
        }
        else{
            output = (data - 32) *(5/9);
        }
    }

    output = roundoff(output);
    renderMsg(output);
}

function fun(){

    let convertFrom = fromInput.options[fromInput.selectedIndex].value;
    let convertTo = toInput.options[toInput.selectedIndex].value;
    let data = enterData.value;

   
    let output ;
    if(case1(convertFrom , convertTo , data)){
        //return true if any input field is empty.
    }
    else{
        data = parseFloat(data);
        converter(convertFrom,convertTo,data);
    } 
}