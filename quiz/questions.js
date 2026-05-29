// ═══════════════════════════════════════════════════════════════════════════════
// ACHARYA QUIZ PORTAL — Curriculum & Question Database
// Classes 4–12 · All subjects · Topic-wise quizzes
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Curriculum map: class → subject → topics[]
 * Add or edit topics here; questions use matching `subject` and `topic` fields.
 */
const CURRICULUM = {
  "class-4": {
    Mathematics: ["Numbers", "Addition & Subtraction", "Multiplication", "Division", "Fractions", "Geometry", "Measurement"],
    English: ["Grammar", "Vocabulary", "Comprehension", "Spelling"],
    "Environmental Studies": ["Plants", "Animals", "Water", "Our Body", "Maps"],
    Hindi: ["व्याकरण", "शब्दावली", "पठन"],
  },
  "class-5": {
    Mathematics: ["Decimals", "Factors & Multiples", "Fractions", "Geometry", "Perimeter & Area", "Data Handling"],
    English: ["Grammar", "Vocabulary", "Comprehension", "Writing"],
    "Environmental Studies": ["Food", "Shelter", "Transport", "Natural Resources"],
    Hindi: ["व्याकरण", "कविता", "पठन"],
  },
  "class-6": {
    Mathematics: ["Knowing Numbers", "Whole Numbers", "Algebra", "Geometry", "Ratio", "Data Handling"],
    Science: ["Food", "Materials", "Living World", "Motion", "Light"],
    English: ["Grammar", "Reading", "Writing"],
    "Social Science": ["History", "Geography", "Civics"],
    Hindi: ["व्याकरण", "साहित्य"],
  },
  "class-7": {
    Mathematics: ["Integers", "Fractions", "Algebraic Expressions", "Triangles", "Perimeter & Area", "Statistics"],
    Science: ["Nutrition", "Heat", "Acids & Bases", "Electric Current", "Weather"],
    English: ["Grammar", "Comprehension", "Writing"],
    "Social Science": ["Medieval India", "Environment", "Democracy"],
    Hindi: ["व्याकरण", "साहित्य"],
  },
  "class-8": {
    Mathematics: ["Rational Numbers", "Linear Equations", "Quadrilaterals", "Mensuration", "Exponents", "Algebra"],
    Science: ["Crop Production", "Microorganisms", "Force", "Friction", "Sound", "Chemical Effects"],
    English: ["Grammar", "Comprehension", "Writing"],
    "Social Science": ["Colonialism", "Resources", "Parliament"],
    Hindi: ["व्याकरण", "साहित्य"],
  },
  "class-9": {
    Mathematics: ["Number Systems", "Polynomials", "Coordinate Geometry", "Linear Equations", "Triangles", "Statistics"],
    Science: ["Matter", "Atoms & Molecules", "Motion", "Force", "Gravitation", "Sound"],
    English: ["Grammar", "Literature", "Writing"],
    "Social Science": ["French Revolution", "Physical Features", "Constitution"],
    Hindi: ["व्याकरण", "साहित्य"],
  },
  "class-10": {
    Mathematics: ["Real Numbers", "Polynomials", "Pair of Equations", "Quadratic Equations", "Triangles", "Trigonometry", "Statistics"],
    Science: ["Chemical Reactions", "Acids & Bases", "Life Processes", "Electricity", "Light", "Heredity"],
    English: ["Grammar", "Literature", "Writing"],
    "Social Science": ["Nationalism", "Federalism", "Globalisation"],
    Hindi: ["व्याकरण", "साहित्य"],
  },
  "class-11": {
    Physics: ["Units & Measurement", "Kinematics", "Laws of Motion", "Work & Energy", "Gravitation"],
    Chemistry: ["Some Basic Concepts", "Structure of Atom", "Chemical Bonding", "Thermodynamics"],
    Biology: ["Living World", "Biological Classification", "Plant Kingdom", "Cell"],
    Mathematics: ["Sets", "Relations", "Trigonometry", "Complex Numbers", "Limits"],
    English: ["Reading", "Writing", "Literature"],
  },
  "class-12": {
    Physics: ["Electrostatics", "Current Electricity", "Magnetism", "Optics", "Modern Physics"],
    Chemistry: ["Solid State", "Solutions", "Electrochemistry", "Chemical Kinetics", "Organic Basics"],
    Biology: ["Reproduction", "Genetics", "Evolution", "Ecology", "Biotechnology"],
    Mathematics: ["Relations", "Matrices", "Calculus", "Integrals", "Probability"],
    English: ["Reading", "Writing", "Literature"],
  },
};

