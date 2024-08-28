function clearDisplay() { document.getElementById('display').innerText = ''; }
function appendCharacter(character) { document.getElementById('display').innerText += character; }
function calculateResult() { try { const display = document.getElementById('display'); display.innerText = eval(display.innerText.replace('^', '**')); } catch (e) { alert('Invalid expression'); } }
function deleteLastCharacter() { const display = document.getElementById('display'); display.innerText = display.innerText.slice(0, -1); }
