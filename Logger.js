import chalk from "chalk";

export default class Logger{
    #_emitter;
    constructor(emitter){
        this.#_emitter = emitter;
        this.#_emitter.on('log', (message) => {
            console.log(`You received: \n${message}`);
        });
        
        this.#_emitter.on('warning', (message) => {
            console.warn(`You received: \n${message}`);
        });
        
        this.#_emitter.on('error', (message) => {
            console.error(`You received: \n${message}`);
        });
    }
    
    log(message) {
        this.#_emitter.emit('log', `[LOG] ${message}`);
    }

    warning(message) {
        this.#_emitter.emit('warning', chalk.yellow(`[WARNING] ${message}`));
    }

    error(message) {
        this.#_emitter.emit('error', chalk.red(`[ERROR] ${message}`));
    }
}