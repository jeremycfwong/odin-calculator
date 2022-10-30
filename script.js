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
    if(v2 == 0){
        return 'ERROR'
    }
    return Math.round(v1 / v2 *10000) / 10000;
}

function operate(operator, v1, v2){
    switch (operator){
        case '+':
            return add(v1,v2);
        case '-':
            return subtract(v1,v2);
        case '*':
            return multiply(v1,v2);
        case '/':
            return divide(v1,v2);
    }
}

var calValues = document.querySelector("#values")
var value1 = NaN
var operator = ''
var chain = false

calValues.addEventListener('click', event =>{
    if (event.target.tagName === 'BUTTON'){
        switch (event.target.id){
            case 'clear':
                clearDisplay();
                value1 = NaN

                break;
            case '=':
                if(operator != '' && !isNaN(value1)){
                    value1 = operate(operator, value1,fetchValue())
                    document.getElementById("display").innerText = value1
                    operator = ''
                }
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                if(isNaN(value1)){
                    operator = event.target.id
                    value1 = fetchValue() 
                } else if (operator != '' && !isNaN(value1)){
                    value1 = operate(operator, value1,fetchValue())
                    document.getElementById("display").innerText = value1
                    operator = event.target.id
                    chain = true
                    break;
                } else {
                    operator = event.target.id
                }
                break;
            default:
                if (chain){
                    clearDisplay()
                    chain = false
                } else if (document.getElementById("display").innerText == "ERROR"){
                    break;
                }
                updateDisplay(event.target.id)
                break;
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

function fetchValue(){
    var result = Number(document.getElementById("display").innerText)
    clearDisplay()
    return result
}