const APPRECIATION_MESSAGES = [
  "Excellent work!",
  "Brilliant!",
  "You nailed it!",
  "Outstanding!",
  "Perfect answer!",
  "Keep it up!",
  "Superb!",
  "Well done!",
];

/** Hand-picked NCERT-style questions (Class 10 Maths etc.) */
const CORE_QUESTIONS = [
  // ── Class 4 ──
  { id: 101, category: "class-4", subject: "Mathematics", topic: "Addition & Subtraction", question: "What is 456 + 278?", options: ["634", "724", "734", "744"], correct: 2, difficulty: "easy", explanation: "456 + 278 = 734." },
  { id: 102, category: "class-4", subject: "Mathematics", topic: "Multiplication", question: "7 × 9 equals:", options: ["56", "63", "72", "81"], correct: 1, difficulty: "easy", explanation: "7 × 9 = 63." },
  { id: 103, category: "class-4", subject: "English", topic: "Grammar", question: "Choose the correct plural: child →", options: ["childs", "children", "childes", "childrens"], correct: 1, difficulty: "easy", explanation: "The plural of child is children." },
  { id: 104, category: "class-4", subject: "Environmental Studies", topic: "Plants", question: "Green plants make their food by:", options: ["Breathing", "Photosynthesis", "Digestion", "Fermentation"], correct: 1, difficulty: "easy", explanation: "Plants use sunlight to make food through photosynthesis." },

  // ── Class 5 ──
  { id: 201, category: "class-5", subject: "Mathematics", topic: "Decimals", question: "0.5 + 0.25 equals:", options: ["0.55", "0.75", "0.80", "1.25"], correct: 1, difficulty: "easy", explanation: "0.5 + 0.25 = 0.75." },
  { id: 202, category: "class-5", subject: "Mathematics", topic: "Perimeter & Area", question: "Perimeter of a square with side 6 cm is:", options: ["12 cm", "18 cm", "24 cm", "36 cm"], correct: 2, difficulty: "easy", explanation: "Perimeter = 4 × side = 4 × 6 = 24 cm." },
  { id: 203, category: "class-5", subject: "English", topic: "Vocabulary", question: "Synonym of 'happy' is:", options: ["Sad", "Angry", "Joyful", "Tired"], correct: 2, difficulty: "easy", explanation: "Joyful means happy." },

  // ── Class 6 ──
  { id: 301, category: "class-6", subject: "Mathematics", topic: "Algebra", question: "If x + 5 = 12, then x equals:", options: ["5", "6", "7", "17"], correct: 2, difficulty: "easy", explanation: "x = 12 − 5 = 7." },
  { id: 302, category: "class-6", subject: "Science", topic: "Food", question: "Carbohydrates mainly give us:", options: ["Energy", "Proteins only", "Vitamins", "Minerals"], correct: 0, difficulty: "easy", explanation: "Carbohydrates are the main source of energy." },
  { id: 303, category: "class-6", subject: "Social Science", topic: "History", question: "The Indus Valley Civilization flourished around:", options: ["500 AD", "2500 BC", "1500 AD", "100 BC"], correct: 1, difficulty: "medium", explanation: "Harappan civilization dates to about 2500 BC." },

  // ── Class 7 ──
  { id: 401, category: "class-7", subject: "Mathematics", topic: "Integers", question: "(−3) + (−7) equals:", options: ["−10", "10", "−4", "4"], correct: 0, difficulty: "easy", explanation: "Sum of two negatives: −3 + (−7) = −10." },
  { id: 402, category: "class-7", subject: "Science", topic: "Acids & Bases", question: "Litmus turns red in:", options: ["Acid", "Base", "Salt water", "Sugar solution"], correct: 0, difficulty: "easy", explanation: "Acids turn blue litmus red." },
  { id: 403, category: "class-7", subject: "Mathematics", topic: "Algebraic Expressions", question: "Simplify: 3x + 2x", options: ["5x", "6x", "5x²", "x⁵"], correct: 0, difficulty: "easy", explanation: "3x + 2x = 5x (like terms)." },

  // ── Class 8 ──
  { id: 501, category: "class-8", subject: "Mathematics", topic: "Linear Equations", question: "Solve: 2x − 4 = 10", options: ["x = 3", "x = 5", "x = 7", "x = 14"], correct: 2, difficulty: "medium", explanation: "2x = 14, so x = 7." },
  { id: 502, category: "class-8", subject: "Science", topic: "Force", question: "SI unit of force is:", options: ["Joule", "Newton", "Watt", "Pascal"], correct: 1, difficulty: "easy", explanation: "Force is measured in Newton (N)." },
  { id: 503, category: "class-8", subject: "Mathematics", topic: "Exponents", question: "2³ equals:", options: ["6", "8", "9", "16"], correct: 1, difficulty: "easy", explanation: "2³ = 2 × 2 × 2 = 8." },

  // ── Class 9 ──
  { id: 601, category: "class-9", subject: "Mathematics", topic: "Polynomials", question: "Degree of polynomial 5x³ − 2x + 7 is:", options: ["1", "2", "3", "5"], correct: 2, difficulty: "easy", explanation: "Highest power of x is 3." },
  { id: 602, category: "class-9", subject: "Science", topic: "Gravitation", question: "Value of acceleration due to gravity on Earth is approximately:", options: ["9.8 m/s²", "98 m/s²", "0.98 m/s²", "980 m/s²"], correct: 0, difficulty: "easy", explanation: "g ≈ 9.8 m/s² near Earth's surface." },
  { id: 603, category: "class-9", subject: "Mathematics", topic: "Coordinate Geometry", question: "Distance of point (0, 5) from x-axis is:", options: ["0", "5", "10", "25"], correct: 1, difficulty: "easy", explanation: "Distance from x-axis equals |y| = 5." },

  // ── Class 10 (Mathematics) ──
  { id: 1, category: "class-10", subject: "Mathematics", topic: "Trigonometry", question: "If sin θ + cos θ = √2 cos θ, then cos θ − sin θ equals:", options: ["√2 sin θ", "√2 cos θ", "2 sin θ", "0"], correct: 0, difficulty: "medium", explanation: "Rearranging gives cos θ − sin θ = √2 sin θ." },
  { id: 2, category: "class-10", subject: "Mathematics", topic: "Real Numbers", question: "The decimal expansion of 14587/1250 terminates after how many decimal places?", options: ["One", "Two", "Three", "Four"], correct: 3, difficulty: "medium", explanation: "1250 = 2¹ × 5⁴ → terminates after 4 places." },
  { id: 3, category: "class-10", subject: "Mathematics", topic: "Coordinate Geometry", question: "Distance between (1, 2) and (7, 10) is:", options: ["6 units", "8 units", "10 units", "12 units"], correct: 2, difficulty: "easy", explanation: "√(6² + 8²) = √100 = 10 units." },
  { id: 4, category: "class-10", subject: "Mathematics", topic: "Real Numbers", question: "If HCF(306, 657) = 9, then LCM(306, 657) is:", options: ["22338", "22438", "22128", "22538"], correct: 0, difficulty: "medium", explanation: "LCM = (306 × 657) / 9 = 22338." },
  { id: 5, category: "class-10", subject: "Mathematics", topic: "Polynomials", question: "If one zero of x² + 3x + k is 2, then k equals:", options: ["10", "−10", "−7", "−2"], correct: 1, difficulty: "medium", explanation: "4 + 6 + k = 0 → k = −10." },
  { id: 6, category: "class-10", subject: "Mathematics", topic: "Pair of Equations", question: "x + 2y + 5 = 0 and −3x − 6y + 1 = 0 have:", options: ["Unique solution", "Two solutions", "Infinitely many", "No solution"], correct: 3, difficulty: "medium", explanation: "Parallel lines → no solution." },
  { id: 7, category: "class-10", subject: "Mathematics", topic: "Quadratic Equations", question: "Discriminant of 2x² − 4x + 3 = 0 is:", options: ["−8", "10", "−16", "8"], correct: 0, difficulty: "easy", explanation: "D = 16 − 24 = −8." },
  { id: 8, category: "class-10", subject: "Mathematics", topic: "Statistics", question: "The 11th term of AP: −3, −½, 2, … is:", options: ["28", "22", "−38", "−46"], correct: 1, difficulty: "medium", explanation: "a₁₁ = −3 + 10(2.5) = 22." },
  { id: 9, category: "class-10", subject: "Mathematics", topic: "Coordinate Geometry", question: "Distance of P(2, 3) from the x-axis is:", options: ["2 units", "3 units", "1 unit", "5 units"], correct: 1, difficulty: "easy", explanation: "Distance equals y-coordinate = 3." },
  { id: 10, category: "class-10", subject: "Mathematics", topic: "Triangles", question: "If ΔABC ~ ΔPQR and BC/QR = 1/3, then area ratio is:", options: ["1/9", "1/3", "1/4", "1/16"], correct: 0, difficulty: "medium", explanation: "Area ratio = (side ratio)² = 1/9." },
  { id: 11, category: "class-10", subject: "Science", topic: "Chemical Reactions", question: "Rusting of iron is an example of:", options: ["Physical change", "Oxidation", "Reduction", "Sublimation"], correct: 1, difficulty: "easy", explanation: "Iron reacts with oxygen — oxidation." },
  { id: 12, category: "class-10", subject: "Science", topic: "Electricity", question: "Unit of electric current is:", options: ["Volt", "Ohm", "Ampere", "Watt"], correct: 2, difficulty: "easy", explanation: "Current is measured in Ampere (A)." },

  // ── Class 11 ──
  { id: 701, category: "class-11", subject: "Physics", topic: "Kinematics", question: "A body at rest has acceleration:", options: ["9.8 m/s²", "0 m/s²", "1 m/s²", "Infinite"], correct: 1, difficulty: "easy", explanation: "At rest, velocity is constant → a = 0." },
  { id: 702, category: "class-11", subject: "Chemistry", topic: "Structure of Atom", question: "Mass of an electron is approximately:", options: ["1 u", "1/1840 u", "4 u", "12 u"], correct: 1, difficulty: "medium", explanation: "Electron mass ≈ 1/1840 of proton mass." },
  { id: 703, category: "class-11", subject: "Mathematics", topic: "Sets", question: "If A = {1, 2, 3}, number of subsets of A is:", options: ["6", "7", "8", "9"], correct: 2, difficulty: "easy", explanation: "2³ = 8 subsets." },

  // ── Class 12 ──
  { id: 801, category: "class-12", subject: "Physics", topic: "Electrostatics", question: "Coulomb's law describes force between:", options: ["Magnetic poles", "Electric charges", "Currents", "Masses"], correct: 1, difficulty: "easy", explanation: "Coulomb's law is for electrostatic force between charges." },
  { id: 802, category: "class-12", subject: "Chemistry", topic: "Solutions", question: "Molarity (M) is defined as:", options: ["Moles per kg solvent", "Moles per litre solution", "Grams per litre", "Moles per mole"], correct: 1, difficulty: "easy", explanation: "M = moles of solute / litres of solution." },
  { id: 803, category: "class-12", subject: "Mathematics", topic: "Matrices", question: "Order of matrix with 2 rows and 3 columns is:", options: ["2 × 3", "3 × 2", "6 × 1", "1 × 6"], correct: 0, difficulty: "easy", explanation: "Order = rows × columns = 2 × 3." },

  // ── Olympiad ──
  { id: 901, category: "olympiad", subcategory: "math-olympiad", subject: "Mathematics", topic: "Number Theory", question: "Prime factors in (4)¹¹ × (7)⁵ × (11)³ total:", options: ["19", "22", "30", "44"], correct: 2, difficulty: "hard", explanation: "(2²)¹¹ = 2²² → 22 + 5 + 3 = 30 prime factors." },
  { id: 902, category: "olympiad", subcategory: "science-olympiad", subject: "Science", topic: "General", question: "Speed of light in vacuum is approximately:", options: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "300 m/s"], correct: 1, difficulty: "easy", explanation: "c ≈ 3 × 10⁸ m/s." },

  // ── Competitive ──
  { id: 1001, category: "competitive", subcategory: "jee-main", subject: "Physics", topic: "Mechanics", question: "Dimensional formula of force is:", options: ["[MLT⁻²]", "[ML²T⁻²]", "[MLT⁻¹]", "[M²LT⁻²]"], correct: 0, difficulty: "medium", explanation: "F = ma → [M][L][T⁻²]." },
  { id: 1002, category: "competitive", subcategory: "neet", subject: "Biology", topic: "Cell", question: "Powerhouse of the cell is:", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi body"], correct: 2, difficulty: "easy", explanation: "Mitochondria produce ATP (energy)." },
];

// Merged database: core + auto-generated bank (questions-bank.js)
const quizDatabase = typeof QUESTION_BANK !== "undefined"
  ? [...CORE_QUESTIONS, ...QUESTION_BANK]
  : [...CORE_QUESTIONS];
