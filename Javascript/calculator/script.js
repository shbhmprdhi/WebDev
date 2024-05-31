const displayBox = document.querySelector('.displayBox')

function getToDisplay(inputValue){
    displayBox.value += inputValue;
}

function getResult(){
    try{
        displayBox.value = eval(displayBox.value);
    }
    catch{
        displayBox.value = 'error';
    }
}

function clear(){
    displayBox.value = "";
}

function del(){
    displayBox.value = displayBox.value.slice(0, -1)
}