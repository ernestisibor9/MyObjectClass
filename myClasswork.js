const questions = [
    {
        question: 'Who is the President of Russia\n (a) Buhari \n (b) Puttin \n (c) Bidden \n', 
        correct: "b",
    },
    {
        question: 'Who is the world best player\n (a) Lewandoski \n (b) Ronaldo \n (c) Messi \n', 
        correct: "a",
    },
    {
        question: '1 + 2 +3 = \n (a) 4 \n (b) 5 \n (c) 6 \n', 
        correct: "c",
    },
]

let score = 0;
// Loop through an array
for(let i = 0; i < questions.length; i++){
    // console.log(questions[i]);
    let myQuestion = prompt(questions[i].question)
    if(myQuestion == questions[i].correct){
        alert('correct mark')
    }
    else{
        alert('You failed')

    }
    score ++;
    
}