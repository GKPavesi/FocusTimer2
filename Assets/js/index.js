import { Sounds } from "./sounds.js";
import { Timer } from "./timer.js";
import { Events } from "./events.js";
import { minutesDisplay, secondsDisplay } from './elements.js';

const sounds = Sounds();
const timer = Timer({minutesDisplay, secondsDisplay, sounds})
const events = Events({sounds, timer})
