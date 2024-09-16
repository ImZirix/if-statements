const ageInput = document.getElementById("ageInput");
const btn = document.getElementById("btn");
const h2 = document.getElementById("h2");
let age;

btn.onclick = function() {
    age = ageInput.value;
    age = Number(age);

    if(age >= 100) {
        h2.textContent = `You are too old to enter this site`;
    }
    else if(age == 0) {
        h2.textContent = `Your age cant be 0`;
    }
    else if(age >= 18) {
        h2.textContent = `You are old enough to enter this site`;
    }
    else if(age < 0) {
        h2.textContent = `Your age cant be below 0`;
    }
    else{
        h2.textContent = `You are not old enough u must be 18+`;
    }
}
