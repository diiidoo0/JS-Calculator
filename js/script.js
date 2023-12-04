//  Global Variables
let expressionArray, expression;

//  Helper function(s)
let initializeExpressionVariables = () => {
    expressionArray = [];
    expression = '';
}

let grabValueAndParseToFloat = (value) => {
    expressionArray.push(parseFloat(value));
}

//  Handle JS floating point bug
function precisionRound(n, precision) {
    let factor = Math.pow(10, precision);
    return Math.round(n * factor) / factor;
}

function init() {
    let textBox = document.getElementById("textbox");
    let table = document.getElementById("calcu");
    
    //  Helper function(s)
    let clrScreen = () => {
        textBox.value = '';
    }

    initializeExpressionVariables();

    table.addEventListener("click", (e) => {
        let buttonProperties = {
            'name': e.target.className,
            'id': e.target.id
        }

        //  Handling input
        if(buttonProperties.name === 'button') {
            textBox.value += e.target.innerText;
        }

        //  Operations
        if(buttonProperties.name === 'buttonOp') {
            if(buttonProperties.id === 'clr')
                clrScreen();

            if(buttonProperties.id === 'operation') {
                grabValueAndParseToFloat(textBox.value);
                expressionArray.push(e.target.innerText);
                clrScreen();
            }

            if(buttonProperties.id === 'equal') {
                grabValueAndParseToFloat(textBox.value);
                expression = expressionArray.join('');

                textBox.value = precisionRound(parseFloat(math.evaluate(expression)), 2);
                initializeExpressionVariables();
            }

            if(buttonProperties.id === 'decimal') {
                textBox.value += '.';
            }
        }
    }, false);
}

window.addEventListener("load", init);