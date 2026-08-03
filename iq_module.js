// ============================================================
// IQ TEST MODULE (21 Questions)
// ============================================================
const IQ_QUESTIONS = [
  {
    id: "iq1",
    text: "Which shape comes next in the sequence? ▲ ■ ◆ ● ▲ ■ ◆ ?",
    options: ["●", "▲", "■", "◆"],
    answer: "●",
    category: "Logical Reasoning",
    difficulty: 1
  },
  {
    id: "iq2",
    text: "If all Bloops are Razzies and all Razzies are Lazzies, are all Bloops definitely Lazzies?",
    options: ["Yes", "No"],
    answer: "Yes",
    category: "Verbal Reasoning",
    difficulty: 1
  },
  {
    id: "iq3",
    text: "Which number should replace the question mark? 3, 6, 12, 24, ?",
    options: ["36", "48", "30", "42"],
    answer: "48",
    category: "Numerical Reasoning",
    difficulty: 1
  },
  {
    id: "iq4",
    text: "Which of the following words is the odd one out? Apple, Banana, Carrot, Orange",
    options: ["Apple", "Banana", "Carrot", "Orange"],
    answer: "Carrot",
    category: "Verbal Ability",
    difficulty: 1
  },
  {
    id: "iq5",
    text: "If you rearrange the letters 'CIFAIPC', you would have the name of a:",
    options: ["Country", "Animal", "Ocean", "City"],
    answer: "Ocean",
    category: "Verbal Ability",
    difficulty: 2
  },
  {
    id: "iq6",
    text: "Which figure completes the analogy? Dog : Puppy :: Cat : ?",
    options: ["Kitten", "Cub", "Calf", "Foal"],
    answer: "Kitten",
    category: "Verbal Reasoning",
    difficulty: 1
  },
  {
    id: "iq7",
    text: "If 5 machines can make 5 widgets in 5 minutes, how long would it take 100 machines to make 100 widgets?",
    options: ["5 minutes", "100 minutes", "20 minutes", "1 minute"],
    answer: "5 minutes",
    category: "Numerical Reasoning",
    difficulty: 2
  },
  {
    id: "iq8",
    text: "Which of the following is least like the others? Cube, Sphere, Pyramid, Circle",
    options: ["Cube", "Sphere", "Pyramid", "Circle"],
    answer: "Circle",
    category: "Spatial Intelligence",
    difficulty: 2
  },
  {
    id: "iq9",
    text: "If some Smaugs are Thors and some Thors are Thrains, then some Smaugs are definitely Thrains. Is this statement:",
    options: ["True", "False", "Indeterminate"],
    answer: "False",
    category: "Logical Reasoning",
    difficulty: 3
  },
  {
    id: "iq10",
    text: "Which number is missing from the sequence? 1, 4, 9, 16, ?, 36",
    options: ["20", "25", "30", "24"],
    answer: "25",
    category: "Numerical Reasoning",
    difficulty: 1
  },
  {
    id: "iq11",
    text: "If you fold this net into a cube, which face is opposite the face marked X?",
    options: ["A", "B", "C", "D"],
    answer: "C", // Placeholder (add SVG for spatial question)
    category: "Spatial Intelligence",
    difficulty: 3
  },
  {
    id: "iq12",
    text: "Which word does not belong? Parsimonious, Frugal, Thrifty, Lavish",
    options: ["Parsimonious", "Frugal", "Thrifty", "Lavish"],
    answer: "Lavish",
    category: "Verbal Ability",
    difficulty: 2
  },
  {
    id: "iq13",
    text: "If it takes 5 minutes to boil one egg, how long does it take to boil four eggs?",
    options: ["5 minutes", "20 minutes", "10 minutes", "15 minutes"],
    answer: "5 minutes",
    category: "Numerical Reasoning",
    difficulty: 2
  },
  {
    id: "iq14",
    text: "Which of the following proverbs has a meaning closest to 'Don't count your chickens before they hatch'?",
    options: [
      "A stitch in time saves nine",
      "Look before you leap",
      "Don't put all your eggs in one basket",
      "Make hay while the sun shines"
    ],
    answer: "Don't put all your eggs in one basket",
    category: "Verbal Reasoning",
    difficulty: 2
  },
  {
    id: "iq15",
    text: "If two typists can type two pages in two minutes, how many typists will it take to type 18 pages in 18 minutes?",
    options: ["2", "18", "9", "6"],
    answer: "2",
    category: "Numerical Reasoning",
    difficulty: 3
  },
  {
    id: "iq16",
    text: "Which shape is the odd one out?",
    options: ["Square", "Rectangle", "Triangle", "Circle"],
    answer: "Circle",
    category: "Spatial Intelligence",
    difficulty: 1
  },
  {
    id: "iq17",
    text: "If some Bloops are Razzies and all Razzies are Lazzies, which of the following must be true?",
    options: [
      "All Bloops are Lazzies",
      "Some Bloops are not Lazzies",
      "Some Lazzies are Bloops",
      "No Bloops are Lazzies"
    ],
    answer: "Some Lazzies are Bloops",
    category: "Logical Reasoning",
    difficulty: 3
  },
  {
    id: "iq18",
    text: "Which number should replace the question mark? 8, 5, 4, 9, 1, 7, 6, 3, ?",
    options: ["2", "4", "1", "0"],
    answer: "2", // Sequence: numbers in alphabetical order (eight, five, four, nine, one, seven, six, three, two)
    category: "Numerical Reasoning",
    difficulty: 3
  },
  {
    id: "iq19",
    text: "Which word is the opposite of 'ephemeral'?",
    options: ["Permanent", "Fleeting", "Brief", "Temporary"],
    answer: "Permanent",
    category: "Verbal Ability",
    difficulty: 2
  },
  {
    id: "iq20",
    text: "If you rotate the figure 90 degrees clockwise, which image shows the result?",
    options: ["A", "B", "C", "D"],
    answer: "B", // Placeholder (add SVG for spatial question)
    category: "Spatial Intelligence",
    difficulty: 3
  },
  {
    id: "iq21",
    text: "Which of the following is the largest? 0.9, 9/10, 0.99, 99/100",
    options: ["0.9", "9/10", "0.99", "99/100"],
    answer: "99/100",
    category: "Numerical Reasoning",
    difficulty: 1
  }
];

