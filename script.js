// Navigation Menu
function toggleMenu() {
    const nav = document.getElementById("nav");
    if (nav) nav.classList.toggle("show");
}

// Quiz Logic
async function loadQuizFromAPI() {
    console.log("Quiz loading started...");
    const quizContainer = document.getElementById("quiz-container");
    if (!quizContainer) return;

    quizContainer.innerHTML = "<p>Loading questions, please wait...</p>";
    
    const apiUrl = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.results && data.results.length > 0) {
            window.quizData = data.results;
            displayQuestion(0);
        } else {
            quizContainer.innerHTML = "<p>No questions found.</p>";
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        quizContainer.innerHTML = "<p>Error loading questions. Please check your internet.</p>";
    }
}

function displayQuestion(index) {
    const quizContainer = document.getElementById("quiz-container");
    const qData = window.quizData[index];

    if (!qData) {
        quizContainer.innerHTML = `<h3>Quiz Completed!</h3><button onclick='location.reload()' class='start-btn'>Restart Quiz</button>`;
        return;
    }

    const options = [...qData.incorrect_answers, qData.correct_answer].sort(() => Math.random() - 0.5);

    quizContainer.innerHTML = `
        <div class="quiz-box">
            <h3>Q${index + 1}: ${qData.question}</h3>
            <div class="options">
                ${options.map(opt => `
                    <button onclick="checkAnswer('${opt.replace(/'/g, "\\'")}', '${qData.correct_answer.replace(/'/g, "\\'")}', ${index})">
                        ${opt}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

function checkAnswer(selected, correct, currentIndex) {
    if (selected === correct) {
        alert("Correct! 🎉");
    } else {
        alert("Wrong! The correct answer was: " + correct);
    }
    displayQuestion(currentIndex + 1);
}
