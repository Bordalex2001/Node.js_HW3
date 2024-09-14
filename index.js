import chalk from "chalk";
import { log } from "node:console";
import EventEmitter from "node:events";

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

/*class Dice extends EventEmitter {
    roll() {
        const result = Math.floor(Math.random() * 6) + 1;

        this.emit('rolled', result);
    }
}

const dice = new Dice();

dice.on('rolled', (result) => {
    log(`Dice rolled: ${result}🎲`);
});

log('The dice is rolling...');
dice.roll();*/

class Logger extends EventEmitter {
    log(message) {
        this.emit('log', `[LOG] ${message}`);
    }

    warning(message) {
        this.emit('warning', chalk.yellow(`[WARNING] ${message}`));
    }

    error(message) {
        this.emit('error', chalk.red(`[ERROR] ${message}`));
    }
}

const logger = new Logger();

logger.on('log', (message) => {
    console.log(`Subsciber1 received: \n${message}`);
});

logger.on('warning', (message) => {
    console.warn(`Subsciber2 received: \n${message}`);
});

logger.on('error', (message) => {
    console.error(`Subsciber3 received: \n${message}`);
});

logger.log('This is a standard log message.');
logger.warning('This is a warning message.');
logger.error('This is an error message.');