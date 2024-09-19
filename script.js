const input = document.getElementById("num-input");
const submit = document.getElementById("submit-button");
const result = document.getElementById("result-text");

let mindedNum = Math.ceil(Math.random()*100);
result.innerHTML = "";
console.log(mindedNum);

let sum  = 0;

const update = () => {

    
    const numValue = input.value;
    sum++;
    console.log(sum);

    if(numValue < 1 || numValue > 100){
        result.innerHTML = "Please enter a valid number between 1 and 100."
        result.removeAttribute("class");
        result.classList.add("error-msg");
    }else if(numValue > mindedNum){
        result.removeAttribute("class");
        result.innerHTML = "Too high! Try a lower number."
    }else if(numValue < mindedNum){
        result.removeAttribute("class");
        result.innerHTML = "Too low! Try a higher number."
    }else{ 
        result.innerHTML = `"Congratulations! You guessed the number in ${sum}  attempts!"`
        result.removeAttribute("class");
        result.classList.add("success");
    }
}



submit.addEventListener("click", update)

