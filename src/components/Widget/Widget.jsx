import { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import css from './Widget.module.css';

export class Widget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //callback for feedback buttons in FeedbackOptions
  updateFeedback = event => {
    const option = event.currentTarget.name;

    switch (option) {
      case 'good':
        this.setState({
          good: this.state.good + 1,
        });
        break;
      case 'neutral':
        this.setState({
          neutral: this.state.neutral + 1,
        });
        break;
      case 'bad':
        this.setState({
          bad: this.state.bad + 1,
        });
        break;

      default:
        break;
    }
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
    ).toFixed(2);
    if (this.state.good > 0) {
      return positiveFeedbackPercentage;
    } else {
      return 0;
    }
  };

  render() {
    return (
      <div className={css.container}>
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
