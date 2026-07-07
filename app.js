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
          { label: "Shoe", correct: true },
          { label: "Sock", correct: false },
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
    time: "12 min",
    items: "42 questions",
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
    items: "42 questions",
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
    items: "42 questions",
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
    id: "fantasy-seed",
    title: "Fantasy/Sci-Fi Character Match",
    category: "Pop Culture",
    tone: "coral",
    symbol: "GT",
    status: "Live",
    time: "12 min",
    items: "42 questions",
    price: "$1 report",
    description:
      "A broad character lens for how you handle loyalty, power, strategy, and survival in fantasy and sci-fi worlds.",
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
    items: "42 planned",
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
    items: "42 planned",
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

const visualExampleLibrary = {
  "Developing Reasoning Range": {
    famous: [
      { name: "Thomas Edison", note: "iteration and persistence", motif: "lamp" },
      { name: "Walt Disney", note: "imaginative problem solving", motif: "spark" },
    ],
    fictional: [
      { name: "Neville Longbottom", note: "growth through practice", motif: "leaf" },
      { name: "Mulan", note: "learning under pressure", motif: "star" },
    ],
  },
  "Balanced Reasoning Range": {
    famous: [
      { name: "Benjamin Franklin", note: "practical curiosity", motif: "bolt" },
      { name: "Florence Nightingale", note: "clear applied thinking", motif: "lantern" },
    ],
    fictional: [
      { name: "Hermione Granger", note: "studied logic", motif: "book" },
      { name: "Chidi Anagonye", note: "careful reasoning", motif: "scale" },
    ],
  },
  "Strong Reasoning Range": {
    famous: [
      { name: "Ada Lovelace", note: "abstract systems insight", motif: "gear" },
      { name: "Alan Turing", note: "pattern and computation", motif: "grid" },
    ],
    fictional: [
      { name: "Sherlock Holmes", note: "deductive precision", motif: "lens" },
      { name: "Shuri", note: "inventive analysis", motif: "spark" },
    ],
  },
  "Exceptional Sample Range": {
    famous: [
      { name: "Marie Curie", note: "disciplined discovery", motif: "atom" },
      { name: "John von Neumann", note: "rare cognitive speed", motif: "matrix" },
    ],
    fictional: [
      { name: "Ender Wiggin", note: "strategic abstraction", motif: "orbit" },
      { name: "Beth Harmon", note: "deep pattern vision", motif: "chess" },
    ],
  },
  "The Sage": {
    famous: [
      { name: "Socrates", note: "truth through questions", motif: "scroll" },
      { name: "Hypatia", note: "calm intellectual depth", motif: "star" },
    ],
    fictional: [
      { name: "Gandalf", note: "wise guide energy", motif: "lantern" },
      { name: "Professor X", note: "strategic empathy", motif: "mind" },
    ],
  },
  "The Catalyst": {
    famous: [
      { name: "Joan of Arc", note: "conviction under fire", motif: "flame" },
      { name: "Amelia Earhart", note: "bold first movement", motif: "wing" },
    ],
    fictional: [
      { name: "Katniss Everdeen", note: "spark of resistance", motif: "arrow" },
      { name: "Daenerys Targaryen", note: "transforming vision", motif: "crown" },
    ],
  },
  "The Guardian": {
    famous: [
      { name: "Harriet Tubman", note: "protective courage", motif: "path" },
      { name: "Fred Rogers", note: "gentle steadiness", motif: "heart" },
    ],
    fictional: [
      { name: "Samwise Gamgee", note: "devoted loyalty", motif: "leaf" },
      { name: "Molly Weasley", note: "fierce care", motif: "home" },
    ],
  },
  "The Explorer": {
    famous: [
      { name: "Ibn Battuta", note: "restless discovery", motif: "compass" },
      { name: "Nellie Bly", note: "brave curiosity", motif: "map" },
    ],
    fictional: [
      { name: "Moana", note: "called beyond the reef", motif: "wave" },
      { name: "Arya Stark", note: "self-directed becoming", motif: "needle" },
    ],
  },
  "ENFP-Style People Catalyst": {
    famous: [
      { name: "Oscar Wilde", note: "sparkling originality", motif: "quill" },
      { name: "Walt Whitman", note: "expansive humanity", motif: "sun" },
    ],
    fictional: [
      { name: "Leslie Knope", note: "enthusiastic connection", motif: "binder" },
      { name: "Aang", note: "playful possibility", motif: "air" },
    ],
  },
  "INTJ-Style Quiet Strategist": {
    famous: [
      { name: "Isaac Newton", note: "private systems thinking", motif: "apple" },
      { name: "Nikola Tesla", note: "future-facing design", motif: "bolt" },
    ],
    fictional: [
      { name: "Bruce Wayne", note: "long-range planning", motif: "mask" },
      { name: "Beth Harmon", note: "silent calculation", motif: "chess" },
    ],
  },
  "ISFJ-Style Steady Protector": {
    famous: [
      { name: "Florence Nightingale", note: "practical care", motif: "lantern" },
      { name: "Rosa Parks", note: "quiet resolve", motif: "seat" },
    ],
    fictional: [
      { name: "Samwise Gamgee", note: "steady loyalty", motif: "leaf" },
      { name: "Molly Weasley", note: "home as strength", motif: "home" },
    ],
  },
  "ENTJ-Style Decisive Director": {
    famous: [
      { name: "Cleopatra", note: "commanding strategy", motif: "crown" },
      { name: "Napoleon Bonaparte", note: "decisive campaigns", motif: "flag" },
    ],
    fictional: [
      { name: "Princess Leia", note: "mission leadership", motif: "star" },
      { name: "Miranda Priestly", note: "executive force", motif: "diamond" },
    ],
  },
  "Type Three: The Achiever": {
    famous: [
      { name: "Alexander Hamilton", note: "drive and output", motif: "quill" },
      { name: "Muhammad Ali", note: "charisma and excellence", motif: "glove" },
    ],
    fictional: [
      { name: "Jay Gatsby", note: "image and aspiration", motif: "glass" },
      { name: "Rachel Berry", note: "spotlight hunger", motif: "stage" },
    ],
  },
  "Type Six: The Loyalist": {
    famous: [
      { name: "George Washington", note: "duty and caution", motif: "shield" },
      { name: "Harriet Tubman", note: "prepared courage", motif: "path" },
    ],
    fictional: [
      { name: "Ron Weasley", note: "loyal worry", motif: "badge" },
      { name: "Neville Longbottom", note: "courage after doubt", motif: "leaf" },
    ],
  },
  "Type Nine: The Peacemaker": {
    famous: [
      { name: "Abraham Lincoln", note: "patient mediation", motif: "bridge" },
      { name: "Audrey Hepburn", note: "gentle grace", motif: "flower" },
    ],
    fictional: [
      { name: "Chidi Anagonye", note: "thoughtful harmony", motif: "scale" },
      { name: "Uncle Iroh", note: "warm grounded wisdom", motif: "teacup" },
    ],
  },
  "Type Four: The Individualist": {
    famous: [
      { name: "Frida Kahlo", note: "identity as art", motif: "flower" },
      { name: "Prince", note: "singular expression", motif: "star" },
    ],
    fictional: [
      { name: "Jo March", note: "self-authored life", motif: "book" },
      { name: "Fleabag", note: "raw inner truth", motif: "mirror" },
    ],
  },
  "Tyrion Lannister Match": {
    famous: [
      { name: "Benjamin Franklin", note: "wit and diplomacy", motif: "bolt" },
      { name: "Oscar Wilde", note: "language as armor", motif: "quill" },
    ],
    fictional: [
      { name: "Tyrion Lannister", note: "strategic truth-teller", motif: "goblet" },
      { name: "Loki", note: "clever survivor", motif: "horns" },
    ],
  },
  "Arya Stark Match": {
    famous: [
      { name: "Joan of Arc", note: "fierce conviction", motif: "flame" },
      { name: "Amelia Earhart", note: "autonomous courage", motif: "wing" },
    ],
    fictional: [
      { name: "Arya Stark", note: "independent survivor", motif: "needle" },
      { name: "Mulan", note: "adaptive bravery", motif: "star" },
    ],
  },
  "Jon Snow Match": {
    famous: [
      { name: "Ernest Shackleton", note: "crisis leadership", motif: "mountain" },
      { name: "Abraham Lincoln", note: "moral steadiness", motif: "bridge" },
    ],
    fictional: [
      { name: "Jon Snow", note: "reluctant protector", motif: "wolf" },
      { name: "Steve Rogers", note: "duty before ego", motif: "shield" },
    ],
  },
  "Daenerys Targaryen Match": {
    famous: [
      { name: "Cleopatra", note: "commanding presence", motif: "crown" },
      { name: "Catherine the Great", note: "expansive rule", motif: "scepter" },
    ],
    fictional: [
      { name: "Daenerys Targaryen", note: "visionary liberator", motif: "flame" },
      { name: "Storm", note: "elemental command", motif: "cloud" },
    ],
  },
  "The Engineer": {
    famous: [
      { name: "Katherine Johnson", note: "precision under pressure", motif: "orbit" },
      { name: "Hedy Lamarr", note: "inventive systems", motif: "signal" },
    ],
    fictional: [
      { name: "Naomi Nagata", note: "technical resilience", motif: "ship" },
      { name: "Montgomery Scott", note: "problem-solving craft", motif: "gear" },
    ],
  },
  "The Archivist": {
    famous: [
      { name: "Ida B. Wells", note: "truth in records", motif: "newspaper" },
      { name: "Carl Sagan", note: "cosmic memory", motif: "orbit" },
    ],
    fictional: [
      { name: "Obi-Wan Kenobi", note: "keeper of old truths", motif: "star" },
      { name: "Hermione Granger", note: "research saves the day", motif: "book" },
    ],
  },
  "The Sentinel": {
    famous: [
      { name: "Harriet Tubman", note: "protective resolve", motif: "path" },
      { name: "Ernest Shackleton", note: "calm in danger", motif: "mountain" },
    ],
    fictional: [
      { name: "Ellen Ripley", note: "protective courage", motif: "ship" },
      { name: "Din Djarin", note: "honor and guardrails", motif: "helmet" },
    ],
  },
  "The Outlier": {
    famous: [
      { name: "Galileo Galilei", note: "forbidden questions", motif: "telescope" },
      { name: "Nellie Bly", note: "boundary-crossing courage", motif: "map" },
    ],
    fictional: [
      { name: "Neo", note: "awakening beyond the rules", motif: "matrix" },
      { name: "Katniss Everdeen", note: "refusal as spark", motif: "arrow" },
    ],
  },
};

const archetypeChoiceCopy = {
  sage: {
    labels: ["Find the pattern", "Ask the sharper question", "Study the signal", "Clarify what matters"],
    details: [
      "You calm the room by making it understandable.",
      "Truth feels more useful than speed.",
      "You prefer meaning over noise.",
      "A clear model helps everyone choose.",
    ],
  },
  catalyst: {
    labels: ["Create movement", "Name the bold next step", "Turn energy into action", "Start the spark"],
    details: [
      "You wake people up when the moment has gone stale.",
      "Momentum feels like medicine.",
      "You would rather try than circle forever.",
      "A strong signal is better than a perfect plan.",
    ],
  },
  guardian: {
    labels: ["Protect the bond", "Steady the people", "Make it safe enough", "Hold the center"],
    details: [
      "Trust matters more than looking impressive.",
      "You notice who is carrying too much.",
      "People do better when they feel held.",
      "Care is a form of leadership.",
    ],
  },
  explorer: {
    labels: ["Look for the open door", "Choose the unknown", "Follow the wider map", "Find another route"],
    details: [
      "You sense when life has gotten too small.",
      "Possibility returns when the frame changes.",
      "Freedom helps you think clearly.",
      "A new angle can change the whole story.",
    ],
  },
};

const archetypePrompts = [
  ["Decision pressure", "When a decision feels emotionally loaded, your natural move is to..."],
  ["Group role", "In a team that has lost direction, you usually try to..."],
  ["Stress signal", "When stress starts showing, you are most likely to..."],
  ["Best compliment", "When people praise your best self, they are usually praising how you..."],
  ["Friendship", "When a friend is in trouble, your first helpful move is to..."],
  ["Leadership", "When you lead well, you most often..."],
  ["Learning", "When learning something new, you instinctively try to..."],
  ["Conflict repair", "After a disagreement, your repair instinct is to..."],
  ["Energy", "When life starts draining you, you usually need to..."],
  ["Growth edge", "The growth move that would stretch you most is to..."],
  ["Creativity", "When a creative idea is forming, you tend to..."],
  ["Trust", "You begin trusting someone when they help you..."],
  ["Change", "When everything changes at once, you first try to..."],
  ["Boundaries", "When you need a boundary, you usually try to..."],
  ["Motivation", "The inner reward you chase without meaning to is found when you..."],
  ["Work style", "Your best workday gives you enough room to..."],
  ["Shadow", "Your pattern can hurt you when you overuse the habit of trying to..."],
  ["Courage", "The brave thing you do most naturally is to..."],
  ["Planning", "A good plan should mostly help people..."],
  ["Belonging", "You feel most yourself with people who encourage you to..."],
  ["Crisis", "In a crisis, your attention goes first toward trying to..."],
  ["Communication", "People understand you best when you..."],
  ["Purpose", "A meaningful life should include chances to..."],
  ["Romance", "In romance, you are most likely to show love by trying to..."],
  ["Parenting", "A child would probably remember you teaching them to..."],
  ["Feedback", "When feedback lands well, it helps you..."],
  ["Risk", "The risk you are most willing to take is the risk to..."],
  ["Success", "Success feels hollow unless it also helps you..."],
  ["Habits", "Your habits stick when they help you..."],
  ["Attention", "You automatically notice when it is time to..."],
  ["Problem solving", "A hard problem becomes easier when you can..."],
  ["Values", "You would rather be known as someone who knows how to..."],
  ["Recovery", "When you are depleted, you recover by giving yourself permission to..."],
  ["Influence", "You change people most often when you..."],
  ["Mistake pattern", "Your most common mistake is overdoing the impulse to..."],
  ["Inner compass", "Your inner compass points toward the chance to..."],
  ["Future self", "The future version of you wants more room to..."],
];

const scifiChoiceCopy = {
  engineer: {
    labels: ["Fix the system", "Trace the failure", "Keep the machine alive", "Make the world work"],
    details: ["Infrastructure tells the truth.", "You solve through practical competence.", "Function matters before speeches.", "The hidden mechanism is usually the clue."],
  },
  archivist: {
    labels: ["Protect the record", "Find the missing file", "Remember the pattern", "Recover the old truth"],
    details: ["History keeps receipts.", "You notice what got edited out.", "Memory can become resistance.", "A buried detail can save everyone."],
  },
  sentinel: {
    labels: ["Hold the line", "Protect the group", "Read the danger", "Stabilize the room"],
    details: ["People need steadiness under pressure.", "Safety is practical, not abstract.", "You watch the emotional perimeter.", "Order can keep panic from spreading."],
  },
  outlier: {
    labels: ["Question the walls", "Follow the forbidden clue", "Break the frame", "Step outside the script"],
    details: ["The rule against looking is the clue.", "You want truth, not just survival.", "False limits bother you.", "A door matters more once someone calls it impossible."],
  },
};

const scifiPrompts = [
  ["First move", "When the official story starts cracking, your first move is to..."],
  ["Hidden talent", "When people underestimate you, the strength you reveal is how you..."],
  ["Risk", "When the stakes get risky, you are most likely to..."],
  ["Trust", "Before you trust the room, you try to..."],
  ["Pressure", "Under pressure, your mind instinctively tries to..."],
  ["Authority", "When authority feels wrong, you tend to..."],
  ["Mystery", "When a mystery pulls you in, you want to..."],
  ["Leadership", "When people need leadership, you tend to..."],
  ["Weakness", "Your survival flaw is that you may over-focus on trying to..."],
  ["Alliance", "The ally role you naturally take is to..."],
  ["Truth", "When truth becomes dangerous, you try to..."],
  ["Escape", "An escape plan should begin by trying to..."],
  ["Memory", "When the past matters, you try to..."],
  ["Repair", "A broken world asks someone to..."],
  ["Morality", "When your moral line is crossed, you tend to..."],
  ["Discovery", "When a discovery changes everything, you want to..."],
  ["Community", "A community survives when someone is willing to..."],
  ["Rebellion", "A rebellion becomes justified when someone must..."],
  ["Sacrifice", "You would sacrifice comfort if it helped you..."],
  ["Fear", "Fear is easiest to manage when you can..."],
  ["Skill", "Your most valuable crisis skill is knowing how to..."],
  ["Evidence", "When evidence is confusing, you trust the path that lets you..."],
  ["Power", "Power should be used by people willing to..."],
  ["Unknown", "The unknown feels less frightening when you can..."],
  ["Ending", "The ending you want most lets someone..."],
  ["Failure", "The mistake you would regret most is failing to..."],
  ["Signal", "The signal you never ignore is the moment to..."],
  ["Order", "Rules are worth keeping when they help people..."],
  ["Hope", "Hope returns when someone can still..."],
  ["Legacy", "You would want to be remembered as the one who knew how to..."],
  ["Tension", "In a tense room, you usually try to..."],
  ["Secrets", "Secrets become unbearable when they force someone to..."],
  ["Work", "Your best contribution is usually the ability to..."],
  ["Warning", "Your warning to the group would be that it is time to..."],
  ["Future", "A better future begins when people are brave enough to..."],
  ["Courage", "Your courage looks like being willing to..."],
  ["Home", "Home is worth protecting when someone will..."],
];

const mbtiDimensions = [
  { left: "E", right: "I", leftLabel: "Extraversion", rightLabel: "Introversion" },
  { left: "S", right: "N", leftLabel: "Sensing", rightLabel: "Intuition" },
  { left: "T", right: "F", leftLabel: "Thinking", rightLabel: "Feeling" },
  { left: "J", right: "P", leftLabel: "Judging", rightLabel: "Perceiving" },
];

const mbtiDimensionCopy = {
  E: {
    name: "outward energy",
    strength: "social momentum",
    watchout: "overextending before you reset",
    relationship: "talking things through in real time",
  },
  I: {
    name: "inner focus",
    strength: "reflective depth",
    watchout: "withdrawing before people understand you",
    relationship: "private processing before response",
  },
  S: {
    name: "practical detail",
    strength: "grounded observation",
    watchout: "missing a wider possibility",
    relationship: "noticing what people actually need",
  },
  N: {
    name: "pattern imagination",
    strength: "future-oriented insight",
    watchout: "skipping over concrete details",
    relationship: "connecting events into meaning",
  },
  T: {
    name: "analytical decision-making",
    strength: "clear logic",
    watchout: "sounding colder than you feel",
    relationship: "solving problems directly",
  },
  F: {
    name: "values-based decision-making",
    strength: "relational sensitivity",
    watchout: "absorbing too much emotional weight",
    relationship: "protecting harmony and meaning",
  },
  J: {
    name: "structured planning",
    strength: "follow-through",
    watchout: "tightening control too quickly",
    relationship: "making commitments feel dependable",
  },
  P: {
    name: "adaptive openness",
    strength: "flexibility",
    watchout: "leaving too much unresolved",
    relationship: "keeping space for change and discovery",
  },
};

const mbtiTypeNames = {
  ISTJ: "Responsible Realist",
  ISFJ: "Steady Protector",
  INFJ: "Insightful Advocate",
  INTJ: "Quiet Strategist",
  ISTP: "Tactical Problem Solver",
  ISFP: "Gentle Individualist",
  INFP: "Idealist Story-Seeker",
  INTP: "Analytical Architect",
  ESTP: "Bold Improviser",
  ESFP: "Social Spark",
  ENFP: "People Catalyst",
  ENTP: "Inventive Debater",
  ESTJ: "Practical Organizer",
  ESFJ: "Community Caretaker",
  ENFJ: "Charismatic Guide",
  ENTJ: "Decisive Director",
};

