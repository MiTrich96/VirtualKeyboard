function animateKey(key) {
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

export default animateKey;