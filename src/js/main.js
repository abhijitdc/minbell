import { Timer } from './timer.js';

const durationInput = document.getElementById('duration');
const intervalSelect = document.getElementById('interval');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const timeDisplay = document.getElementById('time');
const intervalCanvas = document.getElementById('intervalProgress');
const overallCanvas = document.getElementById('overallProgress');
const intervalCtx = intervalCanvas.getContext('2d');
const overallCtx = overallCanvas.getContext('2d');

let timer;
let totalDurationSeconds;

const intervalEndSound = new Audio('/assets/interval-end.wav');
const finalEndSound = new Audio('/assets/final-end.wav');

function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * (70 - 40 + 1)) + 40; // 40-70%
    const lightness = Math.floor(Math.random() * (80 - 60 + 1)) + 60; // 60-80%
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function setRandomGradient() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    document.documentElement.style.setProperty('--gradient-start', color1);
    document.documentElement.style.setProperty('--gradient-end', color2);
}

function drawProgress(ctx, canvas, percentage, color) {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width / 2 - 10; // Padding

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#eee';
    ctx.fill();

    // Filled rectangle from bottom
    const fillHeight = canvas.height * percentage;
    ctx.fillStyle = color;
    ctx.fillRect(0, canvas.height - fillHeight, canvas.width, fillHeight);

    // Clip to circle
    ctx.globalCompositeOperation = 'destination-in';
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over'; // Reset composite operation
}

function updateIntervalOptions() {
    const duration = parseInt(durationInput.value);
    intervalSelect.innerHTML = '';
    for (let i = 1; i <= duration; i++) {
        if (duration % i === 0) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            intervalSelect.appendChild(option);
        }
    }
}

durationInput.addEventListener('change', updateIntervalOptions);

startButton.addEventListener('click', () => {
    const duration = parseInt(durationInput.value);
    const interval = parseInt(intervalSelect.value);

    // Preload sounds on user interaction
    intervalEndSound.load();
    finalEndSound.load();

    if (timer) {
        timer.stop();
    }

    timer = new Timer(duration, interval);
    totalDurationSeconds = duration * 60;

    timer.onTick(remainingTime => {
        const minutes = Math.floor(remainingTime / 60).toString().padStart(2, '0');
        const seconds = (remainingTime % 60).toString().padStart(2, '0');
        timeDisplay.textContent = `${minutes}:${seconds}`;

        // Update interval progress
        const currentIntervalTime = (interval * 60) - (remainingTime % (interval * 60));
        const intervalPercentage = currentIntervalTime / (interval * 60);
        drawProgress(intervalCtx, intervalCanvas, intervalPercentage, '#4CAF50');

        // Update overall progress
        const overallElapsedTime = totalDurationSeconds - remainingTime;
        const overallPercentage = overallElapsedTime / totalDurationSeconds;
        drawProgress(overallCtx, overallCanvas, overallPercentage, '#2196F3');
    });

    timer.onInterval(() => {
        intervalEndSound.play();
    });

    timer.onDone(() => {
        timeDisplay.textContent = 'Done!';
        finalEndSound.play();
        drawProgress(intervalCtx, intervalCanvas, 1, '#4CAF50'); // Fill completely
        drawProgress(overallCtx, overallCanvas, 1, '#2196F3'); // Fill completely
    });

    timer.start();
});

const resetButton = document.getElementById('reset');

stopButton.addEventListener('click', () => {
    if (timer) {
        timer.stop();
        // Reset progress indicators on stop
        drawProgress(intervalCtx, intervalCanvas, 0, '#4CAF50');
        drawProgress(overallCtx, overallCanvas, 0, '#2196F3');
    }
});

resetButton.addEventListener('click', () => {
    if (timer) {
        timer.stop();
    }
    timeDisplay.textContent = '15:00'; // Reset time display
    drawProgress(intervalCtx, intervalCanvas, 0, '#4CAF50'); // Reset interval progress
    drawProgress(overallCtx, overallCanvas, 0, '#2196F3'); // Reset overall progress
    durationInput.value = 15; // Reset duration input
    updateIntervalOptions(); // Update interval options based on reset duration
});

// Ripple effect for buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');

        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        this.appendChild(ripple);

        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    });
});


updateIntervalOptions();
setRandomGradient(); // Call on page load