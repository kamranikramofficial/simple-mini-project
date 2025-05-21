// Get DOM elements
const inputBox = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');
const calculator = document.querySelector('.calculator');

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        button.classList.add('button-active');
        button.classList.add('glow-effect');
        
        setTimeout(() => {
            button.classList.remove('button-active');
            button.classList.remove('glow-effect');
        }, 300);
        
        handleButtonClick(e.target.textContent);
    });
});

document.addEventListener('keydown', (e) => {
    handleKeyPress(e);
});

window.addEventListener('load', () => {
    inputBox.focus();
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        const tiltX = (y - 0.5) * 10; // -5 to 5 degrees
        const tiltY = (0.5 - x) * 10; // -5 to 5 degrees
        
        calculator.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });
});

function handleButtonClick(value) {
    if (value.includes('AC')) value = 'AC';
    if (value.includes('DEL')) value = 'DEL';
    if (value.includes('=')) value = '=';

    if (value === '=') {
        calculateResult();
    } else if (value === 'AC') {
        clearInput();
    } else if (value === 'DEL') {
        deleteLastChar();
    } else {
        appendToInput(value);
    }
}

function handleKeyPress(e) {
    let buttonText = e.key;
    
    if (e.key === 'Enter') buttonText = '=';
    if (e.key === 'Escape') buttonText = 'AC';
    if (e.key === 'Backspace') buttonText = 'DEL';
    
    const button = Array.from(buttons).find(btn => {
        const btnText = btn.textContent.replace(/[^0-9+\-*/.%=AC]/g, '');
        return btnText === buttonText;
    });
    
    if (button) {
        button.classList.add('button-active');
        button.classList.add('glow-effect');
        
        setTimeout(() => {
            button.classList.remove('button-active');
            button.classList.remove('glow-effect');
        }, 300);
    }

    if (/[0-9+\-*/.%=]|Enter|Backspace|Escape/.test(e.key)) {
        e.preventDefault();
    }
    if (/[0-9+\-*/.%]/.test(e.key)) {
        appendToInput(e.key);
    }
    else if (e.key === '=' || e.key === 'Enter') {
        calculateResult();
    }
    else if (e.key === 'Backspace') {
        deleteLastChar();
    }
    else if (e.key === 'Escape') {
        clearInput();
    }
}

function appendToInput(value) {
    string += value;
    inputBox.value = string;
        calculator.classList.add('glow-effect');
    setTimeout(() => {
        calculator.classList.remove('glow-effect');
    }, 300);
}
function clearInput() {
    string = "";
    inputBox.value = string;
}
function deleteLastChar() {
    string = string.slice(0, -1);
    inputBox.value = string;
}

function calculateResult() {
    try {
        string = new Function('return ' + string)();
        inputBox.value = string;
                calculator.style.transform = 'scale(1.02)';
        setTimeout(() => {
            calculator.style.transform = 'rotateX(5deg)';
        }, 300);
    } catch (error) {
        inputBox.value = 'Error';
        
        calculator.style.transform = 'translateX(10px)';
        setTimeout(() => {
            calculator.style.transform = 'translateX(-10px)';
        }, 100);
        setTimeout(() => {
            calculator.style.transform = 'translateX(5px)';
        }, 200);
        setTimeout(() => {
            calculator.style.transform = 'translateX(-5px)';
        }, 300);
        setTimeout(() => {
            calculator.style.transform = 'rotateX(5deg)';
        }, 400);
        
        setTimeout(() => {
            clearInput();
        }, 1000);
    }
}