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

function searchText(key) {
    const textNodes = document.getElementsByClassName('keyboard_item');

    for (let i = 0;i < textNodes.length;i++) {
        if (textNodes[i].innerHTML == key) {
            textNodes[i].classList.add('active');
            setTimeout(() => {
                textNodes[i].classList.remove('active');
            }, 300);
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