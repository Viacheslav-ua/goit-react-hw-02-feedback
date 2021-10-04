import React from "react";

interface StateType {
  good: number;
  neutral: number;
  bad: number;
}

interface PropsType {
  initialGood: number;
  initialNeutral: number;
  initialBad: number;
}

class Feedback extends React.Component<PropsType> {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };

  state: StateType = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  handleGood = () => {
    this.setState((currentState: StateType) => {
      return { good: currentState.good + 1 };
    });
  };

  handleNeutral = () => {
    this.setState((currentState: StateType) => {
      return { neutral: currentState.neutral + 1 };
    });
  };

  handleBad = () => {
    this.setState((currentState: StateType) => {
      return { bad: currentState.bad + 1 };
    });
  };

  render() {
    return (
      <>
        <div className="control">
          <button type="button" onClick={this.handleGood}>
            Good
          </button>
          <button type="button" onClick={this.handleNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleBad}>
            Bad
          </button>
        </div>
        <div>
          <h2 className="title">Statistics</h2>
          <span className="value">Good: {this.state.good}</span>
          <span className="value">Neutral: {this.state.neutral}</span>
          <span className="value">Bad: {this.state.bad}</span>
        </div>
      </>
    );
  }
}

export default Feedback;
