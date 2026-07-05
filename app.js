const tests = [
  {
    id: "iq",
    title: "IQ Snapshot",
    category: "Cognitive",
    tone: "teal",
    symbol: "IQ",
    status: "Live",
    time: "25 min",
    items: "42 questions",
    price: "$1 report",
    scoring: "correct",
    description:
      "A reasoning-first intelligence test with traditional IQ-style items plus a thinking-style readout.",
    questions: [
      {
        kicker: "Number series",
        domain: "pattern reasoning",
        prompt: "What number comes next? 3, 7, 15, 31, ?",
        options: [
          { label: "47", correct: false },
          { label: "62", correct: false },
          { label: "63", correct: true },
          { label: "64", correct: false },
        ],
      },
      {
        kicker: "Number series",
        domain: "pattern reasoning",
        prompt: "What number comes next? 2, 6, 12, 20, 30, ?",
        options: [
          { label: "36", correct: false },
          { label: "40", correct: false },
          { label: "42", correct: true },
          { label: "44", correct: false },
        ],
      },
      {
        kicker: "Letter-number pattern",
        domain: "pattern reasoning",
        prompt: "What comes next? A1, C3, F6, J10, ?",
        options: [
          { label: "N14", correct: false },
          { label: "O15", correct: true },
          { label: "P16", correct: false },
          { label: "Q15", correct: false },
        ],
      },
      {
        kicker: "Verbal analogy",
        domain: "verbal reasoning",
        prompt: "Bird is to nest as bee is to:",
        options: [
          { label: "Honey", correct: false },
          { label: "Hive", correct: true },
          { label: "Flower", correct: false },
          { label: "Wing", correct: false },
        ],
      },
      {
        kicker: "Verbal analogy",
        domain: "verbal reasoning",
        prompt: "Candid is to deceptive as scarce is to:",
        options: [
          { label: "Rare", correct: false },
          { label: "Hidden", correct: false },
          { label: "Abundant", correct: true },
          { label: "Precise", correct: false },
        ],
      },
      {
        kicker: "Classification",
        domain: "verbal reasoning",
        prompt: "Which word does not belong with the others?",
        options: [
          { label: "Triangle", correct: false },
          { label: "Circle", correct: false },
          { label: "Square", correct: false },
          { label: "Volume", correct: true },
        ],
      },
      {
        kicker: "Quantitative reasoning",
        domain: "quantitative reasoning",
        prompt: "If 3 machines make 3 parts in 3 minutes, how many minutes do 9 machines need to make 9 parts?",
        options: [
          { label: "3 minutes", correct: true },
          { label: "6 minutes", correct: false },
          { label: "9 minutes", correct: false },
          { label: "27 minutes", correct: false },
        ],
      },
      {
        kicker: "Quantitative reasoning",
        domain: "quantitative reasoning",
        prompt: "A price is reduced by 20% and is now $80. What was the original price?",
        options: [
          { label: "$96", correct: false },
          { label: "$100", correct: true },
          { label: "$104", correct: false },
          { label: "$120", correct: false },
        ],
      },
      {
        kicker: "Code reasoning",
        domain: "quantitative reasoning",
        prompt: "Using A=1, B=2, C=3, and so on, CAT = 24 and DOG = 26. What is FISH?",
        options: [
          { label: "38", correct: false },
          { label: "40", correct: false },
          { label: "42", correct: true },
          { label: "44", correct: false },
        ],
      },
      {
        kicker: "Spatial pattern",
        domain: "spatial reasoning",
        prompt: "A 3 by 3 pattern shifts one place left on each row. Row 1 is: A B C. Row 2 is: B C A. Row 3 is: C A ?. What fills the blank?",
        options: [
          { label: "A", correct: false },
          { label: "B", correct: true },
          { label: "C", correct: false },
          { label: "D", correct: false },
        ],
      },
      {
        kicker: "Spatial rotation",
        domain: "spatial reasoning",
        prompt: "If the shape L points up and is rotated 90 degrees clockwise, which direction does its long side point?",
        options: [
          { label: "Up", correct: false },
          { label: "Down", correct: false },
          { label: "Left", correct: false },
          { label: "Right", correct: true },
        ],
      },
      {
        kicker: "Logical deduction",
        domain: "logical reasoning",
        prompt: "All bloons are kelps. No kelps are mards. Which statement must be true?",
        options: [
          { label: "All mards are bloons.", correct: false },
          { label: "Some bloons are mards.", correct: false },
          { label: "No bloons are mards.", correct: true },
          { label: "No kelps are bloons.", correct: false },
        ],
      },
      {
        kicker: "Number series",
        domain: "pattern reasoning",
        prompt: "What number comes next? 5, 10, 20, 40, ?",
        options: [
          { label: "45", correct: false },
          { label: "60", correct: false },
          { label: "80", correct: true },
          { label: "100", correct: false },
        ],
      },
      {
        kicker: "Number series",
        domain: "pattern reasoning",
        prompt: "What number comes next? 1, 4, 9, 16, 25, ?",
        options: [
          { label: "30", correct: false },
          { label: "34", correct: false },
          { label: "36", correct: true },
          { label: "40", correct: false },
        ],
      },
      {
        kicker: "Number series",
        domain: "pattern reasoning",
        prompt: "What number comes next? 81, 27, 9, 3, ?",
        options: [
          { label: "0", correct: false },
          { label: "1", correct: true },
          { label: "2", correct: false },
          { label: "6", correct: false },
        ],
      },
      {
        kicker: "Letter pattern",
        domain: "pattern reasoning",
        prompt: "What letter comes next? B, D, G, K, P, ?",
        options: [
          { label: "T", correct: false },
          { label: "U", correct: false },
          { label: "V", correct: true },
          { label: "W", correct: false },
        ],
      },
      {
        kicker: "Letter pattern",
        domain: "pattern reasoning",
        prompt: "What comes next? AZ, BY, CX, ?",
        options: [
          { label: "DW", correct: true },
          { label: "DV", correct: false },
          { label: "EX", correct: false },
          { label: "EW", correct: false },
        ],
      },
      {
        kicker: "Verbal analogy",
        domain: "verbal reasoning",
        prompt: "Hand is to glove as foot is to:",
        options: [
          { label: "Shoe", correct: false },
          { label: "Sock", correct: true },
          { label: "Toe", correct: false },
          { label: "Walk", correct: false },
        ],
      },
      {
        kicker: "Verbal analogy",
        domain: "verbal reasoning",
        prompt: "Author is to book as composer is to:",
        options: [
          { label: "Paint", correct: false },
          { label: "Instrument", correct: false },
          { label: "Symphony", correct: true },
          { label: "Library", correct: false },
        ],
      },
      {
        kicker: "Verbal analogy",
        domain: "verbal reasoning",
        prompt: "Transparent is to opaque as flexible is to:",
        options: [
          { label: "Rigid", correct: true },
          { label: "Elastic", correct: false },
          { label: "Clear", correct: false },
          { label: "Curved", correct: false },
        ],
      },
      {
        kicker: "Classification",
        domain: "verbal reasoning",
        prompt: "Which word does not belong with the others?",
        options: [
          { label: "Copper", correct: false },
          { label: "Iron", correct: false },
          { label: "Silver", correct: false },
          { label: "Oxygen", correct: true },
        ],
      },
      {
        kicker: "Quantitative reasoning",
        domain: "quantitative reasoning",
        prompt: "What is 15% of 200?",
        options: [
          { label: "15", correct: false },
          { label: "20", correct: false },
          { label: "30", correct: true },
          { label: "45", correct: false },
        ],
      },
      {
        kicker: "Quantitative reasoning",
        domain: "quantitative reasoning",
        prompt: "A train travels 60 miles per hour for 2.5 hours. How far does it travel?",
        options: [
          { label: "120 miles", correct: false },
          { label: "135 miles", correct: false },
          { label: "150 miles", correct: true },
          { label: "180 miles", correct: false },
        ],
      },
      {
        kicker: "Quantitative reasoning",
        domain: "quantitative reasoning",
        prompt: "If x + 7 = 19, what is x?",
        options: [
          { label: "10", correct: false },
          { label: "11", correct: false },
          { label: "12", correct: true },
          { label: "13", correct: false },
        ],
      },
      {
        kicker: "Number series",
        domain: "pattern reasoning",
        prompt: "What number comes next? 4, 9, 19, 39, ?",
        options: [
          { label: "59", correct: false },
          { label: "69", correct: false },
          { label: "79", correct: true },
          { label: "89", correct: false },
        ],
      },
      {
        kicker: "Logical deduction",
        domain: "logical reasoning",
        prompt: "Some zargs are nims. All nims are tors. Which statement must be true?",
        options: [
          { label: "All zargs are tors.", correct: false },
          { label: "Some zargs are tors.", correct: true },
          { label: "No zargs are tors.", correct: false },
          { label: "All tors are zargs.", correct: false },
        ],
      },
      {
        kicker: "Logical deduction",
        domain: "logical reasoning",
        prompt: "If all artists are dreamers, which statement must be true?",
        options: [
          { label: "All dreamers are artists.", correct: false },
          { label: "Some artists are not dreamers.", correct: false },
          { label: "Every artist is a dreamer.", correct: true },
          { label: "No dreamers are artists.", correct: false },
        ],
      },
      {
        kicker: "Logical deduction",
        domain: "logical reasoning",
        prompt: "If rain always makes the street wet, and the street is not wet, what must be true?",
        options: [
          { label: "It rained earlier.", correct: false },
          { label: "It did not rain.", correct: true },
          { label: "The street is covered.", correct: false },
          { label: "Rain is impossible.", correct: false },
        ],
      },
      {
        kicker: "Spatial rotation",
        domain: "spatial reasoning",
        prompt: "A cube has red on top and blue on the front. If the cube is tipped backward so the front face moves onto the top, which color is now on top?",
        options: [
          { label: "Red", correct: false },
          { label: "Blue", correct: true },
          { label: "Green", correct: false },
          { label: "Cannot be determined", correct: false },
        ],
      },
      {
        kicker: "Spatial pattern",
        domain: "spatial reasoning",
        prompt: "A checker pattern starts: black, white, black. The next row starts: white, black, white. What starts the third row?",
        options: [
          { label: "Black", correct: true },
          { label: "White", correct: false },
          { label: "Gray", correct: false },
          { label: "Cannot be determined", correct: false },
        ],
      },
      {
        kicker: "Spatial sequence",
        domain: "spatial reasoning",
        prompt: "What shape comes next? Triangle, diamond, square, triangle, diamond, ?",
        options: [
          { label: "Circle", correct: false },
          { label: "Triangle", correct: false },
          { label: "Diamond", correct: false },
          { label: "Square", correct: true },
        ],
      },
      {
        kicker: "Matrix reasoning",
        domain: "pattern reasoning",
        prompt: "In a 2 by 2 grid, the top row is 4 then 8. The bottom row is 6 then ?. If each row doubles, what fills the blank?",
        options: [
          { label: "10", correct: false },
          { label: "12", correct: true },
          { label: "14", correct: false },
          { label: "16", correct: false },
        ],
      },
      {
        kicker: "Ordering",
        domain: "verbal reasoning",
        prompt: "Alphabetically, which word comes third: lemon, apple, grape, banana?",
        options: [
          { label: "Apple", correct: false },
          { label: "Banana", correct: false },
          { label: "Grape", correct: true },
          { label: "Lemon", correct: false },
        ],
      },
      {
        kicker: "Vocabulary relation",
        domain: "verbal reasoning",
        prompt: "Which pair is most similar in meaning?",
        options: [
          { label: "Exhausted and tired", correct: true },
          { label: "Brave and timid", correct: false },
          { label: "Ancient and modern", correct: false },
          { label: "Silent and noisy", correct: false },
        ],
      },
      {
        kicker: "Ordering logic",
        domain: "logical reasoning",
        prompt: "A is older than B. C is younger than B. Who is oldest?",
        options: [
          { label: "A", correct: true },
          { label: "B", correct: false },
          { label: "C", correct: false },
          { label: "Cannot be determined", correct: false },
        ],
      },
      {
        kicker: "Number series",
        domain: "pattern reasoning",
        prompt: "What number comes next? 2, 3, 5, 8, 13, ?",
        options: [
          { label: "18", correct: false },
          { label: "20", correct: false },
          { label: "21", correct: true },
          { label: "23", correct: false },
        ],
      },
      {
        kicker: "Matrix reasoning",
        domain: "pattern reasoning",
        prompt: "Each row follows the same rule: 2, 5, 8 and 4, 7, 10. What completes 6, 9, ?",
        options: [
          { label: "11", correct: false },
          { label: "12", correct: true },
          { label: "13", correct: false },
          { label: "15", correct: false },
        ],
      },
      {
        kicker: "Thinking style",
        domain: "style profile",
        prompt: "A problem has too many details. What do you do first?",
        options: [
          {
            label: "Find the hidden rule",
            detail: "You reduce the noise until the structure appears.",
            value: "pattern",
          },
          {
            label: "Sketch the shape of it",
            detail: "You need to see how the pieces move in space.",
            value: "spatial",
          },
          {
            label: "Put it into plain language",
            detail: "You translate complexity into a sentence that can be tested.",
            value: "verbal",
          },
        ],
      },
      {
        kicker: "Thinking style",
        domain: "style profile",
        prompt: "You solve fastest when the question is framed as...",
        options: [
          {
            label: "A sequence",
            detail: "What changes, what stays constant, what comes next.",
            value: "pattern",
          },
          {
            label: "A map",
            detail: "Where things sit, rotate, stack, or connect.",
            value: "spatial",
          },
          {
            label: "A debate",
            detail: "Which claim is true, false, or missing evidence.",
            value: "verbal",
          },
        ],
      },
      {
        kicker: "Thinking style",
        domain: "style profile",
        prompt: "Under time pressure, your mind usually...",
        options: [
          {
            label: "Runs quick eliminations",
            detail: "You remove impossibilities until one answer remains.",
            value: "pattern",
          },
          {
            label: "Mentally rearranges the scene",
            detail: "You test different layouts in your head.",
            value: "spatial",
          },
          {
            label: "Names the contradiction",
            detail: "You catch the word or premise that breaks the logic.",
            value: "verbal",
          },
        ],
      },
      {
        kicker: "Thinking style",
        domain: "style profile",
        prompt: "A new concept sticks best when someone gives you...",
        options: [
          {
            label: "A clean formula",
            detail: "Once the rule is clear, you can apply it anywhere.",
            value: "pattern",
          },
          {
            label: "A diagram",
            detail: "Your memory locks onto visual position and movement.",
            value: "spatial",
          },
          {
            label: "An analogy",
            detail: "A good comparison makes the abstract feel obvious.",
            value: "verbal",
          },
        ],
      },
      {
        kicker: "Thinking style",
        domain: "style profile",
        prompt: "When answers are close, you trust...",
        options: [
          {
            label: "The answer with the fewest exceptions",
            detail: "Consistency matters more than flash.",
            value: "pattern",
          },
          {
            label: "The answer that fits the whole picture",
            detail: "You sense when a configuration is off.",
            value: "spatial",
          },
          {
            label: "The answer that survives explanation",
            detail: "If you cannot defend it clearly, you keep testing.",
            value: "verbal",
          },
        ],
      },
    ],
    scoreBands: [
      {
        min: 0,
        max: 13,
        title: "Developing Reasoning Range",
        label: "Practice band",
        summary:
          "This longer sample suggests the reasoning items were challenging today. Treat it as a practice readout rather than a fixed statement about intelligence.",
        strengths: ["Persistence through hard items", "Exposure to multiple reasoning formats", "Clear baseline for retakes"],
        weaknesses: ["Pattern traps may slow you down", "Time pressure can reduce accuracy", "Multi-step questions need slower checking"],
        situations:
          "You may do better when you write down the rule, eliminate obvious misses, and avoid jumping at the first familiar answer.",
        relationships:
          "A lower score on a short sample does not define your relational intelligence. You may still read people, context, and emotion very well.",
        parenting:
          "If you were coaching a child through similar items, focus on process: name the rule, test it, then choose.",
        examples:
          "Comparable fictional learning arcs: Neville Longbottom, Steve Rogers before the serum, Mulan in training.",
        member:
          "Monthly access would unlock a longer adaptive version with more items per domain, explanations, retakes, and progress tracking.",
      },
      {
        min: 14,
        max: 24,
        title: "Balanced Reasoning Range",
        label: "Solid sample band",
        summary:
          "You handled a mixed set of reasoning problems with a balanced score. Your result suggests practical problem-solving across several formats.",
        strengths: ["Everyday logic", "Rule spotting", "Answer elimination"],
        weaknesses: ["Harder abstraction may need more time", "Spatial items can benefit from sketching", "Small wording changes can create traps"],
        situations:
          "You are likely most effective when you can slow down enough to test the rule behind each answer choice.",
        relationships:
          "You probably bring a steady, practical kind of intelligence into conversations: less showy, more useful.",
        parenting:
          "You may teach problem-solving by modeling patience and showing that mistakes are information, not failure.",
        examples:
          "Famous echoes: Benjamin Franklin, Jane Goodall. Fictional echoes: Hermione Granger, Chidi Anagonye.",
        member:
          "Monthly access would show your domain-by-domain history across pattern, verbal, quantitative, spatial, and logic items.",
      },
      {
        min: 25,
        max: 31,
        title: "Strong Reasoning Range",
        label: "High sample band",
        summary:
          "You scored strongly on this IQ-style sample. You appear comfortable finding rules, checking abstractions, and solving under uncertainty.",
        strengths: ["Abstract pattern recognition", "Fast correction of false leads", "Multi-step reasoning"],
        weaknesses: ["May rush easy-looking items", "Can overcomplicate simple rules", "May assume others see the logic as quickly"],
        situations:
          "In complex situations, you can usually locate the structure and make a reasonable choice before every detail is known.",
        relationships:
          "You may show care by solving problems quickly. The relationship edge is making space for feelings before solutions.",
        parenting:
          "You may encourage curiosity, puzzles, and independent thinking. The edge is praising effort as much as being right.",
        examples:
          "Famous echoes: Ada Lovelace, Alan Turing. Fictional echoes: Sherlock Holmes, Shuri.",
        member:
          "Monthly access would unlock a harder extended bank, answer explanations, percentile-style tracking, and retake comparisons.",
      },
      {
        min: 32,
        max: 37,
        title: "Exceptional Sample Range",
        label: "Top sample band",
        summary:
          "You performed at the top of this sample. That points to strong abstract reasoning, careful attention, and quick rule detection.",
        strengths: ["High pattern accuracy", "Flexible reasoning", "Strong working-memory control"],
        weaknesses: ["Can become impatient with slower processes", "May miss human context when the logic is obvious", "Needs harder items for a finer read"],
        situations:
          "You are likely strongest in problems that reward clean abstraction, precise elimination, and comfort with unfamiliar rules.",
        relationships:
          "Your mind may move faster than the conversation. Slowing down your explanation can make your intelligence feel generous rather than intimidating.",
        parenting:
          "You may raise children around curiosity, strategy, and mental challenge. The edge is letting them struggle without turning every moment into a test.",
        examples:
          "Famous echoes: Marie Curie, John von Neumann. Fictional echoes: Ender Wiggin, Beth Harmon.",
        member:
          "Monthly access would unlock advanced item sets, explanation review, a larger scoring sample, and comparisons across every cognitive retake.",
      },
    ],
  },
  {
    id: "archetype",
    title: "Archetype Map",
    category: "Psychology",
    tone: "coral",
    symbol: "AR",
    status: "Live",
    time: "6 min",
    items: "24 prompts",
    price: "$1 report",
    description:
      "A mythic but practical profile of the inner pattern that drives your decisions, relationships, and stress response.",
    questions: [
      {
        kicker: "Core drive",
        prompt: "When a group feels stuck, you most want to...",
        options: [
          { label: "Name the truth", detail: "You look for the insight everyone is avoiding.", value: "sage" },
          { label: "Move the room", detail: "You turn hesitation into momentum.", value: "catalyst" },
          { label: "Protect the people", detail: "You notice who is overwhelmed or left behind.", value: "guardian" },
          { label: "Find a new route", detail: "You want more freedom and possibility.", value: "explorer" },
        ],
      },
      {
        kicker: "Motivation",
        prompt: "You feel most alive when you are...",
        options: [
          { label: "Understanding something deeply", detail: "Meaning and mastery pull you in.", value: "sage" },
          { label: "Starting something bold", detail: "You like the spark before the path is obvious.", value: "catalyst" },
          { label: "Making people feel safe", detail: "Your attention moves toward trust and care.", value: "guardian" },
          { label: "Crossing a threshold", detail: "A new place, identity, or challenge wakes you up.", value: "explorer" },
        ],
      },
      {
        kicker: "Conflict style",
        prompt: "In conflict, your first instinct is to...",
        options: [
          { label: "Clarify what is true", detail: "You separate facts from stories.", value: "sage" },
          { label: "Say the hard thing", detail: "You push the energy into the open.", value: "catalyst" },
          { label: "Stabilize the bond", detail: "You want repair before escalation.", value: "guardian" },
          { label: "Take space", detail: "Distance helps you find your real answer.", value: "explorer" },
        ],
      },
      {
        kicker: "Shadow",
        prompt: "Your pattern gets messy when you...",
        options: [
          { label: "Detach into analysis", detail: "You can study pain instead of feeling it.", value: "sage" },
          { label: "Mistake intensity for truth", detail: "A strong feeling can become a command.", value: "catalyst" },
          { label: "Over-function for others", detail: "You help until resentment appears.", value: "guardian" },
          { label: "Leave before choosing", detail: "Freedom can become avoidance.", value: "explorer" },
        ],
      },
      {
        kicker: "Best environment",
        prompt: "You do your best work in a place that gives you...",
        options: [
          { label: "Depth", detail: "Room to think, learn, and refine.", value: "sage" },
          { label: "Momentum", detail: "Enough pressure to make things real.", value: "catalyst" },
          { label: "Trust", detail: "A clear sense that people have each other.", value: "guardian" },
          { label: "Autonomy", detail: "Space to explore and choose your route.", value: "explorer" },
        ],
      },
    ],
    profiles: {
      sage: {
        title: "The Sage",
        score: "Dominant archetype: meaning-maker",
        summary:
          "You are driven by understanding. Your power is the ability to slow down, see the deeper pattern, and help others think more clearly.",
        strengths: ["Insight", "Discernment", "Calm perspective"],
        weaknesses: ["Can detach", "May hide behind expertise", "Can hesitate when action is needed"],
        situations:
          "In uncertainty, you become the translator. You make complexity less frightening by giving it shape.",
        relationships:
          "You love through attention, thoughtful questions, and remembering what matters. People may need more warmth than your analysis naturally shows.",
        parenting:
          "You may raise curious, articulate children. Your growth edge is validating emotion before turning it into a lesson.",
        examples:
          "Famous echoes: Carl Jung, Jane Goodall. Fictional echoes: Gandalf, Professor X.",
        member:
          "Monthly access would connect this archetype to your MBTI-style, Enneagram, and relationship results so your pattern feels integrated.",
      },
      catalyst: {
        title: "The Catalyst",
        score: "Dominant archetype: momentum-maker",
        summary:
          "You carry ignition energy. You notice what wants to happen next and often become the spark that makes other people brave.",
        strengths: ["Initiative", "Charisma", "Creative disruption"],
        weaknesses: ["Can overheat", "May move before listening", "Can confuse urgency with importance"],
        situations:
          "In stale rooms, you bring motion. You can make a team feel that the future has a pulse again.",
        relationships:
          "You are exciting, direct, and alive in connection. Loved ones may need reassurance that your intensity is not instability.",
        parenting:
          "You may encourage courage and self-expression. Your growth edge is building rhythm and follow-through around the spark.",
        examples:
          "Famous echoes: Amelia Earhart, Steve Jobs. Fictional echoes: Katniss Everdeen, Daenerys Targaryen.",
        member:
          "Monthly access would add leadership, conflict, and energy-management views across every test result in your library.",
      },
      guardian: {
        title: "The Guardian",
        score: "Dominant archetype: trust-builder",
        summary:
          "You notice the emotional weather. Your gift is making people feel held, protected, and capable of trying again.",
        strengths: ["Loyalty", "Care", "Practical steadiness"],
        weaknesses: ["Can overextend", "May avoid needed conflict", "Can carry invisible resentment"],
        situations:
          "When stakes are high, you stabilize the group and make sure nobody gets treated like a disposable piece.",
        relationships:
          "You love consistently. Your partners and friends feel safe, though you may need to ask directly for care in return.",
        parenting:
          "You are likely warm, protective, and reliable. The edge is letting children struggle enough to discover their own strength.",
        examples:
          "Famous echoes: Fred Rogers, Dolly Parton. Fictional echoes: Samwise Gamgee, Marge Simpson.",
        member:
          "Monthly access would unlock comparison reports that show where care becomes leadership and where it becomes self-erasure.",
      },
      explorer: {
        title: "The Explorer",
        score: "Dominant archetype: possibility-seeker",
        summary:
          "You are oriented toward freedom, discovery, and becoming. You can sense when life has gotten too small.",
        strengths: ["Adaptability", "Curiosity", "Courage to change"],
        weaknesses: ["Can avoid commitment", "May romanticize escape", "Can frustrate steadier people"],
        situations:
          "When people are trapped in old assumptions, you find the door, the map, or the question that opens things up.",
        relationships:
          "You love best when connection has oxygen. You may need to show that freedom and reliability can exist together.",
        parenting:
          "You may raise independent, adventurous children. The growth edge is creating anchors they can count on.",
        examples:
          "Famous echoes: Josephine Baker, David Bowie. Fictional echoes: Moana, Arya Stark.",
        member:
          "Monthly access would connect your exploration pattern to career, attachment, and culture-match tests as the library grows.",
      },
    },
  },
  {
    id: "mbti",
    title: "Myers-Briggs Style Type",
    category: "Psychology",
    tone: "violet",
    symbol: "MB",
    status: "Live",
    time: "12 min",
    items: "60 prompts",
    price: "$1 report",
    description:
      "A type-map inspired by the familiar MBTI framework, focused on how you gain energy, process information, decide, and plan.",
    questions: [
      {
        kicker: "Energy",
        prompt: "After a demanding week, the reset you crave most is...",
        options: [
          { label: "A lively dinner", detail: "People help you come back online.", value: "enfp" },
          { label: "A private project", detail: "Solitude lets your thoughts settle.", value: "intj" },
          { label: "A familiar routine", detail: "Peace returns through order and comfort.", value: "isfj" },
          { label: "A focused challenge", detail: "You want a target worth leading toward.", value: "entj" },
        ],
      },
      {
        kicker: "Information",
        prompt: "You trust an idea most when it has...",
        options: [
          { label: "Possibility", detail: "It opens several exciting doors.", value: "enfp" },
          { label: "Architecture", detail: "The underlying system is elegant.", value: "intj" },
          { label: "Proof in daily life", detail: "It has helped real people before.", value: "isfj" },
          { label: "Strategic leverage", detail: "It creates a better outcome fast.", value: "entj" },
        ],
      },
      {
        kicker: "Decisions",
        prompt: "When a choice matters, you usually prioritize...",
        options: [
          { label: "Human possibility", detail: "Which option keeps people alive and inspired.", value: "enfp" },
          { label: "Long-term coherence", detail: "Which option still makes sense later.", value: "intj" },
          { label: "Practical care", detail: "Which option protects needs and obligations.", value: "isfj" },
          { label: "Clear results", detail: "Which option gets the mission done.", value: "entj" },
        ],
      },
      {
        kicker: "Stress",
        prompt: "When stress hits, your less helpful habit is...",
        options: [
          { label: "Chasing every possibility", detail: "You start too many threads.", value: "enfp" },
          { label: "Retreating into certainty", detail: "You dismiss input too quickly.", value: "intj" },
          { label: "Absorbing everyone else's needs", detail: "Your own limits disappear.", value: "isfj" },
          { label: "Turning blunt", detail: "Efficiency can crowd out tenderness.", value: "entj" },
        ],
      },
      {
        kicker: "Planning",
        prompt: "Your ideal plan feels like...",
        options: [
          { label: "A living invitation", detail: "Clear enough to begin, open enough to evolve.", value: "enfp" },
          { label: "A smart blueprint", detail: "Every part has a reason.", value: "intj" },
          { label: "A dependable checklist", detail: "People know what happens next.", value: "isfj" },
          { label: "A campaign strategy", detail: "Priorities, ownership, and a win condition.", value: "entj" },
        ],
      },
    ],
    profiles: {
      enfp: {
        title: "ENFP-Style People Catalyst",
        score: "Type pattern: expansive intuitive connector",
        summary:
          "You read possibility in people and situations. Your energy rises when an idea feels alive and everyone has room to become more themselves.",
        strengths: ["Creativity", "Encouragement", "Fast emotional pattern reading"],
        weaknesses: ["Can scatter energy", "May resist routine", "Can over-personalize feedback"],
        situations:
          "You are at your best in brainstorms, early-stage projects, social repair, and moments where hope needs language.",
        relationships:
          "You bring warmth, curiosity, and emotional electricity. Partners may need consistency along with inspiration.",
        parenting:
          "You may raise imaginative, expressive kids. Your growth edge is dependable structure without dimming the magic.",
        examples:
          "Popularly compared examples: Robin Williams, Oscar Wilde. Fictional echoes: Leslie Knope, Aang.",
        member:
          "Monthly access would save this type beside your Enneagram and archetype results, showing where enthusiasm becomes strategy.",
      },
      intj: {
        title: "INTJ-Style Quiet Strategist",
        score: "Type pattern: independent systems builder",
        summary:
          "You naturally look for the architecture beneath behavior. Once the model is clear, you can move with striking confidence.",
        strengths: ["Strategic focus", "Independence", "Long-range thinking"],
        weaknesses: ["Can seem distant", "May dismiss emotional timing", "Can over-optimize"],
        situations:
          "You shine when the room needs a plan that still makes sense six months from now.",
        relationships:
          "You show love through loyalty, competence, and carefully chosen attention. Saying the warm thing out loud helps.",
        parenting:
          "You may teach independence and mastery. The edge is remembering that connection is not always efficient.",
        examples:
          "Popularly compared examples: Isaac Newton, Friedrich Nietzsche. Fictional echoes: Bruce Wayne, Beth Harmon.",
        member:
          "Monthly access would add communication, career, and character-match layers to show how your strategy reads in different contexts.",
      },
      isfj: {
        title: "ISFJ-Style Steady Protector",
        score: "Type pattern: loyal practical caretaker",
        summary:
          "You notice the real needs behind the noise. Your steadiness makes life feel more humane and less chaotic.",
        strengths: ["Reliability", "Memory for details", "Practical kindness"],
        weaknesses: ["Can self-silence", "May resist sudden change", "Can become quietly resentful"],
        situations:
          "You are invaluable when people need follow-through, trust, and care that actually arrives on time.",
        relationships:
          "You love through consistency and attention. Your work is asking for reciprocity before you are depleted.",
        parenting:
          "You may build a safe and thoughtful home. The edge is letting children see your needs too.",
        examples:
          "Popularly compared examples: Queen Elizabeth II, Rosa Parks. Fictional echoes: Samwise Gamgee, Molly Weasley.",
        member:
          "Monthly access would compare your care pattern across attachment, Enneagram, and relationship tests.",
      },
      entj: {
        title: "ENTJ-Style Decisive Director",
        score: "Type pattern: strategic organizer",
        summary:
          "You see paths, resources, and leverage. When a goal matters, you instinctively organize people and decisions around it.",
        strengths: ["Leadership", "Execution", "Clear prioritization"],
        weaknesses: ["Can bulldoze nuance", "May undervalue rest", "Can mistake vulnerability for inefficiency"],
        situations:
          "You do well where stakes are real, ownership is clear, and the team needs direction instead of drift.",
        relationships:
          "You show care by building a better future. Loved ones may need softness before solutions.",
        parenting:
          "You may raise confident, capable kids. The growth edge is honoring their pace as well as their potential.",
        examples:
          "Popularly compared examples: Margaret Thatcher, Napoleon Bonaparte. Fictional echoes: Miranda Priestly, Princess Leia.",
        member:
          "Monthly access would unlock leadership, conflict, and growth views across your complete test library.",
      },
    },
  },
  {
    id: "enneagram",
    title: "Enneagram Core Drive",
    category: "Psychology",
    tone: "gold",
    symbol: "EN",
    status: "Live",
    time: "10 min",
    items: "45 prompts",
    price: "$1 report",
    description:
      "A motivation test that looks beneath behavior to the fear, desire, and coping pattern that quietly steers you.",
    questions: [
      {
        kicker: "Hidden aim",
        prompt: "The compliment that lands deepest is...",
        options: [
          { label: "You did that excellently", detail: "Competence feels like safety.", value: "three" },
          { label: "You can be trusted", detail: "Loyalty and preparedness matter.", value: "six" },
          { label: "You make things peaceful", detail: "Harmony feels like home.", value: "nine" },
          { label: "You are truly original", detail: "Being known as yourself matters.", value: "four" },
        ],
      },
      {
        kicker: "Stress habit",
        prompt: "When insecure, you are most likely to...",
        options: [
          { label: "Work harder", detail: "Success quiets the doubt for a while.", value: "three" },
          { label: "Scan for risks", detail: "You prepare for what could go wrong.", value: "six" },
          { label: "Numb the conflict", detail: "You postpone disruption to keep calm.", value: "nine" },
          { label: "Intensify the feeling", detail: "You search for what the emotion means.", value: "four" },
        ],
      },
      {
        kicker: "Desire",
        prompt: "You secretly want life to prove that you are...",
        options: [
          { label: "Valuable", detail: "Your effort, skill, and image matter.", value: "three" },
          { label: "Secure", detail: "You can rely on people and systems.", value: "six" },
          { label: "At ease", detail: "You belong without having to fight for it.", value: "nine" },
          { label: "Significant", detail: "Your inner world is seen and understood.", value: "four" },
        ],
      },
      {
        kicker: "Blind spot",
        prompt: "People who love you might say you...",
        options: [
          { label: "Turn life into a performance", detail: "They want the person under the polish.", value: "three" },
          { label: "Ask for certainty nobody can give", detail: "They want you to trust the present.", value: "six" },
          { label: "Disappear inside agreement", detail: "They want your real preference.", value: "nine" },
          { label: "Make longing louder than reality", detail: "They want you to stay with what is here.", value: "four" },
        ],
      },
      {
        kicker: "Growth",
        prompt: "Your growth would feel like...",
        options: [
          { label: "Being loved without achievement", detail: "Worth before winning.", value: "three" },
          { label: "Acting without total certainty", detail: "Courage before guarantees.", value: "six" },
          { label: "Letting your wants take up space", detail: "Presence before peacekeeping.", value: "nine" },
          { label: "Choosing the ordinary good", detail: "Wholeness before specialness.", value: "four" },
        ],
      },
    ],
    profiles: {
      three: {
        title: "Type Three: The Achiever",
        score: "Core drive: value through accomplishment",
        summary:
          "You are adaptive, ambitious, and tuned to what excellence looks like in a given room. Your work is remembering you are more than your output.",
        strengths: ["Drive", "Presentation", "Goal focus"],
        weaknesses: ["Image management", "Burnout risk", "Avoiding vulnerability"],
        situations:
          "You become highly effective when success is visible, the stakes are clear, and the path rewards polish and momentum.",
        relationships:
          "You bring pride and energy to people you love. Intimacy deepens when you let them see the unfinished parts too.",
        parenting:
          "You may model ambition and confidence. The edge is praising effort, honesty, and rest as much as achievement.",
        examples:
          "Famous echoes: Muhammad Ali, Madonna. Fictional echoes: Jay Gatsby, Rachel Berry.",
        member:
          "Monthly access would unlock wings, stress paths, growth prompts, and comparisons with your archetype and MBTI-style results.",
      },
      six: {
        title: "Type Six: The Loyalist",
        score: "Core drive: safety through trust and preparation",
        summary:
          "You are alert, loyal, and thoughtful about risk. Your gift is seeing what others miss; your work is not letting fear become the boss.",
        strengths: ["Loyalty", "Preparedness", "Skeptical intelligence"],
        weaknesses: ["Anxiety loops", "Testing trust", "Catastrophizing"],
        situations:
          "You are crucial when decisions need risk checks, contingency plans, and honest questions before commitment.",
        relationships:
          "You love with devotion and vigilance. People may need to know when you want reassurance versus when you want problem-solving.",
        parenting:
          "You may create safety and preparedness. The edge is letting kids experience uncertainty without inheriting your alarm system.",
        examples:
          "Famous echoes: Malcolm X, Mark Ruffalo. Fictional echoes: Ron Weasley, Marlin.",
        member:
          "Monthly access would add security patterns, trust exercises, and cross-test comparisons for stress and attachment.",
      },
      nine: {
        title: "Type Nine: The Peacemaker",
        score: "Core drive: harmony through ease and belonging",
        summary:
          "You have a calming presence and a gift for seeing many sides. Your growth is letting your own desire become as real as everyone else's.",
        strengths: ["Patience", "Mediation", "Grounded empathy"],
        weaknesses: ["Avoidance", "Self-forgetting", "Slow decisions"],
        situations:
          "You help groups settle, listen, and move without unnecessary damage. Your voice matters most when you risk using it.",
        relationships:
          "You offer warmth and acceptance. Connection grows when you share wants before they become quiet resistance.",
        parenting:
          "You may create a peaceful, accepting home. The edge is modeling healthy disagreement and self-advocacy.",
        examples:
          "Famous echoes: Abraham Lincoln, Audrey Hepburn. Fictional echoes: Winnie the Pooh, Chidi Anagonye.",
        member:
          "Monthly access would add conflict practice, energy patterns, and comparison views with relationship and archetype tests.",
      },
      four: {
        title: "Type Four: The Individualist",
        score: "Core drive: identity through depth and authenticity",
        summary:
          "You are emotionally nuanced and drawn to what feels real. Your work is learning that ordinary life can hold your uniqueness too.",
        strengths: ["Depth", "Aesthetic sensitivity", "Emotional honesty"],
        weaknesses: ["Comparison", "Mood identification", "Longing for elsewhere"],
        situations:
          "You bring meaning to places that have become too flat, performative, or emotionally dishonest.",
        relationships:
          "You crave being truly known and offer the same depth in return. Loved ones may need steadiness alongside intensity.",
        parenting:
          "You may validate a child's inner life beautifully. The edge is not making every feeling the center of the room.",
        examples:
          "Famous echoes: Frida Kahlo, Prince. Fictional echoes: Jo March, Fleabag.",
        member:
          "Monthly access would add emotional regulation prompts, creativity notes, and full-library result comparisons.",
      },
    },
  },
  {
    id: "thrones",
    title: "Game of Thrones Character Match",
    category: "Pop Culture",
    tone: "coral",
    symbol: "GT",
    status: "Live",
    time: "5 min",
    items: "18 prompts",
    price: "$1 report",
    description:
      "A fan-style character lens for how you handle loyalty, power, strategy, and survival when the room gets dramatic.",
    questions: [
      {
        kicker: "Power",
        prompt: "When the stakes turn political, your advantage is...",
        options: [
          { label: "Reading motives", detail: "You catch the deal under the speech.", value: "tyrion" },
          { label: "Moving unseen", detail: "You do not need the throne to change the ending.", value: "arya" },
          { label: "Taking responsibility", detail: "You lead because somebody has to.", value: "jon" },
          { label: "Commanding belief", detail: "You make people feel part of a larger destiny.", value: "daenerys" },
        ],
      },
      {
        kicker: "Loyalty",
        prompt: "You trust people most when they...",
        options: [
          { label: "Tell the truth cleverly", detail: "Honesty with intelligence earns you.", value: "tyrion" },
          { label: "Prove themselves in action", detail: "Words matter less than what they do.", value: "arya" },
          { label: "Stand their post", detail: "Duty matters even when it costs.", value: "jon" },
          { label: "Believe in the cause", detail: "Shared vision creates loyalty.", value: "daenerys" },
        ],
      },
      {
        kicker: "Conflict",
        prompt: "Your least filtered conflict move is...",
        options: [
          { label: "A perfect line", detail: "You can cut with language.", value: "tyrion" },
          { label: "A decisive exit", detail: "You leave and act on your own terms.", value: "arya" },
          { label: "A moral stand", detail: "You refuse the convenient wrong answer.", value: "jon" },
          { label: "A dramatic escalation", detail: "If it matters, you make the room feel it.", value: "daenerys" },
        ],
      },
      {
        kicker: "Survival",
        prompt: "In a dangerous world, you survive by...",
        options: [
          { label: "Staying useful", detail: "A sharp mind is protection.", value: "tyrion" },
          { label: "Staying adaptable", detail: "No one can pin down who you are becoming.", value: "arya" },
          { label: "Staying honorable", detail: "Your code is your anchor.", value: "jon" },
          { label: "Staying formidable", detail: "People hesitate when they know your fire.", value: "daenerys" },
        ],
      },
      {
        kicker: "Leadership",
        prompt: "People follow you because you offer...",
        options: [
          { label: "Perspective", detail: "You can make the impossible negotiable.", value: "tyrion" },
          { label: "Courage", detail: "You go first when the path is ugly.", value: "arya" },
          { label: "Integrity", detail: "You make sacrifice look possible.", value: "jon" },
          { label: "Vision", detail: "You make the future feel bigger than fear.", value: "daenerys" },
        ],
      },
    ],
    profiles: {
      tyrion: {
        title: "Tyrion Lannister Match",
        score: "Character pattern: strategic truth-teller",
        summary:
          "You survive through perception, language, and an ability to find leverage in rooms where other people only see danger.",
        strengths: ["Wit", "Political intelligence", "Unexpected empathy"],
        weaknesses: ["Defensive sarcasm", "Self-protection", "Testing people before trusting them"],
        situations:
          "In tense rooms, you can lower the temperature with humor or raise it with one brutally accurate sentence.",
        relationships:
          "You connect through honesty and intellectual intimacy. People may need to know when the joke is armor.",
        parenting:
          "You may teach children to think independently and question power. The edge is showing tenderness without making it a performance.",
        examples:
          "Famous echoes: Benjamin Franklin, Oscar Wilde. Fictional echoes: Tyrion Lannister, Loki.",
        member:
          "Monthly access would let fans compare this character result with archetype, Enneagram, and IQ-style profiles.",
      },
      arya: {
        title: "Arya Stark Match",
        score: "Character pattern: independent survivor",
        summary:
          "You are adaptive, fierce, and allergic to being boxed in. You would rather become dangerous than become owned.",
        strengths: ["Courage", "Adaptability", "Personal conviction"],
        weaknesses: ["Can isolate", "May turn pain into identity", "Can reject help too fast"],
        situations:
          "You excel when the official path is blocked and someone needs to find another way through.",
        relationships:
          "You are loyal, but not easily possessed. People earn closeness by respecting your autonomy.",
        parenting:
          "You may raise independent, brave children. The edge is teaching trust as well as self-reliance.",
        examples:
          "Famous echoes: Joan of Arc, Amelia Earhart. Fictional echoes: Arya Stark, Mulan.",
        member:
          "Monthly access would save this result and compare your independence pattern across all tests and retakes.",
      },
      jon: {
        title: "Jon Snow Match",
        score: "Character pattern: reluctant protector",
        summary:
          "You lead from duty more than ego. When things get hard, people trust that you will show up even if it costs you.",
        strengths: ["Honor", "Loyalty", "Crisis steadiness"],
        weaknesses: ["Can be rigid", "May carry too much alone", "Can underplay politics"],
        situations:
          "You are strongest when a group needs moral clarity and the courage to do the thankless thing.",
        relationships:
          "You love through loyalty and protection. Partners may need you to share the burden before it hardens into distance.",
        parenting:
          "You may model responsibility and courage. The edge is letting children see joy, not only duty.",
        examples:
          "Famous echoes: Ernest Shackleton, Abraham Lincoln. Fictional echoes: Jon Snow, Steve Rogers.",
        member:
          "Monthly access would connect this protector pattern to leadership, attachment, and Enneagram results.",
      },
      daenerys: {
        title: "Daenerys Targaryen Match",
        score: "Character pattern: visionary liberator",
        summary:
          "You carry intensity, conviction, and a hunger for transformation. At your best, you make people believe change is possible.",
        strengths: ["Vision", "Charisma", "Transformational courage"],
        weaknesses: ["Can escalate", "May confuse certainty with destiny", "Can struggle with dissent"],
        situations:
          "You are powerful when a stagnant system needs disruption, a bigger story, and someone willing to carry heat.",
        relationships:
          "You love passionately and expect loyalty. Intimacy deepens when disagreement is allowed to exist without becoming betrayal.",
        parenting:
          "You may raise children with confidence and boldness. The edge is teaching power with humility.",
        examples:
          "Famous echoes: Cleopatra, Catherine the Great. Fictional echoes: Daenerys Targaryen, Storm.",
        member:
          "Monthly access would compare your visionary pattern with archetype, Enneagram, and leadership tests.",
      },
    },
  },
  {
    id: "scifi",
    title: "Prestige Sci-Fi Survival Type",
    category: "Pop Culture",
    tone: "teal",
    symbol: "SF",
    status: "Live",
    time: "5 min",
    items: "20 prompts",
    price: "$1 report",
    description:
      "A trend-ready culture test for fans of bunker mysteries, future societies, and high-stakes sci-fi worlds.",
    questions: [
      {
        kicker: "World pressure",
        prompt: "In a sealed-off society, your first role would be...",
        options: [
          { label: "Fix the machine", detail: "Systems fail before people admit they are failing.", value: "engineer" },
          { label: "Protect the record", detail: "The truth is hidden in what people keep and erase.", value: "archivist" },
          { label: "Keep order", detail: "Fear spreads fast without steady leadership.", value: "sentinel" },
          { label: "Question the walls", detail: "You cannot stop wondering who benefits from the rules.", value: "outlier" },
        ],
      },
      {
        kicker: "Instinct",
        prompt: "When the official story feels thin, you...",
        options: [
          { label: "Check the wiring", detail: "Evidence lives in infrastructure.", value: "engineer" },
          { label: "Find the old files", detail: "History keeps receipts.", value: "archivist" },
          { label: "Watch the crowd", detail: "Panic tells you what matters.", value: "sentinel" },
          { label: "Follow the forbidden clue", detail: "The rule against looking is the clue.", value: "outlier" },
        ],
      },
      {
        kicker: "Risk",
        prompt: "You are willing to risk the most for...",
        options: [
          { label: "A working system", detail: "If the foundation fails, everyone pays.", value: "engineer" },
          { label: "The real story", detail: "A lie can outlive a broken machine.", value: "archivist" },
          { label: "The people in front of you", detail: "Safety is not abstract.", value: "sentinel" },
          { label: "A real sky", detail: "Survival without truth is not enough.", value: "outlier" },
        ],
      },
      {
        kicker: "Social read",
        prompt: "People would underestimate your...",
        options: [
          { label: "Technical patience", detail: "You can stay with a problem until it opens.", value: "engineer" },
          { label: "Quiet suspicion", detail: "You remember inconsistencies.", value: "archivist" },
          { label: "Moral backbone", detail: "You are steadier than you look.", value: "sentinel" },
          { label: "Refusal to comply", detail: "You can play along until you cannot.", value: "outlier" },
        ],
      },
      {
        kicker: "Ending",
        prompt: "The ending you want most is...",
        options: [
          { label: "The system repaired", detail: "People live because someone understood the machinery.", value: "engineer" },
          { label: "The archive restored", detail: "People live because the truth returns.", value: "archivist" },
          { label: "The community protected", detail: "People live because someone held the line.", value: "sentinel" },
          { label: "The door opened", detail: "People live because someone dared to leave.", value: "outlier" },
        ],
      },
    ],
    profiles: {
      engineer: {
        title: "The Engineer",
        score: "Survival role: systems fixer",
        summary:
          "You are the person who looks past speeches and asks what physically keeps the world running. Your competence is quiet power.",
        strengths: ["Practical intelligence", "Focus", "Mechanical patience"],
        weaknesses: ["Can dismiss feelings", "May overwork in crisis", "Can assume others see the obvious"],
        situations:
          "In unstable environments, you become essential because you understand the infrastructure everyone else takes for granted.",
        relationships:
          "You show love by making life work. People may need explicit tenderness alongside your practical care.",
        parenting:
          "You may teach competence and resilience. The edge is making room for wonder, not only function.",
        examples:
          "Famous echoes: Katherine Johnson, Hedy Lamarr. Fictional echoes: Naomi Nagata, Montgomery Scott.",
        member:
          "Monthly access would compare this survival role with IQ, archetype, and career-driver tests as new pop-culture drops arrive.",
      },
      archivist: {
        title: "The Archivist",
        score: "Survival role: memory keeper",
        summary:
          "You know that control often begins with erased history. Your power is patient attention to what the record is trying to say.",
        strengths: ["Research", "Pattern memory", "Quiet skepticism"],
        weaknesses: ["Can hoard information", "May move slowly", "Can distrust too much"],
        situations:
          "When everyone is arguing about the present, you find the document, detail, or memory that changes the whole story.",
        relationships:
          "You value depth and continuity. Loved ones feel known when you remember what others forget.",
        parenting:
          "You may give children roots, stories, and context. The edge is letting them write chapters you would not choose.",
        examples:
          "Famous echoes: Ida B. Wells, Carl Sagan. Fictional echoes: Obi-Wan Kenobi, Claudia from Warehouse 13.",
        member:
          "Monthly access would save this result and open comparisons with personality, Enneagram, and future fandom tests.",
      },
      sentinel: {
        title: "The Sentinel",
        score: "Survival role: protective anchor",
        summary:
          "You read danger through people as much as systems. Your gift is staying steady when fear wants to take the wheel.",
        strengths: ["Protectiveness", "Crisis judgment", "Loyalty"],
        weaknesses: ["Can become controlling", "May carry stress silently", "Can distrust change"],
        situations:
          "You are strongest when the group needs someone who can make hard calls without forgetting the human cost.",
        relationships:
          "You love by watching over people. The growth edge is letting them have agency while you keep them safe.",
        parenting:
          "You may create stability and strong boundaries. The edge is not treating every risk as a threat.",
        examples:
          "Famous echoes: Harriet Tubman, Ernest Shackleton. Fictional echoes: Ellen Ripley, Din Djarin.",
        member:
          "Monthly access would connect this protector role to attachment, leadership, and Enneagram results.",
      },
      outlier: {
        title: "The Outlier",
        score: "Survival role: boundary breaker",
        summary:
          "You cannot stop asking what sits outside the permitted story. Your courage is the refusal to call a cage a home.",
        strengths: ["Independence", "Curiosity", "Bravery under uncertainty"],
        weaknesses: ["Can isolate", "May romanticize rebellion", "Can miss the cost to others"],
        situations:
          "You become catalytic when a group has accepted a false limit for too long.",
        relationships:
          "You need honesty and freedom. Connection grows when you invite others into the search instead of disappearing into it.",
        parenting:
          "You may raise bold, questioning children. The edge is giving them anchors as well as permission.",
        examples:
          "Famous echoes: Galileo Galilei, Nellie Bly. Fictional echoes: Neo, Katniss Everdeen.",
        member:
          "Monthly access would compare your outlier pattern with archetype, MBTI-style, and character-match tests over time.",
      },
    },
  },
  {
    id: "attachment",
    title: "Attachment Style",
    category: "Coming Soon",
    tone: "gold",
    symbol: "AT",
    status: "Coming Soon",
    time: "8 min",
    items: "32 prompts",
    price: "Member library",
    description:
      "A relationship-focused test for closeness, conflict, reassurance, independence, and emotional repair.",
    questions: [],
    profiles: {},
  },
  {
    id: "career",
    title: "Career Drivers",
    category: "Coming Soon",
    tone: "violet",
    symbol: "CD",
    status: "Coming Soon",
    time: "9 min",
    items: "36 prompts",
    price: "Member library",
    description:
      "A practical profile for what motivates your best work: mastery, status, autonomy, mission, security, or creativity.",
    questions: [],
    profiles: {},
  },
];

