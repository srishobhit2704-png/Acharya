// 1. Navigation Menu Toggle Function
function toggleMenu() {
    const nav = document.getElementById("nav");
    if (nav) {
        nav.classList.toggle("show");
    }
}

// 2. API Quiz System: Fetching and Displaying Questions
async function loadQuizFromAPI() {
    const quizContainer = document.getElementById("quiz-container");
    if (!quizContainer) return;

    quizContainer.innerHTML = "<p style='text-align:center;'>Loading questions from server...</p>";
    
    // API URL: Fetching 10 questions
    const apiUrl = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.results && data.results.length > 0) {
            window.quizData = data.results;
            displayQuestion(0);
        } else {
            quizContainer.innerHTML = "<p>No questions found. Please try again.</p>";
        }
    } catch (error) {
        console.error("Error loading questions:", error);
        quizContainer.innerHTML = "<p>Failed to load questions. Please check your internet connection.</p>";
    }
}

// Function to display the question
function displayQuestion(index) {
    const quizContainer = document.getElementById("quiz-container");
    const questionData = window.quizData[index];

    if (!questionData) {
        quizContainer.innerHTML = `
            <div style="text-align:center;">
                <h3>Quiz Completed!</h3>
                <button onclick="location.reload()" class="start-btn">Restart Quiz</button>
            </div>
        `;
        return;
    }

    // Shuffle options: Combine incorrect and correct answers, then sort randomly
    const options = [...questionData.incorrect_answers, questionData.correct_answer]
                    .sort(() => Math.random() - 0.5);

    quizContainer.innerHTML = `
        <div class="quiz-box" style="padding: 20px; background: #0d1b2a; border-radius: 10px;">
            <h3 style="margin-bottom: 20px;">Question ${index + 1}: ${questionData.question}</h3>
            <div class="options" style="display: grid; gap: 10px;">
                ${options.map(option => `
                    <button onclick="checkAnswer('${option.replace(/'/g, "\\'")}', '${questionData.correct_answer.replace(/'/g, "\\'")}', ${index})" 
                            style="padding: 12px; cursor: pointer; border-radius: 5px; border: 1px solid #1b3a5c; background: #1b3a5c; color: white;">
                        ${option}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

// Function to check the answer
function checkAnswer(selected, correct, currentIndex) {
    if (selected === correct) {
        alert("Correct! 🎉");
    } else {
        alert("Wrong! ❌ The correct answer was: " + correct);
    }
    
    // Move to next question after alert
    displayQuestion(currentIndex + 1);
}

// NOTE: Humne window.onload hata diya hai taaki button click se hi load ho
