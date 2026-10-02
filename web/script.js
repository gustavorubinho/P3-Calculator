let runningTotal = 0;
let buffer = "0";
let previousOperator = null;

const screen = document.querySelector('.screen');
const bigResult = document.getElementById('big-result');

function buttonClick(value) {
    if (isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol) {
    switch (symbol) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            previousOperator = null;
            updateBigResult('0');
            break;
        case '=':
            if (previousOperator === null) {
                return;
            }
            flushOperation(parseFloat(buffer));
            previousOperator = null;
            buffer = runningTotal.toString();
            runningTotal = 0;
            updateBigResult(buffer);
            break;
        case '←':
            if (buffer.length === 1) {
                buffer = '0';
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '.':
            if (!buffer.includes('.')) {
                buffer += '.';
            }
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol) {
    if (buffer === '0') {
        return;
    }

    const intBuffer = parseFloat(buffer);

    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }

    previousOperator = symbol;
    buffer = '0';
}

function flushOperation(intBuffer) {
    if (previousOperator === '+') {
        runningTotal += intBuffer;
    } else if (previousOperator === '−') {
        runningTotal -= intBuffer;
    } else if (previousOperator === '×') {
        runningTotal *= intBuffer;
    } else if (previousOperator === '÷') {
        runningTotal /= intBuffer;
    }
}

function handleNumber(numberString) {
    if (buffer === "0") {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
}

function updateBigResult(value) {
    bigResult.innerText = value;
    
    // Toca o som de impacto épico ao mostrar o número gigante
    bigResultSound.currentTime = 0;
    bigResultSound.play().catch(e => {});

    // Animação de freeze frame no número gigante
    bigResult.classList.remove('update-anim');
    
    // Força reflow
    void bigResult.offsetWidth; 
    
    bigResult.classList.add('update-anim');
    
    setTimeout(() => {
        bigResult.classList.remove('update-anim');
    }, 150); // Remove rápido para dar o efeito de impacto (hit) do Persona
}

// Instanciando os áudios (Você precisará colocar arquivos com esses nomes na mesma pasta)
const hoverSound = new Audio('hover.wav');
const clickSound = new Audio('click.wav');
const bigResultSound = new Audio('result.wav'); // Som para o número gigante

// Ajuste de volumes (0.0 a 1.0)
hoverSound.volume = 0.3;
clickSound.volume = 0.7;
bigResultSound.volume = 1.0;

function init() {
    const buttons = document.querySelectorAll('.calc-button');
    
    // Configura o evento global de clique para o funcionamento da calculadora
    document.querySelector('.calc-buttons').addEventListener('click', function(event) {
        if(event.target.tagName !== "BUTTON") return;
        
        // Toca o som de clique (reinicia caso o usuário clique muito rápido)
        clickSound.currentTime = 0; 
        clickSound.play().catch(e => {}); // catch previne erro no console se o arquivo não existir
        
        buttonClick(event.target.innerText);
    });

    // Configura o som de hover (passar o mouse) para cada botão
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            hoverSound.currentTime = 0;
            hoverSound.play().catch(e => {});
        });
    });
}

init();

// --- Controle de Volume ---
let isMuted = false;
const muteBtn = document.getElementById('mute-btn');

if (muteBtn) {
    muteBtn.addEventListener('mouseenter', () => {
        if (!isMuted) {
            hoverSound.currentTime = 0;
            hoverSound.play().catch(e => {});
        }
    });

    muteBtn.addEventListener('click', () => {
        // Toca o som de clique antes de alterar o volume
        if (!isMuted) {
            clickSound.currentTime = 0;
            clickSound.play().catch(e => {});
        }

        isMuted = !isMuted;
        
        // Altera o volume dos áudios
        const newVolume = isMuted ? 0.0 : 1.0;
        hoverSound.volume = isMuted ? 0.0 : 0.3;
        clickSound.volume = isMuted ? 0.0 : 0.7;
        bigResultSound.volume = isMuted ? 0.0 : 1.0;
        
        // Altera a aparência do botão para indicar se está mudo
        if (isMuted) {
            muteBtn.style.opacity = '0.5';
            muteBtn.innerText = '🔇';
        } else {
            muteBtn.style.opacity = '1.0';
            muteBtn.innerText = '🔊';
        }
    });
}
