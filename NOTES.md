**Labels**  
✅ done  
🚧 WIP  
❌ ERROR  
⚠️ TODO

DESCRIPTION:
The exercise involves developing a game of tic-tac-toe adhering to TDD rules.

Cenários TDD 
1 – Criação do tabuleiro:  
Game Board Creation...  
 | | 
-+-+- 
 | | 
-+-+- 
 | | 
Board Created. 
The game will start with player X 
2 – Player X ganhou na linha vertical 
Player X: 
X| | 
-+-+- 
X|O| 
-+-+- 
X| |O 
PLAYER X WON! 
3 – Player O ganhou na linha horizontal  
Player O: 
X| |X 
-+-+- 
O|O|O 
-+-+- 
X| | 
PLAYER O WON! 
4 – Player X ganhou com uma linha diagonal 
Player X: 
X| | 
-+-+- 
O|X| 
-+-+- 
O| |X 
PLAYER X WON! 
5 – Jogo termina com um empate  
Player X: 
X|O|X 
-+-+- 
O|O|X 
-+-+- 
X|X|O
 GAME ENDS WITH A DRAW! 
 
OBJECT:
The game can run in BOT mode to print all player movements on the screen (with timeout
2 seconds between each round) until someone wins or draws

DOMAIN:
- Win: 
    - vertical
    - horizontal
    - diagonal
- Lose:
    - draw
    - no vertical
    - no horizontal
    - no diagonal
- Player 1: X
- Player 2: O
- Board: matriz 3X3 
- Line: Position 00 - 01 - 02
- Column: Position 10 - 11 - 12
- Function: winGame - draw - verifyWinner - verifyBoard

RULES:
- Only 1 player wins (if completes vertical, horizontal, diagonal)
- If there is no line or column completed, it's a draw

## Pomodoro 1 🍅
- Organizing project ✅ 
- Create DOMAIN ✅ 
- Understand the rules ✅ 
- Understand the problem ✅ 
- Commit ✅ 

- Create test: 'Should return the player1 name "X" when is sent by parameter' ✅ 
- Make test fail ✅ 
- Create prod code ✅ 
- Make test pass ✅ 
- Commit ✅ 

- 