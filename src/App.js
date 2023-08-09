import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Nav />
        <Form />

        <GoalTracker />
      </div>
    </div>
  );
}

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

function Form() {
  return (
    <div className="form-container">
      <div className="form">
        <input type="text" placeholder="type here" />
        <button className="btn">add</button>
      </div>
    </div>
  );
}

function GoalTracker() {
  return (
    <div className="goals">
      <div className="goal">
        <input type="checkbox" className="checkbox-input" />
        <h3 className="goal-value">First Goal</h3>
      </div>

      <div className="goal">
        <input type="checkbox" className="checkbox-input" />
        <h3 className="goal-value">Second Goal</h3>
      </div>

      <div className="goal">
        <input type="checkbox" className="checkbox-input" />
        <h3 className="goal-value">Third Goal</h3>
      </div>

      <div className="goal">
        <input type="checkbox" className="checkbox-input" />
        <h3 className="goal-value">Fourth Goal</h3>
      </div>
    </div>
  );
}

export default App;
