let submitButton = document.querySelector('.main-button');


submitButton.addEventListener("click", async () => {
    let fontVal = document.querySelector('.font-field').value;
    let sizeVal = document.querySelector('.size-field').value;
    let colorVal = document.querySelector('.color-field').value;

    userInput = [fontVal, sizeVal, colorVal];


    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true});
    console.log(tab.id);

    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: updateCSS,
        args: [userInput]
    });

});


    
function updateCSS(inputArr){
    // grab all divs and update values
    let newDiv = Array.from(document.getElementsByTagName('div'));
    newDiv.forEach(ele => {
        ele.style.fontFamily = inputArr[0];
        ele.style.fontSize = inputArr[1]+'px';
        ele.style.color = inputArr[2];
    });
}