const iqStyleProfiles = {
  pattern: {
    title: "Pattern Navigator",
    note: "You lean toward hidden rules, sequences, and clean systems.",
  },
  spatial: {
    title: "Spatial Strategist",
    note: "You lean toward layouts, movement, diagrams, and whole-picture fit.",
  },
  verbal: {
    title: "Verbal Synthesizer",
    note: "You lean toward language, analogies, definitions, and explainable logic.",
  },
};

const dom = {
  grid: document.querySelector("[data-test-grid]"),
  filters: document.querySelectorAll("[data-filter]"),
  modal: document.querySelector("[data-modal]"),
  modalTitle: document.querySelector("[data-modal-title]"),
  modalCategory: document.querySelector("[data-modal-category]"),
  modalDescription: document.querySelector("[data-modal-description]"),
  progressBar: document.querySelector("[data-progress-bar]"),
  progressCopy: document.querySelector("[data-progress-copy]"),
  quizPanel: document.querySelector("[data-quiz-panel]"),
  paywallPanel: document.querySelector("[data-paywall-panel]"),
  resultPanel: document.querySelector("[data-result-panel]"),
  questionKicker: document.querySelector("[data-question-kicker]"),
  questionText: document.querySelector("[data-question-text]"),
  answerList: document.querySelector("[data-answer-list]"),
  unlockCore: document.querySelector("[data-unlock-core]"),
  unlockDeep: document.querySelector("[data-unlock-deep]"),
  closeButtons: document.querySelectorAll("[data-close-modal], [data-close-link]"),
  restart: document.querySelector("[data-restart-test]"),
  featuredStarts: document.querySelectorAll("[data-featured-start]"),
  resultTest: document.querySelector("[data-result-test]"),
  resultTitle: document.querySelector("[data-result-title]"),
  resultSummary: document.querySelector("[data-result-summary]"),
  resultScore: document.querySelector("[data-result-score]"),
  resultVisuals: document.querySelector("[data-result-visuals]"),
  resultStrengths: document.querySelector("[data-result-strengths]"),
  resultWeaknesses: document.querySelector("[data-result-weaknesses]"),
  resultSituations: document.querySelector("[data-result-situations]"),
  resultRelationships: document.querySelector("[data-result-relationships]"),
  resultParenting: document.querySelector("[data-result-parenting]"),
  resultExamples: document.querySelector("[data-result-examples]"),
  deepDive: document.querySelector("[data-deep-dive]"),
  resultDeep: document.querySelector("[data-result-deep]"),
  requestForm: document.querySelector("[data-request-form]"),
  requestOutput: document.querySelector("[data-request-output]"),
  dropList: document.querySelector(".drop-list"),
  login: document.querySelector("[data-login]"),
  openLogin: document.querySelector("[data-open-login]"),
  closeLogin: document.querySelector("[data-close-login]"),
};

