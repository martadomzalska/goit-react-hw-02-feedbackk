import { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //callback for feedback buttons in FeedbackOptions
  updateFeedback = event => {
    const { name } = event.target;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  //counting total amount of feedback
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  //counting positive percentage of total amount
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = (
      (this.state.good / total) *
      100
    ).toFixed(1);
    if (this.state.good > 0) {
      return Number(positiveFeedbackPercentage);
    } else {
      return 0;
    }
  };
  render() {
    return (
      <div className="container">
        <Section title="Please leave feedback:">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveMessage={this.updateFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      </div>
    );
  }
}
