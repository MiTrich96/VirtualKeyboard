import animateKey from "./animate";
import inputKey from './cursor';
import specialKeyPressed from './special';

const specialKeys = ['Backspace', 'CapsLock','Space','Enter','Shift'];

function writeByKeyboard(event) {
    event.preventDefault();
    
    if (specialKeys.indexOf(event.key) === -1) {
        inputKey(event.key);
        animateKey(event.key);
    }
    else {
        specialKeyPressed(event, "press");
    }
}

export default writeByKeyboard;