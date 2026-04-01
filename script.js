const scoreElement = document.getElementById('score');
const gameBoard = document.getElementById('game-board');
let score = 0;

// 1. Data Structure for 5x5 board
const jeopardyData = [
    {
        category: "Music",
        questions: [
            { points: 100, q: "What band, originally named Mammoth, was formed by Eddie & Alex Van Halen, and included vocalist David Lee Roth, and bassist Michael Anthony?", a: "Van Halen" },
            { points: 200, q: "Which 1942, Irving Berlin song, written for the movie 'Holiday Inn,' was made popular by Bing Crosby?", a: "White Christmas" },
            { points: 300, q: "What rapper's real name is Calvin Broadus Jr.?", a: "Snoop Dogg" },
            { points: 400, q: "What group sang 'Christmas in Hollis'?", a: "Run-D.M.C." },
            { points: 500, q: "Which singer/songwriter of blues, jazz, soul, and R&B music, popular in the 1950s & 1960s, sang 'All I Could Was Cry'?", a: "Etta James" }
        ]
    },
    {
        category: "Quotable Quotes",
        questions: [
            { points: 100, q: "In which movie is the line, 'I'm gonna make him an offer he can't refuse'?", a: "The Godfather" },
            { points: 200, q: "Which television visionary stated that 'There has never been a sadness that can't be cured by breakfast food'?", a: "Ron Swanson" },
            { points: 300, q: "Which band penned the lines, 'And in the end, the love you take is equal to the love you make'?", a: "The Beatles" },
            { points: 400, q: "Who said, 'Success is not final, failure is not fatal: it is the courage to continue that counts'?", a: "Winston Churchill" },
            { points: 500, q: "Who said, 'You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you'?", a: "Walt Disney" }
        ]
    },
    {
        category: "Xennial Cartoons & TV",
        questions: [
            { points: 100, q: "What is the name of Shaggy's dog?", a: "Scooby Doo" },
            { points: 200, q: "The Teenage Mutant Ninja Turtles were raised and trained by a staff-wielding, rodent martial artist named...?", a: "Master Splinter" },
            { points: 300, q: "Carl Winslow, the beloved dad from Family Matters, also played Sgt. Al Powell in what 1988 'Christmas' action/thriller?", a: "Die Hard" },
            { points: 400, q: "What is the name of the planet where He-man lives?", a: "Eternia" },
            { points: 500, q: "What is the name of Garfield's teddy bear", a: "Pooky" }
	]
    },
    {
        category: "On The Bookshelf",
        questions: [
            { points: 100, q: "Which 1843 novel includes the line, Every idiot who goes about with Merry Christmas on his lips, should be boiled with his own pudding, and buried with a stake of holly through his heart?", a: "A Christmas Carol" },
            { points: 200, q: "What is the name of Harry Potter's owl?", a: "Hedwig" },
            { points: 300, q: "Mein Kampf is an autobiographical manifesto and military strategy guidebook, published in 1925-1926, and studied by militaries from many countries all over the world, written by which former military and political leader?", a: "Adolf Hitler" },
            { points: 400, q: "Animal Farn, by George Orwell, is an allegory for the events in the Russian Revolution. The character of Napolean, a berkshire boar, represents which former cruel, totalitarian, dictator?", a: "Joseph Stalin" },
            { points: 500, q: "In the novel, The Wizard of Oz, what color are Dorothy's slippers?", a: "Silver" }
	]
    },
    {
        category: "You'll Go Down In History",
        questions: [
            { points: 100, q: "The Statue of Liberty was a gift to America from which country?", a: "France" },
            { points: 200, q: "In what year did the Titanic sink?", a: "1912" },
            { points: 300, q: "King Henry VIII of England is well-known for having 6 wives, in addition to political, cultural, and religious achievements. How many of his wives were beheaded for high treason?", a: "2" },
            { points: 400, q: "Which Crimean War nurse, and the founder of modern nursing practice, was called The Lady With the Lamp?", a: "Florence Nightingale" },
            { points: 500, q: "The Bolshevik Revolution, that began in 1917, led to the exile and assassination of which empirial family in 1919?", a: "The Romanovs" }
	]
    },
];

// 2. Create Category Headers
jeopardyData.forEach(cat => {
    const header = document.createElement('div');
    header.classList.add('category-header');
    header.innerText = cat.category;
    gameBoard.appendChild(header);
});

// 3. Create Question Cards (Row by Row)
for (let i = 0; i < 5; i++) { // 5 rows
    jeopardyData.forEach(cat => {
        const item = cat.questions[i];
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerText = `$${item.points}`;

        card.onclick = () => {
            if (card.style.visibility === 'hidden') return;
            
            const userAnswer = prompt(item.q);
            if (userAnswer && userAnswer.toLowerCase() === item.a.toLowerCase()) {
                alert("CORRECT!");
                score += item.points;
                scoreElement.innerText = score;
                card.style.visibility = 'hidden';
            } else {
                alert(`WRONG! The answer was: ${item.a}`);
                card.style.backgroundColor = '#333'; // Mark as played but wrong
                card.style.pointerEvents = 'none';
            }
        };
        gameBoard.appendChild(card);
    });
}
