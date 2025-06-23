const Questions = [
  {
    topic: "History",
    levels: {
      Easy: [
        {
          id: 1,
          question: "Who was the first President of the United States?",
          options: [
            "Abraham Lincoln",
            "George Washington",
            "Thomas Jefferson",
            "John Adams",
          ],
          answer: "George Washington",
        },
        {
          id: 2,
          question: "What year did World War II end?",
          options: ["1945", "1939", "1918", "1955"],
          answer: "1945",
        },
        {
          id: 3,
          question: "Which empire built the Colosseum?",
          options: ["Greek", "Ottoman", "Roman", "Persian"],
          answer: "Roman",
        },
        {
          id: 4,
          question: "Where is the Great Wall located?",
          options: ["India", "China", "Japan", "Russia"],
          answer: "China",
        },
        {
          id: 5,
          question: "Who was known as the Maid of Orléans?",
          options: [
            "Marie Curie",
            "Cleopatra",
            "Joan of Arc",
            "Queen Victoria",
          ],
          answer: "Joan of Arc",
        },
      ],
      Medium: [
        {
          id: 1,
          question:
            "What was the name of the ship on which the Pilgrims traveled to America?",
          options: ["Mayflower", "Titanic", "Santa Maria", "Endeavour"],
          answer: "Mayflower",
        },
        {
          id: 2,
          question:
            "Who was the British Prime Minister during most of World War II?",
          options: [
            "Winston Churchill",
            "Neville Chamberlain",
            "Tony Blair",
            "Margaret Thatcher",
          ],
          answer: "Winston Churchill",
        },
        {
          id: 3,
          question: "In which country did the Industrial Revolution begin?",
          options: ["Germany", "France", "United States", "United Kingdom"],
          answer: "United Kingdom",
        },
        {
          id: 4,
          question: "What wall divided Berlin from 1961 to 1989?",
          options: [
            "The Great Wall",
            "The Iron Wall",
            "The Berlin Wall",
            "The Red Wall",
          ],
          answer: "The Berlin Wall",
        },
        {
          id: 5,
          question:
            "Who was assassinated in Sarajevo in 1914, sparking World War I?",
          options: [
            "Franz Ferdinand",
            "Adolf Hitler",
            "Woodrow Wilson",
            "Napoleon",
          ],
          answer: "Franz Ferdinand",
        },
      ],
      Hard: [
        {
          id: 1,
          question: "Who was the longest-reigning emperor of Japan?",
          options: ["Hirohito", "Akihito", "Meiji", "Taishō"],
          answer: "Hirohito",
        },
        {
          id: 2,
          question: "Which treaty ended World War I?",
          options: [
            "Treaty of Versailles",
            "Treaty of Paris",
            "Treaty of Ghent",
            "Treaty of Tordesillas",
          ],
          answer: "Treaty of Versailles",
        },
        {
          id: 3,
          question: "What was the name of the last ruling queen of France?",
          options: [
            "Marie Antoinette",
            "Catherine de Medici",
            "Anne of Austria",
            "Eleanor of Aquitaine",
          ],
          answer: "Marie Antoinette",
        },
        {
          id: 4,
          question: "Who led the Haitian Revolution?",
          options: [
            "Toussaint Louverture",
            "Simon Bolivar",
            "Nelson Mandela",
            "Marcus Garvey",
          ],
          answer: "Toussaint Louverture",
        },
        {
          id: 5,
          question: "Which year did the French Revolution begin?",
          options: ["1789", "1776", "1812", "1804"],
          answer: "1789",
        },
      ],
    },
  },

  {
    topic: "Science",
    levels: {
      Easy: [
        {
          id: 1,
          question: "What planet is known as the Red Planet?",
          options: ["Earth", "Mars", "Jupiter", "Venus"],
          answer: "Mars",
        },
        {
          id: 2,
          question: "What gas do humans need to breathe to survive?",
          options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Helium"],
          answer: "Oxygen",
        },
        {
          id: 3,
          question: "Which organ pumps blood throughout the body?",
          options: ["Brain", "Lungs", "Heart", "Liver"],
          answer: "Heart",
        },
        {
          id: 4,
          question: "What do bees collect and use to make honey?",
          options: ["Leaves", "Pollen", "Nectar", "Sap"],
          answer: "Nectar",
        },
        {
          id: 5,
          question: "What is the boiling point of water?",
          options: ["90°C", "100°C", "110°C", "120°C"],
          answer: "100°C",
        },
      ],
      Medium: [
        {
          id: 1,
          question: "What part of the cell contains DNA?",
          options: ["Nucleus", "Ribosome", "Mitochondria", "Cytoplasm"],
          answer: "Nucleus",
        },
        {
          id: 2,
          question: "What is the main gas found in the air we breathe?",
          options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon dioxide"],
          answer: "Nitrogen",
        },
        {
          id: 3,
          question:
            "Which vitamin is produced when a person is exposed to sunlight?",
          options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
          answer: "Vitamin D",
        },
        {
          id: 4,
          question: "What force keeps planets in orbit around the sun?",
          options: ["Electromagnetism", "Friction", "Gravity", "Inertia"],
          answer: "Gravity",
        },
        {
          id: 5,
          question: "Which scientist proposed the three laws of motion?",
          options: ["Einstein", "Galileo", "Newton", "Darwin"],
          answer: "Newton",
        },
      ],
      Hard: [
        {
          id: 1,
          question: "What is the Heisenberg Uncertainty Principle related to?",
          options: [
            "Light speed",
            "Atomic weight",
            "Particle position and momentum",
            "Electromagnetism",
          ],
          answer: "Particle position and momentum",
        },
        {
          id: 2,
          question: "What particle has a negative charge?",
          options: ["Proton", "Neutron", "Electron", "Photon"],
          answer: "Electron",
        },
        {
          id: 3,
          question: "What is the powerhouse of the cell?",
          options: ["Nucleus", "Mitochondria", "Chloroplast", "Ribosome"],
          answer: "Mitochondria",
        },
        {
          id: 4,
          question: "Which scientist discovered radioactivity?",
          options: [
            "Marie Curie",
            "Nikola Tesla",
            "Isaac Newton",
            "Michael Faraday",
          ],
          answer: "Marie Curie",
        },
        {
          id: 5,
          question: "What is the chemical formula for table salt?",
          options: ["NaCl", "KCl", "CaCO3", "NaOH"],
          answer: "NaCl",
        },
      ],
    },
  },

  {
    topic: "Programming",
    levels: {
      Easy: [
        {
          id: 1,
          question: "What does HTML stand for?",
          options: [
            "Hyper Trainer Marking Language",
            "HyperText Markup Language",
            "HighText Markdown Language",
            "None of the above",
          ],
          answer: "HyperText Markup Language",
        },
        {
          id: 2,
          question: "Which language is used for styling web pages?",
          options: ["HTML", "JQuery", "CSS", "XML"],
          answer: "CSS",
        },
        {
          id: 3,
          question: "What symbol is used for comments in JavaScript?",
          options: ["<!-- -->", "//", "#", "/* */"],
          answer: "//",
        },
        {
          id: 4,
          question: "Which company developed the Java language?",
          options: ["Microsoft", "Google", "Sun Microsystems", "Apple"],
          answer: "Sun Microsystems",
        },
        {
          id: 5,
          question: "Which one is a loop structure in C?",
          options: ["if", "switch", "for", "goto"],
          answer: "for",
        },
      ],
      Medium: [
        {
          id: 1,
          question: "What does the 'this' keyword refer to in JavaScript?",
          options: [
            "Current function",
            "Global object",
            "Current object",
            "Document",
          ],
          answer: "Current object",
        },
        {
          id: 2,
          question: "Which operator is used to compare both value and type?",
          options: ["==", "===", "!=", "="],
          answer: "===",
        },
        {
          id: 3,
          question: "What does JSON stand for?",
          options: [
            "JavaScript Object Notation",
            "Java Source Object Notation",
            "Java Standard Output Notation",
            "JavaScript Output Name",
          ],
          answer: "JavaScript Object Notation",
        },
        {
          id: 4,
          question:
            "Which method converts a JSON string into a JavaScript object?",
          options: [
            "JSON.stringify()",
            "JSON.parse()",
            "JSON.convert()",
            "JSON.objectify()",
          ],
          answer: "JSON.parse()",
        },
        {
          id: 5,
          question:
            "In C, what is the size of an `int` on most 32-bit systems?",
          options: ["2 bytes", "4 bytes", "8 bytes", "1 byte"],
          answer: "4 bytes",
        },
      ],
      Hard: [
        {
          id: 1,
          question: "What is a closure in JavaScript?",
          options: [
            "A function with no parameters",
            "A block of code",
            "A function having access to its outer function’s variables even after the outer function has returned",
            "A global variable",
          ],
          answer:
            "A function having access to its outer function’s variables even after the outer function has returned",
        },
        {
          id: 2,
          question:
            "Which sorting algorithm has the best average-case performance?",
          options: [
            "Bubble sort",
            "Merge sort",
            "Selection sort",
            "Insertion sort",
          ],
          answer: "Merge sort",
        },
        {
          id: 3,
          question: "Which language is used to write Linux kernel?",
          options: ["Python", "Java", "C", "C++"],
          answer: "C",
        },
        {
          id: 4,
          question: "What is the output of `typeof null` in JavaScript?",
          options: ["null", "object", "undefined", "string"],
          answer: "object",
        },
        {
          id: 5,
          question:
            "In C, what does `malloc()` return when memory allocation fails?",
          options: ["0", "1", "NULL", "Undefined"],
          answer: "NULL",
        },
      ],
    },
  },
];

export default Questions;
