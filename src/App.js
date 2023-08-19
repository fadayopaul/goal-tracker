import React, { useState } from "react";

function App() {
  const [goals, setGoals] = useState([]);

  return (
    <div className="App">
      <div className="container">
        <Nav />
        <Form goals={goals} setGoals={setGoals} />

        <GoalTracker setGoals={setGoals} goals={goals} />
      </div>
    </div>
  );
}

// Navigation Bat
function Nav() {
  return (
    <div className="nav">
      <h1 className="logo">GOAL TRACKER</h1>
      <h4>
        Every great journey starts with a great destination, keep your
        aspirations in check with effective goal tracking
      </h4>
    </div>
  );
}

// Input Form
function Form({ setGoals, goals }) {
  const [add, setAdd] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newGoals = {
      description: add,
      id: new Date().getMilliseconds(),
    };

    setGoals([newGoals, ...goals]);
    setAdd("");
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form">
        <input
          type="text"
          placeholder="type here"
          value={add}
          onChange={(e) => {
            setAdd(e.target.value);
          }}
        />
        <button className="btn">add</button>
      </div>
    </form>
  );
}

//  Goals List
function GoalTracker({ goals, setGoals }) {
  /* delete goal function */
  function deleteGoal(element) {
    const { id, description } = element;
    const filtered = goals.filter((goal) => goal.id !== id);

    const confirmed = window.confirm(
      `Are you sure you want to delete ${description}?`
    );
    confirmed && setGoals(filtered);
  }

  /* Display when goal list is empty */
  if (goals.length === 0) {
    return (
      <div className="empty--list">
        <p>Goal List is empty, kindly create one!</p>
      </div>
    );
  }

  return (
    <div className="goals">
      {goals.map((goal) => (
        <div key={goal.id} className="goal">
          <input type="checkbox" className="checkbox-input" />
          <h3 className="goal-value">{goal.description}</h3>
          <p className="delete" onClick={() => deleteGoal(goal)}>
            ❌
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
