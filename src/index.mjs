const textInput = document.querySelector("#textInput");
const textButton = document.querySelector(".textButton");
const textBox = document.querySelector (".textBox");

function textToHtml(text){
  textBox.innerHTML = text;

  }

textButton.addEventListener("click",e =>{
    console.log(textInput.value);

    const textValue = textInput.value;

    textToHtml(textValue);
  });