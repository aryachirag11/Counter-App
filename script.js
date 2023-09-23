//get the elment having the couunt
let countValue = document.querySelector("#count");

const increment = () => {
  // get the value from the element
  let value = parseInt(countValue.innerText);

  // increment the value
  value += 1;

  //insert the updated value into the element
  countValue.innerText = value;
};

const decrement = () => {
  // get the value from the element
  let value = parseInt(countValue.innerText);

  // increment the value
  value -= 1;

  //insert the updated value into the element
  countValue.innerText = value;
};
