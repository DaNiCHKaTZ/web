window.onload = function() { 
    var players = []; 
    var gameLog = {}; 
    var currentPlayerIndex = 0; 
 
    document.getElementById('play-button').onclick = function() { 
        document.getElementById('start-screen').style.display = 'none'; 
        document.getElementById('nickname-screen').style.display = 'flex'; 
    }; 
 
    document.getElementById('start-game-button').onclick = function() { 
        var player1Name = document.getElementById('player1').value.trim(); 
        var player2Name = document.getElementById('player2').value.trim(); 
        if (player1Name === '' || player2Name === '') { 
            alert('Введите никнеймы обоих игроков.'); 
            return; 
        } 
        if (player1Name === player2Name) { 
            alert('Имена совпадают.'); 
            return; 
        } 
        var player1 = players.find(player => player.name === player1Name); 
        if (!player1) { 
            player1 = { name: player1Name, symbol: 'X', stats: { wins: 0, draws: 0, losses: 0 } }; 
            players.push(player1); 
        } 
        var player2 = players.find(player => player.name === player2Name); 
        if (!player2) { 
            player2 = { name: player2Name, symbol: '0', stats: { wins: 0, draws: 0, losses: 0 } }; 
            players.push(player2); 
        } 
        document.getElementById('nickname-screen').style.display = 'none'; 
        document.getElementById('game').style.display = 'flex'; 
        document.getElementById('current-player').innerText = 'Текущий игрок: ' + player1.name; 
        startGame(); 
    }; 
  
    function startGame() {  
        var gridContainer = document.getElementById('grid-container'); 
        for (var i = 0; i < 9; i++) { 
            gridContainer.innerHTML += '<div class="block"></div>'; 
        } 
 
        document.getElementById('game').onclick = function(event) { 
            if (event.target.className == 'block' && event.target.innerHTML === '') { 
                event.target.innerHTML = players[currentPlayerIndex].symbol; 
                gameLog[event.target.id] = players[currentPlayerIndex].name + ' поставил ' + event.target.innerHTML; 
                document.getElementById('game-log').innerText = Object.values(gameLog).join(''); 
                currentPlayerIndex = 1 - currentPlayerIndex; 
                document.getElementById('current-player').innerText = 'Текущий игрок: ' + players[currentPlayerIndex].name; 
                checkWinner(); 
            } 
        } 
    }  
  
    function checkWinner() {  
        var allblock = document.getElementsByClassName('block'); 
 
        var Combinations = [ 
            [0, 1, 2], 
            [3, 4, 5], 
            [6, 7, 8], 
            [0, 3, 6], 
            [1, 4, 7], 
            [2, 5, 8], 
            [0, 4, 8], 
            [2, 4, 6] 
        ]; 
 
        for (var i = 0; i < Combinations.length; i++) { 
            if (allblock[Combinations[i][0]].innerHTML === 'X' && allblock[Combinations[i][1]].innerHTML === 'X' && allblock[Combinations[i][2]].innerHTML === 'X') { 
                endGame(players.find(player => player.symbol === 'X').name); 
                return; 
            } else if (allblock[Combinations[i][0]].innerHTML === '0' && allblock[Combinations[i][1]].innerHTML === '0' && allblock[Combinations[i][2]].innerHTML === '0') { 
                endGame(players.find(player => player.symbol === '0').name); 
                return; 
            } 
        } 
 
        if (Array.from(allblock).every(block => block.innerHTML !== '')) { 
            endGame(null); 
        }   
    }  
  
    function endGame(winner) { 
        if (winner) { 
            alert('Победитель: ' + winner); 
            players.find(player => player.name === winner).stats.wins++; 
            players.forEach(player => { 
                if (player.name !== winner) { 
                    player.stats.losses++; 
                } 
            }); 
        } else { 
            alert('Ничья'); 
            players.forEach(player => player.stats.draws++); 
        } 
        document.getElementById('restart-button').style.display = 'block'; 
 
        console.log('Статистика игр:'); 
        players.forEach(player => { 
            console.log(player.name + ': ' + player.stats.wins + ' побед, ' + player.stats.draws + ' ничьих, ' + player.stats.losses + ' поражений'); 
        }); 
    } 
  
    document.getElementById('restart-button').onclick = function() {  
        document.getElementById('game').style.display = 'none'; 
        document.getElementById('start-screen').style.display = 'flex'; 
        document.getElementById('restart-button').style.display = 'none'; 
        document.getElementById('grid-container').innerHTML = ''; 
        document.getElementById('game-log').innerText = ''; 
        gameLog = {}; 
        currentPlayerIndex = 0; 
    };  
  
    document.getElementById('stats-button').onclick = function() { 
        var statsMessage = 'Статистика игр:'; 
        players.forEach(player => { 
            statsMessage += '\n'+player.name + ': ' + player.stats.wins + ' побед, ' + player.stats.draws + ' ничьих, ' + player.stats.losses + ' поражений\n'; 
        }); 
        alert(statsMessage); 
    }; 
}; 
 