// ============================================================
// IQ SCORING LOGIC
// ============================================================
function calculateIQScore(correctAnswers) {
  // Simplified scoring: 100 + (raw_score * 10)
  // Example: 15/21 correct = 150 IQ (top 5%)
  return 100 + (correctAnswers * 10);
}

function getIQDescription(score) {
  if (score >= 130) return "Exceptionally Gifted (Top 2%)";
  if (score >= 120) return "Superior Intelligence (Top 5%)";
  if (score >= 110) return "High Average (Top 25%)";
  if (score >= 90) return "Average";
  if (score >= 80) return "Low Average";
  return "Below Average";
}

// ============================================================
// IQ TEST RENDERING
// ============================================================
function renderIQTest() {
  const view = $("#view-iq-test");
  view.innerHTML = `
    <div class="iq-header">
      <h2>Classic IQ Challenge</h2>
      <p>21 questions to measure your logical, verbal, and spatial intelligence.</p>
      <div class="progress-bar">
        <div class="progress" id="iq-progress" style="width: 0%"></div>
      </div>
    </div>
    <div class="iq-question-container" id="iq-question"></div>
    <div class="iq-options" id="iq-options"></div>
    <button class="iq-next-btn" id="iq-next">Next</button>
  `;
  
  let currentQuestion = 0;
  let userAnswers = [];
  
  function showQuestion() {
    const q = IQ_QUESTIONS[currentQuestion];
    $("#iq-progress").style.width = `${(currentQuestion / IQ_QUESTIONS.length) * 100}%`;
    
    $("#iq-question").innerHTML = `
      <div class="question-text">${q.text}</div>
      ${q.id === "iq11" || q.id === "iq20" ? `<div class="spatial-diagram">[SVG DIAGRAM HERE]</div>` : ""}
    `;
    
    const optionsHTML = q.options.map((opt, i) => `
      <div class="iq-option" data-index="${i}">
        <input type="radio" name="iq-answer" id="opt-${i}" value="${opt}">
        <label for="opt-${i}">${opt}</label>
      </div>
    `).join("");
    
    $("#iq-options").innerHTML = optionsHTML;
    $("#iq-next").disabled = true;
    
    $$(".iq-option").forEach(el => {
      el.addEventListener("click", () => {
        userAnswers[currentQuestion] = el.dataset.index;
        $("#iq-next").disabled = false;
      });
    });
  }
  
  $("#iq-next").addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < IQ_QUESTIONS.length) {
      showQuestion();
    } else {
      const correctAnswers = userAnswers.filter((ans, i) => 
        IQ_QUESTIONS[i].options[ans] === IQ_QUESTIONS[i].answer
      ).length;
      const iqScore = calculateIQScore(correctAnswers);
      const iqDescription = getIQDescription(iqScore);
      
      // Save to PsycheIQ Blueprint
      State.iqScore = iqScore;
      State.iqDescription = iqDescription;
      saveResult("iq-test", { score: iqScore, description: iqDescription });
      
      // Show results
      view.innerHTML = `
        <div class="iq-results">
          <h2>Your Classic IQ: <span class="iq-score">${iqScore}</span></h2>
          <p class="iq-description">${iqDescription}</p>
          <div class="iq-breakdown">
            <h3>Performance by Category</h3>
            <ul>
              <li>Logical Reasoning: ${calculateCategoryScore("Logical Reasoning")}/5</li>
              <li>Verbal Ability: ${calculateCategoryScore("Verbal Ability")}/6</li>
              <li>Numerical Reasoning: ${calculateCategoryScore("Numerical Reasoning")}/6</li>
              <li>Spatial Intelligence: ${calculateCategoryScore("Spatial Intelligence")}/4</li>
            </ul>
          </div>
          <button class="cta-button" onclick="go('results')">View Your PsycheIQ Blueprint</button>
        </div>
      `;
    }
  });
  
  function calculateCategoryScore(category) {
    return userAnswers.filter((ans, i) => 
      IQ_QUESTIONS[i].category === category && 
      IQ_QUESTIONS[i].options[ans] === IQ_QUESTIONS[i].answer
    ).length;
  }
  
  showQuestion();
}