const mbtiExamples = {
  ISTJ: [["George Washington", "duty and discipline"], ["Angela Merkel", "steady pragmatism"], ["Spock", "precise responsibility"], ["Hermione Granger", "prepared competence"]],
  ISFJ: [["Florence Nightingale", "practical care"], ["Rosa Parks", "quiet resolve"], ["Samwise Gamgee", "loyal protection"], ["Molly Weasley", "fierce home energy"]],
  INFJ: [["Martin Luther King Jr.", "vision with conscience"], ["Carl Jung", "symbolic insight"], ["Obi-Wan Kenobi", "principled guidance"], ["Galadriel", "deep seeing"]],
  INTJ: [["Isaac Newton", "private systems thinking"], ["Nikola Tesla", "future-facing design"], ["Bruce Wayne", "long-range planning"], ["Beth Harmon", "silent calculation"]],
  ISTP: [["Amelia Earhart", "calm risk"], ["Hedy Lamarr", "inventive mechanics"], ["Ellen Ripley", "practical survival"], ["Han Solo", "hands-on nerve"]],
  ISFP: [["Frida Kahlo", "personal expression"], ["Bob Ross", "gentle creativity"], ["Zuko", "inner honor"], ["Luna Lovegood", "soft originality"]],
  INFP: [["Maya Angelou", "inner truth"], ["J.R.R. Tolkien", "mythic imagination"], ["Frodo Baggins", "quiet moral quest"], ["Wanda Maximoff", "feeling and longing"]],
  INTP: [["Albert Einstein", "conceptual play"], ["Charles Darwin", "patient theory"], ["Data", "curious analysis"], ["Neo", "questioning reality"]],
  ESTP: [["Theodore Roosevelt", "action under pressure"], ["Serena Williams", "competitive presence"], ["Tony Stark", "fast tactical brilliance"], ["Maverick", "bold improvisation"]],
  ESFP: [["Dolly Parton", "warm showmanship"], ["Josephine Baker", "radiant adaptability"], ["Aang", "playful presence"], ["Poe Dameron", "high-energy charm"]],
  ENFP: [["Oscar Wilde", "sparkling originality"], ["Walt Whitman", "expansive humanity"], ["Leslie Knope", "enthusiastic connection"], ["Aang", "playful possibility"]],
  ENTP: [["Benjamin Franklin", "inventive argument"], ["Richard Feynman", "curious challenge"], ["Loki", "restless cleverness"], ["The Doctor", "chaotic invention"]],
  ESTJ: [["Margaret Thatcher", "decisive order"], ["Vince Lombardi", "clear standards"], ["Princess Leia", "mission leadership"], ["Okoye", "disciplined command"]],
  ESFJ: [["Fred Rogers", "community warmth"], ["Dolly Parton", "generous connection"], ["Molly Weasley", "protective belonging"], ["Peeta Mellark", "relational steadiness"]],
  ENFJ: [["Barack Obama", "inspiring communication"], ["Oprah Winfrey", "human-centered influence"], ["Jean-Luc Picard", "ethical leadership"], ["Moana", "calling others forward"]],
  ENTJ: [["Cleopatra", "commanding strategy"], ["Napoleon Bonaparte", "decisive campaigns"], ["Princess Leia", "mission leadership"], ["Miranda Priestly", "executive force"]],
};

const mbtiQuestionGroups = [
  ["E", "I", [
    ["Energy", "After a demanding week, what restores you fastest?", "A lively plan with people", "Conversation helps you come back online.", "Quiet time with your own thoughts", "Solitude lets your system reset."],
    ["Attention", "In a new room, you usually notice first...", "The social energy", "You read who is open, tense, or interesting.", "The inner impression", "You take in the atmosphere before joining it."],
    ["Processing", "When a problem is confusing, you prefer to...", "Talk it out", "Speaking helps the thought become real.", "Think it through privately", "You want a cleaner answer before sharing."],
    ["Momentum", "A big idea becomes exciting when...", "Other people start reacting", "Shared energy gives it lift.", "You can explore it alone", "Private focus helps it deepen."],
    ["Stress", "When overwhelmed, your less helpful move is...", "Over-talking the problem", "You may process faster than others can follow.", "Disappearing too long", "People may not know where you went emotionally."],
    ["Friendship", "You usually maintain closeness through...", "Frequent contact", "Little moments keep the bond warm.", "Meaningful check-ins", "Depth matters more than frequency."],
    ["Work", "Your ideal work rhythm includes...", "Collaborative bursts", "You like energy moving around the work.", "Protected focus blocks", "You need space where concentration can land."],
    ["Celebration", "After a win, you most want to...", "Share it out loud", "The joy gets bigger with people.", "Savor it quietly", "You want to absorb what it means."],
    ["Learning", "A class or course works best when it has...", "Discussion and exchange", "You learn through response.", "Reading and reflection", "You learn through internal structure."],
    ["Leadership", "People experience your presence as...", "Accessible and energizing", "You make contact quickly.", "Composed and thoughtful", "You reveal yourself selectively."],
    ["Change", "When life changes suddenly, you first seek...", "People to orient with", "A shared read helps you adapt.", "Time to re-center", "You need your own sense of the shift."],
  ]],
  ["S", "N", [
    ["Information", "You trust a conclusion more when it comes from...", "Concrete evidence", "You want facts that can be checked.", "A clear pattern", "You trust the shape behind the facts."],
    ["Planning", "A useful plan should include...", "Specific next steps", "Reality improves when details are named.", "A strong direction", "The concept matters before the checklist."],
    ["Memory", "You tend to remember...", "What actually happened", "Details, sequence, and practical facts stick.", "What it meant", "Themes and implications stay with you."],
    ["Ideas", "You get more excited by...", "A proven method", "You like what works in real life.", "A new possibility", "You like what opens the future."],
    ["Conversation", "You get impatient when people...", "Stay too abstract", "You want examples and application.", "Get stuck in details", "You want the bigger point."],
    ["Problem solving", "When solving, you first ask...", "What do we know?", "Known facts are the anchor.", "What could this become?", "Possibility is the doorway."],
    ["Creativity", "Your creativity often begins with...", "Materials and constraints", "You build from what is present.", "Images and associations", "You follow the invisible thread."],
    ["Advice", "The best advice gives you...", "Practical steps", "You want something usable today.", "A reframed perspective", "You want the whole picture to shift."],
    ["Learning style", "You prefer examples that are...", "Realistic", "Concrete cases make ideas usable.", "Symbolic", "Metaphors make ideas memorable."],
    ["Risk", "Before a risk, you check...", "The facts on the ground", "Evidence helps you move wisely.", "The future pattern", "You test where the story is headed."],
  ]],
  ["T", "F", [
    ["Decision", "When a choice matters, you first weigh...", "Logic and consistency", "A decision should hold up under scrutiny.", "People and values", "A decision should honor the human impact."],
    ["Conflict", "In conflict, you usually want to...", "Clarify what is fair", "Accuracy calms the room.", "Repair what feels hurt", "Connection calms the room."],
    ["Feedback", "Feedback is easiest to trust when it is...", "Direct and specific", "You can use what is clearly stated.", "Respectful and contextual", "You need the personhood kept intact."],
    ["Leadership", "A leader earns you by being...", "Competent", "Sound judgment builds trust.", "Caring", "Emotional responsibility builds trust."],
    ["Stress", "Under stress, you may become too...", "Blunt", "Truth can come out without enough cushion.", "Accommodating", "Care can crowd out your real view."],
    ["Apology", "A good apology should include...", "Accountability", "You need the logic of repair.", "Sincere empathy", "You need the heart of repair."],
    ["Teamwork", "On a team, you naturally protect...", "Standards", "The work needs to make sense.", "Morale", "The people need to stay intact."],
    ["Values", "You respect someone who can...", "Make a hard call", "Clarity under pressure matters.", "Stay kind under pressure", "Humanity under pressure matters."],
    ["Debate", "In a debate, you focus on...", "The strongest argument", "Bad logic distracts you.", "The real concern underneath", "Unspoken feelings distract you."],
    ["Boundaries", "You set a boundary by...", "Naming the rule", "The line should be clear.", "Naming the impact", "The line should preserve dignity."],
    ["Trust", "You trust your own answer when it feels...", "Consistent", "It matches the principle.", "Aligned", "It matches the values at stake."],
  ]],
  ["J", "P", [
    ["Structure", "Your ideal weekend has...", "A loose plan", "You relax when the shape is known.", "Open space", "You relax when options stay alive."],
    ["Deadlines", "You prefer to finish...", "Early", "Closure gives you peace.", "Near the deadline", "Pressure helps the final shape emerge."],
    ["Change", "A sudden change feels better when...", "There is a revised plan", "You want the new structure quickly.", "You can improvise", "You want room to respond naturally."],
    ["Workspace", "Your workspace works best when it is...", "Organized", "Order reduces friction.", "Flexible", "Visible options keep you engaged."],
    ["Projects", "You feel proudest when you...", "Complete the plan", "Execution is satisfying.", "Discover a better path", "Adaptation is satisfying."],
    ["Commitment", "Making a commitment usually feels like...", "Relief", "A decision frees your attention.", "Limitation", "You notice what options close."],
    ["Travel", "A good trip needs...", "Reservations and timing", "You want the basics handled.", "Room for wandering", "You want discovery built in."],
    ["Stress", "Under stress, you may become...", "Over-controlling", "You tighten the plan to feel safe.", "Avoidant", "You keep options open too long."],
    ["Focus", "You concentrate best with...", "Clear priorities", "You need a defined target.", "Flexible entry points", "You need freedom to follow energy."],
    ["Success", "Success feels like...", "Closure", "The loop is complete.", "Possibility", "The next door has opened."],
  ]],
];

const enneagramProfiles = {
  one: {
    title: "Type One: The Reformer",
    score: "Core drive: integrity through improvement",
    summary: "You are principled, responsible, and sensitive to what could be better. Your growth is learning that goodness does not require constant self-correction.",
    strengths: ["Integrity", "Discernment", "Reliable standards"],
    weaknesses: ["Inner criticism", "Rigidity", "Difficulty relaxing into enough"],
    situations: "You shine where quality, ethics, and follow-through matter more than shortcuts.",
    relationships: "You love by improving life and keeping promises. Loved ones may need reassurance that they are not a project.",
    parenting: "You may model responsibility and character. The edge is letting mistakes become learning instead of moral failure.",
    examples: "Famous echoes: Eleanor Roosevelt, Nelson Mandela. Fictional echoes: Steve Rogers, Hermione Granger.",
    member: "Monthly access would add wings, stress paths, growth practices, and cross-test comparisons.",
  },
  two: {
    title: "Type Two: The Helper",
    score: "Core drive: love through being needed",
    summary: "You are warm, responsive, and tuned to the needs around you. Your growth is receiving care without having to earn it first.",
    strengths: ["Empathy", "Generosity", "Relational attention"],
    weaknesses: ["Over-giving", "Hidden resentment", "Difficulty asking directly"],
    situations: "You are powerful when people need encouragement, repair, and practical emotional support.",
    relationships: "You love actively and personally. Intimacy deepens when you let your own needs be visible too.",
    parenting: "You may create a deeply caring home. The edge is not making love depend on being indispensable.",
    examples: "Famous echoes: Dolly Parton, Fred Rogers. Fictional echoes: Samwise Gamgee, Peeta Mellark.",
    member: "Monthly access would add boundary prompts, wing notes, and comparison with attachment results.",
  },
  three: {
    title: "Type Three: The Achiever",
    score: "Core drive: value through accomplishment",
    summary: "You are adaptive, ambitious, and tuned to what excellence looks like in a given room. Your work is remembering you are more than your output.",
    strengths: ["Drive", "Presentation", "Goal focus"],
    weaknesses: ["Image management", "Burnout risk", "Avoiding vulnerability"],
    situations: "You become highly effective when success is visible, the stakes are clear, and the path rewards polish and momentum.",
    relationships: "You bring pride and energy to people you love. Intimacy deepens when you let them see the unfinished parts too.",
    parenting: "You may model ambition and confidence. The edge is praising effort, honesty, and rest as much as achievement.",
    examples: "Famous echoes: Muhammad Ali, Madonna. Fictional echoes: Jay Gatsby, Rachel Berry.",
    member: "Monthly access would unlock wings, stress paths, growth prompts, and comparisons with your archetype and MBTI-style results.",
  },
  four: {
    title: "Type Four: The Individualist",
    score: "Core drive: identity through depth and authenticity",
    summary: "You are emotionally nuanced and drawn to what feels real. Your work is learning that ordinary life can hold your uniqueness too.",
    strengths: ["Depth", "Aesthetic sensitivity", "Emotional honesty"],
    weaknesses: ["Comparison", "Mood identification", "Longing for elsewhere"],
    situations: "You bring meaning to places that have become too flat, performative, or emotionally dishonest.",
    relationships: "You crave being truly known and offer the same depth in return. Loved ones may need steadiness alongside intensity.",
    parenting: "You may validate a child's inner life beautifully. The edge is not making every feeling the center of the room.",
    examples: "Famous echoes: Frida Kahlo, Prince. Fictional echoes: Jo March, Fleabag.",
    member: "Monthly access would add emotional regulation prompts, creativity notes, and full-library result comparisons.",
  },
  five: {
    title: "Type Five: The Investigator",
    score: "Core drive: competence through understanding",
    summary: "You are observant, private, and drawn to mastery. Your growth is letting life be lived as well as understood.",
    strengths: ["Insight", "Focus", "Independent thinking"],
    weaknesses: ["Detachment", "Withholding", "Energy conservation that becomes isolation"],
    situations: "You are invaluable where complexity needs patient analysis and emotional noise needs a calmer model.",
    relationships: "You love through attention, loyalty, and carefully shared inner space. People may need clearer signals of warmth.",
    parenting: "You may raise curious independent thinkers. The edge is staying emotionally available, not only intellectually useful.",
    examples: "Famous echoes: Albert Einstein, Jane Goodall. Fictional echoes: Sherlock Holmes, Spock.",
    member: "Monthly access would add energy budgeting, vulnerability prompts, and type comparisons.",
  },
  six: {
    title: "Type Six: The Loyalist",
    score: "Core drive: safety through trust and preparation",
    summary: "You are alert, loyal, and thoughtful about risk. Your gift is seeing what others miss; your work is not letting fear become the boss.",
    strengths: ["Loyalty", "Preparedness", "Skeptical intelligence"],
    weaknesses: ["Anxiety loops", "Testing trust", "Catastrophizing"],
    situations: "You are crucial when decisions need risk checks, contingency plans, and honest questions before commitment.",
    relationships: "You love with devotion and vigilance. People may need to know when you want reassurance versus when you want problem-solving.",
    parenting: "You may create safety and preparedness. The edge is letting kids experience uncertainty without inheriting your alarm system.",
    examples: "Famous echoes: Malcolm X, Mark Ruffalo. Fictional echoes: Ron Weasley, Marlin.",
    member: "Monthly access would add security patterns, trust exercises, and cross-test comparisons for stress and attachment.",
  },
  seven: {
    title: "Type Seven: The Enthusiast",
    score: "Core drive: freedom through possibility",
    summary: "You are quick, imaginative, and oriented toward options. Your growth is staying present when discomfort cannot be outrun.",
    strengths: ["Optimism", "Idea generation", "Resilience"],
    weaknesses: ["Avoiding pain", "Scattered follow-through", "Restlessness"],
    situations: "You bring life to stuck rooms, especially when people need hope, humor, and a bigger menu of choices.",
    relationships: "You love with playfulness and energy. Depth grows when you stay available for hard feelings too.",
    parenting: "You may create adventure and openness. The edge is teaching emotional steadiness alongside possibility.",
    examples: "Famous echoes: Richard Branson, Robin Williams. Fictional echoes: Aang, The Doctor.",
    member: "Monthly access would add focus tools, stress paths, and freedom-versus-avoidance prompts.",
  },
  eight: {
    title: "Type Eight: The Challenger",
    score: "Core drive: protection through strength",
    summary: "You are direct, intense, and allergic to being controlled. Your growth is letting softness exist without feeling like surrender.",
    strengths: ["Courage", "Protection", "Decisive action"],
    weaknesses: ["Over-control", "Intimidating honesty", "Difficulty showing vulnerability"],
    situations: "You are strongest when someone needs to confront reality, defend the vulnerable, or make the hard call.",
    relationships: "You love fiercely and expect honesty. Intimacy deepens when tenderness gets as much room as truth.",
    parenting: "You may raise strong, self-respecting children. The edge is making safety feel gentle, not only powerful.",
    examples: "Famous echoes: Winston Churchill, Serena Williams. Fictional echoes: Leia Organa, Furiosa.",
    member: "Monthly access would add anger patterns, vulnerability practices, and leadership comparisons.",
  },
  nine: {
    title: "Type Nine: The Peacemaker",
    score: "Core drive: harmony through ease and belonging",
    summary: "You have a calming presence and a gift for seeing many sides. Your growth is letting your own desire become as real as everyone else's.",
    strengths: ["Patience", "Mediation", "Grounded empathy"],
    weaknesses: ["Avoidance", "Self-forgetting", "Slow decisions"],
    situations: "You help groups settle, listen, and move without unnecessary damage. Your voice matters most when you risk using it.",
    relationships: "You offer warmth and acceptance. Connection grows when you share wants before they become quiet resistance.",
    parenting: "You may create a peaceful, accepting home. The edge is modeling healthy disagreement and self-advocacy.",
    examples: "Famous echoes: Abraham Lincoln, Audrey Hepburn. Fictional echoes: Chidi Anagonye, Uncle Iroh.",
    member: "Monthly access would add conflict practice, energy patterns, and comparison views with relationship and archetype tests.",
  },
};

