import searchText from "./animate"

function specialKeyPressed(key) {
    const textArea = document.querySelector('.output_area');

    switch (key) {
        case 'Backspace': {
            if (textArea.textContent.length) { 
                let text = textArea.textContent.slice(0,textArea.textContent.length-1);
                textArea.textContent = text;
            }
            break;
        }
        case 'Enter': {
            textArea.textContent += '\n';
            break;
        }
        case 'Space': {
            textArea.textContent += ' ';
            break;
        }
    } 

}

function writeByKeyboard(event) {
    event.preventDefault();
    const textArea = document.querySelector('.output_area');
    
    const specialKeys = ['Alt','Shift','Control','Enter','Backspace','Space'];
    if (specialKeys.indexOf(event.key) === -1) {
        textArea.textContent += event.key;
        searchText(event.key);
    }
    else {
        specialKeyPressed(event.key);
        searchText(event.key);
    }
}

export default writeByKeyboard;