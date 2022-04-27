const displayElement = document.querySelector("#display");

let counter = 0;

function updateDisplay(){
   
const displayValue = addPaddingFourDigit(counter);
const displayValueInArray = displayValue.split("");
[...displayElement.children].forEach(function(box, index)  {
    box.innerText = displayValueInArray[index];
})
}
updateDisplay();

function increment(){
    if(counter < 9999){
        counter++;
        updateDisplay();
    }

   
}

function decrement() {
    if(counter > 0000){
        counter--;
        updateDisplay();
    }
   
}

function reset() {
    counter = 0;
    updateDisplay();
}

function addPaddingFourDigit(value) {
    const numberToString = value.toString();
    if(numberToString.length === 1){
        return "000" + value;
    }
    else if (numberToString.length === 2){
        return "00" + value;
    }
    else if(numberToString.length === 3){
         return "0" + value;
        
    } else {
        return value;
    }

}