const enneagramQuestionBank = [
  ["Boundary pressure", "When someone crosses a line, your first instinct is closest to...",
    ["eight", "Push back directly", "You protect autonomy by naming the power issue out loud."],
    ["nine", "Lower the tension", "You try to keep conflict from swallowing the whole room."],
    ["one", "Name what is wrong", "You want behavior brought back to a fair, responsible standard."]],
  ["Anger pattern", "When anger shows up, it usually comes through as...",
    ["eight", "Fast, direct force", "You would rather confront the issue than pretend it is not there."],
    ["nine", "Buried frustration", "You may go quiet or numb before you admit how much it matters."],
    ["one", "Tight irritation", "You feel the pressure of what should have been handled better."]],
  ["Group friction", "When a group is drifting or messy, you tend to...",
    ["eight", "Take charge", "A clear decision feels better than letting weakness steer the room."],
    ["nine", "Make space for everyone", "You want the group to settle enough that people can be heard."],
    ["one", "Create a cleaner process", "Better structure, standards, or follow-through calm the problem."]],
  ["Body signal", "Your body most quickly senses danger when...",
    ["eight", "Someone tries to control you", "Pressure feels like something to resist immediately."],
    ["nine", "The room gets too sharp", "Tension can make you want to soften, smooth, or step back."],
    ["one", "People stop caring about quality", "Carelessness feels like a sign that things may go wrong."]],
  ["Role reflex", "Under stress, the role you fall into is often...",
    ["eight", "The protector", "You stand between people and whatever feels threatening."],
    ["nine", "The steady presence", "You keep things from breaking apart by staying calm."],
    ["one", "The improver", "You notice the flaw and feel responsible for correcting it."]],
  ["Criticism sting", "Which criticism would probably sting most?",
    ["eight", "You are too controlling", "It hits the fear that your strength may push people away."],
    ["nine", "You never say what you want", "It hits the fear that your presence has gone missing."],
    ["one", "You are wrong or irresponsible", "It hits the fear that your effort still was not good enough."]],
  ["Growth edge", "The healthiest growth move would be...",
    ["eight", "Let softness stay visible", "You can be strong without having to armor every feeling."],
    ["nine", "Let your wants take up space", "Peace gets healthier when your real preference is included."],
    ["one", "Release the inner judge", "Goodness becomes lighter when perfection is not required."]],
  ["Right decision", "A decision feels most right when it is...",
    ["eight", "Honest and strong", "You trust choices that face reality without flinching."],
    ["nine", "Inclusive and steady", "You trust choices that preserve connection and reduce needless damage."],
    ["one", "Ethical and correct", "You trust choices that can stand up to principle and scrutiny."]],
  ["Repair style", "After conflict, your repair instinct is to...",
    ["eight", "Say the truth and move forward", "Directness feels cleaner than circling around the issue."],
    ["nine", "Restore calm and connection", "You want everyone to exhale before the bond hardens."],
    ["one", "Own the mistake and improve the terms", "Repair means making the future more responsible."]],
  ["Control stress", "When you feel control slipping, you may...",
    ["eight", "Push harder", "You try to regain power before someone else defines the terms."],
    ["nine", "Disengage quietly", "You preserve inner calm by stepping away from the pressure."],
    ["one", "Tighten the rules", "You regain footing by making the standard clearer."]],
  ["Hidden fear", "Which hidden fear feels most familiar?",
    ["eight", "Being weak or controlled", "You do not want anyone else holding power over your life."],
    ["nine", "Losing belonging", "You do not want your needs to create separation."],
    ["one", "Being bad, careless, or wrong", "You do not want your choices to violate what is right."]],
  ["Leadership", "Your natural leadership style is closest to...",
    ["eight", "Decisive protection", "You act quickly when people need strength and cover."],
    ["nine", "Calming consensus", "You help people move together without needless pressure."],
    ["one", "Principled example", "You lead by modeling discipline, fairness, and follow-through."]],
  ["Tired pattern", "When you are tired, you are more likely to become...",
    ["eight", "Impatient and forceful", "Pressure lowers your tolerance for hesitation."],
    ["nine", "Passive or checked out", "It gets harder to access your own urgency."],
    ["one", "Critical and tense", "The gap between reality and the ideal feels louder."]],
  ["Healthy self", "When you picture your healthiest self, you are...",
    ["eight", "Strong and tender", "Your power includes openness instead of hiding it."],
    ["nine", "Peaceful and present", "Your calm includes your own voice, not just everyone else's."],
    ["one", "Principled and forgiving", "Your standards serve life instead of squeezing it."]],
  ["Praise", "Which praise would land deepest?",
    ["two", "You made me feel cared for", "Being a source of warmth and help feels meaningful."],
    ["three", "You did something impressive", "Visible excellence confirms that your effort mattered."],
    ["four", "You were deeply authentic", "Being seen as real and singular feels powerful."]],
  ["Insecurity", "When insecurity rises, you are most likely to...",
    ["two", "Become indispensable", "You move toward being needed so connection feels safer."],
    ["three", "Perform harder", "You polish, produce, or adapt so your value stays visible."],
    ["four", "Withdraw into feeling", "You search the emotion for what it says about who you are."]],
  ["Relationship need", "A close relationship feels safest when you are...",
    ["two", "Wanted and useful", "You relax when your care has a clear place to land."],
    ["three", "Admired and chosen", "You relax when people see your worth and are proud of you."],
    ["four", "Known in your depth", "You relax when your inner world is not simplified."]],
  ["Image pattern", "When you manage how people see you, the message is closest to...",
    ["two", "I am generous", "You want people to feel your care before they see your need."],
    ["three", "I am successful", "You want the visible result to speak before doubt can."],
    ["four", "I am different", "You want your realness and uniqueness to be unmistakable."]],
  ["Shame trigger", "Which feeling is hardest to admit?",
    ["two", "I might need too much", "Need can feel risky unless you have already been useful."],
    ["three", "I might not matter without achievement", "Stillness can feel exposing when worth has been tied to output."],
    ["four", "I might be ordinary or flawed", "Sameness can feel like being unseen or reduced."]],
  ["Stress habit", "Under stress, your pattern often becomes...",
    ["two", "Over-giving with resentment underneath", "You keep helping even when your own need is asking to be named."],
    ["three", "Producing through the feeling", "You keep the machine moving so vulnerability stays hidden."],
    ["four", "Intensifying the longing", "The missing thing can become larger than what is actually present."]],
  ["Best gift", "People often benefit most from your ability to...",
    ["two", "Notice what they need", "You catch emotional and practical needs quickly."],
    ["three", "Make things happen", "You translate goals into visible progress."],
    ["four", "Express what others cannot say", "You give language and shape to inner experience."]],
  ["Love language", "When you love someone, you often show it by...",
    ["two", "Anticipating their needs", "You care through attention, support, and personal warmth."],
    ["three", "Building a better future together", "You care through ambition, pride, and momentum."],
    ["four", "Sharing depth and meaning", "You care by letting the relationship feel emotionally real."]],
  ["Overlooked", "When you feel overlooked, your first pull is to...",
    ["two", "Try harder to be helpful", "You hope usefulness will bring closeness back."],
    ["three", "Prove your value", "You want the result to make your worth undeniable."],
    ["four", "Pull inward and feel unseen", "You may retreat into the ache of not being recognized."]],
  ["Growth", "The growth sentence you most need is...",
    ["two", "I can ask directly", "Love does not require you to earn every ounce of care."],
    ["three", "I can be here without performing", "Worth is still present when nothing is being won."],
    ["four", "I can choose the ordinary good", "Meaning can live in what is here, not only what is missing."]],
  ["Conflict", "In conflict, you are most likely to focus on...",
    ["two", "The relational hurt", "Repair matters because disconnection feels threatening."],
    ["three", "The effect on respect and momentum", "You want to stay capable and valued under pressure."],
    ["four", "The emotional truth", "You want the real feeling named, even if it complicates things."]],
  ["Work pride", "You feel proudest at work when you...",
    ["two", "Help people feel supported", "The human impact tells you the effort was worth it."],
    ["three", "Exceed the target", "Clear success confirms that your effort landed."],
    ["four", "Make it meaningful or original", "The work matters when it carries your real signature."]],
  ["Hidden hope", "What do you secretly hope people recognize?",
    ["two", "How much care you give", "You want your generosity to be seen without having to announce it."],
    ["three", "How hard you have worked", "You want the discipline behind the shine to count."],
    ["four", "How much you feel", "You want the depth behind your reactions to be understood."]],
  ["Healthy heart", "When your heart center is healthiest, you are...",
    ["two", "Loving with boundaries", "You can care without disappearing into someone else's need."],
    ["three", "Accomplished and honest", "You can succeed without hiding the unfinished parts."],
    ["four", "Deep and grounded", "You can feel intensely without losing the present moment."]],
  ["Uncertainty", "When you do not know the answer yet, you tend to...",
    ["five", "Step back and research", "Understanding helps you feel capable before you engage."],
    ["six", "Test the risks", "You look for what could go wrong and who can be trusted."],
    ["seven", "Find more options", "Possibility helps you keep fear from closing the room."]],
  ["Fear response", "When fear starts running the show, you often...",
    ["five", "Conserve energy and information", "You protect your inner resources from being drained."],
    ["six", "Prepare contingencies", "Backup plans help you stay steady."],
    ["seven", "Reframe toward the bright side", "A new angle keeps pain or limitation from feeling final."]],
  ["Planning", "A plan feels best when it gives you...",
    ["five", "Enough information", "You want the model before you spend your energy."],
    ["six", "Clear backup options", "You trust plans that account for what might break."],
    ["seven", "Flexible possibilities", "You need room to adapt, explore, and keep momentum alive."]],
  ["Trust", "You trust someone more when they...",
    ["five", "Respect your space", "You feel safer when your privacy and competence are not invaded."],
    ["six", "Stay consistent", "Reliability matters more than charm."],
    ["seven", "Keep life open", "You relax when connection does not feel like a trap."]],
  ["Stress loop", "Your stress loop most often looks like...",
    ["five", "Detaching into analysis", "Thinking can become a hiding place when life asks for contact."],
    ["six", "Questioning and seeking reassurance", "Doubt can keep asking for certainty no one can fully give."],
    ["seven", "Scattering into distraction", "Movement can keep you from sitting with what hurts."]],
  ["Freedom", "The kind of freedom you want most is...",
    ["five", "Uninterrupted inner space", "You want room to think, learn, and restore."],
    ["six", "Dependable safety", "You want enough trust that your nervous system can relax."],
    ["seven", "An open future", "You want choices, adventure, and a sense that life is not closing in."]],
  ["Problem solving", "A hard problem becomes easier when you can...",
    ["five", "Understand the system", "You solve by finding the structure underneath the mess."],
    ["six", "Identify the weak points", "You solve by spotting risk before it becomes damage."],
    ["seven", "Imagine a workaround", "You solve by keeping creativity alive under pressure."]],
  ["Criticism", "Which criticism would land closest to the nerve?",
    ["five", "You do not know enough", "It hits the fear of being unprepared or incompetent."],
    ["six", "You worry too much", "It hits the fear that your vigilance is a problem."],
    ["seven", "You avoid hard things", "It hits the fear that freedom has become escape."]],
  ["Group role", "In a group, you often become...",
    ["five", "The expert observer", "You notice patterns and preserve clarity."],
    ["six", "The loyal questioner", "You test assumptions because you care about the outcome."],
    ["seven", "The possibility opener", "You bring energy, humor, and alternate paths."]],
  ["Stuck moment", "When you feel stuck, your first attempt is usually to...",
    ["five", "Think from a distance", "Space helps the answer become less noisy."],
    ["six", "Check with a trusted source", "You want another read before committing."],
    ["seven", "Move toward a new option", "Fresh motion helps you feel alive again."]],
  ["Hidden fear", "Which hidden fear is most familiar?",
    ["five", "Being depleted, invaded, or incapable", "You do not want the world to demand more than you have."],
    ["six", "Being unsupported or unsafe", "You do not want to discover too late that trust was misplaced."],
    ["seven", "Being trapped in pain or limitation", "You do not want suffering to become the whole story."]],
  ["Decision point", "A decision feels safer when...",
    ["five", "The logic is complete enough", "You can move once the model makes sense."],
    ["six", "The risk feels manageable", "You can move once the dangers have been named."],
    ["seven", "The path still has room", "You can move once the choice does not feel like a dead end."]],
  ["Support", "The help you appreciate most is...",
    ["five", "Useful information and privacy", "You want support that respects your capacity and space."],
    ["six", "Dependable presence and honest answers", "You want support that proves it will still be there tomorrow."],
    ["seven", "Encouragement and a next possibility", "You want support that helps hope stay mobile."]],
  ["Healthy head", "When your head center is healthiest, you are...",
    ["five", "Knowledgeable and engaged", "You bring insight into life instead of staying outside it."],
    ["six", "Prepared and trusting", "You can plan wisely without making fear the boss."],
    ["seven", "Joyful and present", "You can enjoy possibility without running from discomfort."]],
].map(([kicker, prompt, ...options]) => ({
  kicker,
  prompt,
  options: options.map(([value, label, detail]) => ({ label, detail, value })),
}));

const fantasyDimensions = [
  { left: "F", right: "S", leftLabel: "Fantasy/Mythic", rightLabel: "Sci-Fi/Cosmic" },
  { left: "H", right: "A", leftLabel: "Heroic", rightLabel: "Antihero/Rogue" },
  { left: "W", right: "I", leftLabel: "Wise/Strategic", rightLabel: "Instinctive/Action" },
  { left: "L", right: "N", leftLabel: "Loyal/Team-Bound", rightLabel: "Independent/Lone-Wolf" },
  { left: "M", right: "G", leftLabel: "Mystic/Extraordinary", rightLabel: "Grounded/Skilled" },
  { left: "O", right: "R", leftLabel: "Order/Protector", rightLabel: "Rebel/Changer" },
];

const fantasyAxisQuestions = {
  FS: [
    ["World", "The world that pulls you in most is...", "Ancient magic, prophecy, and myth", "You like destiny, symbols, and enchanted stakes.", "Starships, experiments, and future tech", "You like frontiers, systems, and cosmic scale."],
    ["Problem", "A strange problem should be solved with...", "A legend, ritual, or hidden lineage", "The old story contains the key.", "A device, theory, or technical workaround", "The answer lives in the system."],
    ["Setting", "Your ideal adventure begins in...", "A kingdom with old secrets", "History and myth make the quest matter.", "A colony at the edge of space", "Unknown futures make the mission matter."],
    ["Power source", "Power feels more interesting when it comes from...", "Magic, ancestry, or sacred objects", "Mystery should stay a little mysterious.", "Science, training, or engineered tools", "Power should have a mechanism."],
    ["Discovery", "The discovery that would change you is...", "A hidden realm", "The world is bigger than the map.", "A hidden technology", "Reality is bigger than the manual."],
    ["Guide", "You would rather be trained by...", "A mystic mentor", "Wisdom arrives through symbols.", "A brilliant operator", "Wisdom arrives through systems."],
    ["Ending", "The ending you want feels like...", "The curse is broken", "The old wound is healed.", "The signal reaches the stars", "The future opens."],
  ],
  HA: [
    ["Motive", "Your character match should be driven by...", "Protecting what is good", "You respect a clean moral center.", "Surviving a morally gray world", "You respect complicated motives."],
    ["Reputation", "You would rather be known as...", "The person people can count on", "Trust is its own power.", "The person no one can predict", "Freedom is its own power."],
    ["Temptation", "Your tempting flaw would be...", "Taking on too much duty", "Responsibility can become a cage.", "Breaking rules too easily", "Independence can become collateral damage."],
    ["Victory", "A victory feels right when...", "People are safer because of it", "The win should protect the vulnerable.", "The old power structure loses control", "The win should change the rules."],
    ["Conflict", "In conflict, you lean toward...", "Doing the honorable thing", "The line matters even when it costs.", "Doing the necessary thing", "The outcome matters when the line is blurry."],
    ["Ally", "Your best ally would call you...", "Principled", "They trust your heart.", "Dangerous but useful", "They trust your edge."],
    ["Choice", "When no option is clean, you choose...", "The least harmful path", "Your conscience stays involved.", "The path that works", "You accept the moral weight."],
  ],
  WI: [
    ["Approach", "You solve a challenge by first...", "Reading the deeper pattern", "Strategy comes before movement.", "Acting before the window closes", "Movement reveals the answer."],
    ["Timing", "You are strongest when you can...", "Wait for the right moment", "Patience creates leverage.", "Move before others react", "Speed creates leverage."],
    ["Threat", "A threat is best handled by...", "Understanding its motive", "The mind behind it matters.", "Interrupting its momentum", "The action in front of you matters."],
    ["Gift", "Your signature gift is closer to...", "Insight", "You see what others miss.", "Nerve", "You do what others hesitate to do."],
    ["Mistake", "Your mistake would be...", "Overthinking the moment", "The window can close while you calculate.", "Underthinking the cost", "The impact can arrive after the leap."],
    ["Puzzle", "A puzzle gets fun when...", "The pattern reveals itself", "You enjoy the elegant turn.", "The chase speeds up", "You enjoy the live-wire pressure."],
    ["Leadership", "People follow you because you...", "Understand the board", "You know where the pieces are.", "Go first", "You prove the path exists."],
  ],
  LN: [
    ["Bond", "Your story works best when it centers on...", "A loyal fellowship", "You become yourself through bonds.", "A solitary mission", "You become yourself through separation."],
    ["Trust", "Trust grows when someone...", "Stays with you through pressure", "Consistency matters.", "Respects your autonomy", "Space matters."],
    ["Weakness", "Your relationship flaw would be...", "Carrying everyone", "The group can become too heavy.", "Refusing help", "Independence can become isolation."],
    ["Home", "Home means...", "The people you protect", "Belonging has faces.", "The path you choose", "Belonging is self-direction."],
    ["Team", "On a team, you are likely to...", "Hold the group together", "You notice the bonds.", "Handle the risky side quest", "You notice the opening."],
    ["Loss", "Loss would push you to...", "Protect the remaining bonds", "You move toward loyalty.", "Become harder to catch", "You move toward freedom."],
    ["Promise", "The promise you keep is to...", "Your people", "Devotion guides you.", "Your own code", "Self-command guides you."],
  ],
  MG: [
    ["Talent", "Your power should feel like...", "A rare gift", "Something uncanny moves through you.", "A trained skill", "Something earned makes you dangerous."],
    ["Tool", "You would rather carry...", "An enchanted object", "Symbolic power feels alive.", "A perfectly built tool", "Reliable craft feels alive."],
    ["Origin", "Your origin story involves...", "A hidden ability awakening", "You discover what was inside you.", "Training until you become ready", "You build what was missing."],
    ["Edge", "Your edge in a fight is...", "An extraordinary force", "You bend the rules of reality.", "Precision and practice", "You use reality better than others."],
    ["Identity", "You feel more connected to...", "Mystery", "Not everything should be explainable.", "Mastery", "Skill becomes a kind of magic."],
    ["Rescue", "You save the day by...", "Unleashing the impossible", "The answer is bigger than the room.", "Doing the exact right thing", "The answer is cleaner than the panic."],
    ["Symbol", "Your symbol would be...", "A glowing mark", "Power as destiny.", "A scarred tool", "Power as experience."],
  ],
  OR: [
    ["Goal", "Your story goal is to...", "Restore balance", "Protection and repair matter.", "Break the false system", "Change and liberation matter."],
    ["Rules", "Rules are useful when they...", "Protect people", "Order can be compassionate.", "Stop pretending they are neutral", "Rules can hide control."],
    ["Authority", "You respect authority that...", "Serves the vulnerable", "Power should stabilize life.", "Can survive being challenged", "Power should answer questions."],
    ["Arc", "Your growth arc is about...", "Becoming a better protector", "You learn strength with care.", "Becoming a braver disruptor", "You learn freedom with cost."],
    ["Mission", "You accept a mission to...", "Guard what must endure", "Some things should not be lost.", "Expose what must change", "Some things should not continue."],
    ["Ending", "A satisfying ending gives the world...", "A safer structure", "The future can breathe.", "A door nobody can close", "The future can move."],
    ["Conflict role", "In the final act, you would...", "Hold the gate", "You protect the threshold.", "Light the fuse", "You force the transformation."],
  ],
};

const fantasyRoster = [
  "Gandalf", "Galadriel", "Aragorn", "Legolas", "Gimli", "Frodo Baggins", "Samwise Gamgee", "Eowyn",
  "Hermione Granger", "Harry Potter", "Luna Lovegood", "Newt Scamander", "Albus Dumbledore", "Geralt of Rivia", "Yennefer of Vengerberg", "Ciri",
  "Percy Jackson", "Annabeth Chase", "Grover Underwood", "Elphaba", "Glinda", "Willow Rosenberg", "Buffy Summers", "Merlin",
  "Aang", "Katara", "Toph Beifong", "Zuko", "Korra", "Moana", "Mulan", "Aslan",
  "Luke Skywalker", "Leia Organa", "Han Solo", "Rey Skywalker", "Finn", "Poe Dameron", "Obi-Wan Kenobi", "Ahsoka Tano",
  "Spock", "James T. Kirk", "Jean-Luc Picard", "Data", "Ellen Ripley", "Sarah Connor", "Neo", "Trinity",
  "Morpheus", "Paul Atreides", "Chani", "Miles Morales", "Shuri", "T'Challa", "Doctor Strange", "Wanda Maximoff",
  "Tony Stark", "Peter Parker", "Carol Danvers", "The Doctor", "Rose Tyler", "River Song", "Katniss Everdeen", "Furiosa",
];

const fantasyCharacterDetails = Object.fromEntries(
  [
    ["Gandalf", "The Lord of the Rings", "Book/film", "A wandering wizard who guides others through fear, temptation, and impossible odds."],
    ["Galadriel", "The Lord of the Rings", "Book/film", "An ancient elven leader known for foresight, grace, and terrifying inner power."],
    ["Aragorn", "The Lord of the Rings", "Book/film", "A reluctant king who blends humility, courage, loyalty, and battlefield leadership."],
    ["Legolas", "The Lord of the Rings", "Book/film", "An elven archer whose calm precision and loyalty make him deadly under pressure."],
    ["Gimli", "The Lord of the Rings", "Book/film", "A proud warrior with grit, humor, and a fierce devotion to companions."],
    ["Frodo Baggins", "The Lord of the Rings", "Book/film", "A quiet hero who carries a heavy burden because the world depends on it."],
    ["Samwise Gamgee", "The Lord of the Rings", "Book/film", "A loyal companion whose courage shows up as care, endurance, and refusal to quit."],
    ["Eowyn", "The Lord of the Rings", "Book/film", "A shieldmaiden who rejects being underestimated and steps directly into danger."],
    ["Hermione Granger", "Harry Potter", "Book/film", "A brilliant witch whose preparation, loyalty, and moral clarity repeatedly save the day."],
    ["Harry Potter", "Harry Potter", "Book/film", "A marked hero who acts from loyalty, instinct, and a stubborn sense of right."],
    ["Luna Lovegood", "Harry Potter", "Book/film", "An unusual, gentle thinker who sees what others dismiss and stays true to herself."],
    ["Newt Scamander", "Fantastic Beasts", "Film/book", "A soft-spoken magizoologist whose courage is rooted in empathy for overlooked creatures."],
    ["Albus Dumbledore", "Harry Potter", "Book/film", "A powerful mentor whose strategy, wisdom, and secrets shape a larger conflict."],
    ["Geralt of Rivia", "The Witcher", "Book/game/TV", "A monster hunter guided by a hard-earned code in a morally gray world."],
    ["Yennefer of Vengerberg", "The Witcher", "Book/game/TV", "A formidable sorceress driven by power, longing, independence, and transformation."],
    ["Ciri", "The Witcher", "Book/game/TV", "A young warrior with extraordinary destiny who must learn what kind of power she carries."],
    ["Percy Jackson", "Percy Jackson and the Olympians", "Book/TV/film", "A demigod hero who leads with loyalty, humor, and impulsive bravery."],
    ["Annabeth Chase", "Percy Jackson and the Olympians", "Book/TV/film", "A strategic daughter of Athena known for planning, nerve, and earned confidence."],
    ["Grover Underwood", "Percy Jackson and the Olympians", "Book/TV/film", "A gentle protector whose courage grows from friendship and care for the natural world."],
    ["Elphaba", "Wicked", "Book/stage/film", "A misunderstood outsider whose convictions challenge the story everyone else accepted."],
    ["Glinda", "Wicked", "Book/stage/film", "A charismatic public figure who learns the difference between popularity and moral courage."],
    ["Willow Rosenberg", "Buffy the Vampire Slayer", "TV", "A gifted witch whose intelligence and power grow faster than her sense of limits."],
    ["Buffy Summers", "Buffy the Vampire Slayer", "TV", "A chosen fighter who balances ordinary longing with relentless supernatural duty."],
    ["Merlin", "Arthurian legend", "Legend/book/TV", "A legendary wizard and counselor tied to prophecy, kingship, and hidden knowledge."],
    ["Aang", "Avatar: The Last Airbender", "TV", "A playful avatar who carries world-saving responsibility without losing compassion."],
    ["Katara", "Avatar: The Last Airbender", "TV", "A waterbender whose nurturing spirit sits beside fierce discipline and moral fire."],
    ["Toph Beifong", "Avatar: The Last Airbender", "TV", "A blunt, independent earthbender who turns limitation into unmatched strength."],
    ["Zuko", "Avatar: The Last Airbender", "TV", "A scarred prince whose identity is forged through exile, anger, and redemption."],
    ["Korra", "The Legend of Korra", "TV", "A headstrong avatar who learns that power also requires humility and healing."],
    ["Moana", "Moana", "Film", "A voyager called beyond the reef by courage, ancestry, and responsibility to her people."],
    ["Mulan", "Mulan", "Film/legend", "A brave outsider who saves others by refusing the role she was handed."],
    ["Aslan", "The Chronicles of Narnia", "Book/film", "A lion figure of wisdom, sacrifice, authority, and restoring courage."],
    ["Luke Skywalker", "Star Wars", "Film/TV", "A hopeful Jedi whose growth arc moves from longing to disciplined compassion."],
    ["Leia Organa", "Star Wars", "Film/TV", "A rebel leader and princess whose authority is sharp, principled, and fearless."],
    ["Han Solo", "Star Wars", "Film", "A rogue pilot whose cynicism hides loyalty, nerve, and a surprisingly soft center."],
    ["Rey Skywalker", "Star Wars", "Film", "A scavenger turned Jedi who seeks belonging while learning to trust her own power."],
    ["Finn", "Star Wars", "Film", "A former soldier who breaks conditioning and chooses conscience over obedience."],
    ["Poe Dameron", "Star Wars", "Film", "A daring pilot whose charm and courage work best when tied to responsibility."],
    ["Obi-Wan Kenobi", "Star Wars", "Film/TV", "A disciplined Jedi mentor shaped by loss, patience, and principled restraint."],
    ["Ahsoka Tano", "Star Wars", "TV/film", "A former Jedi apprentice who becomes independent without abandoning compassion."],
    ["Spock", "Star Trek", "TV/film", "A logic-driven officer balancing reason, identity, loyalty, and buried feeling."],
    ["James T. Kirk", "Star Trek", "TV/film", "A bold captain who trusts instinct, charisma, and decisive action under pressure."],
    ["Jean-Luc Picard", "Star Trek: The Next Generation", "TV/film", "A principled captain who leads through ethics, diplomacy, and intellectual command."],
    ["Data", "Star Trek: The Next Generation", "TV/film", "An android whose curiosity about humanity reveals precision, innocence, and depth."],
    ["Ellen Ripley", "Alien", "Film", "A survivor whose practical courage and protective instincts sharpen under terror."],
    ["Sarah Connor", "Terminator", "Film/TV", "A mother and fighter transformed by prophecy, trauma, and survival discipline."],
    ["Neo", "The Matrix", "Film", "A reality-questioning hacker who awakens into power by rejecting the false world."],
    ["Trinity", "The Matrix", "Film", "A fearless operative whose loyalty, focus, and skill cut through impossible systems."],
    ["Morpheus", "The Matrix", "Film", "A mentor and rebel who believes in liberation before proof is easy."],
    ["Paul Atreides", "Dune", "Book/film", "A noble heir pulled into prophecy, politics, survival, and dangerous vision."],
    ["Chani", "Dune", "Book/film", "A desert fighter grounded in survival, love, suspicion, and loyalty to her people."],
    ["Miles Morales", "Spider-Man", "Comics/film/game", "A young Spider-Man whose creativity and heart redefine what the mask can mean."],
    ["Shuri", "Black Panther", "Comics/film", "A brilliant inventor whose humor and science carry royal responsibility."],
    ["T'Challa", "Black Panther", "Comics/film", "A king and protector balancing tradition, conscience, diplomacy, and strength."],
    ["Doctor Strange", "Doctor Strange", "Comics/film", "A surgeon turned sorcerer whose control issues become cosmic responsibility."],
    ["Wanda Maximoff", "Marvel", "Comics/film/TV", "A powerful magic user shaped by grief, love, protection, and dangerous emotion."],
    ["Tony Stark", "Iron Man", "Comics/film", "A genius inventor whose arrogance matures into sacrifice and accountability."],
    ["Peter Parker", "Spider-Man", "Comics/film", "A young hero whose humor, guilt, and compassion keep pulling him back to help."],
    ["Carol Danvers", "Captain Marvel", "Comics/film", "A cosmic-powered pilot who fights control by reclaiming memory and identity."],
    ["The Doctor", "Doctor Who", "TV", "A time-traveling alien who solves crises through wit, compassion, and restless curiosity."],
    ["Rose Tyler", "Doctor Who", "TV", "A brave companion whose empathy and wonder make the universe feel personal."],
    ["River Song", "Doctor Who", "TV", "A time-crossed adventurer defined by mystery, confidence, love, and danger."],
    ["Katniss Everdeen", "The Hunger Games", "Book/film", "A reluctant symbol whose survival instincts become revolutionary force."],
    ["Furiosa", "Mad Max", "Film", "A hardened liberator whose purpose is rescue, escape, and earned redemption."],
  ].map(([name, source, medium, bio]) => [
    name,
    {
      name,
      source,
      medium,
      bio,
      image: `assets/characters/${slugifyName(name)}.jpg`,
    },
  ])
);

