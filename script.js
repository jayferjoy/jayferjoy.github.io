let add = document.querySelector("#add");



add.addEventListener("click", function () {
    let output = document.querySelector("#output");
    let result = Number(output.innerText) + 1;
    if (result > 10) {
        result = 0;
      }
    
  
    output.innerText = result;
});

subract.addEventListener("click", function () {
    let output = document.querySelector("#output");
    let result = Number(output.innerText) - 1;
  
    if (result < 0) {
      result = 0;
    }
  
    output.innerText = result;
  });
  
  
let subract = document.querySelector("#subtract");

console.log(add, subract);