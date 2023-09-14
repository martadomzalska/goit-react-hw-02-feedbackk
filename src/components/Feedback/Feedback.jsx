import { Component } from 'react';

const Button = ({ changeMessage, label }) => (
  <button type="button" onClick={changeMessage}>
    {label}
  </button>
);

export class Feedback extends Component {
    static defaultProps = {
        initialValue: 0,
    }
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateGood = () => {
    this.setState({
      good: this.state.good + 1,
    });
  };
  updateNeutral = () => {
    this.setState({
      neutral: this.state.neutral + 1,
    });
  };
  updateBad = () => {
    this.setState({
      bad: this.state.bad + 1,
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
      const total = this.countTotalFeedback();
      const positiveFeedbackPercentage = Math.round((this.state.good / total) * 100);
      if (this.state.good > 0) {
          return "Positive feedback:" + positiveFeedbackPercentage + " %";
      } else {
          return "Positive feedback: 0%";
      }


    };

    
    


    render() {
    return (
      <>
        <h2>Please leave feedback</h2>

        <Button changeMessage={this.updateGood} label="Good"></Button>
        <Button changeMessage={this.updateNeutral} label="Neutral"></Button>
        <Button changeMessage={this.updateBad} label="Bad"></Button>

        <h2>Statistics</h2>

        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>{this.countPositiveFeedbackPercentage()} </p>
      </>
    );
  }
}