function buildChoiceQuestion(blueprint, choiceCopy, index) {
  const [kicker, prompt] = blueprint;

  return {
    kicker,
    prompt,
    options: Object.entries(choiceCopy).map(([value, copy]) => ({
      label: copy.labels[index % copy.labels.length],
      detail: copy.details[index % copy.details.length],
      value,
    })),
  };
}

function extendChoiceTest(test, prompts, choiceCopy, target = 42) {
  let promptIndex = 0;

  while (test.questions.length < target) {
    test.questions.push(buildChoiceQuestion(prompts[promptIndex % prompts.length], choiceCopy, promptIndex));
    promptIndex += 1;
  }

  test.questions = test.questions.slice(0, target);
  test.items = "42 questions";
  test.time = test.id === "archetype" ? "12 min" : "10 min";
}

function buildDimensionQuestion(left, right, item) {
  const [kicker, prompt, leftLabel, leftDetail, rightLabel, rightDetail] = item;

  return {
    kicker,
    prompt,
    options: [
      { label: leftLabel, detail: leftDetail, scores: { [left]: 1 } },
      { label: rightLabel, detail: rightDetail, scores: { [right]: 1 } },
    ],
  };
}

function buildMbtiQuestions() {
  return mbtiQuestionGroups.flatMap(([left, right, questions]) =>
    questions.map((question) => buildDimensionQuestion(left, right, question))
  );
}

function buildMbtiProfiles() {
  return Object.fromEntries(
    Object.keys(mbtiTypeNames).map((type) => {
      const letters = type.split("");
      const copy = letters.map((letter) => mbtiDimensionCopy[letter]);
      const examples = mbtiExamples[type];
      const profile = {
        title: `${type}-Style ${mbtiTypeNames[type]}`,
        score: `Type pattern: ${type} across energy, information, decisions, and structure`,
        summary: `Your answers point toward ${copy.map((item) => item.name).join(", ")}. This combination often reads as ${mbtiTypeNames[type].toLowerCase()}: a pattern for how you recharge, notice information, decide, and organize life.`,
        strengths: copy.map((item) => item.strength),
        weaknesses: copy.map((item) => item.watchout),
        situations: `You tend to shine when a situation rewards ${copy[0].strength}, ${copy[1].strength}, ${copy[2].strength}, and ${copy[3].strength}.`,
        relationships: `In relationships, you often show care through ${copy.map((item) => item.relationship).join(", ")}. People understand you best when they see the full pattern, not just one letter.`,
        parenting: `As a parent or mentor, you may model ${copy[1].strength} and ${copy[3].strength}. Your growth edge is balancing your natural style with the child's opposite needs.`,
        examples: `Popularly compared examples: ${examples[0][0]}, ${examples[1][0]}. Fictional echoes: ${examples[2][0]}, ${examples[3][0]}.`,
        examplePeople: {
          famous: [
            { name: examples[0][0], note: examples[0][1], motif: type.slice(0, 2) },
            { name: examples[1][0], note: examples[1][1], motif: type.slice(2) },
          ],
          fictional: [
            { name: examples[2][0], note: examples[2][1], motif: type[0] + type[2] },
            { name: examples[3][0], note: examples[3][1], motif: type[1] + type[3] },
          ],
        },
        member: "Monthly access would save this full 16-type result beside Enneagram, archetype, IQ, and character-match reports.",
      };

      return [type, profile];
    })
  );
}

function buildEnneagramQuestions() {
  return enneagramQuestionBank;
}

function attachExamplePeopleToEnneagramProfiles() {
  Object.values(enneagramProfiles).forEach((profile) => {
    const famous = profile.examples.match(/Famous echoes: ([^.]+)\./)?.[1].split(", ") || [];
    const fictional = profile.examples.match(/Fictional echoes: ([^.]+)\./)?.[1].split(", ") || [];
    profile.examplePeople = {
      famous: famous.slice(0, 2).map((name, index) => ({ name, note: index === 0 ? "historical echo" : "public-life echo", motif: profile.title.match(/Type (\w+)/)?.[1] || "EN" })),
      fictional: fictional.slice(0, 2).map((name, index) => ({ name, note: index === 0 ? "fictional echo" : "story pattern echo", motif: profile.title.slice(5, 7) })),
    };
  });
}

function buildFantasyQuestions() {
  return fantasyDimensions.flatMap((dimension) => {
    const key = `${dimension.left}${dimension.right}`;
    return fantasyAxisQuestions[key].map((question) => buildDimensionQuestion(dimension.left, dimension.right, question));
  });
}

function generateDimensionCodes(dimensions) {
  return dimensions.reduce(
    (codes, dimension) => codes.flatMap((code) => [`${code}${dimension.left}`, `${code}${dimension.right}`]),
    [""]
  );
}

function fantasyDescriptorForCode(code) {
  const descriptions = {
    F: "mythic",
    S: "cosmic",
    H: "heroic",
    A: "rogue",
    W: "strategic",
    I: "instinctive",
    L: "loyal",
    N: "independent",
    M: "extraordinary",
    G: "grounded",
    O: "protective",
    R: "rebellious",
  };

  return code.split("").map((letter) => descriptions[letter]).join(", ");
}

function fantasyFitReason(code, name) {
  const world = code.includes("F")
    ? "You leaned toward mythic stakes, symbolism, destiny, and old-story energy."
    : "You leaned toward cosmic stakes, technology, future systems, and frontier pressure.";
  const morality = code.includes("H")
    ? "Your moral center came through as protective and heroic, even when the task is heavy."
    : "Your answers favored a more complicated, rogue, or antiheroic path where survival and freedom matter.";
  const pace = code.includes("W")
    ? "You solve by reading the board first, which gives this match a strategic, watchful quality."
    : "You solve by moving when the moment opens, which gives this match a fast, instinctive edge.";
  const bonds = code.includes("L")
    ? "You showed a strong loyalty signal: people, promises, and shared missions matter."
    : "You showed an independent signal: autonomy, personal code, and self-direction matter.";
  const power = code.includes("M")
    ? "You were drawn to extraordinary gifts, mystery, and power that feels larger than ordinary skill."
    : "You were drawn to trained competence, grounded skill, and power that has been earned.";
  const arc = code.includes("O")
    ? "Your story arc is more protector than disruptor: repair, guardrails, and stewardship are central."
    : "Your story arc is more rebel than guardian: change, exposure, and refusing false limits are central.";

  return `${name} fits because your pattern combines these signals: ${world} ${morality} ${pace} ${bonds} ${power} ${arc}`;
}

function buildFantasyProfiles() {
  const codes = generateDimensionCodes(fantasyDimensions);
  const famousByCode = {
    F: ["Joan of Arc", "vision and courage"],
    S: ["Katherine Johnson", "precision and frontier thinking"],
    H: ["Nelson Mandela", "moral courage"],
    A: ["Nellie Bly", "rule-breaking curiosity"],
    W: ["Carl Sagan", "wise perspective"],
    I: ["Amelia Earhart", "action under uncertainty"],
    L: ["Harriet Tubman", "protective loyalty"],
    N: ["Galileo Galilei", "independent conviction"],
    M: ["Leonardo da Vinci", "rare imagination"],
    G: ["Hedy Lamarr", "skilled invention"],
    O: ["Eleanor Roosevelt", "protective public service"],
    R: ["Muhammad Ali", "disruptive conviction"],
  };

  return Object.fromEntries(
    codes.map((code, index) => {
      const name = fantasyRoster[index];
      const similar = fantasyRoster[(index + 17) % fantasyRoster.length];
      const firstFamous = famousByCode[code[0]];
      const secondFamous = famousByCode[code[5]];
      const descriptor = fantasyDescriptorForCode(code);
      const character = fantasyCharacterDetails[name];
      const characterFeature = {
        ...character,
        code,
        fit: fantasyFitReason(code, name),
      };

      return [
        code,
        {
          title: `${name} Match`,
          score: `Character code: ${code} | 1 of 64 fantasy/sci-fi possibilities`,
          summary: `Your match is ${name}, built from a ${descriptor} answer pattern. This result blends your preferred world, moral style, decision rhythm, bond style, power source, and story arc.`,
          strengths: [
            code.includes("W") ? "Strategic perspective" : "Fast action under pressure",
            code.includes("L") ? "Loyalty under stress" : "Independent conviction",
            code.includes("O") ? "Protective responsibility" : "Courage to disrupt",
          ],
          weaknesses: [
            code.includes("H") ? "Can carry too much duty" : "Can become hard to pin down",
            code.includes("M") ? "May trust destiny over details" : "May over-rely on self-sufficiency",
            code.includes("F") ? "Can romanticize the quest" : "Can detach into systems",
          ],
          situations: `You are most compelling in stories where ${code.includes("O") ? "something precious must be protected" : "a false system needs to be challenged"} and ${code.includes("W") ? "the board must be read before the move" : "someone has to move before the moment disappears"}.`,
          relationships: `You connect through ${code.includes("L") ? "loyalty, shared missions, and showing up when it counts" : "respect, autonomy, and honest space"}. People get the best of you when they honor both your power and your pressure points.`,
          parenting: `As a parent or mentor, you would likely teach ${code.includes("H") ? "courage with conscience" : "self-trust with edge"}. The growth move is helping younger people feel safe without forcing them into your exact story arc.`,
          examples: `Famous echoes: ${firstFamous[0]}, ${secondFamous[0]}. Fictional echoes: ${name}, ${similar}.`,
          characterFeature,
          examplePeople: {
            famous: [
              { name: firstFamous[0], note: firstFamous[1], motif: code.slice(0, 2) },
              { name: secondFamous[0], note: secondFamous[1], motif: code.slice(4) },
            ],
            fictional: [
              { name, note: "your primary character match", motif: code.slice(0, 2) },
              { name: similar, note: "nearby story-pattern echo", motif: code.slice(2, 4) },
            ],
          },
          member: "Monthly access would save this character code and compare it with your MBTI-style, Enneagram, IQ, and archetype patterns.",
        },
      ];
    })
  );
}

function createFantasyScifiTest() {
  return {
    id: "fantasy-scifi",
    title: "Fantasy/Sci-Fi Character Match",
    category: "Pop Culture",
    tone: "violet",
    symbol: "FS",
    status: "Live",
    time: "12 min",
    items: "42 questions",
    price: "$1 report",
    scoring: "dimensions",
    totalPossibilities: 64,
    dimensions: fantasyDimensions,
    description: "A broad fantasy and sci-fi character matcher with 64 possible outcomes across heroic, rogue, mythic, cosmic, loyal, lone-wolf, protector, and rebel patterns.",
    questions: buildFantasyQuestions(),
    profiles: buildFantasyProfiles(),
  };
}

const attachmentDimensions = [
  { left: "S", right: "A", leftLabel: "Settled Trust", rightLabel: "Reassurance Seeking" },
  { left: "O", right: "D", leftLabel: "Open Closeness", rightLabel: "Protective Distance" },
];

const attachmentQuestionGroups = [
  [
    "S",
    "A",
    [
      ["Texting", "When someone you care about replies later than usual, you usually...", "Assume life got busy", "You can wait without making the delay personal.", "Start reading the delay", "Your mind looks for what the silence might mean."],
      ["Plans", "If plans change suddenly, your first emotional reaction is...", "Flexible if the care is clear", "You can adjust when the bond still feels steady.", "Worried about the hidden message", "You wonder whether the change means something about you."],
      ["Conflict", "During a disagreement, you most need...", "Honest repair", "You want the issue named and handled.", "Immediate reassurance", "You need to know the relationship is still safe."],
      ["Space", "When a partner or close friend asks for space, you tend to...", "Let the space breathe", "You can respect it without losing yourself.", "Feel the distance sharply", "Space can feel like rejection before you have proof."],
      ["Affection", "You feel most secure when affection is...", "Consistent enough", "Small steady signals build trust.", "Frequent and explicit", "You relax when care is named often."],
      ["Uncertainty", "When you are unsure where you stand, you usually...", "Ask directly when needed", "You prefer clarity without spiraling.", "Replay every detail", "You search for clues until your body calms down."],
      ["Closeness", "The closeness you want most feels like...", "Warm and dependable", "Love can be stable without being dramatic.", "Intense and unmistakable", "You want to feel chosen beyond doubt."],
      ["Jealousy", "Jealousy shows up for you as...", "A signal to check facts", "You can pause before making a story.", "A fast alarm", "Your nervous system tries to protect you from being replaced."],
      ["Repair", "After a rupture, the thing that helps most is...", "A clear conversation", "Understanding what happened lets you move on.", "Extra closeness", "You need warmth before logic can land."],
      ["Independence", "When you are doing well alone, you feel...", "Connected and separate", "Independence does not threaten closeness.", "A little unsteady", "Part of you wants proof you have not been forgotten."],
      ["Memory", "Your mind remembers relationship details mostly to...", "Understand the pattern", "You use memory for learning and repair.", "Protect against hurt", "You keep score when safety feels uncertain."],
      ["Need", "When you need support, asking for it feels...", "Reasonable", "Needs are part of being close.", "Risky", "You worry the ask could be too much."],
      ["Commitment", "Commitment feels strongest when it is...", "Lived consistently", "Actions over time create confidence.", "Repeated verbally", "You need the promise refreshed and spoken."],
      ["Tone", "If someone's tone feels off, you usually...", "Check before deciding", "You can leave room for other explanations.", "Brace for a shift", "You feel the possible rejection quickly."],
      ["Friendship", "In friendship, you maintain security through...", "Reliable rhythm", "Trust grows through ordinary showing up.", "Frequent checking in", "Regular contact helps quiet doubt."],
      ["Vulnerability", "When you share something tender, you want...", "Attentive presence", "You need enough care to feel met.", "Strong confirmation", "You want to know it mattered to them."],
      ["Mistake", "If you make a relational mistake, you usually...", "Own it and repair", "You trust that one mistake is not the whole bond.", "Fear it changed everything", "You can feel one mistake as a threat to closeness."],
      ["Distance", "Emotional distance usually means...", "A conversation is needed", "You do not assume the worst right away.", "Something is wrong", "Distance feels like evidence before it is explained."],
      ["Love language", "The care signal you trust most is...", "Follow-through", "Promises feel real when they become action.", "Reassuring words", "You relax when care is clearly said."],
      ["Stress", "Under stress, your attachment system usually...", "Looks for practical repair", "You want to solve the bond problem.", "Looks for proof of love", "You want certainty before anything else."],
      ["Growth", "Your healthiest relationship move is to...", "Stay present and clear", "You can ask without chasing.", "Self-soothe before seeking proof", "You can want closeness without letting fear drive."],
    ],
  ],
  [
    "O",
    "D",
    [
      ["Dependence", "Depending on someone emotionally feels...", "Natural in the right bond", "Mutual care does not feel like weakness.", "Hard to fully trust", "You prefer not to need too much from anyone."],
      ["Pressure", "When someone wants more closeness than you can give, you usually...", "Name your capacity", "You can stay connected while setting a limit.", "Pull back quietly", "Distance feels safer than explaining the limit."],
      ["Support", "When someone offers help, your first instinct is to...", "Receive it if it fits", "You can let care in without losing agency.", "Handle it yourself", "Self-reliance feels cleaner than owing anyone."],
      ["Conflict", "In conflict, you are more likely to...", "Stay available for repair", "You can tolerate the discomfort of talking it through.", "Shut down or detach", "Your system protects itself by going private."],
      ["Vulnerability", "Being emotionally exposed feels...", "Brave and connecting", "You can share more when trust is present.", "Unsafe or inefficient", "Part of you wants to edit the need out."],
      ["Closeness", "When closeness gets intense, you tend to...", "Let it deepen slowly", "Depth feels good when there is room to breathe.", "Need an exit ramp", "Intensity can make you feel trapped."],
      ["Needs", "When someone asks what you need, you often...", "Can answer honestly", "You have access to your own signals.", "Minimize the answer", "It is easier to need less."],
      ["Daily life", "A good relationship rhythm has...", "Shared routines and solo time", "Connection and independence can coexist.", "A lot of personal space", "You relax when nobody expects too much access."],
      ["After hurt", "After someone hurts you, your first move is to...", "Talk when you are ready", "You can re-open the door after cooling down.", "Close the inner door", "Distance helps you feel protected."],
      ["Praise", "Warm praise from someone close feels...", "Easy to receive", "You can let appreciation land.", "A little exposing", "Being seen too directly can feel uncomfortable."],
      ["Commitment", "Long-term commitment sounds like...", "A chosen partnership", "Security can create more freedom.", "A possible loss of freedom", "You notice what commitment might cost."],
      ["Repair", "The repair style that works for you is...", "Clear and emotionally present", "You want both truth and warmth.", "Short and practical", "You prefer not to stay in the emotional heat."],
      ["Family patterns", "Old family patterns taught you to...", "Seek safe connection", "You believe closeness can be learned and repaired.", "Protect your independence", "You learned not to count on people too much."],
      ["Receiving care", "When someone cares for you consistently, you...", "Soften over time", "Steady care makes closeness easier.", "Question the catch", "Reliability can feel unfamiliar or suspicious."],
      ["Apology", "A sincere apology makes you want to...", "Reconnect with better boundaries", "Repair helps trust grow wiser.", "Keep distance anyway", "You need a lot of proof before re-opening."],
      ["Emotion", "Big feelings in a relationship make you...", "Want honest language", "Naming emotion makes it less scary.", "Want space from the room", "Emotion can feel like pressure to perform."],
      ["Asking", "Asking for comfort feels...", "Human", "Needing reassurance sometimes is allowed.", "Too vulnerable", "You would rather comfort yourself first."],
      ["Dating", "Early dating is easiest when there is...", "Warm interest and pacing", "You can be interested without rushing.", "Low expectation", "You need room not to feel claimed too fast."],
      ["Friendship", "You keep friendship healthiest by...", "Staying emotionally honest", "You let people know where you are.", "Keeping low-maintenance bonds", "You prefer connection that does not demand much."],
      ["Stress", "When life is overwhelming, you usually...", "Let trusted people know", "Connection can help you regulate.", "Go quiet until you recover", "Privacy helps you feel in control again."],
      ["Growth", "Your healthiest closeness move is to...", "Let care be mutual", "You can be both independent and reachable.", "Stay open when you want to vanish", "You can protect yourself without disappearing."],
    ],
  ],
];

