let currentQuestion = 0;
let score = 0;
let bestStreak = 0;
let currentStreak = 0;
let timeLeft = 60;
let timerInterval;
let missedFlags = [];
let isSeniorMode = false;
let simpleExplanations = false;

const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const scoreScreen = document.getElementById('score-screen');
const bestScoreElement = document.getElementById('best-score');

const bestScore = localStorage.getItem('scamShieldBestScore') || 0;
bestScoreElement.textContent = bestScore;

/*function initializeTheme() {
    const savedTheme = localStorage.getItem('scamshield-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.classList.add('dark');
    }
}

function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('scamshield-theme', isDark ? 'dark' : 'light');
}

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
document.getElementById('mobile-theme-toggle').addEventListener('click', toggleTheme);
*/
document.getElementById('start-game').addEventListener('click', startGame);
document.getElementById('play-again').addEventListener('click', startGame);
document.getElementById('print-card').addEventListener('click', printScoreCard);
document.getElementById('safe-btn').addEventListener('click', () => checkAnswer('safe'));
document.getElementById('scam-btn').addEventListener('click', () => checkAnswer('scam'));
document.getElementById('verify-btn').addEventListener('click', () => checkAnswer('verify'));
document.getElementById('next-btn').addEventListener('click', nextQuestion);

document.getElementById('senior-mode').addEventListener('change', (e) => {
    isSeniorMode = e.target.checked;
    document.body.classList.toggle('senior-mode', isSeniorMode);
});

document.getElementById('simple-explanations').addEventListener('change', (e) => {
    simpleExplanations = e.target.checked;
});

/*
document.getElementById('menu-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            document.getElementById('mobile-menu').classList.add('hidden');
        }
    });
});
*/

function startGame() {
    currentQuestion = 0;
    score = 0;
    currentStreak = 0;
    bestStreak = 0;
    timeLeft = isSeniorMode ? 90 : 60;
    missedFlags = [];

    startScreen.classList.add('hidden');
    scoreScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');

    startTimer();
    loadQuestion();
}

function startTimer() {
    clearInterval(timerInterval);
    document.getElementById('timer').textContent = `${timeLeft}s`;
    document.getElementById('timer-bar').style.width = '100%';

    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = `${timeLeft}s`;
        document.getElementById('timer-bar').style.width = `${(timeLeft / (isSeniorMode ? 90 : 60)) * 100}%`;

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function loadQuestion() {
    if (currentQuestion >= prompts.length) {
        endGame();
        return;
    }

    const promptData = prompts[currentQuestion];
    document.getElementById('prompt-text').textContent = promptData.text;
    document.getElementById('current-question').textContent = currentQuestion + 1;

    document.getElementById('explanation').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');

    document.getElementById('safe-btn').disabled = false;
    document.getElementById('scam-btn').disabled = false;
    document.getElementById('verify-btn').disabled = false;
}

function checkAnswer(answer) {
    const promptData = prompts[currentQuestion];
    const explanationElement = document.getElementById('explanation');
    const explanationText = document.getElementById('explanation-text');

    document.getElementById('safe-btn').disabled = true;
    document.getElementById('scam-btn').disabled = true;
    document.getElementById('verify-btn').disabled = true;

    if (answer === promptData.answer) {
        score++;
        currentStreak++;
        bestStreak = Math.max(bestStreak, currentStreak);
        explanationText.className = 'text-green-300';
        explanationText.innerHTML = '<i class="fas fa-check-circle mr-2"></i> Correct! ';
    } else {
        currentStreak = 0;
        missedFlags.push(promptData.explanation);
        explanationText.className = 'text-red-300';
        explanationText.innerHTML = '<i class="fas fa-times-circle mr-2"></i> Incorrect! ';
    }

    explanationText.innerHTML += simpleExplanations ? promptData.simple : promptData.explanation;

    explanationElement.classList.remove('hidden');
    document.getElementById('next-btn').classList.remove('hidden');
}

function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

function endGame() {
    clearInterval(timerInterval);

    document.getElementById('final-score').textContent = score;
    document.getElementById('streak-count').textContent = bestStreak;
    document.getElementById('time-taken').textContent = `${timeLeft}s left`;

    const missedFlagsElement = document.getElementById('missed-flags');
    missedFlagsElement.innerHTML = '';
    const uniqueMissedFlags = [...new Set(missedFlags)];

    if (uniqueMissedFlags.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'No red flags missed - excellent!';
        li.className = 'text-green-300';
        missedFlagsElement.appendChild(li);
    } else {
        uniqueMissedFlags.slice(0, 3).forEach(flag => {
            const li = document.createElement('li');
            li.textContent = flag;
            missedFlagsElement.appendChild(li);
        });
    }

    if (score > bestScore) {
        localStorage.setItem('scamShieldBestScore', score);
        bestScoreElement.textContent = score;
        createConfetti();
    }

    gameScreen.classList.add('hidden');
    scoreScreen.classList.remove('hidden');
}

function printScoreCard() {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>ScamShield Score Card</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                .print-card { max-width: 400px; margin: 0 auto; padding: 20px; border: 2px solid #333; border-radius: 10px; }
                .text-center { text-align: center; }
                .font-bold { font-weight: bold; }
                .mb-4 { margin-bottom: 16px; }
                .text-blue-800 { color: #1e40af; }
                .text-green-600 { color: #059669; }
            </style>
        </head>
        <body>
            <div class="print-card">
                <div class="text-center mb-4">
                    <h2 class="font-bold text-blue-800">ScamShield India</h2>
                    <p>Cyber Safety Score Card</p>
                </div>
                <div class="text-center mb-4">
                    <div class="font-bold text-green-600">${score}/10</div>
                    <p>Scam Detection Accuracy</p>
                </div>
                <div class="mb-4">
                    <h3 class="font-bold">Top Safety Habits:</h3>
                    <ul>
                        <li>Never act on urgency - verify first</li>
                        <li>Reject all collect payment requests</li>
                        <li>Call official numbers to confirm</li>
                        <li>Check URLs carefully for fakes</li>
                        <li>Never share OTP with anyone</li>
                    </ul>
                </div>
                <div class="text-center">
                    <p>Generated on: ${new Date().toLocaleDateString()}</p>
                    <p>by Future Developers Team</p>
                </div>
            </div>
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

function createConfetti() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.width = Math.random() * 15 + 5 + 'px';
        confetti.style.height = Math.random() * 15 + 5 + 'px';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 5000);
    }
}
