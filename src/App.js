import React from "react";
import { useState } from "react";
import Section from "./components/Section";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const totalVotes = good + neutral + bad;
  const positivePercentage = ((good / totalVotes) * 100).toFixed(2);

  const controlTitles = ["good", "neutral", "bad"];

  const addVote = (event) => {
    const { name } = event.target;
    switch (name) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={controlTitles}
          onLeaveFeedback={addVote}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {totalVotes ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalVotes}
            positivePercentage={positivePercentage}
          ></Statistics>
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
}

export default App;
