const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://127.0.0.1:27017/authDB';

/* ================================
   1. SCHEMAS & MODELS
================================ */
const courseSchema = new mongoose.Schema({
    id: Number, title: String, category: String, color: String, instructor: String, lessons: Array, imageUrl: String 
});
const quizSchema = new mongoose.Schema({
    courseId: Number, title: String, task: String, xp: Number, difficulty: String, questions: Array
});
const assignmentSchema = new mongoose.Schema({
    courseId: Number, title: String, task: String, details: String, dueDate: String
});

const Course = mongoose.model('Course', courseSchema, 'courses');
const Quiz = mongoose.model('Quiz', quizSchema, 'quizzes');
const Assignment = mongoose.model('Assignment', assignmentSchema, 'assignments');

/* ================================
   2. EXPANDED SUBJECT CONFIGURATION
================================ */
const subjects = [
    { 
        name: 'Python', dept: 'Tech', color: '#10b981', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400', 
        questions: [
            { q: "Which keyword creates a function?", options: ["func", "def", "define", "lambda"], correct: 1 },
            { q: "What is the result of 0.1 + 0.2 == 0.3?", options: ["True", "False", "Error", "None"], correct: 1 },
            { q: "Which data type is mutable?", options: ["String", "Tuple", "List", "Int"], correct: 2 },
            { q: "What does __init__ do?", options: ["Initializes class", "Deletes object", "Calls function", "None"], correct: 0 },
            { q: "Keyword for exception handling?", options: ["catch", "try", "error", "except"], correct: 3 },
            { q: "What is a 'lambda'?", options: ["A loop", "Anonymous function", "Data type", "Module"], correct: 1 },
            { q: "Function for list length?", options: ["size()", "count()", "length()", "len()"], correct: 3 },
            { q: "How to start a comment?", options: ["//", "/*", "#", "--"], correct: 2 },
            { q: "Operator for power?", options: ["^", "**", "exp", "//"], correct: 1 },
            { q: "File extension?", options: [".pt", ".pyt", ".py", ".pyw"], correct: 2 }
        ] 
    },
    { 
        name: 'Java', dept: 'Tech', color: '#3b82f6', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400', 
        questions: [
            { q: "Valid access modifier?", options: ["private", "hidden", "internal", "locked"], correct: 0 },
            { q: "Data type for text?", options: ["String", "txt", "char", "myString"], correct: 0 },
            { q: "Entry point method?", options: ["start()", "init()", "main()", "run()"], correct: 2 },
            { q: "Keyword to inherit?", options: ["implements", "extends", "inherits", "import"], correct: 1 },
            { q: "Size of 'int'?", options: ["16-bit", "32-bit", "64-bit", "8-bit"], correct: 1 },
            { q: "Keyword for a constant?", options: ["const", "fixed", "final", "static"], correct: 2 },
            { q: "Which is NOT primitive?", options: ["int", "boolean", "char", "String"], correct: 3 },
            { q: "How to create an object?", options: ["new", "create", "alloc", "make"], correct: 0 },
            { q: "Operator for AND?", options: ["&", "&&", "AND", "and"], correct: 1 },
            { q: "Java is short for?", options: ["Coffee", "Just Another Virtual App", "Not an acronym", "JavaScript"], correct: 2 }
        ] 
    },
    { 
        name: 'Photoshop', dept: 'Design', color: '#6366f1', img: 'https://images.unsplash.com/photo-1572044162444-ad60f128bde2?w=400', 
        questions: [
            { q: "Shortcut for Deselect?", options: ["Ctrl+D", "Ctrl+X", "Ctrl+S", "Ctrl+V"], correct: 0 },
            { q: "Standard file format?", options: [".psd", ".jpg", ".png", ".pdf"], correct: 0 },
            { q: "Which tool selects colors?", options: ["Magic Wand", "Pen", "Brush", "Eraser"], correct: 0 },
            { q: "Shortcut for Undo?", options: ["Ctrl+U", "Ctrl+Z", "Ctrl+Y", "Ctrl+W"], correct: 1 },
            { q: "What are layers for?", options: ["Organization", "Coloring", "Effects", "Saving"], correct: 0 },
            { q: "Shortcut for Zoom In?", options: ["Ctrl++", "Ctrl+-", "Ctrl+0", "Ctrl+1"], correct: 0 },
            { q: "Which tool moves objects?", options: ["Move Tool", "Marquee", "Lasso", "Crop"], correct: 0 },
            { q: "How to invert selection?", options: ["Ctrl+I", "Ctrl+Shift+I", "Ctrl+Alt+I", "Ctrl+N"], correct: 1 },
            { q: "Resolution for web?", options: ["72 dpi", "300 dpi", "150 dpi", "600 dpi"], correct: 0 },
            { q: "RGB stands for?", options: ["Red Green Blue", "Red Gray Black", "Real Great Bloom", "None"], correct: 0 }
        ] 
    },
    { 
        name: 'English', dept: 'Humanities', color: '#e11d48', img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400', 
        questions: [
            { q: "Synonym for 'Vivid'?", options: ["Dull", "Bright", "Small", "Weak"], correct: 1 },
            { q: "Antonym of 'Advance'?", options: ["Move", "Retreat", "Push", "Jump"], correct: 1 },
            { q: "Which is a noun?", options: ["Run", "Happy", "Apple", "Quickly"], correct: 2 },
            { q: "Past tense of 'Go'?", options: ["Goed", "Went", "Gone", "Going"], correct: 1 },
            { q: "Plural of 'Child'?", options: ["Childs", "Children", "Childrens", "Childes"], correct: 1 },
            { q: "Identify the verb:", options: ["Slow", "Beautiful", "Eat", "House"], correct: 2 },
            { q: "A person who writes books?", options: ["Baker", "Author", "Doctor", "Pilot"], correct: 1 },
            { q: "Which is a pronoun?", options: ["She", "Garden", "Big", "Talk"], correct: 0 },
            { q: "Opposite of 'Success'?", options: ["Victory", "Failure", "Win", "Gain"], correct: 1 },
            { q: "Correct spelling?", options: ["Recieve", "Receive", "Receeve", "Recive"], correct: 1 }
        ] 
    },
    { 
        name: 'History', dept: 'Humanities', color: '#f59e0b', img: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=400', 
        questions: [
            { q: "When did WWII end?", options: ["1918", "1945", "1939", "1950"], correct: 1 },
            { q: "First Roman Emperor?", options: ["Julius Caesar", "Augustus", "Nero", "Constantine"], correct: 1 },
            { q: "Magna Carta year?", options: ["1066", "1215", "1492", "1776"], correct: 1 },
            { q: "Mansa Musa's Empire?", options: ["Songhai", "Mali", "Ghana", "Ethiopia"], correct: 1 },
            { q: "Industrial Revolution start?", options: ["France", "USA", "Germany", "UK"], correct: 3 },
            { q: "Pyramid builders?", options: ["Maya", "Aztec", "Egyptians", "Romans"], correct: 2 },
            { q: "First UK female PM?", options: ["May", "Thatcher", "Merkel", "Gandhi"], correct: 1 },
            { q: "French Revolution year?", options: ["1776", "1789", "1804", "1812"], correct: 1 },
            { q: "Berlin Wall fell in?", options: ["1985", "1989", "1991", "1995"], correct: 1 },
            { q: "Independence author?", options: ["Jefferson", "Franklin", "Adams", "Washington"], correct: 0 }
        ] 
    },
    { 
        name: 'Physics', dept: 'Science', color: '#0ea5e9', img: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400', 
        questions: [
            { q: "SI unit of force?", options: ["Watt", "Joule", "Newton", "Pascal"], correct: 2 },
            { q: "Speed of light?", options: ["300k km/s", "150k km/s", "1m km/s", "500k km/s"], correct: 0 },
            { q: "General Relativity author?", options: ["Newton", "Einstein", "Bohr", "Planck"], correct: 1 },
            { q: "Negative charge particle?", options: ["Proton", "Neutron", "Electron", "Photon"], correct: 2 },
            { q: "SI unit of power?", options: ["Joule", "Volt", "Watt", "Ampere"], correct: 2 },
            { q: "E=hf constant?", options: ["Boltzmann", "Planck", "Avogadro", "Newton"], correct: 1 },
            { q: "Gravity on Earth?", options: ["9.8 m/s²", "10.5 m/s²", "8.9 m/s²", "7.2 m/s²"], correct: 0 },
            { q: "Matter with no shape?", options: ["Solid", "Liquid", "Gas", "Plasma"], correct: 2 },
            { q: "Nearsightedness lens?", options: ["Convex", "Concave", "Bifocal", "None"], correct: 1 },
            { q: "Thermodynamics 1st Law?", options: ["Entropy", "Inertia", "Energy Cons.", "Action"], correct: 2 }
        ] 
    },
    { 
        name: 'Biology', dept: 'Science', color: '#84cc16', img: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=400', 
        questions: [
            { q: "Powerhouse of cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Lysosome"], correct: 2 },
            { q: "Who discovered Penicillin?", options: ["Pasteur", "Fleming", "Darwin", "Mendel"], correct: 1 },
            { q: "Human bones total?", options: ["206", "150", "300", "250"], correct: 0 },
            { q: "Blood type universal donor?", options: ["A+", "B-", "O-", "AB+"], correct: 2 },
            { q: "Brain of the cell?", options: ["Membrane", "Nucleus", "Wall", "Cytoplasm"], correct: 1 },
            { q: "Human heart chambers?", options: ["2", "3", "4", "5"], correct: 2 },
            { q: "Photosynthesis gas?", options: ["Oxygen", "CO2", "Nitrogen", "Helium"], correct: 1 },
            { q: "Smallest unit of life?", options: ["Atom", "Cell", "Tissue", "Organ"], correct: 1 },
            { q: "DNA shape?", options: ["Sphere", "Double Helix", "Square", "Chain"], correct: 1 },
            { q: "Human normal temp?", options: ["37°C", "40°C", "35°C", "38°C"], correct: 0 }
        ] 
    }
];

