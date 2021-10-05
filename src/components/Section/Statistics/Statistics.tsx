import React from "react";

interface PropsType {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: number;
}
const Statistics: React.FC<PropsType> = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <h2 className="title">Statistics</h2>
      <span className="value">Good: {good}</span>
      <span className="value">Neutral: {neutral}</span>
      <span className="value">Bad: {bad}</span>
      <span className="value">Total: {total}</span>
      <span className="value">Positive feedback: {positivePercentage}</span>
    </div>
  );
};

export default Statistics;
