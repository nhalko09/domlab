/*-------------------------------- Constants --------------------------------*/

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');


/*-------------------------------- Variables --------------------------------*/

let firstNumber = "";
let secondNumber = "";
let operator = "";

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        let value = event.target.innerText;

        //добавила івент і тепер коли клікають на цифру воно має тригерити цей івент
        // визначила цифри 
        if (value >= "0" && value <= "9") {
            if (operator === "") {
                firstNumber += value; 
                display.innerText = firstNumber; 
            } else {
                secondNumber += value;  
                display.innerText = firstNumber + " " + operator + " " + secondNumber;  // добавляння та оновлення дисплею з сумою залежно від рівняння
            }
        }

        // через оператор той самий який є значенням показуємо математичну дію, та що вона робитиме, як працюватиме
        if (value === "+" || value === "-" || value === "*" || value === "/") {
            operator = value;  
            display.innerText = firstNumber + " " + operator;  
          }
          

          if (value === "=") {
            if (firstNumber !== "" && secondNumber !== "" && operator !== "") {
              let result = 0;  // за допомогою цієі частини коду зазначаємо чи правильний чи ні результат та запевнюємось що рівння відбудеться
          
              if (operator === "+") {
                result = +firstNumber + +secondNumber;  // використала унарний плюс для перетворення в число мого значення номерів, спитати в Саші в яких випадках ще можна йогоо використовувати
              } else if (operator === "-") {
                result = +firstNumber - +secondNumber;
              } else if (operator === "*") {
                result = +firstNumber * +secondNumber;
              } else if (operator === "/") {
                result = +firstNumber / +secondNumber;
              }
          
              display.innerText = result;  // цим ми виводимо скільки дорівнює рівння 
              firstNumber = result.toString(); 
              secondNumber = "";  
              operator = "";  
            }
          }
          
// щоб звести все до нуля як тільки рівняння вирішено нажимаємо с так воно видалиті всі змінні та виведе в 0
          if (value === "C") {
            firstNumber = "";  
            secondNumber = "";  
            operator = "";  
            display.innerText = "0";  
          }
          
        /*-------------------------------- Functions --------------------------------*/
