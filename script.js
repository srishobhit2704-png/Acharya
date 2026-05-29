// 1. Navigation Menu Toggle Function
function toggleMenu() {
    document.getElementById("nav").classList.toggle("show");
}

// 2. API Quiz System: Fetching and Displaying Questions
async function loadQuizFromAPI() {
    const quizContainer = document.getElementById("quiz-container");
    if (!quizContainer) return;

    quizContainer.innerHTML = "<p>Loading questions...</p>";
    
    // API URL: Category 9 is General Knowledge
    const apiUrl = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        // Storing data globally
        window.quizData = data.results;
        
        // Start displaying the first question
        displayQuestion(0);
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
        quizContainer.innerHTML = "<h3>Quiz Completed!</h3>";
        return;
    }

    // Shuffle options
    const options = [...questionData.incorrect_answers, questionData.correct_answer]
                    .sort(() => Math.random() - 0.5);

    quizContainer.innerHTML = `
        <div class="quiz-box">
            <h3>Question ${index + 1}: ${questionData.question}</h3>
            <div class="options">
                ${options.map(option => `
                    <button onclick="checkAnswer('${option.replace(/'/g, "\\'")}', '${questionData.correct_answer.replace(/'/g, "\\'")}', ${index})">
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
        alert("Correct!");
    } else {
        alert("Wrong! The correct answer was: " + correct);
    }
    
    // Move to next question
    displayQuestion(currentIndex + 1);
}

// Start the process when page loads
window.onload = loadQuizFromAPI;
