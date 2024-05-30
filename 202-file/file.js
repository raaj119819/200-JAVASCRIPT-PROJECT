const fs = require('fs');
const path = require('path');

const baseURL = 'https://deepakkumar55.github.io/200-JAVASCRIPT-PROJECT';

const projects = [
    "To-Do List App",
    "Calculator",
    "Weather App",
    "Countdown Timer",
    "Pomodoro Clock",
    "Quiz App",
    "Recipe App",
    "Note-taking App",
    "Simple Form Validation",
    "Digital Clock",
    "Color Picker",
    "Tip Calculator",
    "Rock, Paper, Scissors Game",
    "Currency Converter",
    "Random Quote Generator",
    "Number Guessing Game",
    "BMI Calculator",
    "Light/Dark Mode Toggle",
    "Unit Converter",
    "Palindrome Checker",
    "Magic 8 Ball",
    "Weather Forecaster",
    "Tic-Tac-Toe Game",
    "Image Slider",
    "Landing Page with Animation",
    "Simple Chatbot",
    "Expense Tracker",
    "Random Joke Generator",
    "Wikipedia Search",
    "Recipe Finder",
    "Alarm Clock",
    "Flashcards App",
    "Password Generator",
    "Memory Game",
    "Text-to-Speech Converter",
    "Language Translator",
    "Local Storage Form",
    "Weather Dashboard",
    "GitHub User Search",
    "Random Dog Photo Generator",
    "Word Counter",
    "JavaScript Quiz",
    "API Fetch Practice",
    "Meme Generator",
    "Simple Portfolio Website",
    "Basic Drawing App",
    "Dynamic Table with Sorting",
    "Trivia Game",
    "Music Player",
    "Popup Modal",
    "Blog CMS",
    "E-commerce Product Page",
    "Real-Time Chat Application",
    "Markdown Previewer",
    "Personal Finance Dashboard",
    "Interactive Story Game",
    "Social Media Dashboard",
    "Weather Station with Charts",
    "Fitness Tracker",
    "Job Board",
    "Movie Search App",
    "Music Playlist",
    "Expense Tracker with Charts",
    "Recipe Box",
    "Task Manager",
    "Image Editor",
    "Kanban Board",
    "Markdown Editor",
    "Survey Form",
    "Photo Gallery",
    "Shopping Cart",
    "Blogging Platform",
    "Customer Support Chatbot",
    "Event Countdown",
    "Flash Sale Timer",
    "News Aggregator",
    "Movie Recommendation Engine",
    "Weather Forecast with Maps",
    "Online Code Editor",
    "GraphQL API Explorer",
    "Collaborative To-Do List",
    "Habit Tracker",
    "GitHub Issue Tracker",
    "Recipe Sharing Platform",
    "Travel Itinerary Planner",
    "Personal Portfolio with Animations",
    "Real-Time Stock Tracker",
    "Online Polling System",
    "Crypto Tracker",
    "Voice Assistant",
    "Expense Splitter",
    "Typing Speed Test",
    "Fitness Progress Tracker",
    "Interactive Quiz with Timer",
    "News Feed Reader",
    "AI Chatbot",
    "Budget Planner",
    "Movie Rating System",
    "Online Whiteboard",
    "Interactive Maps",
    "Full-Stack E-commerce Platform",
    "Real-Time Collaboration Tool",
    "Virtual Reality Environment",
    "Social Network",
    "Advanced Data Visualization",
    "Progressive Web App",
    "Custom CRM System",
    "Learning Management System",
    "Online Auction Platform",
    "Personal Finance Manager",
    "Project Management Tool",
    "Online Marketplace",
    "Event Management System",
    "Advanced Blog Platform",
    "Video Streaming Service",
    "Content Management System",
    "Real-Time Multiplayer Game",
    "Chat Application with WebSockets",
    "Voice Recognition App",
    "AI-Based Recommendation System",
    "Healthcare Management System",
    "Online Learning Platform",
    "IoT Dashboard",
    "Blockchain-Based Voting System",
    "Smart Home Dashboard",
    "Inventory Management System",
    "Custom Analytics Dashboard",
    "Virtual Conference Platform",
    "Crowdfunding Platform",
    "Real-Time Location Tracking App",
    "Recipe Recommendation Engine",
    "Online Interview Platform",
    "AI-Powered Resume Builder",
    "Interactive Storytelling Platform",
    "Real-Time Stock Market Dashboard",
    "AI Image Recognition App",
    "Music Streaming Service",
    "Advanced Task Manager",
    "AI Chatbot with NLP",
    "Real-Time Weather Monitoring",
    "AI-Based Personal Assistant",
    "Custom ERP System",
    "Real-Time Sports Scoreboard",
    "Collaborative Coding Platform",
    "AI-Powered Financial Advisor",
    "Real-Time Traffic Monitoring",
    "Smart City Dashboard",
    "Blockchain-Based Identity Verification",
    "Voice-Controlled Home Automation",
    "Advanced Travel Planner",
    "Digital Art Canvas",
    "Recipe Nutrition Analyzer",
    "Voice-Controlled Robot",
    "AI-Powered News Summarizer",
    "Historical Event Timeline",
    "Personal Diary with Emotion Analysis",
    "Virtual Pet Game",
    "Language Learning App",
    "Photo Filters with WebGL",
    "Interactive Resume",
    "Custom Video Editor",
    "Fantasy Sports League",
    "Music Visualization App",
    "Virtual Reality Game",
    "AI Writer's Assistant",
    "Blockchain-Powered Loyalty Program",
    "Social Media Sentiment Analyzer",
    "Interactive Story Book",
    "Real-Time Face Recognition",
    "3D Modeling Tool",
    "Augmented Reality Shopping",
    "Voice-Controlled Calendar",
    "AI Music Composer",
    "Virtual Escape Room",
    "AI Art Generator",
    "Real-Time Language Translator",
    "Custom Map Generator",
    "Interactive Fitness Coach",
    "AI-Powered Job Matching",
    "Online Therapy Platform",
    "Virtual Museum Tour",
    "AI Recipe Generator",
    "Interactive Game Storyboard",
    "Blockchain-Powered Supply Chain",
    "Voice-Controlled Presentation Tool",
    "AI Financial Market Predictor",
    "Smart Contract Platform",
    "Real-Time Disaster Alert System",
    "AI Customer Service",
    "Virtual Personal Trainer",
    "Collaborative Writing Tool",
    "AI Investment Advisor",
    "Interactive Learning Platform",
    "Blockchain-Based Voting App",
    "Voice-Controlled Shopping List",
    "Real-Time Data Dashboard",
    "Custom Podcast Platform",
    "AI-Powered Content Curator",
    "Virtual Reality Classroom",
    "Blockchain-Based Contract Management"
];

projects.forEach((project, index) => {
    const folderName = `${index + 1}-${project.replace(/[^a-z0-9]/gi, '_').toLowerCase()}`;
    fs.mkdirSync(folderName, { recursive: true });

    const projectURL = `${baseURL}/${index + 1}-${folderName}/`;

    const readmeContent = `# ${project}\n\n## Description\n\nA brief description of the ${project.toLowerCase()} project.\n\n## Features\n\n- Feature 1\n- Feature 2\n- Feature 3\n\n## Technologies Used\n\n- JavaScript\n- HTML\n- CSS\n\n## Setup\n\nInstructions to set up and run the project.\n\n## Live Demo\n\n[View the project here](${projectURL})\n`;

    fs.writeFileSync(path.join(folderName, 'README.md'), readmeContent);
});

console.log('Folders and README.md files created for all projects.');