const attachmentProfiles = {
  SO: {
    title: "Secure Bond Builder",
    score: "Attachment pattern: settled trust with open closeness",
    summary:
      "Your answers point toward a secure relationship pattern. You can care deeply without losing yourself, ask for repair without panic, and let closeness feel steady rather than consuming.",
    strengths: ["Trust with boundaries", "Direct repair", "Comfort with mutual care"],
    weaknesses: ["May underestimate others' fear", "Can expect clarity before people are ready", "May need practice with very guarded partners"],
    situations:
      "In tense moments, you are likely to look for the real issue, name what matters, and keep the bond available while still respecting limits.",
    relationships:
      "You usually create safety through consistency, honest conversation, and a sense that both people can be separate and connected.",
    parenting:
      "As a parent or mentor, you would likely model emotional steadiness, apology, and boundaries that do not feel like rejection.",
    examples:
      "Famous echoes, not diagnoses: Fred Rogers, Michelle Obama. Fictional echoes: Samwise Gamgee, T'Challa.",
    examplePeople: {
      famous: [
        { name: "Fred Rogers", note: "warm consistency and repair", motif: "heart" },
        { name: "Michelle Obama", note: "grounded connection and boundaries", motif: "home" },
      ],
      fictional: [
        { name: "Samwise Gamgee", note: "devoted but steady care", motif: "leaf" },
        { name: "T'Challa", note: "protective and emotionally grounded", motif: "crown" },
      ],
    },
    uniqueSections: [
      {
        kicker: "Attachment-Specific",
        title: "Trigger Pattern",
        body:
          "Your biggest triggers are usually unclear repair, not ordinary independence. You do best when conflict has language, care, and limits.",
      },
      {
        kicker: "Repair Practice",
        title: "What To Try",
        body:
          "Name the issue early, ask for what would help, and keep the tone warm enough that repair does not become a trial.",
      },
    ],
    member:
      "Monthly access would compare this attachment pattern with your Enneagram, archetype, and character-match results so you can see where security is strongest and where stress changes it.",
  },
  AO: {
    title: "Reassurance Seeker",
    score: "Attachment pattern: high closeness need with worry under uncertainty",
    summary:
      "Your answers suggest a warm, highly bonded style that can become anxious when the signal is unclear. You care intensely and often look for proof that the relationship is still safe.",
    strengths: ["Emotional attunement", "Loyal investment", "Fast awareness of disconnection"],
    weaknesses: ["Can read silence as rejection", "May over-check for certainty", "Can let fear set the pace"],
    situations:
      "When distance appears, your system tries to close the gap quickly. The growth move is pausing long enough to separate facts from fear before reaching out.",
    relationships:
      "You love with presence and devotion. The right partners and friends help by being clear, while you help yourself by building self-soothing before reassurance.",
    parenting:
      "As a parent or mentor, your warmth can be powerful. The edge is helping young people feel loved without making every separation feel dangerous.",
    examples:
      "Famous echoes, not diagnoses: Princess Diana, Judy Garland. Fictional echoes: Bridget Jones, Ted Mosby.",
    examplePeople: {
      famous: [
        { name: "Princess Diana", note: "public warmth and longing for closeness", motif: "heart" },
        { name: "Judy Garland", note: "tender visibility and emotional intensity", motif: "stage" },
      ],
      fictional: [
        { name: "Bridget Jones", note: "hopeful romantic vulnerability", motif: "diary" },
        { name: "Ted Mosby", note: "devoted search for certainty in love", motif: "umbrella" },
      ],
    },
    uniqueSections: [
      {
        kicker: "Attachment-Specific",
        title: "Trigger Pattern",
        body:
          "Delayed replies, vague tone, or uncertain plans can hit quickly. Your body may seek proof before the facts are clear.",
      },
      {
        kicker: "Repair Practice",
        title: "What To Try",
        body:
          "Pause, regulate, ask one direct question, and let the answer be enough before asking again.",
      },
    ],
    member:
      "Monthly access would add reassurance scripts, conflict reflections, and comparisons with motivation and personality results.",
  },
  SD: {
    title: "Independent Protector",
    score: "Attachment pattern: settled self-reliance with protective distance",
    summary:
      "Your answers point toward a self-reliant style. You may trust yourself easily and trust others more slowly, especially when closeness starts to feel demanding or intrusive.",
    strengths: ["Autonomy", "Calm under pressure", "Low drama boundaries"],
    weaknesses: ["Can minimize needs", "May detach instead of repair", "Can make others feel shut out"],
    situations:
      "When emotions get loud, you often create space so you can think. The growth move is telling people what is happening instead of simply disappearing into competence.",
    relationships:
      "You love through loyalty, reliability, and respecting freedom. Closeness deepens when you let trusted people matter before everything is already handled.",
    parenting:
      "As a parent or mentor, you may teach independence and resilience. The edge is showing that needing comfort is not a failure.",
    examples:
      "Famous echoes, not diagnoses: Amelia Earhart, Clint Eastwood. Fictional echoes: Elsa, Geralt of Rivia.",
    examplePeople: {
      famous: [
        { name: "Amelia Earhart", note: "autonomy and courage", motif: "wing" },
        { name: "Clint Eastwood", note: "self-contained toughness", motif: "ridge" },
      ],
      fictional: [
        { name: "Elsa", note: "distance as protection", motif: "snow" },
        { name: "Geralt of Rivia", note: "guarded loyalty", motif: "wolf" },
      ],
    },
    uniqueSections: [
      {
        kicker: "Attachment-Specific",
        title: "Trigger Pattern",
        body:
          "Pressure, emotional intensity, or too much access can feel like a loss of freedom, even when the other person means well.",
      },
      {
        kicker: "Repair Practice",
        title: "What To Try",
        body:
          "Tell people you are taking space and when you will return, so distance becomes a boundary rather than disappearance.",
      },
    ],
    member:
      "Monthly access would track where independence is healthy, where it becomes armor, and how it connects to your career and archetype results.",
  },
  AD: {
    title: "Push-Pull Protector",
    score: "Attachment pattern: closeness hunger with protective shutdown",
    summary:
      "Your answers suggest a mixed attachment pattern: you may want deep closeness while also bracing against the risk of needing someone. That can create a push-pull rhythm under stress.",
    strengths: ["Emotional depth", "Survival sensitivity", "Strong radar for relational risk"],
    weaknesses: ["Can test trust", "May alternate pursuit and withdrawal", "Can confuse intensity with safety"],
    situations:
      "When a bond matters, you may move toward it and away from it at the same time. The growth move is slowing the cycle enough to name both the longing and the fear.",
    relationships:
      "You connect deeply when trust is patient, honest, and not rushed. Stability grows when repair is predictable and distance is explained rather than used as a shield.",
    parenting:
      "As a parent or mentor, your sensitivity can help children feel deeply seen. The edge is regulating your alarm before responding to theirs.",
    examples:
      "Famous echoes, not diagnoses: Frida Kahlo, Vincent van Gogh. Fictional echoes: Wanda Maximoff, Zuko.",
    examplePeople: {
      famous: [
        { name: "Frida Kahlo", note: "intensity, longing, and self-protection", motif: "flower" },
        { name: "Vincent van Gogh", note: "emotional depth and vulnerability", motif: "star" },
      ],
      fictional: [
        { name: "Wanda Maximoff", note: "love and fear under grief", motif: "spark" },
        { name: "Zuko", note: "guarded longing for belonging", motif: "flame" },
      ],
    },
    uniqueSections: [
      {
        kicker: "Attachment-Specific",
        title: "Trigger Pattern",
        body:
          "Closeness and risk can arrive together. You may pursue connection and protect yourself at the same time.",
      },
      {
        kicker: "Repair Practice",
        title: "What To Try",
        body:
          "Name both truths: I want closeness and I am scared. Then choose one steady repair action.",
      },
    ],
    member:
      "Monthly access would add regulation prompts, repair language, and cross-test views for stress, conflict, and intimacy patterns.",
  },
};

function buildAttachmentQuestions() {
  return attachmentQuestionGroups.flatMap(([left, right, questions]) =>
    questions.map((question) => buildDimensionQuestion(left, right, question))
  );
}

const careerDimensions = [
  { left: "M", right: "R", leftLabel: "Mastery/Craft", rightLabel: "Recognition/Status" },
  { left: "A", right: "S", leftLabel: "Autonomy/Freedom", rightLabel: "Security/Structure" },
  { left: "I", right: "C", leftLabel: "Mission/Impact", rightLabel: "Creativity/Novelty" },
];

const careerQuestionGroups = [
  [
    "M",
    "R",
    [
      ["Reward", "A workday feels worth it when you...", "Get better at something hard", "Skill growth is deeply satisfying.", "Are visibly valued for the win", "Recognition tells you the effort landed."],
      ["Compliment", "The compliment that motivates you most is...", "You are excellent at this", "Mastery matters more than applause.", "People noticed your impact", "Status and visibility give the work energy."],
      ["Promotion", "A promotion appeals most because it gives you...", "Harder problems", "You want a larger craft challenge.", "More influence", "You want your value to be seen and felt."],
      ["Learning", "You choose a course or mentor based on...", "Depth of expertise", "You want the best teacher for the craft.", "Credibility and network", "You want the doors that open afterward."],
      ["Competition", "Competition is useful when it...", "Sharpens your skill", "The rival makes you better.", "Proves your standing", "The scoreboard tells the truth."],
      ["Failure", "Failure bothers you most when it means...", "You were not prepared enough", "The craft gap gets your attention.", "People may doubt you", "Reputation risk hits hard."],
      ["Portfolio", "You would rather build a career known for...", "Excellent work", "Quality is the legacy.", "Visible wins", "Momentum and reputation are the legacy."],
      ["Feedback", "The feedback you want first is...", "How to improve the work", "Useful critique beats vague praise.", "How the work was received", "Audience and stakeholder response matter."],
      ["Pride", "You feel proudest when you...", "Solve the difficult piece", "The private breakthrough matters.", "Get chosen for the big room", "External trust feels like a milestone."],
      ["Motivation", "Your motivation fades when...", "The work becomes shallow", "You need substance to stay engaged.", "Nobody notices the effort", "Invisible work can start feeling pointless."],
      ["Role model", "Your ideal role model is...", "A master of the craft", "Their excellence teaches you.", "A respected public leader", "Their influence teaches you."],
      ["Decision", "When choosing between roles, you pick...", "The better skill ladder", "Growth over optics.", "The stronger platform", "Leverage over obscurity."],
      ["Daily metric", "The metric you check first is...", "Quality improvement", "You want to know the work is stronger.", "Recognition or reach", "You want to know the work traveled."],
      ["Growth", "The career growth move you need now is...", "Deeper mastery", "You want your craft to become undeniable.", "Bolder visibility", "You want your contribution to be impossible to miss."],
    ],
  ],
  [
    "A",
    "S",
    [
      ["Schedule", "Your ideal schedule gives you...", "Control over your time", "Freedom helps you do your best work.", "Reliable structure", "Predictability helps you focus."],
      ["Manager", "The best manager gives you...", "Room to choose the path", "Autonomy creates ownership.", "Clear expectations", "Structure makes success repeatable."],
      ["Risk", "A career risk feels acceptable when...", "It expands your freedom", "Independence is worth uncertainty.", "The downside is contained", "Security lets you take a smart risk."],
      ["Environment", "You thrive in an environment with...", "Flexibility", "You need room to adapt.", "Stability", "You need a dependable base."],
      ["Rules", "Rules are useful when they...", "Protect freedom without micromanaging", "You want guardrails, not cages.", "Create fairness and clarity", "You want everyone to know the standard."],
      ["Stress", "Under work stress, you most need...", "Space to solve it your way", "Control helps you regulate.", "A clear plan", "Structure helps you regulate."],
      ["Offer", "A job offer becomes more attractive if it includes...", "Remote or flexible options", "Choice is part of compensation.", "Benefits and long-term security", "Stability is part of compensation."],
      ["Ownership", "You feel most responsible when...", "You designed the route", "Self-direction increases commitment.", "The role is clearly defined", "Clarity increases commitment."],
      ["Change", "When a workplace changes quickly, you...", "Look for new freedom", "Change can open space.", "Look for the new rules", "Change needs a stable map."],
      ["Burnout", "Burnout starts when you...", "Lose control of your work", "Too much constraint drains you.", "Lose dependable support", "Too much uncertainty drains you."],
      ["Team", "A team works best when it gives people...", "Autonomy with trust", "People should own their lane.", "Reliable systems", "People should have shared structure."],
      ["Money", "Money matters most because it gives you...", "Options", "Resources buy freedom.", "Security", "Resources buy peace."],
      ["Planning", "You plan your career by asking...", "What gives me more agency?", "Freedom is the north star.", "What creates a stronger foundation?", "Stability is the north star."],
      ["Growth", "The next role should give you more...", "Independence", "You want a wider lane.", "Reliability", "You want a stronger base."],
    ],
  ],
  [
    "I",
    "C",
    [
      ["Meaning", "Work feels meaningful when it...", "Helps people or improves a system", "Impact gives the effort weight.", "Lets you make something new", "Originality gives the effort life."],
      ["Project", "The project you volunteer for first is...", "The one with real-world stakes", "You want the work to matter beyond itself.", "The one with creative freedom", "You want room to invent."],
      ["Boredom", "You get bored fastest when work lacks...", "Purpose", "Tasks need a reason.", "Variety", "Tasks need freshness."],
      ["Legacy", "You would rather leave behind...", "A measurable difference", "The world should be better because you were there.", "A distinctive body of work", "The work should feel unmistakably yours."],
      ["Brainstorm", "In a brainstorm, you push for...", "Usefulness", "Ideas should solve a real problem.", "Originality", "Ideas should open a new door."],
      ["Customer", "You care most that customers or users...", "Are truly helped", "Their lives should improve.", "Feel surprised and engaged", "Their imagination should wake up."],
      ["Mission", "A company mission matters when it is...", "Ethical and real", "Values should show up in decisions.", "Bold and imaginative", "Vision should make people feel possibility."],
      ["Recognition", "You want to be recognized for...", "Making a difference", "Impact is the proof.", "Making something fresh", "Originality is the proof."],
      ["Problem", "A hard problem hooks you when it...", "Affects real people", "Human stakes keep you invested.", "Has no obvious answer", "Novelty keeps you invested."],
      ["Routine", "Routine is tolerable when it...", "Serves a meaningful outcome", "Purpose can carry repetition.", "Leaves room for experiments", "Variety can refresh repetition."],
      ["Team value", "Your team value is strongest when you...", "Keep the purpose in view", "You remind people why it matters.", "Generate a new angle", "You remind people what else is possible."],
      ["Ethics", "You are most likely to challenge work that...", "Does not align with values", "Mission without integrity loses you.", "Feels stale or copied", "Creativity without life loses you."],
      ["Energy", "Your energy rises when you can...", "Serve something bigger", "Contribution gives you stamina.", "Invent something different", "Creation gives you stamina."],
      ["Growth", "The career growth move you need now is...", "Choose higher-impact work", "You want stronger purpose.", "Choose more original work", "You want wider creative range."],
    ],
  ],
];

const careerDriverCopy = {
  M: {
    name: "mastery",
    strength: "craft discipline",
    watchout: "perfectionism or hiding until the work is flawless",
    relationship: "offering competence and thoughtful improvement",
  },
  R: {
    name: "recognition",
    strength: "ambition and visibility",
    watchout: "letting applause define the value of the work",
    relationship: "bringing momentum, confidence, and public energy",
  },
  A: {
    name: "autonomy",
    strength: "self-direction",
    watchout: "resisting structure even when it would help",
    relationship: "giving people freedom and trusting ownership",
  },
  S: {
    name: "security",
    strength: "stability and follow-through",
    watchout: "staying too long in a safe but shrinking lane",
    relationship: "creating reliability people can count on",
  },
  I: {
    name: "mission",
    strength: "purpose-led effort",
    watchout: "over-carrying work because it matters",
    relationship: "keeping the human stakes visible",
  },
  C: {
    name: "creativity",
    strength: "fresh thinking",
    watchout: "chasing novelty before finishing the useful thing",
    relationship: "making work feel alive and possible",
  },
};

const careerExamples = {
  MAI: [["Marie Curie", "mastery with purpose"], ["Jane Goodall", "deep craft in service of life"], ["Hermione Granger", "prepared mission focus"], ["Shuri", "skill applied to impact"]],
  MAC: [["Leonardo da Vinci", "mastery and invention"], ["David Bowie", "craft with reinvention"], ["Tony Stark", "technical creativity"], ["Luna Lovegood", "original perception"]],
  MSI: [["Florence Nightingale", "systematic service"], ["Jonas Salk", "careful work for public good"], ["Samwise Gamgee", "steady useful devotion"], ["T'Challa", "stable mission leadership"]],
  MSC: [["Hedy Lamarr", "skilled invention"], ["Walt Disney", "creative systems"], ["Data", "precise curiosity"], ["Newt Scamander", "craft and wonder"]],
  RAI: [["Oprah Winfrey", "visible influence with purpose"], ["Barack Obama", "public leadership and mission"], ["Princess Leia", "commanding cause-driven leadership"], ["Jean-Luc Picard", "principled authority"]],
  RAC: [["Lady Gaga", "visible creative originality"], ["Steve Jobs", "influence through design"], ["Glinda", "charismatic creative polish"], ["Tony Stark", "spotlight innovation"]],
  RSI: [["Alexander Hamilton", "ambition tied to institution-building"], ["Indra Nooyi", "executive impact"], ["Leslie Knope", "status used for public service"], ["Princess Leia", "structured resistance leadership"]],
  RSC: [["Anna Wintour", "prestige and creative standards"], ["Martha Stewart", "brand, structure, and taste"], ["Miranda Priestly", "high-status creative command"], ["Bruce Wayne", "resources and disciplined systems"]],
};

function careerTitleForCode(code) {
  const titles = {
    MAI: "Mission-Driven Expert",
    MAC: "Independent Creative Specialist",
    MSI: "Steady Impact Builder",
    MSC: "Reliable Craft Designer",
    RAI: "Influence-Driven Changemaker",
    RAC: "Creative Spotlight Driver",
    RSI: "Purposeful Organization Climber",
    RSC: "Prestige-Stability Strategist",
  };
  return titles[code] || "Career Driver Blend";
}

function careerSummaryForCode(code) {
  const copy = code.split("").map((letter) => careerDriverCopy[letter]);
  return `Your work motivation leans toward ${copy.map((item) => item.name).join(", ")}. You are most energized when your role lets you use ${copy[0].strength}, ${copy[1].strength}, and ${copy[2].strength} in the same direction.`;
}

function buildCareerQuestions() {
  return careerQuestionGroups.flatMap(([left, right, questions]) =>
    questions.map((question) => buildDimensionQuestion(left, right, question))
  );
}

function buildCareerProfiles() {
  return Object.fromEntries(
    generateDimensionCodes(careerDimensions).map((code) => {
      const copy = code.split("").map((letter) => careerDriverCopy[letter]);
      const examples = careerExamples[code];
      return [
        code,
        {
          title: careerTitleForCode(code),
          score: `Career driver code: ${code} | 1 of 8 motivation patterns`,
          summary: careerSummaryForCode(code),
          strengths: copy.map((item) => item.strength),
          weaknesses: copy.map((item) => item.watchout),
          situations: `You are likely strongest in roles where ${copy[0].name}, ${copy[1].name}, and ${copy[2].name} are rewarded instead of treated as side benefits.`,
          relationships: `At work, people experience you through ${copy.map((item) => item.relationship).join(", ")}. Your best teams understand what actually fuels you.`,
          parenting: `As a parent or mentor, you may encourage younger people to value ${copy[0].name} and ${copy[2].name}. The growth edge is remembering that their driver blend may not match yours.`,
          examples: `Famous echoes, not diagnoses: ${examples[0][0]}, ${examples[1][0]}. Fictional echoes: ${examples[2][0]}, ${examples[3][0]}.`,
          examplePeople: {
            famous: [
              { name: examples[0][0], note: examples[0][1], motif: code.slice(0, 2) },
              { name: examples[1][0], note: examples[1][1], motif: code.slice(1) },
            ],
            fictional: [
              { name: examples[2][0], note: examples[2][1], motif: code[0] + code[2] },
              { name: examples[3][0], note: examples[3][1], motif: code[1] + code[2] },
            ],
          },
          uniqueSections: [
            {
              kicker: "Career-Specific",
              title: "Best-Fit Environment",
              body: `You will probably do best where ${copy[0].name}, ${copy[1].name}, and ${copy[2].name} are explicitly valued, not treated as nice-to-have extras.`,
            },
            {
              kicker: "Role Red Flag",
              title: "What Drains You",
              body: `Watch roles that block ${copy[1].name}, flatten ${copy[0].name}, or make ${copy[2].name} impossible to practice in daily work.`,
            },
          ],
          member:
            "Monthly access would compare this driver blend with IQ, archetype, Enneagram, attachment, and character-match results so career choices can line up with the rest of your profile.",
        },
      ];
    })
  );
}

