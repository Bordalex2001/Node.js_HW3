import { log } from "node:console";
import EventEmitter from "node:events";
import Dice from "./Dice.js";
import Logger from "./Logger.js";

/*const emitter1 = new EventEmitter();

emitter1.on('click', () => {
    log('Handler 1: Button clicked!');
});

emitter1.on('click', () => {
    log('Handler 2: Click event received!');
});

emitter1.on('click', () => {
    log('Handler 3: Another click handler!');
});

console.log('Emitting \'click\' event...');
emitter1.emit('click');*/

/*const emitter2 = new EventEmitter();

const listener1 = () => {
    log("Error event listener1");
}
emitter2.on("error", listener1);

const listener2 = () => {
    log("Error event listener2");
}
emitter2.on("error", listener2);

const listener3 = () => {
    log("Error event listener3");
}
emitter2.on("error", listener3);

emitter2.emit("error");
log("=====================");
emitter2.removeListener("error", listener2);
emitter2.emit("error");*/

/*const emitter3 = new EventEmitter();
const dice = new Dice(emitter3);

emitter3.once('rolled', () => {
    log();
});

log('The dice is rolling...');
dice.roll();*/

const emitter4 = new EventEmitter();
const logger = new Logger(emitter4);

logger.log('This is a standard log message.');
logger.warning('This is a warning message.');
logger.error('This is an error message.');