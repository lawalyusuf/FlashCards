import { useState } from "react";  // Import useState hook from React

// Array of question objects with unique IDs, questions, and answers
const questions = [
  {
    id: 3450,
    question: "What language is React based on?",
    answer: "Javascript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "Javascript",
  },
];

// Main App component, renders the Flashcards component
function App() {
  return <FlashCards />;
}

// Flashcards component displays questions and toggles answers on click
function FlashCards() {
  // State to track which question is currently selected
  const [selectedId, setSelectedId] = useState("null");

  // Function to handle click events on a question
  function handleClick(id) {
    // If clicked ID is different from selected, set it; otherwise, reset to "null"
    setSelectedId(id !== selectedId ? id : "null");
  }

  return (
    <div className="flashcards">
      {/* Map through the questions array to display each question */}
      {questions.map((quest) => (
        <div
          key={quest.id}  // Unique key for each question div
          onClick={() => handleClick(quest.id)}  // Toggle selection on click
          className={quest.id === selectedId ? "selected" : ""}  // Add selected class if ID matches
        >
          {/* Display question if not selected; display answer if selected */}
          <p>{quest.id === selectedId ? quest.answer : quest.question}</p>
        </div>
      ))}
    </div>
  );
}

export default App;  // Export the App component as default
