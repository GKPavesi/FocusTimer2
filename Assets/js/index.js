import { Sounds } from "./sounds.js";
import { Timer } from "./timer.js";
import { Events } from "./events.js";
import { minutesDisplay, secondsDisplay, isCountDownInactive } from './elements.js';

const sounds = Sounds();
const timer = Timer({minutesDisplay, secondsDisplay, isCountDownInactive})
const events = Events({sounds, timer, isCountDownInactive})
