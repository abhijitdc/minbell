export class Timer {
    constructor(duration, interval) {
        this.duration = duration;
        this.remainingTime = duration * 60;
        this.interval = interval;
        this.isRunning = false;
        this.tickHandlers = [];
        this.intervalHandlers = [];
        this.doneHandlers = [];
    }

    start() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.timerId = setInterval(() => {
            this.remainingTime--;
            this.tickHandlers.forEach(handler => handler(this.remainingTime));

            if (this.remainingTime > 0 && this.remainingTime % (this.interval * 60) === 0) {
                this.intervalHandlers.forEach(handler => handler());
            }

            if (this.remainingTime <= 0) {
                this.stop();
                this.doneHandlers.forEach(handler => handler());
            }
        }, 1000);
    }

    stop() {
        if (!this.isRunning) return;
        this.isRunning = false;
        clearInterval(this.timerId);
    }

    onTick(handler) {
        this.tickHandlers.push(handler);
    }

    onInterval(handler) {
        this.intervalHandlers.push(handler);
    }

    onDone(handler) {
        this.doneHandlers.push(handler);
    }
}