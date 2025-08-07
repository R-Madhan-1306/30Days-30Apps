export const getAIMove = async (board, mode = "deepseek", difficulty = "hard") => {
  if (mode === "deepseek") {
    return await getDeepSeekMove(board);
  } else if (mode === "minimax") {
    return getMinimaxMove(board, difficulty);
  }
  return null;
};

// 1. 🧠 DeepSeek API Logic (OpenRouter)
const getDeepSeekMove = async (board) => {
  const apiKey = "env.YOUR_API_KEY"; // Replace with your key
  const endpoint = "https://openrouter.ai/api/v1/chat/completions";

  const systemPrompt = `
You are a professional AI Tic Tac Toe player. You play as "O".

You will be given the board as a 9-element array. Return your next move — ONLY the number from 0 to 8.

⚠ STRICT RULES:
- DO NOT explain.
- DO NOT add extra text.
- DO NOT use Markdown.
- DO NOT add punctuation.
- JUST RETURN A NUMBER.

If you break this, you will lose the game.

Example input: [null,"X",null,null,null,null,null,null,null]
Valid output: 4
`;

  const userPrompt = JSON.stringify(board);

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
        "HTTP-Referer": "http://localhost",
        "X-Title": "tic-tac-toe-game"
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-chat-v3-0324:free",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.2
      }),
    });

    const data = await res.json();
    const reply = data?.choices?.[0]?.message?.content?.trim();
    const move = parseInt(reply, 10);

    if (isNaN(move) || move < 0 || move > 8) {
      console.warn("Invalid AI move from DeepSeek:", reply);
      return null;
    }

    console.log("AI move from DeepSeek:", move);
    return move;
  } catch (error) {
    console.error("OpenRouter API error:", error);
    return null;
  }
};

// 2. 🤖 Local Minimax Logic

function getMinimaxMove(board, difficulty = "hard") {
  const availableMoves = board.map((val, idx) => (val === null ? idx : null)).filter(v => v !== null);

  if (difficulty === "easy") {
    const randomIndex = Math.floor(Math.random() * availableMoves.length);
    return availableMoves[randomIndex];
  }

  let bestScore = -Infinity;
  let move = null;

  for (let i of availableMoves) {
    board[i] = "O";
    let score = minimax(board, 0, false);
    board[i] = null;
    if (score > bestScore) {
      bestScore = score;
      move = i;
    }
  }
  console.log("move from Minimax:", move);
  return move;
}

function minimax(board, depth, isMaximizing) {
  const winner = checkWinnerLocal(board);
  if (winner !== null) {
    const scores = { X: -1, O: 1, draw: 0 };
    return scores[winner];
  }

  const availableMoves = board.map((val, idx) => (val === null ? idx : null)).filter(v => v !== null);

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i of availableMoves) {
      board[i] = "O";
      let score = minimax(board, depth + 1, false);
      board[i] = null;
      bestScore = Math.max(score, bestScore);
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i of availableMoves) {
      board[i] = "X";
      let score = minimax(board, depth + 1, true);
      board[i] = null;
      bestScore = Math.min(score, bestScore);
    }
    return bestScore;
  }
}

function checkWinnerLocal(board) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Cols
    [0, 4, 8], [2, 4, 6]             // Diags
  ];

  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) return board[a];
  }

  if (board.every(cell => cell !== null)) return "draw";
  return null;
}
