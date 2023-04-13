
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
    // {
    //     que: "What is the name of the talking cat Goku visits?",
    //     answer: "korin"
    // },
    // {
    //     que: "In which dragonball series was super saiyan 4 first seen?",
    //     answer: "dragonball gt"
    // },
    // {
    //     que: "Who was the One-Eyed Owl in Tokyo Ghoul?",
    //     answer: "eto"
    // },
    // {
    //     que: "Does Asta from Black Clover have any magic ability?",
    //     answer: 'no'
    // },
    // {
    //     que: "Which two people were in possesion of the Colossal Titan?",
    //     answer: "armin, bertholdt"
    // }
]

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');

const lives = document.querySelector('.lives');
const points = document.querySelector('.points');

const question = document.querySelector('.mainQuestion')
const strtBtn = document.querySelector('.startButton')

strtBtn.addEventListener('click', theGame())


function theGame(){
    lives.textContent = 4;
    points.textContent = 0

    function setQuestion(){
        question.textContent = questions[0].que;
        btn1.textContent = questions[0].options[0];
        btn2.textContent = questions[0].options[1];
        btn3.textContent = questions[0].options[2];
        btn4.textContent = questions[0].options[3];

        btn1.className = 'btn';
        btn2.className = 'btn';
        btn3.className = 'btn';
        btn4.className = 'btn';
    }

    question.textContent = questions[0].que;
    btn1.textContent = questions[0].options[0];
    btn2.textContent = questions[0].options[1];
    btn3.textContent = questions[0].options[2];
    btn4.textContent = questions[0].options[3];
    
    btn1.addEventListener('click', () => {
        if(btn1.textContent == questions[0].answer){
            btn1.className = 'btn-correct';
            questions.shift();
            setInterval(setQuestion, 1000);
            points.textContent++
        }else{
            btn1.className = 'btn-wrong';
            questions.shift();
            setInterval(setQuestion, 1000);
            lives.textContent--
        }
    })

    btn2.addEventListener('click', () => {
        if(btn2.textContent == questions[0].answer){
            btn2.className = 'btn-correct';
            questions.shift();
            setInterval(setQuestion, 1000);
            points.textContent ++
        }
    })

    btn3.addEventListener('click', () => {
        if(btn3.textContent == questions[0].answer){
            btn3.className = 'btn-correct';
            questions.shift();
            setInterval(setQuestion, 1000);
            points.textContent ++
        }
    })

    btn4.addEventListener('click', () => {
        if(btn4.textContent == questions[0].answer){
            btn4.className = 'btn-correct';
            questions.shift();
            setInterval(setQuestion, 1000);
            points.textContent ++
        }
    })
    
}
