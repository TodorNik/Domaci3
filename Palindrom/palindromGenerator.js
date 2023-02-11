function genPallen(n) {
  const container = document.getElementById("container");
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  for (let slot = 0; slot < n; slot++) {
    let div = document.createElement("DIV");
    div.id = slot;
    div.classList.add("slot");
    div.style.border = "1px solid black";
    div.style.backgroundColor = "#e9e9e9";
    div.style.width = "50px";
    div.style.height = "50px";
    let input = document.createElement("input");
    input.type = "text";
    input.maxLength = "1";
    input.addEventListener("input", handleInput);
    div.appendChild(input);
    container.appendChild(div);
  }
}

function handleInput(e) {
  let letter = e.target.value;
  let message = document.getElementById("message");
  let pattern = /[A-Za-z ]/g;
  if (!letter.match(pattern)) {
    message.innerText = "Please enter a valid input";
  } else {
    let container = document.getElementById("container");
    let currString = "";
    container.childNodes.forEach((child) => {
      let char = child.firstChild.value;
      console.log("Char", char);
      currString = currString.concat(char);
    });
    console.log("Currstr", currString);
    if (currString.length % 2 === 0) {
      console.log("even");
      let firstHalf = currString.substring(0, currString.length / 2);
      console.log("FirstHalf: ", firstHalf);
      let secondHalf = currString
        .substring(currString.length / 2)
        .split("")
        .reverse()
        .join("");
      console.log("Second Ha;f: ", secondHalf);

      if (firstHalf === secondHalf) {
        message.innerText = "It's a palindrom";
      } else {
        message.innerText = "Not a palindrom";
      }
    } else {
      console.log("odd");
      let firstHalf = currString.substring(
        0,
        Math.floor(currString.length / 2)
      );
      console.log("FirstHalf: ", firstHalf);

      let secondHalf = currString
        .substring(Math.ceil(currString.length / 2))
        .split("")
        .reverse()
        .join("");
      console.log("SecondHalf: ", secondHalf);

      if (firstHalf === secondHalf) {
        message.innerText = "It's a palindrom";
      } else {
        message.innerText = "Not a palindrom";
      }
    }
  }
}

function handlePallen(e) {
  e.preventDefault();
  genPallen(e.target.value);
}
