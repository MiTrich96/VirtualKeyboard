import './styles/styles.css';
import loadButtons from './modules/createkeys'
import keynote from './modules/keynote';

loadButtons();

const textArea = document.querySelector('.output_area');

textArea.addEventListener('keydown', keynote);
