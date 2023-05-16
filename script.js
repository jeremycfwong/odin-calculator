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
var value1 = ''
var value2 = ''
var operator = ''
//var decimal = false

calValues.addEventListener('click', event =>{
    let button_act = event.target
    let buttonText = button_act.id;
    if(button_act.className === 'operand'){
        operator = buttonText;
    } else if(buttonText === '=') {
        let result = operate(operator, Number(value1), Number(value2));
        updateDisplay(result, true);
        clearValues();
        return;
    } else if(buttonText === 'clear'){
        clearDisplay();
        clearValues();
        return;
    } else {
        firstInputChain() ? value1 += buttonText : value2 += buttonText;
    }
    replaceDisplay = firstInput() ? true : false;
    updateDisplay(buttonText, replaceDisplay);
})

/*calValues.addEventListener('click', event =>{
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
                    chain = true
                    decimal = false;
                }
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                if(isNaN(value1)){
                    operator = event.target.id
                    value1 = fetchValue()
                    decimal = false;
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
                if (document.getElementById("display").innerText == "ERROR"){
                    break;
                }

                if (chain){
                    clearDisplay()
                    chain = false
                } 
                
                if (event.target.id == '.'){
                    if (!decimal){
                        updateDisplay(event.target.id);
                        decimal = true
                    } 
                    break;
                }
            
                updateDisplay(event.target.id)
                break;
        }
    }
})*/


function updateDisplay(unit, replace){
    if(value1 == '') {
        clearDisplay();
        return;
    }

    let displayContent = document.getElementById("display");
    replace ? displayContent.innerHTML = unit : displayContent.innerHTML += unit;
}

function clearDisplay() {
    document.getElementById("display").innerText = '-------'
}

function fetchValue(){
    var result = Number(document.getElementById("display").innerText)
    clearDisplay()
    return result
}

function clearValues(){
    value1 = '';
    value2 = '';
    operator = '';
}

function firstInput() {
    return firstInputChain && value1.length == 1;
}

function firstInputChain() {
    return isEmpty(operator);
}

function isEmpty(target) {
    return target === '';
}