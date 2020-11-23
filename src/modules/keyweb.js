import animateKey from './animate';
import inputKey from './cursor';
import specialKeyPressed from './special';

function writeByScreen(event) {
    let target = event.target;

    if (target.classList.contains('keyboard_item') && !target.classList.contains('special')) {
        animateKey(target.innerText);
        inputKey(event.target.innerText);
    }
    else if (target.classList.contains('special')) {
        specialKeyPressed(event, "click");
    }
}

export default writeByScreen;