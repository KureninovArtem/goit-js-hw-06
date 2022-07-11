let counterValue = 0;

const value = document.querySelector("#value");

const incrementButton = document.querySelector('button[data-action="increment"]');
incrementButton.addEventListener("click", () => {
    counterValue += 1;
    value.innerHTML = counterValue;
});

const decrementButton = document.querySelector('button[data-action="decrement"]');
decrementButton.addEventListener("click", () => {
    counterValue -= 1;
    value.innerHTML = counterValue;
});
