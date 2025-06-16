
function getTodayDate() {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

const today = getTodayDate();
document.getElementById("date").textContent = `🗓️ Puzzle for ${today}`;

if (puzzles[today]) {
  document.getElementById("emoji").textContent = puzzles[today].emoji;
} else {
  document.getElementById("emoji").textContent = "🔒 Come back tomorrow!";
}

function checkAnswer() {
  const userGuess = document.getElementById("guess").value.trim().toLowerCase();
  const correctAnswer = puzzles[today]?.answer.toLowerCase();

  if (!correctAnswer) return;

  if (userGuess === correctAnswer) {
    document.getElementById("feedback").textContent = "✅ Correct!";
  } else {
    document.getElementById("feedback").textContent = "❌ Try again!";
  }
}

function showHint() {
  if (puzzles[today]?.hint) {
    document.getElementById("hint").textContent = puzzles[today].hint;
  }
}
