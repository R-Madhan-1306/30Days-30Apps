import React, { useEffect, useState } from 'react';
import ScoreBoard from './components/ScoreBoard';
import GameBoard from './components/GameBoard';
import { checkWinner } from './utils/winner';
import { getAIMove } from './utils/aiOpenRouter';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState({ X: 0, O: 0 });
  const [aiEngine, setAIEngine] = useState("deepseek"); // "deepseek" or "minimax"

  const handleClick = (i) => {
    if (!isPlayerTurn || board[i] || winner) return;
    const newBoard = [...board];
    newBoard[i] = 'X';
    setBoard(newBoard);
    setIsPlayerTurn(false);
  };

  useEffect(() => {
    if (winner) return;

    const result = checkWinner(board);
    if (result?.winner) {
      setWinner(result.winner);
      if (result.winner === 'X' || result.winner === 'O') {
        setScore((prevScore) => ({
          ...prevScore,
          [result.winner]: prevScore[result.winner] + 1,
        }));
      }
      return;
    }

    if (!isPlayerTurn && !winner) {
      const aiTurn = async () => {
        const move = await getAIMove(board, aiEngine);
        if (move !== null && board[move] === null) {
          const newBoard = [...board];
          newBoard[move] = 'O';
          setBoard(newBoard);
          setIsPlayerTurn(true);
        }
      };
      const timeout = setTimeout(aiTurn, 1000);
      return () => clearTimeout(timeout);
    }
  }, [board, isPlayerTurn, winner, aiEngine]);

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setWinner(null);
  };

  const handleModeChange = (mode) => {
    setAIEngine(mode);
    restartGame();
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">Tic Tac TAI</h1>

      <div className="mb-4 space-x-2">
        <button
          onClick={() => handleModeChange("deepseek")}
          className={`px-4 py-2 rounded ${aiEngine === 'deepseek' ? 'bg-blue-600' : 'bg-gray-700'}`}
        >
          Play with DeepSeek
        </button>
        <button
          onClick={() => handleModeChange("minimax")}
          className={`px-4 py-2 rounded ${aiEngine === 'minimax' ? 'bg-blue-600' : 'bg-gray-700'}`}
        >
          Play with Minimax
        </button>
      </div>

      <ScoreBoard score={score} />
      <GameBoard board={board} handleClick={handleClick} />
      
      {winner && (
        <div className="text-2xl font-bold mt-4">
          {winner === 'draw' ? 'Draw' : `Winner is ${winner}`}
          <button onClick={restartGame} className="ml-4 underline text-blue-400">
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