const state = {
  activeTest: null,
  questionIndex: 0,
  scores: {},
  correctScore: 0,
  scoredAnswered: 0,
  domainStats: {},
  lastMode: "core",
};

function renderTests(filter = "all") {
  const visibleTests = tests.filter((test) => {
    if (filter === "all") return true;
    return test.category === filter;
  });

  dom.grid.innerHTML = visibleTests
    .map((test) => {
      const disabled = test.status === "Coming Soon";
      return `
        <article class="test-card ${disabled ? "coming-soon" : ""}" data-tone="${test.tone}">
          <div>
            <div class="test-card-top">
              <span class="test-symbol" aria-hidden="true">${test.symbol}</span>
              <span class="status-pill">${test.status}</span>
            </div>
            <h3>${test.title}</h3>
            <p>${test.description}</p>
          </div>
          <div>
            <div class="test-meta" aria-label="${test.title} details">
              <span>${test.time}</span>
              <span>${test.items}</span>
              <span>${test.price}</span>
            </div>
            <button class="button button-full" type="button" data-start-test="${test.id}">
              ${disabled ? "Coming Soon" : `Start ${test.category === "Pop Culture" ? "Match" : "Test"}`}
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function setModalView(view) {
  dom.quizPanel.hidden = view !== "quiz";
  dom.paywallPanel.hidden = view !== "paywall";
  dom.resultPanel.hidden = view !== "result";
}

function openModal() {
  dom.modal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeModal() {
  dom.modal.hidden = true;
  document.body.classList.remove("modal-open");
}

function startTest(testId) {
  const test = tests.find((item) => item.id === testId);
  if (!test || test.status === "Coming Soon") return;

  state.activeTest = test;
  state.questionIndex = 0;
  state.scores = {};
  state.correctScore = 0;
  state.scoredAnswered = 0;
  state.domainStats = {};
  state.lastMode = "core";

  dom.modalTitle.textContent = test.title;
  dom.modalCategory.textContent = test.category;
  dom.modalDescription.textContent = test.description;
  setModalView("quiz");
  openModal();
  renderQuestion();
}

function renderQuestion() {
  const test = state.activeTest;
  const question = test.questions[state.questionIndex];
  const total = test.questions.length;
  const progress = (state.questionIndex / total) * 100;

  dom.progressBar.style.width = `${progress}%`;
  dom.progressCopy.textContent = `Question ${state.questionIndex + 1} of ${total}`;
  dom.questionKicker.textContent = question.kicker;
  dom.questionText.textContent = question.prompt;
  dom.answerList.innerHTML = question.options
    .map(
      (option, index) => `
        <button class="answer-button" type="button" data-answer-index="${index}">
          <span class="answer-letter" aria-hidden="true">${String.fromCharCode(65 + index)}</span>
          <span class="answer-copy">
            <strong>${option.label}</strong>
            ${option.detail ? `<span>${option.detail}</span>` : ""}
          </span>
        </button>
      `
    )
    .join("");
}

function handleAnswer(optionIndex) {
  const question = state.activeTest.questions[state.questionIndex];
  const option = question.options[Number(optionIndex)];
  if (!option) return;

  if (typeof option.correct === "boolean") {
    const domain = question.domain || "reasoning";
    state.scoredAnswered += 1;
    state.domainStats[domain] = state.domainStats[domain] || { correct: 0, total: 0 };
    state.domainStats[domain].total += 1;

    if (option.correct) {
      state.correctScore += 1;
      state.domainStats[domain].correct += 1;
    }
  }

  if (option.value) {
    state.scores[option.value] = (state.scores[option.value] || 0) + 1;
  }

  state.questionIndex += 1;

  if (state.questionIndex >= state.activeTest.questions.length) {
    showPaywall();
    return;
  }

  renderQuestion();
}

function showPaywall() {
  dom.progressBar.style.width = "100%";
  dom.progressCopy.textContent = "Complete";
  setModalView("paywall");
}

function getResultProfile() {
  const test = state.activeTest;
  if (test.scoring === "correct") return getIqResultProfile(test);

  const keys = Object.keys(test.profiles);
  const winner = keys.reduce((best, key) => {
    const current = state.scores[key] || 0;
    const bestScore = state.scores[best] || 0;
    return current > bestScore ? key : best;
  }, keys[0]);

  const totalAnswers = Object.values(state.scores).reduce((sum, score) => sum + score, 0);
  const profile = test.profiles[winner];

  return {
    ...profile,
    analytics: {
      type: "profile",
      winner,
      winnerLabel: profile.title,
      winnerScore: state.scores[winner] || 0,
      totalAnswers,
      scores: keys.map((key) => ({
        key,
        label: test.profiles[key].title,
        value: state.scores[key] || 0,
      })),
    },
  };
}

function renderList(target, items) {
  target.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function countScoredQuestions(test) {
  return test.questions.filter((question) => question.options.some((option) => typeof option.correct === "boolean")).length;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function estimateIqScore(score, total) {
  if (!total) return 100;
  return Math.round(70 + (score / total) * 65);
}

function erf(value) {
  const sign = value < 0 ? -1 : 1;
  const x = Math.abs(value);
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;
  const t = 1 / (1 + p * x);
  const y = 1 - (((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-x * x));
  return sign * y;
}

function normalPercentile(value, mean = 100, standardDeviation = 15) {
  const z = (value - mean) / (standardDeviation * Math.SQRT2);
  return clamp(Math.round(0.5 * (1 + erf(z)) * 100), 1, 99);
}

function getIqStyleResult() {
  const styleKeys = Object.keys(iqStyleProfiles);
  const winner = styleKeys.reduce((best, key) => {
    const current = state.scores[key] || 0;
    const bestScore = state.scores[best] || 0;
    return current > bestScore ? key : best;
  }, styleKeys[0]);

  return {
    key: winner,
    ...iqStyleProfiles[winner],
    scores: styleKeys.map((key) => ({
      key,
      label: iqStyleProfiles[key].title,
      value: state.scores[key] || 0,
    })),
  };
}

function getIqResultProfile(test) {
  const total = state.scoredAnswered || countScoredQuestions(test);
  const score = state.correctScore;
  const band = test.scoreBands.find((item) => score >= item.min && score <= item.max) || test.scoreBands[test.scoreBands.length - 1];
  const iqEstimate = estimateIqScore(score, total);
  const percentile = normalPercentile(iqEstimate);
  const style = getIqStyleResult();

  return {
    ...band,
    score: `${score} of ${total} scored items | Sample IQ estimate ${iqEstimate} | about the ${percentile}th percentile`,
    summary: `${band.summary} Your thinking-style lean is ${style.title}: ${style.note}`,
    analytics: {
      type: "iq",
      score,
      total,
      iqEstimate,
      percentile,
      domainStats: state.domainStats,
      style,
    },
  };
}

function formatLabel(text) {
  return text
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
    .replace("Iq", "IQ");
}

function renderBar(label, percent, helper = "") {
  const safePercent = clamp(Math.round(percent), 0, 100);
  return `
    <div class="bar-row">
      <div class="bar-top">
        <span>${label}</span>
        <strong>${safePercent}%</strong>
      </div>
      <div class="bar-track"><span style="width: ${safePercent}%"></span></div>
      ${helper ? `<small>${helper}</small>` : ""}
    </div>
  `;
}

function renderMiniColumns(items, total) {
  return `
    <div class="mini-columns" aria-hidden="true">
      ${items
        .map((item) => {
          const percent = total ? clamp((item.value / total) * 100, 8, 100) : 8;
          return `
            <div class="mini-column">
              <span style="height: ${percent}%"></span>
              <small>${item.label.split(" ")[0]}</small>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderIqVisuals(analytics) {
  const markerX = clamp(18 + ((analytics.iqEstimate - 55) / 90) * 284, 18, 302);
  const domainBars = Object.entries(analytics.domainStats)
    .map(([domain, stats]) => renderBar(formatLabel(domain), stats.total ? (stats.correct / stats.total) * 100 : 0, `${stats.correct} of ${stats.total} correct`))
    .join("");
  const styleTotal = analytics.style.scores.reduce((sum, item) => sum + item.value, 0);
  const styleBars = analytics.style.scores
    .map((item) => renderBar(item.label, styleTotal ? (item.value / styleTotal) * 100 : 0, `${item.value} style picks`))
    .join("");

  return `
    <article class="visual-card visual-card-wide">
      <div class="visual-card-heading">
        <h4>Population Position</h4>
        <span>Standard IQ curve</span>
      </div>
      <div class="stat-strip">
        <span><strong>${analytics.score}/${analytics.total}</strong><small>Scored Items</small></span>
        <span><strong>${analytics.iqEstimate}</strong><small>Sample IQ</small></span>
        <span><strong>${analytics.percentile}th</strong><small>Percentile</small></span>
      </div>
      <svg class="bell-chart" viewBox="0 0 320 132" role="img" aria-label="IQ bell curve with your estimated position">
        <path d="M14 112 C42 112 55 96 74 80 C98 58 112 18 160 18 C208 18 222 58 246 80 C265 96 278 112 306 112" />
        <line x1="160" y1="24" x2="160" y2="116" class="average-line" />
        <line x1="${markerX}" y1="16" x2="${markerX}" y2="116" class="marker-line" />
        <circle cx="${markerX}" cy="16" r="5" class="marker-dot" />
        <text x="151" y="128">100</text>
        <text x="${clamp(markerX - 12, 4, 292)}" y="12">You</text>
      </svg>
      <p class="chart-note">This is a short sample estimate, not a clinical or proctored IQ score.</p>
    </article>
    <article class="visual-card">
      <div class="visual-card-heading">
        <h4>Domain Accuracy</h4>
        <span>Scored items</span>
      </div>
      ${domainBars}
    </article>
    <article class="visual-card">
      <div class="visual-card-heading">
        <h4>Thinking Style Lean</h4>
        <span>${analytics.style.title}</span>
      </div>
      ${styleBars}
    </article>
  `;
}

function renderProfileVisuals(analytics) {
  const total = analytics.totalAnswers || 1;
  const winnerPercent = Math.round((analytics.winnerScore / total) * 100);
  const sortedScores = [...analytics.scores].sort((a, b) => b.value - a.value);
  const bars = sortedScores.map((item) => renderBar(item.label, (item.value / total) * 100, `${item.value} of ${total} picks`)).join("");

  return `
    <article class="visual-card">
      <div class="visual-card-heading">
        <h4>Match Signal</h4>
        <span>Top result</span>
      </div>
      <div class="big-percent">${winnerPercent}%</div>
      <div class="bar-track large"><span style="width: ${winnerPercent}%"></span></div>
      <p class="chart-note">Your strongest signal points to ${analytics.winnerLabel}.</p>
    </article>
    <article class="visual-card">
      <div class="visual-card-heading">
        <h4>Profile Mix</h4>
        <span>Answer spread</span>
      </div>
      ${bars}
    </article>
    <article class="visual-card">
      <div class="visual-card-heading">
        <h4>Result Shape</h4>
        <span>Visual aid</span>
      </div>
      ${renderMiniColumns(sortedScores, total)}
    </article>
  `;
}

function renderResultVisuals(profile) {
  if (!profile.analytics) {
    dom.resultVisuals.innerHTML = "";
    return;
  }

  dom.resultVisuals.innerHTML =
    profile.analytics.type === "iq" ? renderIqVisuals(profile.analytics) : renderProfileVisuals(profile.analytics);
}

function unlockResult(mode) {
  const profile = getResultProfile();
  state.lastMode = mode;

  dom.resultTest.textContent = mode === "member" ? `${state.activeTest.title} | Monthly access` : state.activeTest.title;
  dom.resultTitle.textContent = profile.title;
  dom.resultSummary.textContent = profile.summary;
  dom.resultScore.textContent = mode === "member" ? `${profile.score} | All tests unlocked` : profile.score;
  renderResultVisuals(profile);
  renderList(dom.resultStrengths, profile.strengths);
  renderList(dom.resultWeaknesses, profile.weaknesses);
  dom.resultSituations.textContent = profile.situations;
  dom.resultRelationships.textContent = profile.relationships;
  dom.resultParenting.textContent = profile.parenting;
  dom.resultExamples.textContent = profile.examples;
  dom.deepDive.hidden = mode !== "member";
  dom.resultDeep.textContent = profile.member;
  setModalView("result");
}

function restartActiveTest() {
  if (!state.activeTest) return;
  startTest(state.activeTest.id);
}

dom.grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-start-test]");
  if (!button) return;
  startTest(button.dataset.startTest);
});

dom.answerList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-answer-index]");
  if (!button) return;
  handleAnswer(button.dataset.answerIndex);
});

dom.filters.forEach((button) => {
  button.addEventListener("click", () => {
    dom.filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderTests(button.dataset.filter);
  });
});

dom.featuredStarts.forEach((button) => {
  button.addEventListener("click", () => startTest("archetype"));
});

document.querySelectorAll("[data-start-test]").forEach((button) => {
  button.addEventListener("click", () => startTest(button.dataset.startTest));
});

dom.unlockCore.addEventListener("click", () => unlockResult("core"));
dom.unlockDeep.addEventListener("click", () => unlockResult("member"));
dom.restart.addEventListener("click", restartActiveTest);
dom.closeButtons.forEach((button) => button.addEventListener("click", closeModal));

dom.modal.addEventListener("click", (event) => {
  if (event.target === dom.modal) closeModal();
});

dom.openLogin.addEventListener("click", () => {
  dom.login.hidden = false;
});

dom.closeLogin.addEventListener("click", () => {
  dom.login.hidden = true;
});

dom.login.addEventListener("click", (event) => {
  if (event.target === dom.login) dom.login.hidden = true;
});

dom.requestForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = dom.requestForm.elements["test-request"];
  const value = input.value.trim();
  if (!value) {
    dom.requestOutput.textContent = "Add a test idea to put it in the queue.";
    return;
  }

  const tag = document.createElement("span");
  tag.textContent = value;
  dom.dropList.append(tag);
  dom.requestOutput.textContent = `Added to the future-test queue: ${value}`;
  input.value = "";
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  closeModal();
  dom.login.hidden = true;
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // The app still works without offline caching.
    });
  });
}

renderTests();
