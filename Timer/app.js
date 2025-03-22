const timerDisplay = document.getElementById('timer');
const timerStatus = document.getElementById('timer-status');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const presetBtns = document.querySelectorAll('.preset-btn');
const progressRing = document.querySelector('.progress');
const completedAnimation = document.getElementById('completed-animation');
let timerInterval;
let totalSeconds = 0;
let remainingSeconds = 0;
let isRunning = false;
let startTime;
let endTime;
let pausedTime = 0;
const radius = 135;
const circumference = 2 * Math.PI * radius;
progressRing.style.strokeDasharray = circumference;
progressRing.style.strokeDashoffset = circumference;

function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}
function updateProgress(timeLeft, total) {
    const progress = timeLeft / total;
    const offset = circumference - (progress * circumference);
    progressRing.style.strokeDashoffset = offset;
}

// Start timer
function startTimer() {
    if (isRunning) return;
    if (remainingSeconds <= 0) {
        const hours = parseInt(hoursInput.value) || 0;
        const minutes = parseInt(minutesInput.value) || 0;
        const seconds = parseInt(secondsInput.value) || 0;
        
        totalSeconds = hours * 3600 + minutes * 60 + seconds;
        remainingSeconds = totalSeconds;
        
        if (totalSeconds <= 0) {
            timerDisplay.classList.add('shake');
            setTimeout(() => timerDisplay.classList.remove('shake'), 500);
            return;
        }
    }

    hoursInput.disabled = true;
    minutesInput.disabled = true;
    secondsInput.disabled = true;
        startBtn.disabled = true;
    pauseBtn.disabled = false;
        timerStatus.textContent = 'Running';
        startTime = Date.now() - (totalSeconds - remainingSeconds) * 1000;
    endTime = startTime + (remainingSeconds * 1000);
    
    isRunning = true;
        timerInterval = setInterval(updateTimer, 100);
}
function updateTimer() {
    const currentTime = Date.now();
    remainingSeconds = Math.ceil((endTime - currentTime) / 1000);
    
    if (remainingSeconds <= 0) {
        completeTimer();
        return;
    }
    timerDisplay.textContent = formatTime(remainingSeconds);
        updateProgress(remainingSeconds, totalSeconds);
        if (remainingSeconds <= 5) {
        timerDisplay.classList.add('pulse');
    } else {
        timerDisplay.classList.remove('pulse');
    }
}
function pauseTimer() {
    if (!isRunning) return;
    
    clearInterval(timerInterval);
    pausedTime = Date.now();
    isRunning = false;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
        timerStatus.textContent = 'Paused';
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    remainingSeconds = 0;
    totalSeconds = 0;
    pausedTime = 0;
    timerDisplay.textContent = '00:00:00';
    timerStatus.textContent = 'Ready';
    progressRing.style.strokeDashoffset = circumference;
        startBtn.disabled = false;
    pauseBtn.disabled = true;
    
    hoursInput.disabled = false;
    minutesInput.disabled = false;
    secondsInput.disabled = false;
        hoursInput.value = 0;
    minutesInput.value = 0;
    secondsInput.value = 0;
        timerDisplay.classList.remove('pulse');
}
function completeTimer() {
    clearInterval(timerInterval);
    isRunning = false;
        timerDisplay.textContent = '00:00:00';
    timerStatus.textContent = 'Completed!';
    progressRing.style.strokeDashoffset = 0;
        startBtn.disabled = false;
    pauseBtn.disabled = true;
        hoursInput.disabled = false;
    minutesInput.disabled = false;
    secondsInput.disabled = false;
        completedAnimation.classList.add('active');
    setTimeout(() => {
        completedAnimation.classList.remove('active');
    }, 1000);
    
    playCompletionSound();
    
    if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200]);
    }
}

function playCompletionSound() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(587.33, audioContext.currentTime); // D5
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.5, audioContext.currentTime + 0.1);
    gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 1);
}
function setPresetTime(seconds) {
    resetTimer();
    
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    hoursInput.value = hours;
    minutesInput.value = minutes;
    secondsInput.value = secs;
    
    totalSeconds = seconds;
    remainingSeconds = seconds;
    
    timerDisplay.textContent = formatTime(seconds);
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const time = parseInt(btn.dataset.time);
        setPresetTime(time);
    });
});

hoursInput.addEventListener('input', () => {
    if (hoursInput.value > 99) hoursInput.value = 99;
    if (hoursInput.value < 0) hoursInput.value = 0;
});

minutesInput.addEventListener('input', () => {
    if (minutesInput.value > 59) minutesInput.value = 59;
    if (minutesInput.value < 0) minutesInput.value = 0;
});

secondsInput.addEventListener('input', () => {
    if (secondsInput.value > 59) secondsInput.value = 59;
    if (secondsInput.value < 0) secondsInput.value = 0;
});
[hoursInput, minutesInput, secondsInput].forEach(input => {
    input.addEventListener('change', () => {
        const hours = parseInt(hoursInput.value) || 0;
        const minutes = parseInt(minutesInput.value) || 0;
        const seconds = parseInt(secondsInput.value) || 0;
        
        const totalTime = hours * 3600 + minutes * 60 + seconds;
        timerDisplay.textContent = formatTime(totalTime);
    });
});
resetTimer();