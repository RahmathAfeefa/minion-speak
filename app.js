var btntranslate = document.querySelector("#btn-tanslate");
var textInput = document.querySelector("#txt-input")

function ClickEventHandler() {
    console.log("Clicked!!");
    console.log("input", textInput.value);
}



btntranslate.addEventListener("click", ClickEventHandler);