const quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
];

// const questionTitleEl = document.querySelector(".quiz-item h3"); /// title cau hoi
const quizContainer = document.querySelector(".quiz-container");
const btn = document.querySelector("#btn");
// Hiển thị thông tin câu hỏi hiện tại
const renderQuestion = () => {
    // Lấy thông tin câu hỏi hiện tại
    innerHTML = ''
    for(let i=0; i<quizes.length; i++){
        // Hiển thị title của câu hỏi
        const currentQuestion = quizes[i];
        innerHTML += `  <div class="quiz-item"> 
                            <h3> Câu hỏi ${i + 1}: ${currentQuestion.question} </h3>
                            <div class="quiz-answer">
                    `;
        let choicesHtml =  "";

        // Hiển thị các lựa chọn của câu hỏi
        currentQuestion.answers.forEach((choice, index) => {
            
                choicesHtml += ` 
                    
                        <div class="quiz-answer-item">
                            <input type="radio" name="${i + 1}">
                            <label>${choice}</label>
                        </div> 
                `;
                
        });
        innerHTML += choicesHtml + `</div>` + `</div>`;
    }  
    quizContainer.innerHTML = innerHTML

};

btn.addEventListener("click", () => {
    let random_answers = quizes.map(x => Math.floor(Math.random() * (x.answers.length) ));
    const quizAnswers = document.querySelectorAll(".quiz-item .quiz-answer");
    for (let i = 0 ; i < random_answers.length; i++){
        let quizAnswer = quizAnswers[i].querySelectorAll('.quiz-answer-item')
        quizAnswer[random_answers[i]].querySelector('input').checked = true
    }
})

renderQuestion();







// btnNext.addEventListener("click", () => {
//     // Kiểm tra xem người dùng đã chọn đáp án chưa
//     // Nếu chọn rồi -> next
//     // Nếu chưa chọn -> thông báo cho người dùng chọn đáp án
//     if (questions[currentQuestionIndex].type === "single") {
//         const checkedChoice = document.querySelector("input[type=radio]:checked");
//         if (!checkedChoice) {
//             alert("Bạn chưa chọn đáp án");
//             return;
//         }

//         // Lưu đáp án của người dùng vào mảng yourAnswers
//         yourAnswers.push(checkedChoice.value);
//         console.log(yourAnswers);
//     } else if (questions[currentQuestionIndex].type === "multiple") {
//         const checkedChoice = document.querySelectorAll("input[type=checkbox]:checked");
//         if (checkedChoice.length === 0) {
//             alert("Bạn chưa chọn đáp án");
//             return;
//         }

//         const checkedChoiceValues = [];
//         checkedChoice.forEach(choice => {
//             checkedChoiceValues.push(choice.value);
//         });
//         yourAnswers.push(checkedChoiceValues);
//     }

//     console.log(yourAnswers);

//     currentQuestionIndex++; // Chuyển sang câu hỏi tiếp theo
//     renderQuestion(); // Hiển thị câu hỏi tiếp theo

//     // Nếu là câu hỏi cuối cùng thì ẩn nút Next và hiển thị nút Finish
//     if (currentQuestionIndex === questions.length - 1) {
//         btnNext.classList.add("hide");
//         btnFinish.classList.remove("hide");
//     }
// });