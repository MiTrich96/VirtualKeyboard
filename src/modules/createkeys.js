import keyweb from './keyweb';

const latKeys = [
    "1","2","3","4","5","6","7","8","9","0",
    "q", "w", "e", "r", "t", "z", "u", "i", "o", "p",
    "a", "s", "d", "f", "g", "h", "j", "k", "l",
    "y", "x", "c", "v", "b", "n", "m", 
    "CapsLock","Enter"," ","Shift"
];
const rusKeys = [
    "1","2","3","4","5","6","7","8","9","0",
    "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з",
    "х", "ъ", "ф", "ы", "в", "а", "п", "р", "о","л","д",
    "ж", "э", "я", "ч", "с", "м", "и","т","ь","б","ю", 
    "CapsLock","Enter"," ","Shift"
];

function createButton(state) {
    let noRegisterKeys;
    if (state.isRussian) {
        noRegisterKeys = rusKeys;
    }
    else {
        noRegisterKeys = latKeys;
    }

    const keys = noRegisterKeys.map(key => {

        if (state.isUpper && key.length === 1) {
             return key.toUpperCase();
        }
        else if (!state.isUpper && key.length === 1){
            return key.toLowerCase();
        }
        return key;
    });

    return keys.map(key => {
        const keyItem = document.createElement('div');
        keyItem.classList.add('keyboard_item');
        keyItem.innerText = key;

        if (key === ' ') {
            keyItem.classList.add('special');
            keyItem.classList.add('Space');

            return keyItem;
        }
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

function createKeyWrap(state) {
    const keyboardWrap = document.createElement('div');
    keyboardWrap.classList.add('keyboard_wrap');
    
    const keysBlock = createButton(state);

    keysBlock.map(block => {
        keyboardWrap.appendChild(block);
    });

    return keyboardWrap;
}

function loadButtons(state = {isUpper: false, isRussian: false}) {
    let keyBoard = document.querySelector('.keyboard_wrap');
    if (keyBoard !== null) {
        keyBoard.parentNode.removeChild(keyBoard);
        keyBoard.removeEventListener('click',keyweb);
    }

    const app = document.querySelector('.app_bottom');

    app.appendChild(createKeyWrap(state));

    keyBoard = document.querySelector('.keyboard_wrap');
    keyBoard.addEventListener('click', keyweb);
}

export default loadButtons;