let players = [];
let currentPlayerIndex = 0;
let board = Array(9).fill(null);
let gameLog = [];
let stats = {};

document.getElementById('playButton').addEventListener('click', () => {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('nicknamesScreen').style.display = 'block';
});

document.getElementById('startGameButton').addEventListener('click', () => {
    const player1Input = document.getElementById('player1');
    const player2Input = document.getElementById('player2');
    players[0] = player1Input.value;
    players[1] = player2Input.value;
    if (!players[0]) {
        player1Input.style.borderColor = 'red';
        alert('Введите никнейм игрока 1');
        return;
    } else {
        player1Input.style.borderColor = '';
    }
    if (!players[1]) {
        player2Input.style.borderColor = 'red';
        alert('Введите никнейм игрока 2');
        return;
    } else {
        player2Input.style.borderColor = '';
    }
    document.getElementById('nicknamesScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';
    currentPlayerIndex = Math.floor(Math.random() * 2);
    updateBoard();
});

document.getElementById('endGameButton').addEventListener('click', () => {
    document.getElementById('gameScreen').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
    board = Array(9).fill(null);
    gameLog = [];
});

document.getElementById('statsButton').addEventListener('click', () => {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('statsScreen').style.display = 'block';
    document.getElementById('stats').innerText = JSON.stringify(stats, null, 2);
});

document.getElementById('backButton').addEventListener('click', () => {
    document.getElementById('statsScreen').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
});

function updateBoard() {
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';
    board.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.innerText = cell || '';
        cellElement.addEventListener('click', () => makeMove(index));
        boardElement.appendChild(cellElement);
    });
    document.getElementById('gameLog').innerText = gameLog.join('\n');
}

function makeMove(index) {
    if (board[index] !== null) {
        return;
    }
    board[index] = currentPlayerIndex === 0 ? 'X' : 'O';
    gameLog.push(`Игрок ${players[currentPlayerIndex]} сделал ход в ячейку ${index + 1}`);
    const winner = checkWinner();
    if (winner !== null) {
        alert(`Игра окончена. Победитель: ${players[winner]}`);
        stats[players[winner]] = (stats[players[winner]] || 0) + 1;
        board = Array(9).fill(null);
        gameLog = [];
    } else if (!board.includes(null)) {
        alert('Игра окончена. Ничья');
        stats['Ничья'] = (stats['Ничья'] || 0) + 1;
        board = Array(9).fill(null);
        gameLog = [];
    } else {
        currentPlayerIndex = 1 - currentPlayerIndex;
    }
    updateBoard();
}

function checkWinner() {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
            return board[a] === 'X' ? 0 : 1;
        }
    }
    return null;
}
