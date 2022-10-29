function add(v1, v2){
    return v1 + v2;
}

function subtract(v1, v2){
    return v1 - v2;
}

function multiply(v1, v2){
    return v1 * v2;
}

function divide(v1, v2){
    return v1 / v2;
}

function operate(oper, v1, v2){
    return oper(v1, v2);
}

var calValues = document.querySelector("#values")

calValues.addEventListener('click', event =>{
    if (event.target.tagName === 'BUTTON'){
        if (event.target.id == 'clear'){
            clearDisplay()
        } else if (event.target.id != "="){
            updateDisplay(event.target.id)
        }  
    }
})


function updateDisplay(unit){
    var number = document.getElementById("display").innerText
    
    if (number != '-------'){
        unit = number + unit
    }

    
    document.getElementById("display").innerText = unit
}

function clearDisplay() {
    document.getElementById("display").innerText = '-------'
}