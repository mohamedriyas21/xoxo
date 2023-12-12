
let currentPlayer = 'X';
const boxes = document.querySelectorAll('.box');
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
let gameEnded = false;


function checkForWin() {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (boxes[a].textContent && boxes[a].textContent === boxes[b].textContent && boxes[b].textContent === boxes[c].textContent) {
      gameEnded = true;
      alert(`Player ${currentPlayer} wins!`);
      break;
    }
  }
}


function handleBoxClick(event) {
  if (gameEnded) return; 

  const box = event.target;

  
  if (!box.textContent) {
    box.textContent = currentPlayer;

    checkForWin();

    
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}


function restartGame() {
  boxes.forEach(box => {
    box.textContent = '';
  });
  currentPlayer = 'X';
  gameEnded = false;
}


boxes.forEach(box => {
  box.addEventListener('click', handleBoxClick);
});


const restartButton = document.getElementById('Restartbutton');
restartButton.addEventListener('click', restartGame);

