// any line prefixed with two slashes indicates a comment, they are not counted as code
const display = document.getElementById("display")
function hiDisplay(input){
    // this is the function that makes numbers appear on the display
    display.value += input;
}
function calcTime(){
    // this is the function that solves whatever expression you put on the display
    display.value = eval(display.value);
}
function byeDisplay(){
    // this is the function that clears the display of anything
    display.value = "";
}