function configureAssessmentCatalog() {
  const archetype = tests.find((test) => test.id === "archetype");
  if (archetype) extendChoiceTest(archetype, archetypePrompts, archetypeChoiceCopy, 42);

  const mbti = tests.find((test) => test.id === "mbti");
  if (mbti) {
    mbti.scoring = "dimensions";
    mbti.dimensions = mbtiDimensions;
    mbti.totalPossibilities = 16;
    mbti.questions = buildMbtiQuestions();
    mbti.profiles = buildMbtiProfiles();
    mbti.items = "42 questions";
    mbti.time = "12 min";
    mbti.description = "A complete 16-outcome type map inspired by the familiar MBTI framework, scored across energy, information, decisions, and structure.";
  }

  const enneagram = tests.find((test) => test.id === "enneagram");
  if (enneagram) {
    attachExamplePeopleToEnneagramProfiles();
    enneagram.questions = buildEnneagramQuestions();
    enneagram.profiles = enneagramProfiles;
    enneagram.items = "42 questions";
    enneagram.time = "12 min";
    enneagram.description = "A full 9-type motivation test that looks beneath behavior to the fear, desire, and coping pattern that quietly steers you.";
  }

  const fantasySeedIndex = tests.findIndex((test) => test.id === "fantasy-seed");
  if (fantasySeedIndex >= 0) tests.splice(fantasySeedIndex, 1, createFantasyScifiTest());

  const scifi = tests.find((test) => test.id === "scifi");
  if (scifi) extendChoiceTest(scifi, scifiPrompts, scifiChoiceCopy, 42);

  const attachment = tests.find((test) => test.id === "attachment");
  if (attachment) {
    attachment.category = "Psychology";
    attachment.status = "Live";
    attachment.time = "12 min";
    attachment.items = "42 questions";
    attachment.price = "$1 report";
    attachment.scoring = "dimensions";
    attachment.totalPossibilities = 4;
    attachment.dimensions = attachmentDimensions;
    attachment.description =
      "A relationship-focused test for closeness, reassurance, independence, conflict repair, and emotional safety.";
    attachment.questions = buildAttachmentQuestions();
    attachment.profiles = attachmentProfiles;
  }

  const career = tests.find((test) => test.id === "career");
  if (career) {
    career.category = "Psychology";
    career.status = "Live";
    career.time = "12 min";
    career.items = "42 questions";
    career.price = "$1 report";
    career.scoring = "dimensions";
    career.totalPossibilities = 8;
    career.dimensions = careerDimensions;
    career.description =
      "A practical career motivation test for mastery, recognition, autonomy, security, mission, and creativity.";
    career.questions = buildCareerQuestions();
    career.profiles = buildCareerProfiles();
  }
}

configureAssessmentCatalog();

const FOUNDERS_PROMO_CODE = "PSYCHEIQ";
const CHECKOUT_RETURN_PARAM = "psycheiq_checkout";
const PLAY_BILLING_PRODUCTS = {
  core: "psycheiq_core_report",
  member: "psycheiq_monthly_access",
};
const ADS_CONFIG = {
  enabled: true,
  membersOnly: true,
  provider: "placeholder",
  placements: {
    beforeTest: true,
    beforeResult: true,
    beforeEmail: true,
  },
};
// Browser-only fallback. The Android app uses Google Play Billing instead.
const PAYMENT_LINKS = {
  core: "https://buy.stripe.com/aFaeVeaaU0EC82N4P63oA00",
  member: "https://buy.stripe.com/7sYbJ25UEfzwerb5Ta3oA01",
};
const SUPPORT_EMAIL = "brad.s.johnson666@gmail.com";

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
  adPanel: document.querySelector("[data-ad-panel]"),
  adPlacement: document.querySelector("[data-ad-placement]"),
  adTitle: document.querySelector("[data-ad-title]"),
  adCopy: document.querySelector("[data-ad-copy]"),
  adContinue: document.querySelector("[data-ad-continue]"),
  adSkip: document.querySelector("[data-ad-skip]"),
  paywallPanel: document.querySelector("[data-paywall-panel]"),
  paywallTitle: document.querySelector("[data-paywall-title]"),
  paywallCopy: document.querySelector("[data-paywall-copy]"),
  resultPanel: document.querySelector("[data-result-panel]"),
  questionKicker: document.querySelector("[data-question-kicker]"),
  questionText: document.querySelector("[data-question-text]"),
  answerList: document.querySelector("[data-answer-list]"),
  prevQuestion: document.querySelector("[data-prev-question]"),
  unlockCore: document.querySelector("[data-unlock-core]"),
  unlockDeep: document.querySelector("[data-unlock-deep]"),
  promoForm: document.querySelector("[data-promo-form]"),
  paywallMessage: document.querySelector("[data-paywall-message]"),
  closeButtons: document.querySelectorAll("[data-close-modal], [data-close-link]"),
  restart: document.querySelector("[data-restart-test]"),
  featuredStarts: document.querySelectorAll("[data-featured-start]"),
  themeToggle: document.querySelector("[data-theme-toggle]"),
  themeLabel: document.querySelector("[data-theme-label]"),
  resultTest: document.querySelector("[data-result-test]"),
  resultTitle: document.querySelector("[data-result-title]"),
  resultSummary: document.querySelector("[data-result-summary]"),
  resultScore: document.querySelector("[data-result-score]"),
  resultVisuals: document.querySelector("[data-result-visuals]"),
  characterFeature: document.querySelector("[data-character-feature]"),
  exampleShowcase: document.querySelector("[data-example-showcase]"),
  resultStoryPanels: document.querySelector("[data-result-story-panels]"),
  resultUniqueSections: document.querySelector("[data-result-unique-sections]"),
  resultStrengths: document.querySelector("[data-result-strengths]"),
  resultWeaknesses: document.querySelector("[data-result-weaknesses]"),
  resultSituations: document.querySelector("[data-result-situations]"),
  resultRelationships: document.querySelector("[data-result-relationships]"),
  resultParenting: document.querySelector("[data-result-parenting]"),
  resultExamples: document.querySelector("[data-result-examples]"),
  deepDive: document.querySelector("[data-deep-dive]"),
  resultDeep: document.querySelector("[data-result-deep]"),
  emailResult: document.querySelector("[data-email-result]"),
  resultAccountMessage: document.querySelector("[data-result-account-message]"),
  requestForm: document.querySelector("[data-request-form]"),
  requestOutput: document.querySelector("[data-request-output]"),
  dropList: document.querySelector(".drop-list"),
  menuToggle: document.querySelector("[data-menu-toggle]"),
  siteMenu: document.querySelector("[data-site-menu]"),
  menuBackdrop: document.querySelector("[data-menu-backdrop]"),
  menuClose: document.querySelector("[data-menu-close]"),
  menuLinks: document.querySelectorAll("[data-menu-link]"),
  menuLogin: document.querySelector("[data-menu-login]"),
  login: document.querySelector("[data-login]"),
  openLogin: document.querySelector("[data-open-login]"),
  closeLogin: document.querySelector("[data-close-login]"),
  authTabs: document.querySelectorAll("[data-auth-tab]"),
  signinForm: document.querySelector("[data-signin-form]"),
  signupForm: document.querySelector("[data-signup-form]"),
  authMessage: document.querySelector("[data-auth-message]"),
  coreOffers: document.querySelectorAll("[data-core-offer]"),
  storePriceCopies: document.querySelectorAll("[data-store-price-copy]"),
  unlockCopy: document.querySelector("[data-unlock-copy]"),
  reportCopy: document.querySelector("[data-report-copy]"),
  pricingCopy: document.querySelector("[data-pricing-copy]"),
  openSupportButtons: document.querySelectorAll("[data-open-support]"),
  supportAgent: document.querySelector("[data-support-agent]"),
  closeSupport: document.querySelector("[data-close-support]"),
  supportLog: document.querySelector("[data-support-log]"),
  supportForm: document.querySelector("[data-support-form]"),
  supportMessage: document.querySelector("[data-support-message]"),
  supportQuestions: document.querySelectorAll("[data-support-question]"),
};

const state = {
  activeTest: null,
  questionIndex: 0,
  scores: {},
  correctScore: 0,
  scoredAnswered: 0,
  domainStats: {},
  lastMode: "core",
  account: null,
  currentResult: null,
  pendingEmailResult: false,
  answerHistory: [],
  pendingCheckoutIntent: "result",
  adContinuation: null,
  supportConversation: {
    awaiting: "idle",
    email: "",
    issue: "",
  },
};

const storageKeys = {
  account: "psycheiq-account",
  results: "psycheiq-results",
  access: "psycheiq-access",
  pendingCheckout: "psycheiq-pending-checkout",
};

function readJsonStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

function writeJsonStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    return false;
  }
}

function removeStorageItem(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    // Optional cleanup only.
  }
}

function getSavedResults() {
  return readJsonStorage(storageKeys.results, []);
}

function defaultAccessState() {
  return {
    member: false,
    memberSource: "",
    memberGrantedAt: "",
    coreUnlocks: {},
  };
}

function getAccessState() {
  return {
    ...defaultAccessState(),
    ...readJsonStorage(storageKeys.access, {}),
  };
}

function writeAccessState(access) {
  writeJsonStorage(storageKeys.access, {
    ...defaultAccessState(),
    ...access,
  });
}

function setPaywallMessage(message, tone = "neutral") {
  if (!dom.paywallMessage) return;
  dom.paywallMessage.textContent = message;
  dom.paywallMessage.dataset.tone = tone;
}

function hasMemberAccess() {
  return Boolean(getAccessState().member);
}

function hasCoreAccess(testId = state.activeTest?.id) {
  if (!testId) return false;
  const access = getAccessState();
  return Boolean(access.member || access.coreUnlocks?.[testId]);
}

function grantAccess(mode, source = "checkout") {
  const access = getAccessState();
  const now = new Date().toISOString();

  if (mode === "member") {
    writeAccessState({
      ...access,
      member: true,
      memberSource: source,
      memberGrantedAt: access.memberGrantedAt || now,
    });
    return;
  }

  if (!state.activeTest) return;
  writeAccessState({
    ...access,
    coreUnlocks: {
      ...(access.coreUnlocks || {}),
      [state.activeTest.id]: {
        source,
        grantedAt: now,
      },
    },
  });
}

function normalizePromoCode(value) {
  return String(value || "").trim().toUpperCase().replace(/\s+/g, "");
}

function updatePaywallPresentation() {
  const memberOnly = requiresMemberAccess();
  const startingTest = state.pendingCheckoutIntent === "start-test";

  if (dom.unlockCore) {
    dom.unlockCore.hidden = memberOnly;
  }

  if (dom.unlockDeep) {
    dom.unlockDeep.textContent = memberOnly ? "Become a Member $12.99/mo" : "Go Unlimited $12.99/mo";
  }

  if (!dom.paywallTitle || !dom.paywallCopy) return;

  if (memberOnly && startingTest) {
    dom.paywallTitle.textContent = "Membership unlocks the Play Store app.";
    dom.paywallCopy.textContent =
      "The Play Store version uses monthly access only. Become a member to take every test, retake them anytime, and keep access to every result.";
    return;
  }

  if (memberOnly) {
    dom.paywallTitle.textContent = "Your result is ready with monthly access.";
    dom.paywallCopy.textContent =
      "The Play Store version does not use the $1 single-report unlock. Monthly access opens this result plus every current and future test.";
    return;
  }

  dom.paywallTitle.textContent = "Your profile is waiting behind the report unlock.";
  dom.paywallCopy.textContent =
    "The quick quiz is complete. Unlock the result page for strengths, weak spots, situations, relationships, parenting notes, and matching examples. Or choose monthly access for every test and saved result.";
}

function resetPaywallControls() {
  if (dom.promoForm) dom.promoForm.reset();
  updatePaywallPresentation();
  setPaywallMessage(
    requiresMemberAccess()
      ? "Become a member through Google Play, or use the Founders code if you have it."
      : "Enter a Founders code or choose a checkout option to unlock this result."
  );
}

function saveAccount(account) {
  state.account = account;
  writeJsonStorage(storageKeys.account, account);
  updateAccountUi();
}

function updateAccountUi() {
  if (!dom.openLogin) return;
  const label = state.account ? state.account.name.split(" ")[0] : "Log In";
  dom.openLogin.textContent = label;
  if (dom.menuLogin) dom.menuLogin.textContent = label;
}

function initializeAccount() {
  state.account = readJsonStorage(storageKeys.account, null);
  updateAccountUi();
}

function setAuthMessage(message) {
  if (dom.authMessage) dom.authMessage.textContent = message;
}

function setResultAccountMessage(message) {
  if (dom.resultAccountMessage) dom.resultAccountMessage.textContent = message;
}

function showAuthPanel(panel = "signin", message = "") {
  dom.login.hidden = false;
  dom.authTabs.forEach((button) => {
    const active = button.dataset.authTab === panel;
    button.classList.toggle("active", active);
  });
  dom.signinForm.hidden = panel !== "signin";
  dom.signupForm.hidden = panel !== "signup";
  setAuthMessage(message);
}

function saveCurrentResultToAccount() {
  if (!state.account || !state.currentResult) return false;
  const savedResults = getSavedResults();
  savedResults.unshift({
    id: `${Date.now()}-${state.activeTest.id}`,
    email: state.account.email,
    testTitle: state.activeTest.title,
    resultTitle: state.currentResult.title,
    score: state.currentResult.score,
    summary: state.currentResult.summary,
    createdAt: new Date().toISOString(),
  });
  writeJsonStorage(storageKeys.results, savedResults.slice(0, 25));
  return true;
}

function formatResultEmail(profile) {
  const characterLines = profile.characterFeature
    ? [
        "",
        `Primary character match: ${profile.characterFeature.name}`,
        `From: ${profile.characterFeature.source} (${profile.characterFeature.medium})`,
        `Bio: ${profile.characterFeature.bio}`,
        `Why it fits: ${profile.characterFeature.fit}`,
      ]
    : [];
  const uniqueLines = (profile.uniqueSections || []).flatMap((section) => [
    "",
    `${section.title}: ${section.body}`,
  ]);

  return [
    `PsycheIQ Result: ${profile.title}`,
    "",
    `Test: ${state.activeTest.title}`,
    `Score: ${profile.score}`,
    "",
    profile.summary,
    "",
    `Strengths: ${profile.strengths.join(", ")}`,
    `Watchouts: ${profile.weaknesses.join(", ")}`,
    "",
    `In situations: ${profile.situations}`,
    "",
    `Relationships: ${profile.relationships}`,
    "",
    `As parents: ${profile.parenting}`,
    "",
    `Examples: ${profile.examples}`,
    ...uniqueLines,
    ...characterLines,
  ].join("\n");
}

function emailCurrentResult() {
  if (!state.currentResult) return;

  if (!state.account) {
    state.pendingEmailResult = true;
    showAuthPanel("signup", "Create an account to email or save this result. You can still unlock the $1 result without signing up.");
    return;
  }

  runMemberAd("beforeEmail", sendCurrentResultEmail);
}

function sendCurrentResultEmail() {
  if (!state.currentResult || !state.account) return;

  setModalView("result");
  saveCurrentResultToAccount();
  const subject = encodeURIComponent(`My PsycheIQ result: ${state.currentResult.title}`);
  const body = encodeURIComponent(formatResultEmail(state.currentResult));
  window.location.href = `mailto:${encodeURIComponent(state.account.email)}?subject=${subject}&body=${body}`;
  setResultAccountMessage(`Prepared this result for ${state.account.email}. Your email app may ask you to press send.`);
}

const supportTopics = [
  {
    title: "Membership Benefits",
    route: false,
    matches: ["what do i get", "what do you get", "included", "benefit", "benefits", "unlimited", "membership include", "member include", "membership", "monthly access"],
    answer:
      "Membership gives you unlimited access to all PsycheIQ tests, unlimited retakes, and unlimited access to your unlocked result pages. It also opens the deeper member result sections where available, lets you compare patterns across tests over time, and is the Play Store app's required access option.",
  },
  {
    title: "Payments and Checkout",
    route: false,
    matches: ["payment", "checkout", "stripe", "$1", "dollar", "paid", "paywall", "unlock"],
    answer:
      "On the website, the $1 report and $12.99 monthly membership open secure Stripe checkout. In the Android Play Store app, membership uses Google Play Billing instead. If checkout does not open, refresh the page once so the latest payment script loads.",
  },
  {
    title: "Canceling or Billing Help",
    route: true,
    matches: ["cancel", "subscription problem", "billing problem", "charged", "refund", "wrong charge"],
    answer:
      "Monthly access unlocks unlimited tests, retakes, and result access. Billing changes or refund requests should be routed to support with the email used at checkout so the purchase can be found.",
  },
  {
    title: "Result Did Not Unlock",
    route: true,
    matches: ["did not unlock", "not unlock", "locked", "result issue", "missing result", "after paying", "paid but"],
    answer:
      "If you paid but the result stayed locked, refresh the page once and return to the same test. If it still does not unlock, route the issue to support with your checkout email, test name, and roughly when it happened.",
  },
  {
    title: "Accounts and Emailing Results",
    route: false,
    matches: ["account", "sign up", "signup", "login", "log in", "email result", "save result"],
    answer:
      "You do not need an account to pay for the $1 result. Sign up is only needed when you want the app to prepare an emailed result or save local result history on this device.",
  },
  {
    title: "Tests and Accuracy",
    route: false,
    matches: ["test", "questions", "accurate", "iq", "mbti", "enneagram", "attachment", "career", "score"],
    answer:
      "PsycheIQ tests are educational and entertainment assessments. Most major tests are 42 questions and show charts, strengths, watchouts, relationships, and famous or fictional examples. They are not clinical diagnoses.",
  },
  {
    title: "Images and Character Examples",
    route: true,
    matches: ["image", "picture", "photo", "character", "fictional", "famous", "not showing"],
    answer:
      "Result images use local image slots and encyclopedia-style fallback images. If a specific person or character image is missing, route it to support with the test and result name so it can be corrected.",
  },
  {
    title: "Mobile and Play Store",
    route: false,
    matches: ["mobile", "android", "play store", "google play", "app"],
    answer:
      "The website runs in the browser, and the Android wrapper opens the hosted PsycheIQ app. On Android, paid membership is handled through Google Play Billing.",
  },
  {
    title: "Privacy and Data",
    route: false,
    matches: ["privacy", "data", "delete", "personal", "age", "sex"],
    answer:
      "Current web accounts and saved results are stored locally on the device unless you choose to email a result. The privacy policy is linked in the footer and explains what the app collects.",
  },
  {
    title: "Bug or Technical Problem",
    route: true,
    matches: ["bug", "broken", "problem", "error", "crash", "wrong", "doesn't work", "does not work"],
    answer:
      "That sounds like something support should see. Include what device you are using, which test/result you were on, and what you expected to happen.",
  },
];

function supportIntroMessage() {
  return {
    title: "PsycheIQ Bot",
    answer:
      "Hi, I am the PsycheIQ support bot. Ask me about payments, accounts, results, mobile access, privacy, or a technical problem. If I cannot solve it, I will collect the right details and route it to support.",
    route: false,
  };
}

function findSupportAnswer(question) {
  const normalized = question.toLowerCase();
  return (
    supportTopics.find((topic) => topic.matches.some((match) => normalized.includes(match))) || {
      title: "Route to Support",
      route: true,
      answer:
        "I am not fully sure on that one. Add the details below and I will prepare an email to PsycheIQ support so it can be handled by a person.",
    }
  );
}

function appendSupportBubble(role, title, body) {
  if (!dom.supportLog) return;
  const label = title || (role === "user" ? "You" : "PsycheIQ Bot");
  dom.supportLog.insertAdjacentHTML(
    "beforeend",
    `<article class="support-bubble ${role}">
      <strong>${escapeHtml(label)}</strong>
      <p>${escapeHtml(body)}</p>
    </article>`
  );
  dom.supportLog.scrollTop = dom.supportLog.scrollHeight;
}

function seedSupportAgent() {
  if (!dom.supportLog || dom.supportLog.childElementCount) return;
  const intro = supportIntroMessage();
  appendSupportBubble("agent", intro.title, intro.answer);
}

