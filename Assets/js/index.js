import { Sounds } from "./sounds.js";
import { Timer } from "./timer.js";
import { Events } from "./events.js";
import { minutesDisplay, secondsDisplay, plusButton, minusButton } from './elements.js';

const sounds = Sounds();
const timer = Timer({minutesDisplay, secondsDisplay, sounds, plusButton, minusButton})
const events = Events({sounds, timer})
