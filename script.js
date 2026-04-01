const scoreElement = document.getElementById('score');
const gameBoard = document.getElementById('game-board');
let score = 0;

const questions = [
    { category: "Coding", value: 100, q: "What language runs in a browser?", a: "javascript" },
    { category: "Coding", value: 200, q: "What does HTML stand for?", a: "hypertext markup language" },
    { category: "Git", value: 100, q: "Command to save changes?", a: "git commit" },
    { category: "Git", value: 200, q: "Command to send code to GitHub?", a: "git push" }
];

// Create the board
questions.forEach((item, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerText = `${item.category}\n$${item.value}`;
    
    card.onclick = () => {
        const answer = prompt(item.q);
        if (answer && answer.toLowerCase() === item.a.toLowerCase()) {
            alert("CORRECT!");
            score += item.value;
            scoreElement.innerText = score;
            card.style.visibility = 'hidden'; // Hide the card after answering
        } else {
            alert(`WRONG! The answer was: ${item.a}`);
        }
    };
    
    gameBoard.appendChild(card);
});
