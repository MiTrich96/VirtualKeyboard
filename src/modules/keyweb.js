import loadButtons from './createkeys';
import searchText from './animate';

let isUpper = false;
let isRussian = false;
let textArea = document.querySelector('.output_area');

function changeLanguage() {
    if (isRussian) {
        loadButtons("rus");
    }
    else {
        loadButtons("eng");
    }
}

function keyScreenPressed(event) {
    let target = event.target;

    let text = isUpper ? target.innerText.toUpperCase() : target.innerText.toLowerCase();
    textArea.textContent += text;
}

function specialKeyPressed(event) {
    const specialKeys = ['back', 'shift','space','enter','language'];
    let key = specialKeys.reduce((key, nameKey) => {
        if (event.target.classList.contains(nameKey)) {
            key = nameKey;
        }
        return key;
    },'');

    switch (key) {
        case 'back': {
            if (textArea.textContent.length) { 
                let text = textArea.textContent.slice(0,textArea.textContent.length-1);
                textArea.textContent = text;
            }
            break;
        }
        case 'enter': {
            textArea.textContent += '\n';
            break;
        }
        case 'space': {
            textArea.textContent += ' ';
            break;
        }
        case 'shift': {
            isUpper = !isUpper;
            const shiftBlock = document.getElementsByClassName('shift');
            shiftBlock[0].classList.toggle('shift_clicked');
            shiftBlock[1].classList.toggle('shift_clicked');
            break;
        }
        case 'language': {
            isRussian = !isRussian;
            changeLanguage();
        }
    } 

}

function writeByScreen(event) {
    let target = event.target;

    if (target.classList.contains('keyboard_item') && !target.classList.contains('special')) {
        searchText(target.innerText);
        keyScreenPressed(event);
    }
    else if (target.classList.contains('special')) {
        searchText(target.innerText);
        specialKeyPressed(event);
    }
}

export default writeByScreen;