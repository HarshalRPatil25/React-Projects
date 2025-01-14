import { useState } from 'react';
import './App.css';

function App() {
  const [thing, setThing] = useState(""); // Current input
  const [submittedTask, setSubmittedTask] = useState(""); // Store the submitted task
  const [completed, setCompleted] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [celebrate, setCelebrate] = useState(false); // To trigger celebration

  function handleSubmit(e) {
    e.preventDefault();
    setCompleted(false);
    setSubmitted(true);
    setSubmittedTask(thing); // Save the task separately
    setThing(""); // Clear the input field
  }

  function inputHandler(e) {
    setThing(e.target.value);
  }

  function doneTask(e) {
    e.preventDefault();
    setSubmitted(false);
    setCelebrate(true); // Trigger celebration

    // Reset states after celebration
    setTimeout(() => {
      setCelebrate(false);
      setCompleted(true);
    }, 3000); // Show celebration for 2 seconds
  }

  return (
    <main className="App">
      <h1>What is Your "One Thing"?</h1>
      {completed && (
        <form className="formSubmit" onSubmit={handleSubmit}>
          <input
            className="inputField"
            placeholder="Enter your one thing..."
            autoFocus
            value={thing}
            onChange={inputHandler}
          />
          <button className="submitButton">Submit</button>
        </form>
      )}
      {submitted && (
        <div className="submittedSection">
          <p className="submittedText">You submitted:</p>
          <p className="taskText">{submittedTask}</p>
          <button className="completeButton" onClick={doneTask}>
            Completed
          </button>
        </div>
      )}
      {celebrate && (
        <div className="celebration">
          🎉 Congratulations! 🎉
        </div>
      )}
    </main>
  );
}

export default App;
