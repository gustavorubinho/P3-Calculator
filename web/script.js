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
        case 'â†':
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
        case 'âˆ’':
        case 'Ã—':
        case 'Ã·':
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
    } else if (previousOperator === 'âˆ’') {
        runningTotal -= intBuffer;
    } else if (previousOperator === 'Ã—') {
        runningTotal *= intBuffer;
    } else if (previousOperator === 'Ã·') {
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
    
    // Toca o som de impacto Ã©pico ao mostrar o nÃºmero gigante
    bigResultSound.currentTime = 0;
    bigResultSound.play().catch(e => {});

    // AnimaÃ§Ã£o de freeze frame no nÃºmero gigante
    bigResult.classList.remove('update-anim');
    
    // ForÃ§a reflow
    void bigResult.offsetWidth; 
    
    bigResult.classList.add('update-anim');
    
    setTimeout(() => {
        bigResult.classList.remove('update-anim');
    }, 150); // Remove rÃ¡pido para dar o efeito de impacto (hit) do Persona
}

// Instanciando os Ã¡udios (VocÃª precisarÃ¡ colocar arquivos com esses nomes na mesma pasta)
const hoverSound = new Audio('hover.wav');
const clickSound = new Audio('click.wav');
const bigResultSound = new Audio('result.wav'); // Som para o nÃºmero gigante

// Ajuste de volumes (0.0 a 1.0)
hoverSound.volume = 0.3;
clickSound.volume = 0.7;
bigResultSound.volume = 1.0;

function init() {
    const buttons = document.querySelectorAll('.calc-button');
    
    // Configura o evento global de clique para o funcionamento da calculadora
    document.querySelector('.calc-buttons').addEventListener('click', function(event) {
        if(event.target.tagName !== "BUTTON") return;
        
        // Toca o som de clique (reinicia caso o usuÃ¡rio clique muito rÃ¡pido)
        clickSound.currentTime = 0; 
        clickSound.play().catch(e => {}); // catch previne erro no console se o arquivo nÃ£o existir
        
        buttonClick(event.target.innerText);
    });

    // Configura o som de hover (passar o mouse) para cada botÃ£o
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            hoverSound.currentTime = 0;
            hoverSound.play().catch(e => {});
        });
    });
}

init();