function openSupportAgent(prefill = "") {
  if (!dom.supportAgent) return;
  closeSiteMenu();
  dom.supportAgent.hidden = false;
  seedSupportAgent();

  if (prefill) startSupportEscalation(prefill);

  const input = dom.supportForm?.elements.question;
  if (input) input.focus();
}

function closeSupportAgent() {
  if (dom.supportAgent) dom.supportAgent.hidden = true;
}

function resetSupportEscalation() {
  state.supportConversation = {
    awaiting: "idle",
    email: "",
    issue: "",
  };
}

function extractEmail(text) {
  const match = String(text).match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  return match ? match[0] : "";
}

function isSendIntent(text) {
  return /\b(send|route|submit|yes|ready|go ahead)\b/i.test(text);
}

function startSupportEscalation(issue) {
  state.supportConversation.awaiting = "email";
  state.supportConversation.issue = issue;
  state.supportConversation.email = "";
  if (dom.supportMessage) dom.supportMessage.textContent = "The bot is collecting details to route this to support.";
  appendSupportBubble(
    "agent",
    "Route to Support",
    "I can route this to a person. What email should support use to reply to you?"
  );
}

function buildSupportEmailBody() {
  return [
    "PsycheIQ support request",
    "",
    `Reply to: ${state.supportConversation.email}`,
    `Page: ${window.location.href}`,
    state.activeTest ? `Active test: ${state.activeTest.title}` : "",
    state.currentResult ? `Current result: ${state.currentResult.title}` : "",
    "",
    "Message:",
    state.supportConversation.issue,
  ]
    .filter(Boolean)
    .join("\n");
}

function prepareSupportEmail() {
  const issue = state.supportConversation.issue || "Support request";
  const subject = encodeURIComponent(`PsycheIQ Support: ${issue.slice(0, 52)}`);
  const body = encodeURIComponent(buildSupportEmailBody());
  window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
  appendSupportBubble(
    "agent",
    "Email Prepared",
    `I prepared an email to ${SUPPORT_EMAIL}. Your email app may ask you to press send.`
  );
  if (dom.supportMessage) dom.supportMessage.textContent = `Prepared an email to ${SUPPORT_EMAIL}.`;
  resetSupportEscalation();
}

function handleSupportEscalation(message) {
  const conversation = state.supportConversation;

  if (conversation.awaiting === "email") {
    const email = extractEmail(message);
    if (!email) {
      appendSupportBubble("agent", "Email Needed", "Please type the email address support should reply to.");
      return;
    }

    conversation.email = email;
    conversation.awaiting = conversation.issue.length > 24 ? "confirm" : "details";
    appendSupportBubble(
      "agent",
      "Got It",
      conversation.awaiting === "confirm"
        ? "I have your email and the issue summary. Type 'send' to prepare the support email, or add any extra details first."
        : "Thanks. Now tell me what happened, including the test name, payment email, device, or error if you have it."
    );
    return;
  }

  if (conversation.awaiting === "details") {
    conversation.issue = conversation.issue ? `${conversation.issue}\n\n${message}` : message;
    conversation.awaiting = "confirm";
    appendSupportBubble("agent", "Ready To Route", "Thanks. Type 'send' and I will prepare the support email, or add more details.");
    return;
  }

  if (conversation.awaiting === "confirm") {
    if (isSendIntent(message)) {
      prepareSupportEmail();
      return;
    }

    conversation.issue = `${conversation.issue}\n\n${message}`;
    appendSupportBubble("agent", "Added", "I added that. Type 'send' when you want me to prepare the email to support.");
  }
}

function answerSupportQuestion(question) {
  const trimmed = question.trim();
  if (!trimmed) return;

  appendSupportBubble("user", "", trimmed);

  if (state.supportConversation.awaiting !== "idle") {
    handleSupportEscalation(trimmed);
    return;
  }

  const response = findSupportAnswer(trimmed);
  appendSupportBubble("agent", response.title, response.answer);

  if (response.route) startSupportEscalation(trimmed);
}

function setTheme(theme) {
  const nextTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = nextTheme;

  if (dom.themeToggle) {
    const isDark = nextTheme === "dark";
    dom.themeToggle.setAttribute("aria-pressed", String(isDark));
    dom.themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  }

  if (dom.themeLabel) {
    dom.themeLabel.textContent = nextTheme === "dark" ? "Light" : "Dark";
  }

  try {
    localStorage.setItem("psycheiq-theme", nextTheme);
  } catch (error) {
    // Theme preference is optional.
  }
}

function initializeTheme() {
  let savedTheme = "light";

  try {
    savedTheme = localStorage.getItem("psycheiq-theme") || document.documentElement.dataset.theme || "light";
  } catch (error) {
    savedTheme = document.documentElement.dataset.theme || "light";
  }

  setTheme(savedTheme);
}

function applyNativeStoreMode() {
  if (!requiresMemberAccess()) return;

  tests.forEach((test) => {
    if (test.status !== "Coming Soon") test.price = "Member access";
  });

  dom.coreOffers.forEach((offer) => {
    offer.hidden = true;
  });

  dom.storePriceCopies.forEach((item) => {
    item.textContent = "Member access";
  });

  if (dom.unlockCopy) {
    dom.unlockCopy.textContent =
      "Monthly access opens the full test library, unlimited retakes, and every member result in the Play Store app.";
  }

  if (dom.reportCopy) {
    dom.reportCopy.textContent =
      "Each profile is built for self-understanding, not labels. Monthly access turns the full test library into a saved profile system.";
  }

  if (dom.pricingCopy) {
    dom.pricingCopy.textContent =
      "The Play Store app uses one simple membership: $12.99/month for unlimited tests, retakes, and result access.";
  }
}

function renderTestDoodle(test) {
  const paths = {
    Cognitive: "M28 64c0-20 15-36 36-36s36 16 36 36-15 36-36 36-36-16-36-36Zm21-13h30M49 64h30M49 77h20",
    Psychology: "M32 78c12-32 52-32 64 0M41 55c0-12 10-22 23-22s23 10 23 22c0 13-10 23-23 23S41 68 41 55Z",
    "Pop Culture": "M34 82 46 36h36l12 46-30-18-30 18Zm30-46v28",
    "Coming Soon": "M32 80h64M42 80V46l22-16 22 16v34M52 62h24",
  };
  const path = paths[test.category] || paths.Psychology;

  return `
    <svg class="card-doodle" viewBox="0 0 128 112" aria-hidden="true">
      <rect x="10" y="10" width="108" height="92" rx="22" />
      <path d="${path}" />
      <circle cx="98" cy="26" r="8" />
    </svg>
  `;
}

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
            ${renderTestDoodle(test)}
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
  if (dom.adPanel) dom.adPanel.hidden = view !== "ad";
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
  state.adContinuation = null;
}

function openSiteMenu() {
  if (!dom.siteMenu || !dom.menuBackdrop || !dom.menuToggle) return;
  dom.siteMenu.hidden = false;
  dom.menuBackdrop.hidden = false;
  dom.menuToggle.setAttribute("aria-expanded", "true");
  dom.menuToggle.setAttribute("aria-label", "Close menu");
  document.body.classList.add("menu-open");
}

function closeSiteMenu() {
  if (!dom.siteMenu || !dom.menuBackdrop || !dom.menuToggle) return;
  dom.siteMenu.hidden = true;
  dom.menuBackdrop.hidden = true;
  dom.menuToggle.setAttribute("aria-expanded", "false");
  dom.menuToggle.setAttribute("aria-label", "Open menu");
  document.body.classList.remove("menu-open");
}

function startTest(testId) {
  const test = tests.find((item) => item.id === testId);
  if (!test || test.status === "Coming Soon") return;
  closeSiteMenu();

  state.activeTest = test;
  state.questionIndex = 0;
  state.scores = {};
  state.correctScore = 0;
  state.scoredAnswered = 0;
  state.domainStats = {};
  state.lastMode = "core";
  state.answerHistory = [];
  state.currentResult = null;
  state.pendingEmailResult = false;
  state.pendingCheckoutIntent = "result";

  dom.modalTitle.textContent = test.title;
  dom.modalCategory.textContent = test.category;
  dom.modalDescription.textContent = test.description;
  openModal();

  if (requiresMemberAccess() && !hasMemberAccess()) {
    state.pendingCheckoutIntent = "start-test";
    dom.progressBar.style.width = "0%";
    dom.progressCopy.textContent = "Membership required";
    resetPaywallControls();
    setModalView("paywall");
    return;
  }

  runMemberAd("beforeTest", () => {
    setModalView("quiz");
    renderQuestion();
  });
}

function renderQuestion() {
  const test = state.activeTest;
  const question = test.questions[state.questionIndex];
  const total = test.questions.length;
  const progress = (state.questionIndex / total) * 100;

  dom.progressBar.style.width = `${progress}%`;
  dom.progressCopy.textContent = `Question ${state.questionIndex + 1} of ${total}`;
  if (dom.prevQuestion) {
    dom.prevQuestion.hidden = state.questionIndex === 0 || state.activeTest.id !== "iq";
  }
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

function applyAnswerScoring(question, option) {
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

  if (option.scores) {
    Object.entries(option.scores).forEach(([key, value]) => {
      state.scores[key] = (state.scores[key] || 0) + Number(value || 0);
    });
  }
}

function rebuildScoresFromHistory() {
  state.scores = {};
  state.correctScore = 0;
  state.scoredAnswered = 0;
  state.domainStats = {};

  state.answerHistory.forEach((entry) => {
    const question = state.activeTest.questions[entry.questionIndex];
    const option = question?.options[entry.optionIndex];
    if (question && option) applyAnswerScoring(question, option);
  });
}

function handleAnswer(optionIndex) {
  const question = state.activeTest.questions[state.questionIndex];
  const option = question.options[Number(optionIndex)];
  if (!option) return;

  applyAnswerScoring(question, option);
  state.answerHistory.push({
    questionIndex: state.questionIndex,
    optionIndex: Number(optionIndex),
  });

  state.questionIndex += 1;

  if (state.questionIndex >= state.activeTest.questions.length) {
    showPaywall();
    return;
  }

  renderQuestion();
}

function goToPreviousQuestion() {
  if (!state.activeTest || state.questionIndex === 0) return;
  const previous = state.answerHistory.pop();
  if (!previous) return;

  state.questionIndex = previous.questionIndex;
  rebuildScoresFromHistory();
  setModalView("quiz");
  renderQuestion();
}

function savePendingCheckout(mode) {
  if (!state.activeTest) return false;

  return writeJsonStorage(storageKeys.pendingCheckout, {
    mode,
    intent: state.pendingCheckoutIntent,
    testId: state.activeTest.id,
    answerHistory: state.answerHistory,
    createdAt: new Date().toISOString(),
  });
}

function checkoutUrlFor(mode) {
  return PAYMENT_LINKS[mode] || "";
}

function hasNativeBilling() {
  return Boolean(window.PsycheIQBilling && typeof window.PsycheIQBilling.purchase === "function");
}

function requiresMemberAccess() {
  return hasNativeBilling();
}

const adPlacementCopy = {
  beforeTest: {
    label: "Before Test",
    title: "Member sponsor break",
    copy:
      "This member-only sponsor slot can show before an assessment starts. It is ready for AdMob or a house promotion.",
    action: "Continue to Test",
  },
  beforeResult: {
    label: "Before Result",
    title: "Member result sponsor",
    copy:
      "This member-only sponsor slot can show before the full result opens. It gives you a clean place for a rewarded or interstitial ad.",
    action: "Open Result",
  },
  beforeEmail: {
    label: "Before Email",
    title: "Member email sponsor",
    copy:
      "This member-only sponsor slot can show before an emailed result is prepared. Real ad units can replace this placeholder later.",
    action: "Prepare Email",
  },
};

function shouldShowMemberAd(placement) {
  return Boolean(
    ADS_CONFIG.enabled &&
      ADS_CONFIG.placements?.[placement] &&
      (!ADS_CONFIG.membersOnly || hasMemberAccess())
  );
}

function runMemberAd(placement, continuation) {
  if (!shouldShowMemberAd(placement) || !dom.adPanel) {
    continuation();
    return;
  }

  const copy = adPlacementCopy[placement] || adPlacementCopy.beforeTest;
  state.adContinuation = continuation;
  dom.adPlacement.textContent = copy.label;
  dom.adTitle.textContent = copy.title;
  dom.adCopy.textContent = copy.copy;
  dom.adContinue.textContent = copy.action;
  setModalView("ad");
}

function finishMemberAd() {
  const continuation = state.adContinuation;
  state.adContinuation = null;
  if (typeof continuation === "function") continuation();
}

function openUnlockedResult(mode) {
  if (mode === "member") {
    runMemberAd("beforeResult", () => unlockResult("member"));
    return;
  }

  unlockResult("core");
}

function completePaidUnlock(mode, source = "checkout") {
  const normalizedMode = requiresMemberAccess() || mode === "member" ? "member" : "core";
  const restored = restoreCheckoutResult(normalizedMode, source);

  if (!restored && state.activeTest) {
    grantAccess(normalizedMode, source);
    removeStorageItem(storageKeys.pendingCheckout);
    openUnlockedResult(normalizedMode);
  }

  const successCopy =
    normalizedMode === "member"
      ? "Monthly access is active. Unlimited results are unlocked on this device."
      : "Report unlocked. Your full result is ready.";
  setPaywallMessage(successCopy, "success");
}

function requestPaidUnlock(mode) {
  if (!state.activeTest) return;
  const requestedMode = requiresMemberAccess() ? "member" : mode;

  if (requestedMode === "member" && hasMemberAccess()) {
    openUnlockedResult("member");
    return;
  }

  if (requestedMode === "core" && hasCoreAccess()) {
    unlockResult("core");
    return;
  }

  savePendingCheckout(requestedMode);

  if (hasNativeBilling()) {
    const productId = PLAY_BILLING_PRODUCTS[requestedMode] || PLAY_BILLING_PRODUCTS.member;
    setPaywallMessage(`Opening Google Play checkout for ${productId}...`, "neutral");

    try {
      window.PsycheIQBilling.purchase(requestedMode);
    } catch (error) {
      setPaywallMessage("Google Play checkout could not start. Try again in a moment.", "error");
    }
    return;
  }

  const checkoutUrl = checkoutUrlFor(requestedMode);

  if (!checkoutUrl) {
    const amount = requestedMode === "member" ? "$12.99/mo" : "$1";
    setPaywallMessage(
      `${amount} checkout is ready for the website version, but no browser payment link is connected yet. Use the Android app for Google Play checkout, or use the Founders code.`,
      "warning"
    );
    return;
  }

  window.location.href = checkoutUrl;
}

function applyPromoUnlock(code) {
  if (normalizePromoCode(code) !== FOUNDERS_PROMO_CODE) {
    setPaywallMessage("That promo code is not active. Check the spelling and try again.", "error");
    return;
  }

  grantAccess("member", "founders");
  setPaywallMessage("Founders access applied. Unlimited results are unlocked on this device.", "success");
  if (state.pendingCheckoutIntent === "start-test" && state.activeTest) {
    startTest(state.activeTest.id);
    return;
  }
  openUnlockedResult("member");
}

function accessMessageForMode(mode) {
  if (state.account) return `Signed in as ${state.account.email}. You can email or save this result.`;

  if (mode === "member") {
    const source = getAccessState().memberSource;
    return source === "founders"
      ? "Founders access is active on this device. Sign up only if you want results emailed or saved."
      : "Monthly access is active on this device. Sign up only if you want results emailed or saved.";
  }

  return "No account needed for the $1 result. Sign up only if you want it emailed or saved.";
}

function restoreCheckoutResult(mode, source = "checkout") {
  const pending = readJsonStorage(storageKeys.pendingCheckout, null);
  const test = tests.find((item) => item.id === pending?.testId);

  if (!pending || !test) {
    removeStorageItem(storageKeys.pendingCheckout);
    return false;
  }

  if (pending.intent === "start-test" && mode === "member") {
    grantAccess("member", source);
    removeStorageItem(storageKeys.pendingCheckout);
    startTest(test.id);
    return true;
  }

  state.activeTest = test;
  state.questionIndex = test.questions.length;
  state.answerHistory = Array.isArray(pending.answerHistory) ? pending.answerHistory : [];
  state.currentResult = null;
  state.pendingEmailResult = false;
  rebuildScoresFromHistory();

  dom.modalTitle.textContent = test.title;
  dom.modalCategory.textContent = test.category;
  dom.modalDescription.textContent = test.description;
  grantAccess(mode, source);
  removeStorageItem(storageKeys.pendingCheckout);
  openModal();
  openUnlockedResult(mode === "member" ? "member" : "core");
  return true;
}

window.applyPlayBillingPurchase = (mode) => {
  completePaidUnlock(mode, "google-play");
};

window.handlePlayBillingPending = (mode) => {
  const label = mode === "member" ? "monthly access" : "report";
  setPaywallMessage(`Your Google Play ${label} payment is pending. The result will unlock after Google confirms it.`, "warning");
};

window.handlePlayBillingError = (message) => {
  setPaywallMessage(message || "Google Play checkout could not finish. Try again in a moment.", "error");
};

window.handlePlayBillingStatus = (message) => {
  setPaywallMessage(message || "Google Play checkout is working...", "neutral");
};

function handleCheckoutReturn() {
  const url = new URL(window.location.href);
  const mode = url.searchParams.get(CHECKOUT_RETURN_PARAM);
  if (mode !== "core" && mode !== "member") return;

  restoreCheckoutResult(mode);
  url.searchParams.delete(CHECKOUT_RETURN_PARAM);
  window.history.replaceState({}, document.title, `${url.pathname}${url.search}${url.hash}`);
}

function showPaywall() {
  dom.progressBar.style.width = "100%";
  dom.progressCopy.textContent = "Complete";
  state.pendingCheckoutIntent = "result";
  resetPaywallControls();

  if (hasMemberAccess()) {
    openUnlockedResult("member");
    return;
  }

  if (hasCoreAccess()) {
    unlockResult("core");
    return;
  }

  setModalView("paywall");
}

function getResultProfile() {
  const test = state.activeTest;
  if (test.scoring === "correct") return getIqResultProfile(test);
  if (test.scoring === "dimensions") return getDimensionResultProfile(test);

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

function getDimensionResultProfile(test) {
  const dimensions = test.dimensions.map((dimension) => {
    const leftValue = state.scores[dimension.left] || 0;
    const rightValue = state.scores[dimension.right] || 0;
    const selected = leftValue >= rightValue ? dimension.left : dimension.right;
    const selectedValue = Math.max(leftValue, rightValue);
    const total = leftValue + rightValue;

    return {
      ...dimension,
      leftValue,
      rightValue,
      selected,
      selectedLabel: selected === dimension.left ? dimension.leftLabel : dimension.rightLabel,
      oppositeLabel: selected === dimension.left ? dimension.rightLabel : dimension.leftLabel,
      selectedValue,
      total,
    };
  });
  const winner = dimensions.map((dimension) => dimension.selected).join("");
  const profile = test.profiles[winner] || test.profiles[Object.keys(test.profiles)[0]];
  const winnerScore = dimensions.reduce((sum, dimension) => sum + dimension.selectedValue, 0);
  const totalAnswers = dimensions.reduce((sum, dimension) => sum + dimension.total, 0);

  return {
    ...profile,
    analytics: {
      type: "dimensions",
      winner,
      winnerLabel: profile.title,
      winnerScore,
      totalAnswers,
      dimensions,
      totalPossibilities: test.totalPossibilities || Object.keys(test.profiles).length,
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

function renderDimensionVisuals(analytics) {
  const total = analytics.totalAnswers || 1;
  const winnerPercent = Math.round((analytics.winnerScore / total) * 100);
  const bars = analytics.dimensions
    .map((dimension) => {
      const percent = dimension.total ? (dimension.selectedValue / dimension.total) * 100 : 50;
      return renderBar(
        `${dimension.selected} | ${dimension.selectedLabel}`,
        percent,
        `${dimension.left}: ${dimension.leftValue} vs ${dimension.right}: ${dimension.rightValue}`
      );
    })
    .join("");
  const columns = analytics.dimensions.map((dimension) => ({
    label: dimension.selected,
    value: dimension.selectedValue || 1,
  }));

  return `
    <article class="visual-card">
      <div class="visual-card-heading">
        <h4>Result Code</h4>
        <span>${analytics.totalPossibilities} possible outcomes</span>
      </div>
      <div class="big-percent code-result">${analytics.winner}</div>
      <div class="bar-track large"><span style="width: ${winnerPercent}%"></span></div>
      <p class="chart-note">Your strongest combined signal points to ${analytics.winnerLabel}.</p>
    </article>
    <article class="visual-card">
      <div class="visual-card-heading">
        <h4>Preference Axes</h4>
        <span>Answer pattern</span>
      </div>
      ${bars}
    </article>
    <article class="visual-card">
      <div class="visual-card-heading">
        <h4>Type Shape</h4>
        <span>Selected poles</span>
      </div>
      ${renderMiniColumns(columns, Math.max(...columns.map((item) => item.value), 1))}
    </article>
  `;
}

const wikiTitleOverrides = {
  "Aang": "Aang",
  "Ahsoka Tano": "Ahsoka_Tano",
  "Albus Dumbledore": "Albus_Dumbledore",
  "Alexander Hamilton": "Alexander_Hamilton",
  "Amelia Earhart": "Amelia_Earhart",
  "Annabeth Chase": "Annabeth_Chase",
  "Anna Wintour": "Anna_Wintour",
  "Aragorn": "Aragorn",
  "Arya Stark": "Arya_Stark",
  "Aslan": "Aslan",
  "Barack Obama": "Barack_Obama",
  "Beth Harmon": "Beth_Harmon",
  "Bridget Jones": "Bridget_Jones_(character)",
  "Bruce Wayne": "Batman",
  "Buffy Summers": "Buffy_Summers",
  "Carol Danvers": "Carol_Danvers",
  "Chani": "Chani_(character)",
  "Chidi Anagonye": "Chidi_Anagonye",
  "Ciri": "Ciri_(The_Witcher)",
  "Clint Eastwood": "Clint_Eastwood",
  "Claudia from Warehouse 13": "Claudia_Donovan",
  "Cleopatra": "Cleopatra",
  "Daenerys Targaryen": "Daenerys_Targaryen",
  "Data": "Data_(Star_Trek)",
  "David Bowie": "David_Bowie",
  "Din Djarin": "Din_Djarin",
  "Elsa": "Elsa_(Frozen)",
  "Eowyn": "Eowyn",
  "Finn": "Finn_(Star_Wars)",
  "Fleabag": "Fleabag_(TV_series)",
  "Florence Nightingale": "Florence_Nightingale",
  "Fred Rogers": "Fred_Rogers",
  "Frida Kahlo": "Frida_Kahlo",
  "Furiosa": "Imperator_Furiosa",
  "Galadriel": "Galadriel",
  "Geralt of Rivia": "Geralt_of_Rivia",
  "Gimli": "Gimli_(Middle-earth)",
  "Glinda": "Glinda_the_Good",
  "Grover Underwood": "Grover_Underwood",
  "Han Solo": "Han_Solo",
  "Harry Potter": "Harry_Potter_(character)",
  "Hedy Lamarr": "Hedy_Lamarr",
  "Hermione Granger": "Hermione_Granger",
  "Ida B. Wells": "Ida_B._Wells",
  "Indra Nooyi": "Indra_Nooyi",
  "James T. Kirk": "James_T._Kirk",
  "Jane Goodall": "Jane_Goodall",
  "J.R.R. Tolkien": "J._R._R._Tolkien",
  "Jean-Luc Picard": "Jean-Luc_Picard",
  "Jonas Salk": "Jonas_Salk",
  "Jon Snow": "Jon_Snow_(character)",
  "Judy Garland": "Judy_Garland",
  "Katara": "Katara_(Avatar:_The_Last_Airbender)",
  "Lady Gaga": "Lady_Gaga",
  "Leia Organa": "Princess_Leia",
  "Leonardo da Vinci": "Leonardo_da_Vinci",
  "Leslie Knope": "Leslie_Knope",
  "Loki": "Loki_(Marvel_Cinematic_Universe)",
  "Luna Lovegood": "Luna_Lovegood",
  "Marlin": "Marlin_(Finding_Nemo)",
  "Martin Luther King Jr.": "Martin_Luther_King_Jr.",
  "Marie Curie": "Marie_Curie",
  "Martha Stewart": "Martha_Stewart",
  "Merlin": "Merlin",
  "Michelle Obama": "Michelle_Obama",
  "Miranda Priestly": "Miranda_Priestly",
  "Moana": "Moana_(character)",
  "Morpheus": "Morpheus_(The_Matrix)",
  "Mulan": "Mulan_(Disney_character)",
  "Neo": "Neo_(The_Matrix)",
  "Newt Scamander": "Newt_Scamander",
  "Neville Longbottom": "Neville_Longbottom",
  "Obi-Wan Kenobi": "Obi-Wan_Kenobi",
  "Okoye": "Okoye_(Marvel_Cinematic_Universe)",
  "Oprah Winfrey": "Oprah_Winfrey",
  "Paul Atreides": "Paul_Atreides",
  "Peeta Mellark": "Peeta_Mellark",
  "Percy Jackson": "Percy_Jackson_(character)",
  "Peter Parker": "Spider-Man",
  "Prince": "Prince_(musician)",
  "Princess Diana": "Diana,_Princess_of_Wales",
  "Princess Leia": "Princess_Leia",
  "Professor X": "Professor_X",
  "Rey Skywalker": "Rey_(Star_Wars)",
  "River Song": "River_Song_(Doctor_Who)",
  "Samwise Gamgee": "Samwise_Gamgee",
  "Sarah Connor": "Sarah_Connor_(Terminator)",
  "Shuri": "Shuri_(character)",
  "Spock": "Spock",
  "Steve Jobs": "Steve_Jobs",
  "Steve Rogers": "Captain_America",
  "Storm": "Storm_(Marvel_Comics)",
  "T'Challa": "T'Challa",
  "Ted Mosby": "Ted_Mosby",
  "The Doctor": "The_Doctor_(Doctor_Who)",
  "Tony Stark": "Iron_Man",
  "Toph Beifong": "Toph_Beifong",
  "Trinity": "Trinity_(The_Matrix)",
  "Uncle Iroh": "Iroh",
  "Vincent van Gogh": "Vincent_van_Gogh",
  "Wanda Maximoff": "Wanda_Maximoff",
  "Walt Disney": "Walt_Disney",
  "Winnie the Pooh": "Winnie-the-Pooh",
  "Yennefer of Vengerberg": "Yennefer_of_Vengerberg",
  "Zuko": "Zuko",
};

const wikiThumbnailCache = new Map();
const wikiSearchImageCache = new Map();

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#039;",
    };
    return entities[character];
  });
}

function firstSentence(text) {
  const match = String(text).match(/^[^.!?]+[.!?]/);
  return match ? match[0] : text;
}

function slugifyName(name) {
  return String(name)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function exampleImagePath(person, kind) {
  return person.image || `assets/people/${kind}/${slugifyName(person.name)}.jpg`;
}

function wikiTitleForName(name) {
  return wikiTitleOverrides[name] || name;
}

function wikiSummaryUrl(title) {
  return `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(String(title).replace(/\s+/g, "_"))}`;
}

function wikiSearchUrl(name, kind) {
  const query = kind === "famous" ? name : `${name} character`;
  const params = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch: query,
    gsrlimit: "6",
    prop: "pageimages",
    piprop: "thumbnail|original",
    pithumbsize: "500",
    format: "json",
    origin: "*",
  });

  return `https://en.wikipedia.org/w/api.php?${params.toString()}`;
}

