let player = {
    points: 0,
    lives: 4,
    // increasePoints(){
    //     player.points += 5
    // },
    // decreaseLives(){
    //     player.lives--
    // }
}

function increasePoints(){
    player.points += 5
}
function decreaseLives(){
    player.lives--
}



let questions = [
     {
        que: "What clan is Sasuke Uchiha part of?",
        answer: "uchiha clan"
    },
     {
        que: "Where is Rurouni Kenshin's scar located?",
        answer: "cheek"
    },
    {
        que: "What is the name of the strongest demon from the 12 kizuki in Demon Slayer",
        answer: "kokushibo"
    },
    {
        que: "Who are the brothers that were given the name The Full Metal Alchemist",
        answer: "elric brothers"
    },
    {
        que: "What is the name of the talking cat Goku visits?",
        answer: "korin"
    },
    {
        que: "In which dragonball series was super saiyan 4 first seen?",
        answer: "dragonball gt"
    },
    {
        que: "Who was the One-Eyed Owl in Tokyo Ghoul?",
        answer: "eto"
    },
    {
        que: "Does Asta from Black Clover have any magic ability?",
        answer: 'no'
    }
]
// reference for NEXT BUTTON
let nextButton = document.querySelector('.Next')

// questionBox variable to change color of box when answer is right/wrong
let questionBox = document.querySelector(".questionBox")

// mainQuestion is <p> element that will show the question 
let mainQuestion = document.querySelector('.mainQuestion')

// input is the variable storing reference to input element
let input = document.getElementById('answer')

// btn is variable storing reference to button element
let btn = document.querySelector('.btn')

//this variable is for the win condition
let youWon = document.querySelector('.win')

//this variable is for the loss condition
let youLose = document.querySelector('.lose')

//index variable
let index = 0

// function to change question
function changeQuestion(){
    index++
    mainQuestion.innerHTML= questions[index].que
    questionBox.style.backgroundColor = "#E2D1F9"
    input.value = ""
    btn.style.display = ''
}

//this section is for tracking points
let gamePoints = document.querySelector('.points')
gamePoints.innerHTML = `${player.points}`

// this section is for tracking lives
let gameLives = document.querySelector('.lives')
gameLives.innerHTML = `<i class="bi bi-heart-fill"></i>${player.lives}`


window.addEventListener('load', function(){
    mainQuestion.innerHTML = questions[index].que    
    })

    btn.addEventListener("click", function(){
        gamePoints.innerHTML = `${player.points}`
        gameLives.innerHTML = `<i class="bi bi-heart-fill"></i>${player.lives}`
       
        if(mainQuestion.innerHTML === questions[0].que && input.value.toLowerCase() == questions[0].answer){
            increasePoints()
            questionBox.style.backgroundColor = 'green' 
            console.log(player.points) 
            gamePoints.innerHTML = `${player.points}`  
            gameLives.innerHTML = `<i class="bi bi-heart-fill"></i>${player.lives}`
            btn.style.display = 'none'          
        }else if(mainQuestion.innerHTML === questions[1].que && input.value.toLowerCase() === questions[1].answer){
            questionBox.style.backgroundColor = 'green'
            increasePoints()
            gamePoints.innerHTML = `${player.points}`
            btn.style.display = 'none'
        }else if(mainQuestion.innerHTML === questions[2].que && input.value.toLowerCase() === questions[2].answer){
            questionBox.style.backgroundColor = 'green'
            increasePoints()
            gamePoints.innerHTML = `${player.points}`
            btn.style.display = 'none'
        }else if(mainQuestion.innerHTML === questions[3].que && input.value.toLowerCase() === questions[3].answer){
            questionBox.style.backgroundColor = 'green'
            increasePoints()
            gamePoints.innerHTML = `${player.points}`
            btn.style.display = 'none'
        }else if(mainQuestion.innerHTML === questions[4].que && input.value.toLowerCase() === questions[4].answer){
            questionBox.style.backgroundColor = 'green'
            increasePoints()
            gamePoints.innerHTML = `${player.points}`
            btn.style.display = 'none'
        }else if(mainQuestion.innerHTML === questions[5].que && input.value.toLowerCase() === questions[5].answer){
            questionBox.style.backgroundColor = 'green'
            increasePoints()
            gamePoints.innerHTML = `${player.points}`
            btn.style.display = 'none'
        }else if(mainQuestion.innerHTML === questions[6].que && input.value.toLowerCase() === questions[6].answer){
            questionBox.style.backgroundColor = 'green'
            increasePoints()
            gamePoints.innerHTML = `${player.points}`
            btn.style.display = 'none'
        }else if(mainQuestion.innerHTML === questions[7].que && input.value.toLowerCase() === questions[7].answer){
            questionBox.style.backgroundColor = 'green'
            increasePoints()  
            gamePoints.innerHTML = `${player.points}`  
            btn.style.display = 'none'  
        }else{
            questionBox.style.backgroundColor = 'red'
            decreaseLives()
            console.log(player.lives)
            gameLives.innerHTML = `<i class="bi bi-heart-fill"></i>${player.lives}`

        };
        if(player.points >= 25){
            youWon.style.display = 'flex'
            questionBox.style.display = 'none'
        }else if(player.lives == 0){
            youLose.style.display = 'flex'
            questionBox.style.display = 'none'
        }
    })

    nextButton.addEventListener('click', changeQuestion)
        
    
    
    