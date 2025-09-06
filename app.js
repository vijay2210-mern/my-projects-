let input = document.querySelector("input");
let heading = document.querySelector("h2");

input.addEventListener("input" , ()=> {
    const text = input.value;
    const onlyLetter = text.replace(/[^a-zA-Z]/g,"");
    heading.textContent = onlyLetter;
});