/* ================================
   3. SEEDING LOGIC
================================ */
const seedDatabase = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Connected to MongoDB...");

        await Course.deleteMany({});
        await Quiz.deleteMany({});
        await Assignment.deleteMany({});

        const courses = [];
        const quizzes = [];
        const assignments = [];

        for (let i = 1; i <= 1000; i++) {
            const sub = subjects[i % subjects.length];
            const level = Math.ceil(i / subjects.length);
            const title = `${sub.name} Mastery: Level ${level}`;

            const day = (i % 28) + 1;
            const monthNames = ['March', 'April', 'May'];
            const month = monthNames[i % 3];
            const uniqueDueDate = `${month} ${day}, 2026`;

            courses.push({
                id: i,
                title: title,
                category: sub.dept,
                color: sub.color,
                imageUrl: sub.img,
                instructor: `Prof. ${sub.name} Expert`,
                lessons: [
                    { id: 1, title: `Introduction to ${sub.name}`, duration: "15m", videoId: "intro" },
                    { id: 2, title: `Core ${sub.name} Applications`, duration: "35m", videoId: "core" }
                ]
            });

            quizzes.push({
                courseId: i,
                title: `${sub.name} Quest - Level ${level}`,
                task: `Review Module ${i % 5 + 1}`,
                xp: 200 + (level * 5),
                difficulty: level > 10 ? 'Hard' : 'Medium',
                questions: sub.questions
            });

            assignments.push({
                courseId: i,
                title: `${sub.name} Lab Project`,
                task: `Practical #${level}`,
                details: `Demonstrate your proficiency in ${sub.name} by completing this Module ${level} project.`,
                dueDate: uniqueDueDate
            });

            if (i % 200 === 0) console.log(`Generated ${i} subjects...`);
        }

        console.log("Saving to database...");
        await Course.insertMany(courses);
        await Quiz.insertMany(quizzes);
        await Assignment.insertMany(assignments);

        console.log("✅ Successfully seeded 1,000 Courses, Quizzes, and Assignments with unique data!");
        process.exit();
    } catch (err) {
        console.error("❌ Seeding failed:", err);
        process.exit(1);
    }
};

seedDatabase();