async function fetchWikiThumbnail(title) {
  const cacheKey = String(title);

  if (!wikiThumbnailCache.has(cacheKey)) {
    wikiThumbnailCache.set(
      cacheKey,
      fetch(wikiSummaryUrl(cacheKey))
        .then((response) => (response.ok ? response.json() : null))
        .then((data) => data?.thumbnail?.source || data?.originalimage?.source || "")
        .catch(() => "")
    );
  }

  return wikiThumbnailCache.get(cacheKey);
}

async function fetchWikiSearchThumbnail(name, kind) {
  const cacheKey = `${kind}:${name}`;

  if (!wikiSearchImageCache.has(cacheKey)) {
    wikiSearchImageCache.set(
      cacheKey,
      fetch(wikiSearchUrl(name, kind))
        .then((response) => (response.ok ? response.json() : null))
        .then((data) => {
          const pages = Object.values(data?.query?.pages || {}).sort((a, b) => (a.index || 0) - (b.index || 0));
          const match = pages.find((page) => page.thumbnail?.source || page.original?.source);
          return match?.thumbnail?.source || match?.original?.source || "";
        })
        .catch(() => "")
    );
  }

  return wikiSearchImageCache.get(cacheKey);
}

async function findWikiThumbnail(name, preferredTitle, kind) {
  const candidates = [preferredTitle, name].filter(Boolean);
  const uniqueCandidates = [...new Set(candidates)];

  for (const title of uniqueCandidates) {
    const source = await fetchWikiThumbnail(title);
    if (source) return source;
  }

  return fetchWikiSearchThumbnail(name, kind);
}

function showMissingImage(image) {
  if (!image) return;
  image.hidden = true;
  image.parentElement?.classList.remove("image-loading");
  image.parentElement?.classList.add("image-missing");
}

async function handleImageError(image) {
  if (!image || image.dataset.remoteAttempted === "true") {
    showMissingImage(image);
    return;
  }

  const name = image.dataset.personName || image.alt.replace(/^Recognizable image of /, "");
  const kind = image.dataset.imageKind || "fictional";
  const preferredTitle = image.dataset.wikiTitle || wikiTitleForName(name);
  image.dataset.remoteAttempted = "true";
  image.hidden = true;
  image.parentElement?.classList.add("image-loading");

  const fallbackSource = await findWikiThumbnail(name, preferredTitle, kind);

  if (!fallbackSource) {
    showMissingImage(image);
    return;
  }

  image.parentElement?.classList.remove("image-loading", "image-missing");
  image.hidden = false;
  image.src = fallbackSource;
}

window.handleImageError = handleImageError;

function renderExampleCard(person, kind) {
  const label = kind === "famous" ? "Historical" : "Fictional";
  const imagePath = exampleImagePath(person, kind);
  const wikiTitle = wikiTitleForName(person.name);

  return `
    <article class="example-card ${kind}">
      <figure class="example-media">
        <img
          src="${escapeHtml(imagePath)}"
          alt="Recognizable image of ${escapeHtml(person.name)}"
          data-person-name="${escapeHtml(person.name)}"
          data-wiki-title="${escapeHtml(wikiTitle)}"
          data-image-kind="${escapeHtml(kind)}"
          decoding="async"
          referrerpolicy="no-referrer"
          onerror="handleImageError(this)"
        />
        <figcaption>
          <strong>${label} image needed</strong>
          <span>${escapeHtml(imagePath)}</span>
        </figcaption>
      </figure>
      <div>
        <p class="mini-label">${label}</p>
        <h4>${escapeHtml(person.name)}</h4>
        <p>${escapeHtml(person.note)}</p>
      </div>
    </article>
  `;
}

function renderCharacterFeature(profile) {
  const character = profile.characterFeature;

  if (!dom.characterFeature) return;

  if (!character) {
    dom.characterFeature.hidden = true;
    dom.characterFeature.innerHTML = "";
    return;
  }

  dom.characterFeature.hidden = false;
  dom.characterFeature.innerHTML = `
    <article class="character-card">
      <figure class="character-art">
        <img
          src="${escapeHtml(character.image)}"
          alt="Recognizable image of ${escapeHtml(character.name)}"
          data-person-name="${escapeHtml(character.name)}"
          data-wiki-title="${escapeHtml(wikiTitleForName(character.name))}"
          data-image-kind="character"
          decoding="async"
          referrerpolicy="no-referrer"
          onerror="handleImageError(this)"
        />
        <figcaption>
          <strong>Character image needed</strong>
          <span>${escapeHtml(character.image)}</span>
        </figcaption>
      </figure>
      <div class="character-copy">
        <p class="mini-label">Primary Fictional Match</p>
        <h4>${escapeHtml(character.name)}</h4>
        <div class="character-meta">
          <span>From: ${escapeHtml(character.source)}</span>
          <span>${escapeHtml(character.medium)}</span>
        </div>
        <section>
          <h5>Short Bio</h5>
          <p>${escapeHtml(character.bio)}</p>
        </section>
        <section>
          <h5>Why This Fits You</h5>
          <p>${escapeHtml(character.fit)}</p>
        </section>
      </div>
    </article>
  `;
}

function renderExampleShowcase(profile) {
  const examples =
    profile.examplePeople ||
    visualExampleLibrary[profile.title] ||
    {
      famous: [
        { name: "Benjamin Franklin", note: "curious practical intelligence", motif: "bolt" },
        { name: "Florence Nightingale", note: "clear applied care", motif: "lamp" },
      ],
      fictional: [
        { name: "Hermione Granger", note: "studied pattern recognition", motif: "book" },
        { name: "Steve Rogers", note: "values under pressure", motif: "shield" },
      ],
    };

  dom.exampleShowcase.innerHTML = `
    <div class="showcase-heading">
      <div>
        <p class="mini-label">Visual Match Board</p>
        <h4>Two historical echoes and two fictional archetypes</h4>
      </div>
      <p>Image slots use approved recognizable files when available and never imply endorsement.</p>
    </div>
    <div class="example-grid">
      ${examples.famous.map((person) => renderExampleCard(person, "famous")).join("")}
      ${examples.fictional.map((person) => renderExampleCard(person, "fictional")).join("")}
    </div>
  `;
}

function renderSpotIllustration(type) {
  const icons = {
    map: "M20 82 42 70l25 10 33-15v-55L67 25 42 15 20 27Z M42 15v55 M67 25v55",
    spark: "M60 14l8 29 28 8-28 9-8 30-9-30-28-9 28-8Z",
    bridge: "M18 78c18-34 66-34 84 0M20 78h80M34 78V60M60 78V48M86 78V60",
  };
  const path = icons[type] || icons.spark;

  return `
    <svg class="spot-illustration" viewBox="0 0 120 100" aria-hidden="true">
      <rect x="8" y="8" width="104" height="84" rx="20" />
      <path d="${path}" />
      <circle cx="92" cy="24" r="8" />
    </svg>
  `;
}

function renderResultStoryPanels(profile) {
  const topStrength = profile.strengths?.[0] || "your natural pattern";
  const firstWatchout = profile.weaknesses?.[0] || "overusing the pattern";

  dom.resultStoryPanels.innerHTML = `
    <article>
      ${renderSpotIllustration("map")}
      <div class="story-copy">
        <h4>What This Looks Like</h4>
        <p>${escapeHtml(firstSentence(profile.summary))} Day to day, ${escapeHtml(profile.situations)}</p>
      </div>
    </article>
    <article>
      ${renderSpotIllustration("spark")}
      <div class="story-copy">
        <h4>Growth Edge</h4>
        <p>Your strongest advantage is ${escapeHtml(topStrength.toLowerCase())}. The thing to watch is ${escapeHtml(firstWatchout.toLowerCase())}, especially when stress makes the pattern louder than usual.</p>
      </div>
    </article>
    <article>
      ${renderSpotIllustration("bridge")}
      <div class="story-copy">
        <h4>With Other People</h4>
        <p>${escapeHtml(profile.relationships)} The best use of this result is not to box you in, but to help others understand how to meet you well.</p>
      </div>
    </article>
  `;
}

function renderUniqueSections(profile) {
  if (!dom.resultUniqueSections) return;

  const sections = profile.uniqueSections || [];
  if (!sections.length) {
    dom.resultUniqueSections.hidden = true;
    dom.resultUniqueSections.innerHTML = "";
    return;
  }

  dom.resultUniqueSections.hidden = false;
  dom.resultUniqueSections.innerHTML = sections
    .map(
      (section) => `
        <article>
          <p class="mini-label">${escapeHtml(section.kicker || "Profile Detail")}</p>
          <h4>${escapeHtml(section.title)}</h4>
          <p>${escapeHtml(section.body)}</p>
        </article>
      `
    )
    .join("");
}

function renderResultVisuals(profile) {
  if (!profile.analytics) {
    dom.resultVisuals.innerHTML = "";
    return;
  }

  if (profile.analytics.type === "iq") {
    dom.resultVisuals.innerHTML = renderIqVisuals(profile.analytics);
    return;
  }

  if (profile.analytics.type === "dimensions") {
    dom.resultVisuals.innerHTML = renderDimensionVisuals(profile.analytics);
    return;
  }

  dom.resultVisuals.innerHTML = renderProfileVisuals(profile.analytics);
}

function unlockResult(mode) {
  const profile = getResultProfile();
  state.lastMode = mode;
  state.currentResult = profile;

  dom.resultTest.textContent = mode === "member" ? `${state.activeTest.title} | Monthly access` : state.activeTest.title;
  dom.resultTitle.textContent = profile.title;
  dom.resultSummary.textContent = profile.summary;
  dom.resultScore.textContent = mode === "member" ? `${profile.score} | All tests unlocked` : profile.score;
  renderResultVisuals(profile);
  renderCharacterFeature(profile);
  renderExampleShowcase(profile);
  renderResultStoryPanels(profile);
  renderUniqueSections(profile);
  renderList(dom.resultStrengths, profile.strengths);
  renderList(dom.resultWeaknesses, profile.weaknesses);
  dom.resultSituations.textContent = profile.situations;
  dom.resultRelationships.textContent = profile.relationships;
  dom.resultParenting.textContent = profile.parenting;
  dom.resultExamples.textContent = profile.examples;
  dom.deepDive.hidden = mode !== "member";
  dom.resultDeep.textContent = profile.member;
  setResultAccountMessage(accessMessageForMode(mode));
  setModalView("result");
}

function restartActiveTest() {
  if (!state.activeTest) return;
  startTest(state.activeTest.id);
}

function completeAuthFlow(message) {
  saveCurrentResultToAccount();

  if (state.pendingEmailResult) {
    state.pendingEmailResult = false;
    dom.login.hidden = true;
    emailCurrentResult();
    return;
  }

  dom.login.hidden = true;
  setResultAccountMessage(message);
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

if (dom.prevQuestion) {
  dom.prevQuestion.addEventListener("click", goToPreviousQuestion);
}

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

dom.unlockCore.addEventListener("click", () => requestPaidUnlock("core"));
dom.unlockDeep.addEventListener("click", () => requestPaidUnlock("member"));
if (dom.adContinue) dom.adContinue.addEventListener("click", finishMemberAd);
if (dom.adSkip) dom.adSkip.addEventListener("click", finishMemberAd);
dom.restart.addEventListener("click", restartActiveTest);
dom.closeButtons.forEach((button) => button.addEventListener("click", closeModal));

if (dom.menuToggle) dom.menuToggle.addEventListener("click", openSiteMenu);
if (dom.menuClose) dom.menuClose.addEventListener("click", closeSiteMenu);
if (dom.menuBackdrop) dom.menuBackdrop.addEventListener("click", closeSiteMenu);
dom.menuLinks.forEach((link) => link.addEventListener("click", closeSiteMenu));
dom.openSupportButtons.forEach((button) => button.addEventListener("click", () => openSupportAgent()));
if (dom.closeSupport) dom.closeSupport.addEventListener("click", closeSupportAgent);

if (dom.supportForm) {
  dom.supportForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = dom.supportForm.elements.question;
    answerSupportQuestion(input.value);
    input.value = "";
  });
}

dom.supportQuestions.forEach((button) => {
  button.addEventListener("click", () => answerSupportQuestion(button.dataset.supportQuestion || button.textContent));
});

if (dom.promoForm) {
  dom.promoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    applyPromoUnlock(dom.promoForm.elements["promo-code"].value);
  });
}

dom.modal.addEventListener("click", (event) => {
  if (event.target === dom.modal) closeModal();
});

dom.openLogin.addEventListener("click", () => {
  showAuthPanel(state.account ? "signin" : "signup", state.account ? `Signed in as ${state.account.email}.` : "Create an account only when you want saved or emailed results.");
});

if (dom.menuLogin) {
  dom.menuLogin.addEventListener("click", () => {
    closeSiteMenu();
    showAuthPanel(state.account ? "signin" : "signup", state.account ? `Signed in as ${state.account.email}.` : "Create an account only when you want saved or emailed results.");
  });
}

dom.closeLogin.addEventListener("click", () => {
  dom.login.hidden = true;
});

dom.login.addEventListener("click", (event) => {
  if (event.target === dom.login) dom.login.hidden = true;
});

dom.authTabs.forEach((button) => {
  button.addEventListener("click", () => showAuthPanel(button.dataset.authTab));
});

dom.signinForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = dom.signinForm.elements.email.value.trim().toLowerCase();
  const savedAccount = readJsonStorage(storageKeys.account, null);

  if (!savedAccount || savedAccount.email !== email) {
    showAuthPanel("signup", "No local account found for that email on this device. Create one to save or email results.");
    dom.signupForm.elements.email.value = email;
    return;
  }

  saveAccount(savedAccount);
  setAuthMessage(`Signed in as ${savedAccount.email}.`);
  completeAuthFlow(`Signed in as ${savedAccount.email}.`);
});

dom.signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = dom.signupForm;
  const account = {
    name: form.elements.name.value.trim(),
    email: form.elements.email.value.trim().toLowerCase(),
    age: form.elements.age.value.trim(),
    sex: form.elements.sex.value,
    createdAt: new Date().toISOString(),
  };

  if (!account.name || !account.email || !account.age || !account.sex) {
    setAuthMessage("Please fill out name, email, age, and sex to create the account.");
    return;
  }

  saveAccount(account);
  setAuthMessage(`Account created for ${account.email}.`);
  completeAuthFlow(`Account created for ${account.email}. Result saved on this device.`);
});

if (dom.emailResult) {
  dom.emailResult.addEventListener("click", emailCurrentResult);
}

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

if (dom.themeToggle) {
  dom.themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    setTheme(currentTheme === "dark" ? "light" : "dark");
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  closeModal();
  closeSiteMenu();
  closeSupportAgent();
  dom.login.hidden = true;
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // The app still works without offline caching.
    });
  });
}

initializeTheme();
initializeAccount();
applyNativeStoreMode();
renderTests();
handleCheckoutReturn();
