<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tic Tac Toe</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background: linear-gradient(135deg, #3494e6, #ec6ead);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      position: relative;
    }

    #madeByRazy {
      position: absolute;
      top: 10px;
      left: 10px;
      font-size: 1.5em;
      color: #b19cd9; /* Slightly purple color */
    }

    .board {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      gap: 10px;
      overflow: hidden;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    }

    .cell {
      width: 100px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2em;
      cursor: pointer;
      transition: background-color 0.3s;
      border: 2px solid #fff;
    }

    .cell:hover {
      background-color: #fff;
    }

    .cell.x {
      background-color: #ffb6c1; /* Slightly cool pink */
      color: #fff;
    }

    .cell.o {
      background-color: #d8bfd8; /* Slightly cool purple */
      color: #fff;
    }

    .status {
      margin-top: 20px;
      font-size: 1.5em;
      color: #fff;
    }

    .reset-button {
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 1em;
      background-color: #ffb6c1; /* Slightly cool pink */
      color: #fff;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .reset-button:hover {
      background-color: #ff99b4; /* Slightly lighter pink on hover */
    }

    .footer {
      margin-top: 40px;
      text-align: center;
      color: #fff;
    }
  </style>
</head>

<body>

  <div id="madeByRazy">MadeByRazy</div>

  <div class="board" id="board">
    <div class="cell" onclick="makeMove(this)"></div>
    <div class="cell" onclick="makeMove(this)"></div>
    <div class="cell" onclick="makeMove(this)"></div>
    <div class="cell" onclick="makeMove(this)"></div>
    <div class="cell" onclick="makeMove(this)"></div>
    <div class="cell" onclick="makeMove(this)"></div>
    <div class="cell" onclick="makeMove(this)"></div>
    <div class="cell" onclick="makeMove(this)"></div>
    <div class="cell" onclick="makeMove(this)"></div>
  </div>

  <p class="status" id="status"></p>
  <button class="reset-button" onclick="resetGame()">Reset Game</button>

  <div class="footer">
    <p>&copy; 2023 Tic Tac Toe. All rights reserved.</p>
  </div>

  <script>
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    const statusElement = document.getElementById('status');
    const boardElement = document.getElementById('board');

    function makeMove(cell) {
      const index = Array.from(cell.parentElement.children).indexOf(cell);

      if (gameBoard[index] === '' && !checkWinner()) {
        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer.toLowerCase());
        playSoundEffect(); // Add this line for sound effect
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

        if (checkWinner()) {
          statusElement.textContent = `Player ${currentPlayer === 'X' ? 'O' : 'X'} wins!`;
        } else if (gameBoard.every(cell => cell !== '')) {
          statusElement.textContent = 'It\'s a draw!';
        } else {
          statusElement.textContent = `Current player: ${currentPlayer}`;
        }
      }
    }

    function checkWinner() {
      const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ];

      return winningCombos.some(combo => {
        const [a, b, c] = combo;
        return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
      });
    }

    function resetGame() {
      currentPlayer = 'X';
      gameBoard = ['', '', '', '', '', '', '', '', ''];
      statusElement.textContent = 'Current player: X';

      const cells = document.querySelectorAll('.cell');
      cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('x', 'o');
      });
    }

    function playSoundEffect() {
      const audio = new Audio('https://freesound.org/people/ZenithInfinitiveStudios/sounds/343019/'); // Replace with your sound file
      audio.volume = 0.5;
      audio.play();
    }
  </script>

</body>

</html>