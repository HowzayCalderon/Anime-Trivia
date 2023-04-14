
let questions = [
     {
        que: "What clan is Sasuke Uchiha part of?",
        options: ['Uchiha', 'Senju', 'Uzumaki', 'Hyuga'],
        answer: 'Uchiha'
    },
     {
        que: "Where is Rurouni Kenshin's scar located?",
        options: ['Thigh', 'Stomach', 'Arm', 'Cheek'],
        answer: 'Cheek'
    },
    {
        que: "What is the name of the strongest demon from the 12 kizuki in Demon Slayer",
        options: ['Muzan', 'Kokushibo', 'Akaza', 'Enmu'],
        answer: 'Kokushibo'
    },
    {
        que: "Who are the brothers that were given the name The Full Metal Alchemist",
        options: ['Elric Brothers', 'Paradox Brothers', 'Uchiha Brothers', 'Zoldyck Brothers'],
        answer: 'Elric Brothers'
    },
    {
        que: "What is the name of the talking cat Goku visits in DragonBall?",
        options: ['Mishu', 'Garfield', 'Beerus', 'Korin'],
        answer: "Korin"
    },
    {
        que: "In which dragonball series was super saiyan 4 first seen?",
        answer: 'DragonBall GT',
        options: ['DragonBall', 'DragonBall Z', 'DragonBall GT', 'DragonBall Super']
    },
    {
        que: "Who was the One-Eyed Owl in Tokyo Ghoul?",
        answer: 'Eto',
        options: ['Ken Kaneki', 'Eto', 'Yoshimura', 'Touka' ]
    },
    {
        que: "What is Asta from Black Clover's magic ability?",
        answer: 'Anti-Magic',
        options: ['Barrier Magic', 'Creation Magic', 'Healing Magic', 'Anti-Magic']
    },
    {
        que: "Who was the first person in possesion of the Colossal Titan?",
        answer: 'Bertholdt',
        options: ['Bertholdt', 'Armin', 'Eren Yeager', 'Mikasa']
    },{
        que: "Which of these anime characters is known for defeating oponents with a single blow?",
        answer: 'Saitama',
        options: ['Goku', 'Asta', 'The Founding Titan', 'Saitama']
    }
]

//selecting buttons
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
//selecting point and lives
const lives = document.querySelector('.lives');
const points = document.querySelector('.points');
//selecting question 
const question = document.querySelector('.mainQuestion')
//selecting win and lose case
const winner = document.querySelector('.win');
const loser = document.querySelector('.lose');
//selecting question box
const questionBox = document.querySelector('.questionBox')

window.addEventListener('load', theGame())


let timeIn = setInterval(gameController, 1000)

function stopInterval(){
    clearInterval(timeIn)
}
function startInterval(){
    timeIn()
}

function gameController(){
    if(questions.length > 0 && lives.textContent <= 0 && points.textContent < 10){
        questionBox.className = 'hidden';
        loser.style.display = 'flex';
    }else if(questions.length >= 1){ 
    question.textContent = questions[0].que
    btn1.textContent = questions[0].options[0]
    btn2.textContent = questions[0].options[1]
    btn3.textContent = questions[0].options[2]
    btn4.textContent = questions[0].options[3]
    btn1.className = 'btn';
    btn2.className = 'btn';
    btn3.className = 'btn';
    btn4.className = 'btn';
    }else if(questions.length <= 0 && lives.textContent > 0 && points.textContent == 10){
        questionBox.className = 'hidden';
        winner.style.display = 'flex';
    }else if(questions.length <= 0 && lives.textContent > 0 && points.textContent < 10){
        question.textContent = `You scored ${points.textContent}/10 !`
        btn1.className = 'hidden'
        btn2.className = 'hidden'
        btn3.className = 'hidden'
        btn4.className = 'hidden'
        stopInterval()
    }else{
        
        stopInterval()
    }

}
function theGame(){
    
    lives.textContent = 4;
    points.textContent;

    
    gameController();
    
    btn1.addEventListener('click', () => {
        if(btn1.textContent == questions[0].answer){
            btn1.className = 'btn-correct';
            points.textContent++
            questions.shift();
            startInterval()
            stopInterval()
        }else{
            btn1.className = 'btn-wrong';
            lives.textContent--
            questions.shift();
            startInterval()
            stopInterval();
        }
    })
    
    btn2.addEventListener('click', () => {
        if(btn2.textContent == questions[0].answer){
            btn2.className = 'btn-correct';
            points.textContent++;
            questions.shift();
            startInterval()
            stopInterval()
        }else{
            btn2.className = 'btn-wrong';
            lives.textContent--
            questions.shift();
            startInterval()
            stopInterval()
        }
    })
    
    btn3.addEventListener('click', () => {
        if(btn3.textContent == questions[0].answer){
            btn3.className = 'btn-correct';
            points.textContent++;
            questions.shift();
            startInterval()
            stopInterval()
        }else{
            btn3.className = 'btn-wrong';
            lives.textContent--
            questions.shift();
            startInterval()
            stopInterval()
        }
    })
    
    btn4.addEventListener('click', () => {
        if(btn4.textContent == questions[0].answer){
            btn4.className = 'btn-correct';
            points.textContent++;
            questions.shift();
            startTimeOut()
            stopTimeOut();
        }else{
            btn4.className = 'btn-wrong';
            lives.textContent--
            questions.shift();
            startInterval()
            stopInterval()
        }
    })
    
        
}

// when you're out of questions you get an infinite loop, figure out why and stop it 