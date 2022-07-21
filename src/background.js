// ** EXTENSION GUI ** //
// Extension drop-down menu
    // On extension-icon click -> drop-down menu
        // Font-size -> values will be stored in some object 
        // Font-family -> values will be stored in some object

        
// ** FUNCTIONALITY ** //
// OPTION 2: Grab literally every element and update its .style.font property
function changeSize(tag, propVal) {
    const tagName = Array.from(
        document.getElementsByTagName(tag)
    );
     tagName.forEach(tag => {
        tag.style.fontSize = propVal;
    })
} 

function changeColor(tag, propVal) {
    const tagName = Array.from(
        document.getElementsByTagName(tag)
    );
     tagName.forEach(tag => {
        tag.style.color = propVal;
    })
} 

function changeFont(tag, propVal) {
    const tagName = Array.from(
        document.getElementsByTagName(tag)
    );
     tagName.forEach(tag => {
        tag.style.fontfamily = propVal;
    })
} 

// changeSize('div','small');
// changeColor('p', 'red')