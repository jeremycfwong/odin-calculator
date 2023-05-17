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
var operatorInput = false
var computed = false
var decimal = false

calValues.addEventListener('click', event =>{
    let buttonAct = event.target
    let buttonText = buttonAct.id; 

    if(buttonAct.className === 'operand'){
        if (operator != ''){
            computeResult()
        }

        operator = buttonText;
        decimal = false;
        operatorInput = true;
    } else if(buttonText === '=') {
        computeResult();
        computed = true;
    } else if(buttonText === 'clear'){
        clearDisplay();
        changeValues();
    } else if (buttonAct.className == 'number') {
        updateVariableAndDisplay(buttonText);
    } else if (buttonText === '.'){
        if (decimal) {
            return;
        }

        updateVariableAndDisplay(buttonText);
        decimal = true
    }
})

function updateVariableAndDisplay(text){
    if (computed){
        value1 = ''
    }

    let replace = shouldReplace();
    firstInput() ? value1 += text : value2 += text;
    updateDisplay(text, replace);
    
    operatorInput = false
    computed = false
}

function computeResult(){
    let result = operate(operator, Number(value1), Number(value2));
    updateDisplay(result, true);
    changeValues(result)
    decimal = false
}

function updateDisplay(unit, replace){
    if(value1 == '') {
        clearDisplay();
        return;
    }

    let displayContent = document.getElementById("display");
    replace ? displayContent.innerText = unit : displayContent.innerText += unit;
}

function clearDisplay() {
    document.getElementById("display").innerText = '-------'
}

function changeValues(result='', symbol=''){
    value1 = result;
    value2 = '';
    operator = symbol;
}

function shouldReplace() {
    return value1 === '' || operatorInput || computed;
}

function firstInput() {
    return operator === '';
}