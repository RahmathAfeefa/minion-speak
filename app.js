var btntranslate = document.querySelector("#btn-tanslate");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}


function errorHandler(error) {
    console.log("error occured", error);
    alert("something is wrong with the server!! try again after sometime")
}



function clickHandler() {


    var inputText = textInput.value; //Taking input


    //calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; //output
        })
        .catch(errorHandler)
}



btntranslate.addEventListener("click", clickHandler);