const correctAnswers = ['B', 'A', 'A', 'B','B','A','B','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
form.addEventListener('submit', e => {
    
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value ];

    // Check Answers
    userAnswers.forEach((answer,index) => {
        if(answer === correctAnswers[index]){
            score++; 
        }
    });

    let percentage = Math.trunc((score/8)*100);
    scrollTo(0,0);
    result.classList.remove('d-none');
    result.classList.add('d-block');

    let output = 0;
    let timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === percentage){
            clearInterval(timer);
        }
        else{
            output++;
        }
    }, 20);
});


