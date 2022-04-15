var btntranslate = document.querySelector("#btn-tanslate");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");



function ClickEventHandler() {
    outputDiv.innerText = "zagshssjjj " + textInput.value;
}



btntranslate.addEventListener("click", ClickEventHandler);