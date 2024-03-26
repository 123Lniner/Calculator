// Console Logger
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

// These "specialChars" are the operator keys.
const specialChars = ["%", "/", "*", "-", "+", "="];

// This constant defines a function based on which button is clicked
const calculate = (btnValue) => {
    if(btnValue === "=" && btnValue !== ""){
        // If 'output' has '%', replace '%' with '/100' before calculating.
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC"){
        output = "";
    } else if (btnValue === "DEL"){
        // If 'DEL' button is clicked, the calculator removes the last character from 'output'.
        output = output.toString().slice(0, -1);
    } else {
        //If 'output' is empty and button pressed is part of 'specialChars' then calculator won't record character
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};

// Event listener for buttons calls calculate() on click + dataset values as argument.
buttons.forEach((button) => {
    button.addEventListener("click", (e) => console.log(e.target.dataset.value));
});