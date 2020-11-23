import keyweb from './keyweb';

const latKeys = [
    "q", "w", "e", "r", "t", "z", "u", "i", "o", "p",
    "a", "s", "d", "f", "g", "h", "j", "k", "l",
    "y", "x", "c", "v", "b", "n", "m", 
    "shift","back","enter","space","language","shift"
];
const rusKeys = [
    "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з",
    "х", "ъ", "ф", "ы", "в", "а", "п", "р", "о","л","д",
    "ж", "э", "я", "ч", "с", "м", "и","т","ь","б","ю", 
    "shift","back","enter","space","language","shift"
];

function createButton(keys) {
    return keys.map(key => {
        const keyItem = document.createElement('div');
        keyItem.classList.add('keyboard_item');
        keyItem.innerText = key;

        if (key.length === 1) {
            return keyItem;
        }
        else {
            keyItem.classList.add('special');
            keyItem.classList.add(key);

            return keyItem;
        }
    });
}

function createKeyWrap(keys) {
    const keyboardWrap = document.createElement('div');
    keyboardWrap.classList.add('keyboard_wrap');
    
    const keysBlock = createButton(keys);

    keysBlock.map(block => {
        keyboardWrap.appendChild(block);
    });

    return keyboardWrap;
}

function loadButtons(currentLanguage) {
    let keyBoard = document.querySelector('.keyboard_wrap');
    if (keyBoard !== null) {
        keyBoard.parentNode.removeChild(keyBoard);
        keyBoard.removeEventListener('click',keyweb);
    }

    const app = document.querySelector('.app_bottom');

    if (currentLanguage === "rus") {
        app.appendChild(createKeyWrap(rusKeys));
    }
    else {
        app.appendChild(createKeyWrap(latKeys));
    }
    keyBoard = document.querySelector('.keyboard_wrap');
    keyBoard.addEventListener('click', keyweb);
}

export default loadButtons;