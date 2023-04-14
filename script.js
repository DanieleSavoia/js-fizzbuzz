const eleGrid = document.querySelector('.grid');
const eleDiv15 = document.querySelector('.div15');
const eleDiv3 = document.querySelector('.div3');
const eleDiv5 = document.querySelector('.div5');



const num = 100;

for(let i = 1; i <= num; i++) 
{
    if (i % 15 == 0){
        eleGrid.innerHTML = eleGrid.innerHTML + `div class="cell div15">FizzBuzz</div>`;
        console.log("FizzBuzz");
    }else if (i % 3 == 0){
        eleGrid.innerHTML = eleGrid.innerHTML + `div class="cell div3">Fizz</div>`;
        console.log("Fizz");
    }else if (i % 5 == 0){
        eleGrid.innerHTML = eleGrid.innerHTML + `div class="cell div5">Buzz</div>`;
        console.log("Buzz");
    }
    else {
        console.log(i);
        eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">${i}</div>`;
    }
    
}

